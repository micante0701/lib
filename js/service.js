const CACHE_NAME = "site-cache-v1"; // 修改資源後可改成 v2、v3...
const PRECACHE_URLS = [
  "./",             // 若站點在根目錄，保留；若在子目錄，改成子路徑首頁
  "./image/paper.png",
  "./font/f0001.woff",
  "./font/f0002.woff",
  
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

  "./404.html",
  "./all.html",
  "./header.html",
  "./index.html",
  "./pair.html",
  "./portfolio.html",

  "./js/book.js",
  "./js/header.js",
  "./js/main.js",
  "./js/pair.js",
  "./js/service.js",
  "./js/version.js",

  "./css/font.css",
  "./css/lib.css",
  "./css/main.css",
  "./css/pair.css"
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
    (async () => {

      // 原本的清除舊 cache
      const keys = await caches.keys();
      await Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );

      // ⭐修改：檢查並補齊 precache（解決手機清 cache 問題）
      const cache = await caches.open(CACHE_NAME);

      for (const url of PRECACHE_URLS) {
        const match = await cache.match(url);

        if (!match) {
          try {
            await cache.add(url);
            console.log("♻️ Re-Cached:", url); // ⭐修改
          } catch (err) {
            console.warn("❌ Re-cache failed:", url, err); // ⭐修改
          }
        }
      }

      await self.clients.claim();

    })()
  );
});


// 攔截請求
self.addEventListener("fetch", event => {
  const req = event.request;

  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {

        const cache = await caches.open(CACHE_NAME); // ⭐修改

        // ⭐修改：確保首頁存在
        const indexCache = await cache.match("./");
        if (!indexCache) {
          try {
            await cache.add("./");
            console.log("♻️ Re-Cached index"); // ⭐修改
          } catch (err) { }
        }

        const cachedPage = await caches.match(req);
        if (cachedPage) return cachedPage;

        try {
          const networkResponse = await fetch(req);

          cache.put(req, networkResponse.clone());

          return networkResponse;
        } catch (err) {

          const cachedIndex = await caches.match("./");
          return cachedIndex || await caches.match("./offline.html");

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
        const networkResponse = await fetch(req);

        const cache = await caches.open(CACHE_NAME);

        cache.put(req, networkResponse.clone());

        return networkResponse;
      } catch (err) {
        return await caches.match("./offline.html");
      }
    })()
  );
});