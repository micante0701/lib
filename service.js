const CACHE_NAME = "site-cache-v1"; // 修改資源後可改成 v2、v3...
const PRECACHE_URLS = [
  "./",             // 若站點在根目錄，保留；若在子目錄，改成子路徑首頁
  "./image/paper.png",
  "./font/chui.woff",
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
  "./book.js",
  "./header.html",
  "./header.js",
  "./index.html",
  "./lib.css",
  "./main.css",
  "./main.js",
  "./pair.css",
  "./pair.html",
  "./pair.js"
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
// self.addEventListener("fetch", event => {
//   const req = event.request;

//   if (req.mode === "navigate") {
//     event.respondWith(
//       (async () => {
//         try {
//           // 嘗試網路
//           const networkResponse = await fetch(req);
//           const cache = await caches.open(CACHE_NAME);
//           cache.put(req, networkResponse.clone());
//           return networkResponse;
//         } catch (err) {
//           // 網路失敗 → 回快取的頁面
//           const cachedPage = await caches.match(req);
//           // 先找對應頁面快取 if (cachedPage) return cachedPage;
//           if (cachedPage) return cachedPage;
//           // 如果沒有，就回首頁或 offline.html 
//           const cachedIndex = await caches.match("/index.html");
//           return cachedIndex || await caches.match("/offline.html");
//         }
//       })()
//     );
//     return;
//   }

//   // 其他資源 → Cache First
//   event.respondWith(
//     caches.match(req).then(cached => cached || fetch(req))
//   );
// });

// 攔截請求
self.addEventListener("fetch", event => {
  const req = event.request;

  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        // ✅ 修改：先檢查快取，避免恐龍畫面
        const cachedPage = await caches.match(req);
        if (cachedPage) return cachedPage;

        try {
          // ✅ 修改：沒快取 → 嘗試網路並補齊
          const networkResponse = await fetch(req);
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          // ✅ 修改：網路失敗 → 回首頁或 offline.html
          const cachedIndex = await caches.match("./index.html");
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
        // ✅ 修改：沒快取 → 嘗試網路並補齊
        const networkResponse = await fetch(req);
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, networkResponse.clone());
        return networkResponse;
      } catch (err) {
        // ✅ 修改：沒網路 → 回 offline.html
        return await caches.match("./offline.html");
      }
    })()
  );
});
