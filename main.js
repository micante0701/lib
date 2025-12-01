window.onload = genTable;
// 目錄資料陣列
function getNames() {
    return [
        ["0000", "歧路指歸", "戰德克編述", "印光大師鑑定", "李德明參定"],
        ["0001", "阿彌陀經", "姚秦龜茲三藏鳩摩羅什譯", "", ""],
        ["0002", "佛說觀無量壽佛經", "宋西域三藏畺良耶舍譯", "", ""],
        ["0003", "佛說無量壽經", "曹魏天竺三藏康僧鎧譯", "", ""],
        ["0004", "大乘無量壽經白話", "金剛乘三昧耶戒弟子黃念祖 敬解", "", ""],
        ["0005", "佛說阿彌陀經疏鈔", "明古杭雲棲寺沙門袾宏述", "", ""],
        ["0006", "佛說佛地經", "大唐三藏法師玄奘奉　詔譯", "", ""],
        ["0007", "佛地經論", "親光菩薩等造", "大唐三藏法師玄奘奉　詔譯", ""],
        ["0008", "無量壽經甄解", "唐代日人道隱法師", "", ""],
        ["0009", "大乘起信論", "馬鳴菩薩造", "梁西印度三藏法師真諦譯", ""],
        ["0010", "十二門論", "龍樹菩薩造", "姚秦三藏鳩摩羅什譯", ""],
        ["0011", "稱讚淨土佛攝受經", "大唐三藏法師玄奘奉　詔譯", "", ""],
        ["0012", "金剛般若波羅蜜經", "姚秦天竺三藏鳩摩羅什譯", "", ""],
        ["0013", "大寶積經", "大唐三藏法師菩提流志奉　詔譯", "", ""]
    ]
}
// 產生目錄：分手機、電腦版，電腦版整個可以點，手機版只能點標題進入
function genTable() {
    let names = getNames();
    let text = "";
    if (window.matchMedia("(max-width: 768px)").matches) {
        // console.log("手機版");
        for (let i = 0; i < names.length; i++) {
            text += `<div class="card">`;
            text += `<p class="bookTitle"><a href="${names[i][0]}.html">${names[i][1]}</a></p>`;
            text += `<p class="name">${names[i][2]}</p>`;
            text += `<p class="name">${names[i][3]}</p>`;
            text += `<p class="name">${names[i][4]}</p>`;
            text += `</div>`;
        }
    } else {
        // console.log("電腦版");
        for (let i = 0; i < names.length; i++) {
            text += `<a href="${names[i][0]}.html" class="card">`;
            text += `<p class="bookTitle">${names[i][1]}</p>`;
            text += `<p class="name">${names[i][2]}</p>`;
            text += `<p class="name">${names[i][3]}</p>`;
            text += `<p class="name">${names[i][4]}</p>`;
            text += `</a>`;
        }
    }
    document.getElementById("show").innerHTML = text;
}

// 監聽視窗大小改變，變小就變手機版
window.addEventListener("resize", genTable);