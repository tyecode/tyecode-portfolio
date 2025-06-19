const _CACHE_NAME = 'tyecode-portfolio-v1';
const STATIC_CACHE = 'tyecode-static-v1';
const DYNAMIC_CACHE = 'tyecode-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/favicon.png',
  '/favicon.svg',
  '/images/og.png',
  '/src/styles/critical.css',
  '/src/index.css',
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.warn('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.warn('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.warn('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cache => {
            if (cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE) {
              console.warn('Service Worker: Deleting old cache', cache);
              return caches.delete(cache);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests (except fonts and APIs we control)
  if (url.origin !== location.origin && !url.hostname.includes('fonts.g')) {
    return;
  }

  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          // For critical assets, also update cache in background
          if (STATIC_ASSETS.includes(url.pathname)) {
            event.waitUntil(updateCache(request));
          }
          return cachedResponse;
        }

        // Fetch and cache new requests
        return fetch(request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response for caching
            const responseToCache = response.clone();
            
            // Determine cache strategy based on asset type
            const cacheName = getCacheName(url.pathname);
            
            caches.open(cacheName)
              .then(cache => {
                cache.put(request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Fallback for offline pages
            if (request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Helper function to update cache in background
function updateCache(request) {
  return fetch(request)
    .then(response => {
      if (response && response.status === 200) {
        return caches.open(STATIC_CACHE)
          .then(cache => cache.put(request, response));
      }
    })
    .catch(err => console.error('Cache update failed:', err));
}

// Helper function to determine cache name
function getCacheName(pathname) {
  // Static assets (CSS, JS, images)
  if (pathname.includes('/assets/') || 
      pathname.endsWith('.css') || 
      pathname.endsWith('.js') || 
      pathname.endsWith('.png') || 
      pathname.endsWith('.jpg') || 
      pathname.endsWith('.svg') ||
      pathname.endsWith('.woff') ||
      pathname.endsWith('.woff2')) {
    return STATIC_CACHE;
  }
  
  // Dynamic content
  return DYNAMIC_CACHE;
} 