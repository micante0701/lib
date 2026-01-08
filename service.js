const CACHE_NAME = "site-cache-v1"; // 修改資源後可改成 v2、v3...
const PRECACHE_URLS = [
  "https://micante0701.github.io/lib/",             // 若站點在根目錄，保留；若在子目錄，改成子路徑首頁
  "https://micante0701.github.io/lib/index.html",
  "https://micante0701.github.io/lib/0001.html",
  "https://micante0701.github.io/lib/0002.html",
  "https://micante0701.github.io/lib/0003.html",
  "https://micante0701.github.io/lib/0004.html",
  "https://micante0701.github.io/lib/0005.html",
  "https://micante0701.github.io/lib/0006.html",
  "https://micante0701.github.io/lib/0007.html",
  "https://micante0701.github.io/lib/0008.html",
  "https://micante0701.github.io/lib/0009.html",
  "https://micante0701.github.io/lib/0010.html",
  "https://micante0701.github.io/lib/0011.html",
  "https://micante0701.github.io/lib/0012.html",
  "https://micante0701.github.io/lib/0013.html",
  "https://micante0701.github.io/lib/0014.html",
  "https://micante0701.github.io/lib/0015.html",
  "https://micante0701.github.io/lib/0016.html",
  "https://micante0701.github.io/lib/0017.html",
  "https://micante0701.github.io/lib/0018.html",
  "https://micante0701.github.io/lib/0019.html",
  "https://micante0701.github.io/lib/pair.html",
  "https://micante0701.github.io/lib/all.html",
  "https://micante0701.github.io/lib/404.html",
  "https://micante0701.github.io/lib/version.html",
  "https://micante0701.github.io/lib/lib.css",
  "https://micante0701.github.io/lib/main.css",
  "https://micante0701.github.io/lib/main.js",
  "https://micante0701.github.io/lib/header.js",
  "https://micante0701.github.io/lib/book.js",
  "https://micante0701.github.io/lib/jsVersion.js",
  "https://micante0701.github.io/lib/image/paper.png",
  "https://micante0701.github.io/lib/font/chui.woff"
];

// 安裝：預先快取
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
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
        try {
          // 嘗試網路
          const networkResponse = await fetch(req);
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, networkResponse.clone());
          return networkResponse;
        } catch (err) {
          // 網路失敗 → 強制回首頁快取或 offline.html
          // const cachedIndex = await caches.match("/index.html");
          // return cachedIndex || await caches.match("/offline.html");

          // 網路失敗 → 回快取的頁面
          const cachedPage = await caches.match(req); 
          // 先找對應頁面快取 if (cachedPage) return cachedPage;
          if (cachedPage) return cachedPage;
          // 如果沒有，就回首頁或 offline.html 
          const cachedIndex = await caches.match("/index.html"); 
          return cachedIndex || await caches.match("/offline.html");
        }
      })()
    );
    return;
  }

  // 其他資源 → Cache First
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});

// 以下為第二版
// 攔截請求
// self.addEventListener("fetch", event => {
//   const req = event.request;

//   // 判斷是否為頁面導覽 (例如 F5、點連結、輸入網址)
//   if (req.mode === "navigate") {
//     event.respondWith(
//       fetch(req)
//         .then(res => {
//           // 成功時更新快取
//           const resClone = res.clone();
//           caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
//           return res;
//         })
//         .catch(async () => {
//           // 網路失敗 → 回快取或離線頁
//           const cached = await caches.match(req);
//           return cached || caches.match("/offline.html");
//         })
//     );
//     return;
//   }

//   // 其他資源 (CSS/JS/圖片) → Cache First
//   event.respondWith(
//     caches.match(req).then(cached => cached || fetch(req))
//   );
// });



// 以下為原始版
/*
// 取得策略：HTML採 Network First（有網路就拿最新，離線用快取）；其他靜態檔採 Cache First
self.addEventListener("fetch", event => {
  const req = event.request;
  const isHTML =
    req.headers.get("accept")?.includes("text/html") ||
    req.mode === "navigate";

  if (isHTML) {
    // 頁面：先嘗試網路，失敗再回快取或離線頁
    event.respondWith(
      fetch(req)
        .then(res => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          return cached || caches.match("/offline.html");
        })
    );
  } else {
    // 靜態資源：快取優先，沒有再走網路
    event.respondWith(
      caches.match(req).then(cached => cached || fetch(req))
    );
  }
});
*/