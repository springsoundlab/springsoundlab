const CACHE_NAME = 'ssl-crm-v1';
const urlsToCache = [
  '/',  // если твой файл называется index.html и лежит в корне, оставь так
  '/certificates.html',  // если файл называется иначе, замени index.html на своё имя
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@300;400;600&family=Rajdhani:wght@500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
