const CACHE_NAME = 'uniquest-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/uniquest_logo_192.png',
  '/uniquest_logo_512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});