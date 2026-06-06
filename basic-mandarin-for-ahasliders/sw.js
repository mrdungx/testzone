// Service worker for Quick Mandarin — offline support on the plane.
// Bump VERSION whenever you bump the ?v=N query params in index.html.

const VERSION = 'v6';
const CACHE_NAME = 'qm-aha-' + VERSION;

const PRECACHE = [
  './',
  './index.html',
  './styles.css?v=6',
  './config.js?v=6',
  './lessons.js?v=6',
  './app.js?v=6',
  './aha-logo.svg?v=2',
  './manifest.json',
  './icon-180.png',
  './icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE).catch(err => {
        console.warn('[sw] precache partial failure', err);
      }))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate for everything except Firebase (always live, never cached).
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (!req.url.startsWith('http')) return;

  // Firebase: bypass the service worker entirely so writes are never staled
  // and reads always reflect live state when online.
  if (req.url.includes('firebasedatabase.app') || req.url.includes('firebaseio.com')) {
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(res => {
        // Cache successful and opaque (cross-origin) responses for offline reuse.
        if (res && (res.ok || res.type === 'opaque')) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
