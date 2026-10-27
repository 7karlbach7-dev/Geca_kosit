const CACHE_NAME = 'zvoz-geca-v2';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.setup = e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))));