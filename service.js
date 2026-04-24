const CACHE_NAME = "site-cache-v1"; // 修改資源後可改成 v2、v3...
const PRECACHE_URLS = [
  "./",             // 若站點在根目錄，保留；若在子目錄，改成子路徑首頁
  "./assets/images/paper.png",
  "./assets/icons/amitabha.png",
  "./assets/fonts/f0001.woff",
  "./assets/fonts/f0002.woff",
  "./assets/audio/amitabha.mp3",

  "./0000.html",
  "./0001.html",
  "./0002.html",
  "./0003.html",
  "./0004.html",
  "./0005.html",
  "./0006.html",
  "./0007.html",
  "./0008.html",
  "./0009.html",
  "./0010.html",
  "./0011.html",
  "./0012.html",
  "./0013.html",
  "./0014.html",
  "./0015.html",
  "./0016.html",
  "./0017.html",
  "./0018.html",
  "./0019.html",
  "./0020.html",
  "./0021.html",
  "./0022.html",
  "./0023.html",
  "./404.html",
  "./header.html",
  "./index.html",
  "./pair.html",
  "./portfolio.html",
  "./version.html",
  
  "./js/service-worker.js",
  "./service.js",
  "./js/book.js",
  "./js/header.js",
  "./js/main.js",
  "./js/pair.js",
  "./js/version.js",
  
  "./css/font.css",
  "./css/lib.css",
  "./css/main.css",
  "./css/pair.css",
  "./css/version.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      for (const url of PRECACHE_URLS) {
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


// 啟用：清除舊版快取
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// 攔截請求
self.addEventListener("fetch", event => {
  const req = event.request;

  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        // 先檢查快取，避免恐龍畫面
        const cachedPage = await caches.match(req);
        if (cachedPage) return cachedPage;

        try {
          // 沒快取 → 嘗試網路並補齊
          const networkResponse = await fetch(req);
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          // 網路失敗 → 回首頁或 offline.html
          const cachedIndex = await caches.match("./index.html");
          return cachedIndex || await caches.match("./404.html");
        }
      })()
    );
    return;
  }

  // 其他資源 → Cache First + 網路補齊
  event.respondWith(
    (async () => {
      const cached = await caches.match(req);
      if (cached) return cached;

      try {
        // 沒快取 → 嘗試網路並補齊
        const networkResponse = await fetch(req);
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, networkResponse.clone());
        return networkResponse;
      } catch (err) {
        // 沒網路 → 回 offline.html
        return await caches.match("./offline.html");
      }
    })()
  );
});