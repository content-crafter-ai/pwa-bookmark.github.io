const CACHE_NAME = 'pwa-bookmark-io-cache-v1';
const urlsToCache = [
  '/pwa-bookmark.github.io/',
  '/pwa-bookmark.github.io/index.html',
  '/pwa-bookmark.github.io/bookmark.html',
  '/pwa-bookmark.github.io/styles.css',
  '/pwa-bookmark.github.io/manifest.json',
  '/pwa-bookmark.github.io/icons/icon-192x192.png',
  '/pwa-bookmark.github.io/icons/icon-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
