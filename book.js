// ↓↓↓ 護眼模式切換(程式碼Start) ↓↓↓

// 載入時偵測 localStorage
let isLight;
if (localStorage.getItem("isLight") === null) {
    // 如果沒有存過，預設護眼模式
    isLight = false;
    localStorage.setItem("isLight", isLight);
} else {
    // 讀取之前存的狀態
    isLight = localStorage.getItem("isLight") === "true";
}

// 初始化畫面
applyTheme();

function toggleTheme() {
    isLight = !isLight; // 狀態反轉
    localStorage.setItem("isLight", isLight); // 存到 localStorage
    applyTheme();
}

function applyTheme() {
    const btn = document.getElementsByClassName("btnTheme");

    if (isLight) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.textContent = "一般模式";
    } else {
        document.body.style.backgroundColor = "rgb(211, 208, 156)";
        document.body.style.color = "black";
        btn.textContent = "護眼模式";
    }
}

// ↑↑↑ 護眼模式切換(程式碼End) ↑↑↑

// ↓↓↓ 自定義背景色(程式碼Start) ↓↓↓
// // 背景顏色設定
// const colorInput = document.getElementById("colorPicker");
// // 取得 body 的目前背景顏色
// let currentColor = window.getComputedStyle(document.body).backgroundColor;
// // 把 rgb(...) 轉成 hex (#RRGGBB)
// function rgbToHex(rgb) {
//     const result = rgb.match(/\d+/g).map(Number); // 取出數字
//     return (
//         "#" +
//         result
//             .slice(0, 3) // 只取 R、G、B
//             .map(x => x.toString(16).padStart(2, "0"))
//             .join("")
//     );
// }
// // 設定 color input 的初始值
// colorInput.value = rgbToHex(currentColor);
// // 綁定事件：選擇顏色時更新背景
// colorInput.addEventListener("input", function () {
//     document.body.style.backgroundColor = this.value;
// });

// ↑↑↑ 自定義背景色(程式碼End) ↑↑↑

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

/* 針對<h5>產生目錄標題 */
const toc = document.getElementById("toc");
document.querySelectorAll("h5").forEach((h, i) => {
    const id = "section-" + i;
    h.id = id;

    const option = document.createElement("option");
    option.value = id;
    option.textContent = h.textContent; // 顯示整個 h5 文字
    toc.appendChild(option);
});

// 當使用者選擇章節時，跳到對應位置
toc.addEventListener("change", function () {
    if (this.value) {
        document.getElementById(this.value).scrollIntoView({ behavior: "smooth" });
    }
});