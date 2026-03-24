const APP_VERSION = "20260322-android-refresh-1";
const STATIC_CACHE = `besrehber-static-${APP_VERSION}`;
const RUNTIME_CACHE = `besrehber-runtime-${APP_VERSION}`;
const FONT_HOSTS = new Set(["fonts.googleapis.com", "fonts.gstatic.com"]);
const APP_SHELL_URL = new URL("./web/index.html", self.registration.scope).href;
const PRECACHE_URLS = [
  "./index.html",
  "./manifest.webmanifest",
  "./styles.css",
  "./main.js",
  "./detail.js",
  "./fonlar.js",
  "./pwa.js",
  "./companies.js",
  "./web/index.html",
  "./web/sirket.html",
  "./web/fonlar.html",
  "./assets/hedef-green-fav.png",
  "./assets/hedef-green.png",
  "./assets/pwa/icon-192.png",
  "./assets/pwa/icon-512.png",
  "./assets/data/tefas-emk.json",
  "./assets/data/tefas-emk-fees.json",
  "./assets/data/tefas-emk-sizes.json",
].map((path) => new URL(path, self.registration.scope).href);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(async (cacheNames) => {
      await Promise.all(
        cacheNames
          .filter((cacheName) => ![STATIC_CACHE, RUNTIME_CACHE].includes(cacheName))
          .map((cacheName) => caches.delete(cacheName)),
      );

      await self.clients.claim();
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;
  const isFontRequest = FONT_HOSTS.has(requestUrl.hostname);

  if (request.mode === "navigate") {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  if (isSameOrigin || isFontRequest) {
    event.respondWith(handleAssetRequest(request));
  }
});

/**
 * Sayfa gezinme isteklerini ele alir.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleNavigationRequest(request) {
  try {
    const response = await fetch(request);
    await storeInCache(RUNTIME_CACHE, request, response);
    return response;
  } catch (error) {
    const cachedResponse = await caches.match(request, { ignoreSearch: true });
    if (cachedResponse) {
      return cachedResponse;
    }

    const cachedShell = await caches.match(APP_SHELL_URL);
    if (cachedShell) {
      return cachedShell;
    }

    throw error;
  }
}

/**
 * Statik varlik isteklerini ele alir.
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleAssetRequest(request) {
  const cachedResponse = await caches.match(request, { ignoreSearch: true });
  const fetchPromise = fetch(request)
    .then(async (response) => {
      await storeInCache(
        new URL(request.url).origin === self.location.origin
          ? STATIC_CACHE
          : RUNTIME_CACHE,
        request,
        response,
      );
      return response;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise || Response.error();
}

/**
 * Basarili cevabi cache'e yazar.
 * @param {string} cacheName
 * @param {Request} request
 * @param {Response} response
 * @returns {Promise<void>}
 */
async function storeInCache(cacheName, request, response) {
  if (!response || response.status >= 400) {
    return;
  }

  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
}
