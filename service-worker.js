const CACHE_NAME = "image-cache-v1";
const urlsToCache = [
  "/assets/images/desktop/main-image-desktop-v1.webp",
  "/assets/images/tablet/main-image-tablet-v1.webp",
  "/assets/images/mobile/main-image-mobile-v1.webp",
  "/assets/images/artificial-intelligence-v1.webp",
  "/assets/images/backend-development-v1.jpg",
  "/assets/images/development-process-v1.webp",
  "/assets/images/frontend-development-with-code-v1.jpg",
  "/assets/images/how-internet-works-v1.png",
  "/assets/images/human-robot-hand-world-v1.webp",
  "/assets/images/internet-flow-v1.webp",
  "/assets/images/internet-v1.webp",
  "/assets/images/responsive-design-v1.webp",
  "/assets/images/web-design-and-development-v1.webp",
  "/assets/images/website-design-and-development-v1.webp",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response; // Cache hit, return the image from cache
      }
      return fetch(event.request); // Fetch from network
    })
  );
});
