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




// import { getNames } from "js/main.js"

function getNames() {
    return [
        ["0000", "歧路指歸", "戰德克編述", "印光大師鑑定", "李德明參定"],
        ["0001", "佛說無量壽經", "曹魏天竺三藏康僧鎧譯", "", ""],
        ["0002", "佛說無量壽經講記", "道源長老", "", ""],
        ["0023", "佛說無量壽經筆記(70~112)", "徐醒民老師", "", ""],
        ["0003", "大乘無量壽經白話", "金剛乘三昧耶戒弟子黃念祖 敬解", "", ""],
        ["0004", "無量壽經甄解", "唐代日人道隱法師", "", ""],
        ["0005", "阿彌陀經", "姚秦龜茲三藏鳩摩羅什譯", "", ""],
        ["0006", "佛說阿彌陀經疏鈔", "明古杭雲棲寺沙門袾宏述", "", ""],
        ["0007", "佛說觀無量壽佛經", "宋西域三藏畺良耶舍譯", "", ""],
        ["0008", "稱讚淨土佛攝受經", "大唐三藏法師玄奘奉　詔譯", "", ""],
        ["0009", "金剛般若波羅蜜經", "姚秦天竺三藏鳩摩羅什譯", "", ""],
        ["0010", "大乘起信論", "馬鳴菩薩造", "梁西印度三藏法師真諦譯", ""],
        ["0011", "十二門論", "龍樹菩薩造", "姚秦三藏鳩摩羅什譯", ""],
        ["0012", "大寶積經", "大唐三藏法師菩提流志奉　詔譯", "", ""],
        ["0013", "佛說佛地經", "大唐三藏法師玄奘奉　詔譯", "", ""],
        ["0014", "佛地經論", "親光菩薩等造", "大唐三藏法師玄奘奉　詔譯", ""],
        ["0015", "佛說無量清淨平等覺經", "後漢月支國三藏支婁迦讖譯", "", ""],
        ["0016", "佛說阿彌陀三耶三佛薩樓佛檀過度人道經", "吳月支國居士支謙譯", "", ""],
        ["0017", "佛說大乘無量壽莊嚴經", "西天譯經三藏朝散大夫試光祿卿明教大師臣法賢奉　詔譯", "", ""],
        ["0018", "佛說大阿彌陀經", "南宋國學進士龍舒王日休校輯", "", ""],
        ["0019", "轉經行道願往生淨土法事讚", "沙門善導集記", "", ""],
        ["0020", "佛說無量壽經講記", "道源長老", "", ""],
        ["0021", "佛說阿彌陀經講錄", "道源長老", "", ""],
        ["0022", "彌陀圓中鈔", "天臺山幽溪沙門傳燈", "", ""]
        // ["0", "", "", "", ""]
    ]
}
// 動態產生 select 選項
function genSelect(selectId) {
    const names = getNames();
    const select = document.getElementById(selectId);
    select.innerHTML = ""; // 清空舊的

    // === 插入預設「請選擇」 === 
    const defaultOpt = document.createElement("option"); defaultOpt.value = ""; // 空值，避免觸發 iframe 
    defaultOpt.textContent = "請選擇"; // 顯示文字 
    defaultOpt.selected = true; // 預設選中 
    select.appendChild(defaultOpt);

    for (let i = 0; i < names.length; i++) {
        const opt = document.createElement("option");
        opt.value = names[i][0]; // 例如 "0001"
        opt.textContent = names[i][1]; // 顯示文字
        select.appendChild(opt);
    }
}

// 初始化左右 select
genSelect("leftSelect");
genSelect("rightSelect");

// 綁定事件：選擇後更新 iframe
document.getElementById("leftSelect").addEventListener("change", function () {
    if (this.value) { 
        document.getElementById("leftFrame").src = this.value + ".html"; 
    }
});

document.getElementById("rightSelect").addEventListener("change", function () {
    if (this.value) { 
        document.getElementById("rightFrame").src = this.value + ".html"; 
    }
});