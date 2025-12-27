// // select功能
// // 監聽左邊 select
// const leftSelect = document.getElementById('leftSelect');
// const leftFrame = document.getElementById('leftFrame');
// leftSelect.addEventListener('change', () => {
//     const value = leftSelect.value; // 取得選到的值，例如 "0001" 
//     leftFrame.src = value + '.html'; // 更新 iframe 的 src 
// });
// // 監聽右邊 select 
// const rightSelect = document.getElementById('rightSelect');
// const rightFrame = document.getElementById('rightFrame');
// rightSelect.addEventListener('change', () => {
//     const value = rightSelect.value; rightFrame.src = value + '.html';
// }); 
// function getNames() {
//     return [
//         ["0000", "", "", "", ""],
//         ["0001", "", "", "", ""],
//         ["0002", "", "", "", ""]
//     ]
// }

// function getNames() {
//     return [
//         ["0000", "標題0", "作者0", "出版社0", "備註0"],
//         ["0001", "標題1", "作者1", "出版社1", "備註1"],
//         ["0002", "標題2", "作者2", "出版社2", "備註2"]
//     ];
// }

// 動態產生 select 選項
function genSelect(selectId) {
    const names = getNames();
    const select = document.getElementById(selectId);
    select.innerHTML = ""; // 清空舊的

    for (let i = 0; i < names.length; i++) {
        const opt = document.createElement("option");
        opt.value = names[i][0];      // 例如 "0001"
        opt.textContent = names[i][1]; // 顯示文字
        select.appendChild(opt);
    }
}

// 初始化左右 select
genSelect("leftSelect");
genSelect("rightSelect");

// 綁定事件：選擇後更新 iframe
document.getElementById("leftSelect").addEventListener("change", function () {
    document.getElementById("leftFrame").src = this.value + ".html";
});

document.getElementById("rightSelect").addEventListener("change", function () {
    document.getElementById("rightFrame").src = this.value + ".html";
});