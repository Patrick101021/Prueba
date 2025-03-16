const CACHE_NAME = 'football-stats-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching Files');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch: Responder desde la caché si no hay conexión
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Si hay una respuesta en caché, se devuelve, si no se hace la solicitud de red
                return cachedResponse || fetch(event.request);
            })
    );
});

  
