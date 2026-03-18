const CACHE_NAME = "library-cache-v1";
const ASSETS = [
  "./",
  "/image/paper.png",
  "/image/amitabha.png",
  "/font/f0001.woff",
  "/font/f0002.woff",
  
  "/0000.html",
  "/0001.html",
  "/0002.html",
  "/0003.html",
  "/0004.html",
  "/0005.html",
  "/0006.html",
  "/0007.html",
  "/0008.html",
  "/0009.html",
  "/0010.html",
  "/0011.html",
  "/0012.html",
  "/0013.html",
  "/0014.html",
  "/0015.html",
  "/0016.html",
  "/0017.html",
  "/0018.html",
  "/0019.html",
  "/0020.html",
  "/0021.html",
  "/0022.html",

  "/404.html",
  "/header.html",
  "/index.html",
  "/pair.html",
  "/portfolio.html",
  "/version.html",

  "/js/book.js",
  "/js/header.js",
  "/js/main.js",
  "/js/pair.js",
  "/js/service.js",
  "/js/version.js",

  "/css/font.css",
  "/css/lib.css",
  "/css/main.css",
  "/css/pair.css"
];

// GPT原本版本[1]
// 安裝：快取全部
// self.addEventListener("install", event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
//   );
//   self.skipWaiting();
// });

// Copi改的[1]
self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      for (const url of ASSETS) {
        try {
          await cache.add(url);
          console.log("✅ Cached:", url);
        } catch (err) {
          console.warn("❌ Failed to cache:", url, err);
        }
      }
    })()
  );
  self.skipWaiting();
});

// 啟用：清除舊 cache
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// 請求攔截：Cache First
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request).then(networkRes => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkRes.clone());
          return networkRes;
        });
      }).catch(() => {
        return caches.match("./index.html");
      });
    })
  );
});