/* Native details keeps the game switcher usable without JavaScript. */
(() => {
  "use strict";

  const navigation = document.querySelector(".atlas-nav");
  const switcher = navigation?.querySelector(".atlas-switch");
  if (!switcher) return;

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
