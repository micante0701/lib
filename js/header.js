// ↓↓↓ header.html(程式碼End) ↓↓↓
// 等 DOM 建立好再執行
window.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("載入失敗:", error));
});
// ↑↑↑ header.html(程式碼End) ↑↑↑