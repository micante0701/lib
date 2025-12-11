const CACHE_NAME = "site-cache-v1"; // 修改資源後可改成 v2、v3...
const PRECACHE_URLS = [
  "/",             // 若站點在根目錄，保留；若在子目錄，改成子路徑首頁
  "/index.html",
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
  "/404.html",
  "/version.html",
  "/booklist.html",
  "/lib.css",
  "/mlib.css",
  "/main.css",
  "/main.js",
  "/header.js",
  "/book.js",
  "/jsTime.js",
  "/image/paper.png",
  "/font/chui.woff"  // 可選，若你建立了離線頁
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