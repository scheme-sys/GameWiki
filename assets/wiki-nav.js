/* Native details keeps the game switcher usable without JavaScript. */
(() => {
  "use strict";

  const navigation = document.querySelector(".atlas-nav");
  const switcher = navigation?.querySelector(".atlas-switch");
  if (!switcher) return;
  const menu = switcher.querySelector('.atlas-menu');
  function fitMenu() {
    if (!switcher.open || !menu) return;
    const viewport = window.visualViewport;
    const bottom = viewport ? viewport.offsetTop + viewport.height : innerHeight;
    menu.style.setProperty('--atlas-menu-max-height', Math.max(44, Math.floor(bottom - menu.getBoundingClientRect().top - 12)) + 'px');
  }
  switcher.addEventListener('toggle', fitMenu);
  window.addEventListener('resize', fitMenu, { passive: true });
  window.visualViewport?.addEventListener('resize', fitMenu, { passive: true });


  document.addEventListener("pointerdown", (event) => {
    if (switcher.open && !switcher.contains(event.target)) switcher.open = false;
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !switcher.open) return;
    switcher.open = false;
    switcher.querySelector("summary").focus();
    event.preventDefault();
  });

  navigation.addEventListener("focusout", (event) => {
    if (event.relatedTarget && !navigation.contains(event.relatedTarget)) {
      switcher.open = false;
    }
  });
})();
