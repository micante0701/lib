window.onload = genTable;
function getNames() {
    return [
        ["0000", "歧路指歸", "戰德克", "印光大師鑑定", "李德明參定"],
        ["0001", "阿彌陀經", "姚秦龜茲三藏鳩摩羅什譯", "", ""],
        ["0002", "佛說觀無量壽佛經", "宋西域三藏畺良耶舍譯", "", ""],
        ["0003", "佛說無量壽經", "曹魏天竺三藏康僧鎧譯", "", ""],
        ["0004", "大乘無量壽經白話", "黃念祖", "", ""],
        ["0005", "佛說阿彌陀經疏鈔卷第一", "明古杭雲棲寺沙門袾宏述", "", ""],
        ["0006", "佛說阿彌陀經疏鈔卷第二", "明古杭雲棲寺沙門袾宏述", "", ""],
        ["0007", "佛說阿彌陀經疏鈔卷第三", "明古杭雲棲寺沙門袾宏述", "", ""],
        ["0008", "佛說阿彌陀經疏鈔卷第四", "明古杭雲棲寺沙門袾宏述", "", ""],
        ["0009", "佛地經論卷第一", "親光菩薩等造", "", ""],
        ["0010", "無量壽經甄解", "道隱法師", "", ""],
        ["0011", "大乘起信論", "馬鳴菩薩造", "", ""],
        ["0012", "", "", "", ""]
    ]
}

function genTable() {
    let names = getNames();
    let text = "";
    for (let i = 0; i < names.length; i++) {
        // text += `<div class="card">`;
        // text += `<p class="bookTitle"><a href="${names[i][0]}.html">${names[i][1]}</a></p>`;
        // text += `<p class="name">${names[i][2]}</p>`;
        // text += `<p class="name">${names[i][3]}</p>`;
        // text += `<p class="name">${names[i][4]}</p>`;
        // text += `</div>`;
        text += `<div class="card">`;
        text += `<p class="bookTitle"><a href="${names[i][0]}.html">${names[i][1]}</a></p>`;
        text += `<p class="name">${names[i][2]}</p>`;
        text += `<p class="name">${names[i][3]}</p>`;
        text += `<p class="name">${names[i][4]}</p>`;
        text += `</div>`;
    }
    document.getElementById("show").innerHTML = text;
}
// 找出所有 .card 元素
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        // 找出卡片裡的超連結
        const link = card.querySelector("a");
        if (link && link.href) {
            window.location.href = link.href; // 導向該超連結
        }
    });
});