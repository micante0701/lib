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
        if (newSize < 10) newSize = 10;
        if (newSize > 72) newSize = 72;
        // 套用新大小
        p.style.fontSize = newSize + "px";
    });
}