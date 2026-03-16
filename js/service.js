const CACHE_NAME = "site-cache-v1";
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
  "./version.html",
  
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

// ⭐新增：自動補齊 cache
async function ensureCache() {
  const cache = await caches.open(CACHE_NAME);

  for (const url of PRECACHE_URLS) {

    const match = await cache.match(url);

    if (!match) {
      try {
        await cache.add(url);
        console.log("♻️ Auto repaired cache:", url);
      } catch (err) {
        console.warn("❌ Repair failed:", url);
      }
    }

  }
}

// 安裝
self.addEventListener("install", event => {

  event.waitUntil(

    (async () => {

      const cache = await caches.open(CACHE_NAME);

      for (const url of PRECACHE_URLS) {

        try {
          await cache.add(url);
          console.log("✅ Cached:", url);

        } catch (err) {

          console.warn("❌ Failed:", url);

        }

      }

    })()

  );

  self.skipWaiting();

});

// 啟用
self.addEventListener("activate", event => {

  event.waitUntil(

    (async () => {

      const keys = await caches.keys();

      await Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );

      // ⭐新增：啟動時修復 cache
      await ensureCache();

      self.clients.claim();

    })()

  );

});




// ⭐新增：背景修復（不阻塞）
async function backgroundRepair() {

  const cache = await caches.open(CACHE_NAME);

  for (const url of PRECACHE_URLS) {

    const match = await cache.match(url);

    if (!match) {

      fetch(url)
        .then(res => {
          if (res.ok) cache.put(url, res.clone());
        })
        .catch(()=>{});

    }

  }

}




// 攔截請求
self.addEventListener("fetch", event => {

  const req = event.request;

  event.respondWith(

    (async () => {

      // ⭐新增：每次請求都輕量檢查
      ensureCache();

      const cached = await caches.match(req);

      if (cached) {

        // ⭐新增：背景修復
        backgroundRepair();

        return cached;
      }

      try {

        const networkResponse = await fetch(req);

        const cache = await caches.open(CACHE_NAME);

        cache.put(req, networkResponse.clone());

        return networkResponse;

      } catch (err) {

        // ⭐新增 fallback
        const fallback = await caches.match("./");

        return fallback;

      }

    })()

  );

});