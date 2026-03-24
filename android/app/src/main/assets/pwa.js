const INSTALL_BUTTON_SELECTOR = "[data-install-app]";
const STANDALONE_DISPLAY_MODE = "(display-mode: standalone)";

/** @type {BeforeInstallPromptEvent | null} */
let deferredInstallPrompt = null;

/**
 * @typedef {Event & {
 *   prompt: () => Promise<void>,
 *   userChoice: Promise<{ outcome: "accepted" | "dismissed", platform: string }>
 * }} BeforeInstallPromptEvent
 */

/**
 * Sayfanin kok dizine gore goreli yolunu doner.
 * @returns {string}
 */
function getRootRelativePath() {
  return window.location.pathname.includes("/web/") ? "../" : "./";
}

/**
 * Kurulum butonlarini doner.
 * @returns {HTMLButtonElement[]}
 */
function getInstallButtons() {
  return Array.from(document.querySelectorAll(INSTALL_BUTTON_SELECTOR)).filter(
    (button) => button instanceof HTMLButtonElement,
  );
}

/**
 * Uygulama zaten kurulu mu kontrol eder.
 * @returns {boolean}
 */
function isStandaloneMode() {
  return (
    window.matchMedia(STANDALONE_DISPLAY_MODE).matches ||
    window.navigator.standalone === true
  );
}

/**
 * Kurulum butonlarini gunceller.
 * @returns {void}
 */
function syncInstallButtons() {
  const shouldShow = Boolean(deferredInstallPrompt) && !isStandaloneMode();

  getInstallButtons().forEach((button) => {
    button.hidden = !shouldShow;
  });
}

/**
 * Service worker kaydini yapar.
 * @returns {Promise<void>}
 */
async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    await navigator.serviceWorker.register(`${getRootRelativePath()}sw.js`);
  } catch (error) {
    console.error("Service worker kaydi basarisiz oldu.", error);
  }
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = /** @type {BeforeInstallPromptEvent} */ (event);
  syncInstallButtons();
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  syncInstallButtons();
});

window.addEventListener("DOMContentLoaded", () => {
  getInstallButtons().forEach((button) => {
    button.addEventListener("click", async () => {
      if (!deferredInstallPrompt) {
        return;
      }

      await deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      syncInstallButtons();
    });
  });

  syncInstallButtons();
});

window.addEventListener("load", () => {
  void registerServiceWorker();
});
