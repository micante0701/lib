function getVersion() {
    return [
        ["V5.7.2", "2026/03/17", "Improve", "離線瀏覽功能加強(針對手機自動清除快取)", "", ""],
        ["V5.7.2", "2026/03/17", "fix", "V5.5.2產生的首頁離線瀏覽失效修復", "", ""],
        ["V5.6.2", "2026/03/14", "Improve", "版本頁面美化", "", ""],
        ["V5.5.2", "2026/03/13", "fix", "pair頁面調校", "", ""],
        ["V5.5.2", "2026/03/13", "fix", "tooltip和toolbox顯示異常修正", "", ""],
        ["V5.5.2", "2026/03/13", "fix", "離線瀏覽設定微調", "", ""],
        ["V5.5.2", "2026/03/13", "fix", "特殊字顯示方式更新", "", ""],
        ["V5.5.1", "2026/03/11", "fix", "行動裝置閱讀異常狀態排除", "", ""],
        ["自修大躍進", "2026/03/10", "note", "最近開發另一個網站過程中，忽然搞懂部分CSS用法，準備回來大修正", "", ""],
        ["V5.5.0", "2026/01/22", "expand", "無量壽經甄解(十一)~()", "", ""],
        ["V5.5.0", "2026/01/22", "note", "無量壽經甄解後續的部分，資料來源異常，暫停製作", "", ""],
        ["V5.4.0", "2026/01/21", "expand", "無量壽經甄解(六)~(十)", "", ""],
        ["V5.3.0", "2026/01/20", "expand", "無量壽經甄解(二)~(五)", "", ""],
        ["V5.2.0", "2026/01/11", "expand", "佛說阿彌陀經講錄－道源長老", "", ""],
        ["V5.1.0", "2026/01/10", "expand", "佛說無量壽經講記－道源長老", "", ""],
        ["V5.0.0", "2026/01/09", "new", "支援離線瀏覽", "", ""],
        ["V5.0.0", "2026/01/09", "delete", "離線全集.html", "", ""],
        ["V4.0.1", "2026/01/08", "improve", "首頁美化", "", ""],
        ["V4.0.0", "2026/01/07", "new", "離線全集.html", "", ""],
        ["V3.0.0", "2025/12/27", "new", "雙頁對照檢視", "", ""],
        ["V2.8.1", "2025/12/27", "expand", "轉經行道願往生淨土法事讚", "", ""],
        ["V2.7.1", "2025/12/17", "expand", "佛說無量壽經講記－道源長老", "", ""],
        ["V2.6.1", "2025/12/14", "fix", "點擊過的「超連結」不變色", "", ""],
        ["新方向設立", "2025/12/11", "new target", "更新方向：支援離線瀏覽", "", ""],
        ["V2.6.0", "2025/12/05", "expand", "佛說大乘無量壽莊嚴經", ""],
        ["V2.5.0", "2025/12/05", "expand", "佛說阿彌陀三耶三佛薩樓佛檀過度人道經", ""],
        ["V2.4.0", "2025/12/04", "expand", "佛說大阿彌陀經", "佛說無量清淨平等覺經", ""],
        ["新方向設立", "2025/12/03", "new target", "版面進階優化功能測試(多次失敗中...)", "", ""],
        ["V2.3.0", "2025/12/02", "expand", "跨頁設定共享", "", ""],
        ["V2.2.0", "2025/12/01", "expand", "佛地經論(二)~(六)", "", ""],
        ["V2.1.0", "2025/11/30", "expand", "佛說阿彌陀經疏鈔", ""],
        ["V2.1.0", "2025/11/30", "NEW", "經文整理程式開發(非本站網頁程式)", ""],
        ["V2.0.0", "2025/11/29", "New", "新增版本紀錄頁", "", ""],
        ["V1.3.0", "2025/11/29", "expand", "無量壽經", "", ""],
        ["V1.2.0", "2025/11/28", "expand", "金剛經", "", ""],
        ["V1.1.0", "2025/11/27", "expand", "稱讚淨土佛攝受經"],
        ["- - -", "這期間沒特別紀錄", "note", "剛做，也沒什麼想法，很多天都沒作為"],
        ["- - -", "", "expand", "歧路指歸(未完成)"],
        ["- - -", "", "expand", "佛說無量壽經"],
        ["- - -", "", "expand", "大乘無量壽經白話解"],
        ["- - -", "", "expand", "無量壽經甄解(一)(未完成)"],
        ["- - -", "", "expand", "佛說觀無量壽佛經"],
        ["- - -", "", "expand", "大乘起信論(未完成)"],
        ["- - -", "", "expand", "十二門論(未完成)"],
        ["- - -", "", "expand", "大寶積經(未完成)"],
        ["- - -", "", "expand", "佛說佛地經"],
        ["- - -", "", "expand", "佛地經論(一)(未完成)"],
        ["- - -", "", "expand", "彌陀圓中鈔(未完成)"],
        ["V1.0.0", "2025/10/23", "new", "本站試做"]
    ]
}
function renderChangelog() {
    const rawData = getVersion();
    const container = document.getElementById('changelog-container');

    // 1. 資料處理：按「版本號」群組化
    const groupedByVersion = rawData.reduce((acc, curr) => {
        const [version, date, tag, content] = curr;
        if (!acc[version]) {
            acc[version] = {
                date: date,
                changes: []
            };
        }
        acc[version].changes.push({ tag, content });
        return acc;
    }, {});

    // 2. 排序版本（假設資料本身是由新到舊，若不是則需額外排序 keys）
    const versions = Object.keys(groupedByVersion);

    // 3. 渲染 HTML
    let htmlContent = '';
    versions.forEach(v => {
        const data = groupedByVersion[v];

        htmlContent += `
                <div class="log-item">
                    <div class="version-header">
                        <span class="version-number">${v}</span>
                        <span class="release-date">${data.date}</span>
                    </div>
                    <ul class="change-list">
                        ${data.changes.map(item => `
                            <li>
                                <span class="tag tag-${item.tag.toLowerCase()}">${item.tag}</span>
                                <span class="change-text">${item.content}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
    });

    container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', renderChangelog);