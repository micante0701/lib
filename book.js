// 等 DOM 建立好再執行
// window.addEventListener("DOMContentLoaded", () => {
//     fetch("header.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("header").innerHTML = data;
//         })
//         .catch(error => console.error("載入失敗:", error));
// });

const colorInput = document.getElementById("colorPicker");
// 取得 body 的目前背景顏色
let currentColor = window.getComputedStyle(document.body).backgroundColor;
// 把 rgb(...) 轉成 hex (#RRGGBB)
function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g).map(Number); // 取出數字
    return (
        "#" +
        result
            .slice(0, 3) // 只取 R、G、B
            .map(x => x.toString(16).padStart(2, "0"))
            .join("")
    );
}
// 設定 color input 的初始值
colorInput.value = rgbToHex(currentColor);
// 綁定事件：選擇顏色時更新背景
colorInput.addEventListener("input", function () {
    document.body.style.backgroundColor = this.value;
});

// 打開彈出視窗
function openPopup() {
    document.getElementById("overlay").style.display = "flex";
}

// 關閉彈出視窗
function closePopup(event) {
    // 檢查點擊是否在 overlay 上
    if (event.target.id === "overlay") {
        document.getElementById("overlay").style.display = "none";
    }
}

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
