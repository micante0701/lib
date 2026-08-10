// 引入Service Worker
// import { registerServiceWorker } from "./service-worker.js";
// registerServiceWorker();

// ↓↓↓ Service Worker ↓↓↓

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service.js")
            .then(reg => console.log("Service Worker Registered:", reg))
            .catch(err => console.error("Service Worker Registration Failed:", err));
    });
}

// Reset 按鈕功能
document.getElementById("reset").addEventListener("click", async () => {
    // 如果離線不允許reset
    if (!navigator.onLine) {
        alert("目前為離線狀態，無法重置，請連上網路後再試");
        return;
    }

    if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();

        for (let registration of registrations) {
            await registration.unregister();
        }

        // 清除cache(刪除舊資料)
        const cacheNames = await caches.keys();
        for (let name of cacheNames) {
            await caches.delete(name);
        }

        console.log("Service Workers & caches cleared");

        window.location.reload();
    }
});

// ↑↑↑ Service Worker ↑↑↑

// 抓<h5>當<title>的標題
document.title = document.querySelector("h1").textContent;

/* ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★*/

// ↓↓↓ 護眼模式切換(程式碼Start) ↓↓↓

// // 載入時偵測localStorage是否已有isLight這變數
// let isLight;
// if (localStorage.getItem("isLight") === null) {
//     // 如果沒有存過，預設護眼模式
//     isLight = false;
//     localStorage.setItem("isLight", isLight);
// } else {
//     // 讀取之前存的狀態
//     isLight = localStorage.getItem("isLight") === "true";
// }

// // 初始化畫面
// applyTheme();

// function toggleTheme() {
//     isLight = !isLight; // 狀態反轉
//     localStorage.setItem("isLight", isLight); // 存到 localStorage
//     applyTheme();
// }

// function applyTheme() {
//     const btn = document.getElementsByClassName("btnTheme");
//     if (isLight) {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         btn.textContent = "一般模式";
//     } else {
//         document.body.style.backgroundColor = "rgb(211, 208, 156)";
//         document.body.style.color = "black";
//         btn.textContent = "護眼模式";
//     }
// }

// ↑↑↑ 護眼模式切換(程式碼End) ↑↑↑

/* ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★*/

// ↓↓↓ Popup(程式碼Start) ↓↓↓

// 切換彈出視窗 (按鈕呼叫)
function togglePopup() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = (overlay.style.display === "flex") ? "none" : "flex";
}

// 關閉彈出視窗 (點背景呼叫)
function closePopup(event) {
    if (event.target.id === "overlay") {
        document.getElementById("overlay").style.display = "none";
    }
}

// 鍵盤事件監聽
document.addEventListener("keydown", function (e) {
    const overlay = document.getElementById("overlay");

    // ESC 鍵關閉
    if (e.key === "Escape") {
        overlay.style.display = "none";
    }

    // Ctrl + Q 開啟
    // if (e.ctrlKey && e.key.toLowerCase() === "q") {
    //     overlay.style.display = "flex";
    // }
    // Ctrl + M 開/關切換
    if (e.ctrlKey && e.key.toLowerCase() === "q") {
        overlay.style.display = (overlay.style.display === "flex") ? "none" : "flex";
        // 阻止瀏覽器可能的預設行為 (例如某些快捷鍵)
        e.preventDefault();
    }
});

/* ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★ ★*/

// 變更文字大小
function changeFontSize(delta) {
    const paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(p => {
        // 取得目前字體大小（可能是字串如 "16px"）
        let style = window.getComputedStyle(p, null).getPropertyValue("font-size");
        let currentSize = parseFloat(style); // 轉成數字
        // 計算新大小並限制範圍
        let newSize = currentSize + delta;
        if (newSize < 2) newSize = 2;
        if (newSize > 72) newSize = 72;
        // 套用新大小
        p.style.fontSize = newSize + "px";
    });
}