// 建立一個 div 當作 JS 訊息欄
    const jsBanner = document.createElement("div");
    jsBanner.className = "jsv";
    jsBanner.textContent = "JS 版本 V1.0";

    // 插入到 body 最前方
    document.body.insertBefore(jsBanner, document.body.firstChild);