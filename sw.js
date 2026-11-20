/* Sicherheitsaudit Tiefbau - Offline-Zwischenspeicher.
   Beim Veroeffentlichen einer neuen Version die Zahl erhoehen. */
const VERSION = 'sademo-v8';
const PREFIX = 'sademo-'; /* nur eigene Zwischenspeicher loeschen, nie die der Live-Fassung */
const DATEIEN = ['./', './index.html', './manifest.json',
  './icon180.png', './icon192.png', './icon512.png', './icon512-maskable.png',
  './pdfjs/pdf.min.js', './pdfjs/pdf.worker.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k =>
    Promise.all(k.filter(x => x.startsWith(PREFIX) && x !== VERSION).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(a => {
      const kopie = a.clone();
      caches.open(VERSION).then(c => c.put(e.request, kopie)).catch(() => {});
      return a;
    }).catch(() => caches.match(e.request).then(a => a || caches.match('./index.html')))
  );
});
