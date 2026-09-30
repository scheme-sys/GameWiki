/* Optional Moonlight player. Audio is requested only after an explicit click. */
(() => {
  'use strict';
  const root = new URL('../', document.currentScript.src);
  const tracks = [
    { title: '第一乐章 · Adagio sostenuto', file: 'music/moonlight-1.mp3' },
    { title: '第二乐章 · Allegretto', file: 'music/moonlight-2.mp3' },
    { title: '第三乐章 · Presto agitato', file: 'music/moonlight-3.mp3' },
  ];
  let parentPlayer = null;
  try { if (window.parent !== window && window.parent.LCZSite?.owns(window)) parentPlayer = window.parent.LCZMusic; } catch { /* Independent embedded page. */ }

  function createPlayer() {
    const listeners = new Set();
    const saved = (() => { try { return JSON.parse(sessionStorage.getItem('lcz:moonlight-position')); } catch { return null; } })();
    let index = Number.isInteger(saved?.index) && saved.index >= 0 && saved.index < 3 ? saved.index : 0;
    let resumeAt = Number.isFinite(saved?.time) && saved.time > 0 ? Math.min(saved.time, 900) : 0;
    let context, analyser, master, bins, owner, decks, current = 0, activated = false;
    let wanted = false, status = 'off', epoch = 0, crossfading = false, fadeTimer, raf = 0, lastBeat = 0, lastSaved = 0;
    let muted = (() => { try { return sessionStorage.getItem('lcz:moonlight-muted') === 'true'; } catch { return false; } })();
    function rememberMuted(value) {
      muted = value;
      try { sessionStorage.setItem('lcz:moonlight-muted', String(value)); } catch { /* Optional preference. */ }
    }
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const FADE = 2.2, VOLUME = .60;

    function snapshot() { return { index, title: tracks[index].title, status, playing: wanted && status === 'playing', activated, time: decks?.[current].audio.currentTime || 0 }; }
    function publish() { const value = snapshot(); for (const listener of listeners) listener(value); }
    function save() {
      if (!decks) return;
      try { sessionStorage.setItem('lcz:moonlight-position', JSON.stringify({ index, time: decks[current].audio.currentTime })); } catch { /* Optional storage. */ }
    }
    function gain(deck, value, seconds = 0) {
      if (deck.gain) {
        const now = context.currentTime;
        deck.gain.gain.cancelScheduledValues(now);
        deck.gain.gain.setValueAtTime(deck.gain.gain.value, now);
        if (seconds) deck.gain.gain.linearRampToValueAtTime(value, now + seconds);
        else deck.gain.gain.setValueAtTime(value, now);
      } else deck.audio.volume = value * VOLUME;
    }
    function level(value) {
      for (const listener of listeners) listener(null, value);
    }
    function beat(now) {
      raf = 0;
      if (!wanted || status !== 'playing' || document.hidden || reduced.matches) { level(0); return; }
      if (now - lastBeat >= 80) {
        lastBeat = now;
        let energy = .16;
        if (analyser) {
          analyser.getByteTimeDomainData(bins);
          let sum = 0;
          for (const sample of bins) sum += ((sample - 128) / 128) ** 2;
          energy = Math.min(1, Math.sqrt(sum / bins.length) * 8);
        }
        level(energy);
      }
      raf = requestAnimationFrame(beat);
    }
    function syncBeat() {
      cancelAnimationFrame(raf); raf = 0;
      if (wanted && status === 'playing' && !document.hidden && !reduced.matches) raf = requestAnimationFrame(beat);
      else level(0);
    }
    function prepare(deck, track) {
      if (deck.track === track) return;
      deck.audio.pause(); deck.audio.preload = 'auto'; deck.track = track;
      deck.audio.src = new URL('assets/' + tracks[track].file, root).href;
      deck.audio.load(); gain(deck, 0);
    }
    function init() {
      if (decks) return;
      owner = document.createElement('div'); owner.className = 'lcz-audio-owner'; owner.setAttribute('aria-hidden', 'true'); document.body.append(owner);
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      try {
        if (AudioContextClass) {
          context = new AudioContextClass(); analyser = context.createAnalyser(); analyser.fftSize = 256;
          bins = new Uint8Array(analyser.fftSize); master = context.createGain(); master.gain.value = VOLUME;
          analyser.connect(master); master.connect(context.destination);
        }
      } catch { context = null; }
      decks = [0, 1].map(number => {
        const audio = document.createElement('audio'); audio.preload = 'none'; audio.dataset.lczDeck = String(number);
        audio.setAttribute('playsinline', ''); owner.append(audio);
        const deck = { audio, track: -1, gain: null };
        if (context) { deck.gain = context.createGain(); context.createMediaElementSource(audio).connect(deck.gain); deck.gain.connect(analyser); }
        audio.addEventListener('timeupdate', () => {
          if (decks[current] !== deck || !wanted) return;
          if (Date.now() - lastSaved > 4000) { save(); lastSaved = Date.now(); }
          const left = audio.duration - audio.currentTime;
          if (!Number.isFinite(left) || crossfading) return;
          const next = decks[1 - current];
          if (left < 18) prepare(next, (index + 1) % tracks.length);
          if (left <= FADE && left > .05 && next.audio.readyState >= 3) advance(true);
        });
        audio.addEventListener('ended', () => { if (decks[current] === deck && wanted && !crossfading) advance(false); });
        audio.addEventListener('waiting', () => { if (decks[current] === deck && wanted) { status = 'loading'; publish(); syncBeat(); } });
        audio.addEventListener('playing', () => { if (decks[current] === deck && wanted) { status = 'playing'; publish(); syncBeat(); } });
        audio.addEventListener('error', () => { if (decks[current] === deck && wanted) fail(); });
        return deck;
      });
      context?.addEventListener('statechange', () => {
        if (context.state === 'interrupted' && wanted) { status = 'interrupted'; publish(); syncBeat(); }
      });
      if ('mediaSession' in navigator) {
        for (const [action, handler] of [['play', start], ['pause', pause], ['nexttrack', () => { if (wanted) advance(false); }]]) {
          try { navigator.mediaSession.setActionHandler(action, handler); } catch { /* Optional system controls. */ }
        }
      }
    }
    function metadata() {
      if ('mediaSession' in navigator && window.MediaMetadata) {
        navigator.mediaSession.metadata = new MediaMetadata({ title: tracks[index].title, artist: 'Ludwig van Beethoven · Paul Pitman', album: '月光奏鸣曲 · Musopen' });
        navigator.mediaSession.playbackState = wanted ? 'playing' : 'paused';
      }
    }
    function fail() {
      wanted = false; status = 'error'; ++epoch; clearTimeout(fadeTimer); crossfading = false;
      decks?.forEach(deck => deck.audio.pause()); metadata(); publish(); syncBeat();
    }
    function start() {
      rememberMuted(false);
      init(); activated = true; wanted = true; status = 'loading'; const operation = ++epoch;
      clearTimeout(fadeTimer); crossfading = false;
      const deck = decks[current]; decks.forEach(other => { if (other !== deck) other.audio.pause(); });
      prepare(deck, index); if (deck.audio.error) deck.audio.load(); gain(deck, 0);
      const resume = context?.resume();
      const playback = deck.audio.play();
      publish();
      if (resumeAt) {
        const position = resumeAt; resumeAt = 0;
        const seek = () => { if (operation === epoch && Number.isFinite(deck.audio.duration)) deck.audio.currentTime = Math.min(position, Math.max(0, deck.audio.duration - .5)); };
        if (deck.audio.readyState) seek(); else deck.audio.addEventListener('loadedmetadata', seek, { once: true });
      }
      Promise.all([resume, playback]).then(() => {
        if (operation !== epoch || !wanted) { if (!wanted) deck.audio.pause(); return; }
        status = 'playing'; gain(deck, 1, 1.4); metadata(); publish(); syncBeat();
      }).catch(() => { if (operation === epoch) fail(); });
    }
    function pause() {
      rememberMuted(true);
      if (!decks) return;
      wanted = false; status = 'off'; ++epoch; clearTimeout(fadeTimer); crossfading = false;
      decks.forEach(deck => gain(deck, 0, .35)); save(); publish(); syncBeat(); metadata();
      const operation = epoch;
      fadeTimer = setTimeout(() => { if (operation === epoch) decks.forEach(deck => deck.audio.pause()); }, 370);
    }
    function advance(blend) {
      if (!wanted || crossfading) return;
      const operation = epoch, previous = decks[current], next = decks[1 - current], nextIndex = (index + 1) % tracks.length;
      crossfading = true; prepare(next, nextIndex); gain(next, 0);
      next.audio.play().then(() => {
        if (operation !== epoch || !wanted) { if (!wanted || decks[current] !== next) next.audio.pause(); return; }
        const seconds = blend ? Math.max(.15, Math.min(FADE, previous.audio.duration - previous.audio.currentTime)) : 1.4;
        current = 1 - current; index = nextIndex; status = 'playing'; gain(next, 1, seconds); gain(previous, 0, seconds);
        metadata(); publish(); save(); syncBeat();
        fadeTimer = setTimeout(() => { previous.audio.pause(); crossfading = false; }, seconds * 1000 + 50);
      }).catch(() => {
        crossfading = false;
        // Keep the already-authorized element usable on stricter mobile browsers.
        if (operation === epoch && wanted && previous.audio.ended) { index = nextIndex; prepare(previous, index); start(); }
      });
    }
    document.addEventListener('visibilitychange', syncBeat);
    reduced.addEventListener('change', syncBeat);
    window.addEventListener('pagehide', save);
    return { get activated() { return activated; }, enter() { if (!muted && !wanted) start(); }, toggle() { if (wanted && status !== 'interrupted') pause(); else start(); }, pause, snapshot,
      subscribe(listener) { listeners.add(listener); listener(snapshot()); return () => listeners.delete(listener); } };
  }

  const player = parentPlayer || createPlayer();
  window.LCZMusic = player;
  const navigation = document.querySelector('.site-header,.atlas-nav');
  if (!navigation) return;
  const control = document.createElement('span'); control.className = 'lcz-music-control';
  control.innerHTML = '<button class="lcz-music-toggle" type="button" aria-label="播放月光奏鸣曲" aria-pressed="false"><svg viewBox="0 0 28 28" aria-hidden="true"><path class="music-orbit" d="M19.8 3.6A11.3 11.3 0 0 0 3.7 19M8.2 24.4a11.3 11.3 0 0 0 16.1-9.8"/><path class="music-stem" d="M10.5 20V8.5L21 6v11.5M10.5 12 21 9.5"/><ellipse class="music-note" cx="7.8" cy="20.2" rx="2.7" ry="2" transform="rotate(-18 7.8 20.2)"/><ellipse class="music-note" cx="18.3" cy="17.7" rx="2.7" ry="2" transform="rotate(-18 18.3 17.7)"/><path class="music-spark" d="m24 2.3.55 1.45L26 4.3l-1.45.55L24 6.3l-.55-1.45L22 4.3l1.45-.55Z"/></svg></button><span class="lcz-music-hint" role="note"><strong>月光奏鸣曲</strong><span data-music-title></span><small>钢琴：Paul Pitman · <a href="https://musopen.org/" target="_blank" rel="noopener noreferrer">Musopen</a><br>公有领域录音</small></span>';
  const button = control.querySelector('button');
  if (navigation.classList.contains('site-header')) {
    const search = document.querySelector('#search-open'); const tools = document.createElement('div'); tools.className = 'lcz-header-tools';
    search.before(tools); tools.append(control, search);
  } else {
    const switcher = navigation.querySelector('.atlas-switch');
    if (switcher) switcher.before(control); else navigation.append(control);
  }
  button.addEventListener('click', () => player.toggle());
  const unsubscribe = player.subscribe((state, energy) => {
    if (energy !== undefined) { control.style.setProperty('--music-level', String(Math.round(energy * 100) / 100)); return; }
    control.dataset.state = state.status; button.setAttribute('aria-pressed', String(state.playing));
    button.setAttribute('aria-busy', String(state.status === 'loading'));
    const action = state.status === 'loading' ? '取消加载' : state.playing ? '暂停' : state.status === 'error' ? '重试播放' : '播放';
    button.setAttribute('aria-label', action + '月光奏鸣曲，' + state.title);
    control.querySelector('[data-music-title]').textContent = state.status === 'error' ? '暂时无法播放，点击重试' : state.title;
  });
  window.addEventListener('pagehide', (event) => {
    // Cached pages keep their controls subscribed when browser Back restores them.
    if (!event.persisted) unsubscribe();
  });
})();
