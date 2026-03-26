const INSTALL_BUTTON_SELECTOR = "[data-install-app]";
const STANDALONE_DISPLAY_MODE = "(display-mode: standalone)";
const SW_VERSION = "20260326-cache-reset-1";
const LOCAL_HOSTS = new Set(["127.0.0.1", "localhost"]);

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
 * Sayfa yerel gelistirme sunucusunda mi calisiyor kontrol eder.
 * @returns {boolean}
 */
function isLocalPreview() {
  return LOCAL_HOSTS.has(window.location.hostname);
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

  if (isLocalPreview()) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));

      if ("caches" in window) {
        const cacheKeys = await caches.keys();
        await Promise.all(
          cacheKeys
            .filter((cacheKey) => cacheKey.startsWith("besrehber-"))
            .map((cacheKey) => caches.delete(cacheKey)),
        );
      }
    } catch (error) {
      console.error("Yerel onizleme cache temizligi basarisiz oldu.", error);
    }

    return;
  }

  try {
    await navigator.serviceWorker.register(
      `${getRootRelativePath()}sw.js?v=${SW_VERSION}`,
    );
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
