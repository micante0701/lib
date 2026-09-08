// --- 菜單資料庫 ---
const appConfig = {
    minChargePerPerson: 200, //低銷價格設定
    soupPrice: 70, // 單點湯品固定價格 (用於需求4動態計算折抵)
    tables: ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "Q1", "Q2", "Q3", "Q4", "Q5", "Y1", "Y2"],
    categories: ["義大利麵", "燉飯", "早午餐", "沙拉", "排餐", "點心", "兒童餐", "下午茶", "咖啡", "茶飲", "蔬果汁", "氣泡飲", "甜點"],

    drinkOptions: {
        temp: ["冰", "熱"],
        ice: ["正常冰", "少冰", "去冰"],
        sugar: ["正常糖", "半糖", "無糖"]
    },

    teaComboOptions: {
        drinks: [
            { name: "美式咖啡", price: 100, customizable: true },
            { name: "拿鐵", price: 120, customizable: true },
            { name: "榛果拿鐵", price: 140, customizable: true },
            { name: "摩卡咖啡", price: 140, customizable: true },
            { name: "鮮奶茶", price: 120, customizable: true },
            { name: "黑芝麻鮮奶茶", price: 140, customizable: true },
            { name: "海鹽焦糖鮮奶茶", price: 140, customizable: true },
            { name: "紅茶", price: 100, customizable: true },
            { name: "唐寧茶", price: 120, customizable: true }
        ],
        cakes: [
            { name: "彩虹蛋糕", price: 140 },
            { name: "焦糖瑪奇朵", price: 120 },
            { name: "重乳酪", price: 120 },
            { name: "彩虹果凍", price: 120 },
            { name: "三重奏", price: 120 }
        ]
    },

    menu: [
        // 義大利麵
        { id: "m1", name: "蕃茄白酒海鮮義大利麵", category: "義大利麵", price: 360 },
        { id: "m2", name: "嫩煎雞腿青醬義大利麵", category: "義大利麵", price: 320 },
        { id: "m3", name: "（素）牛肝菌松露野菇義大利麵", category: "義大利麵", price: 270 },
        { id: "m4", name: "松露奶油鮭魚義大利麵", category: "義大利麵", price: 330 },
        { id: "m5", name: "檸香金沙軟殼蟹義大利麵", category: "義大利麵", price: 320 },
        { id: "m6", name: "蒜香清炒中卷墨魚麵", category: "義大利麵", price: 320 },
        { id: "m7", name: "海苔蛋黃肉醬貝殼麵", category: "義大利麵", price: 280 },
        { id: "m8", name: "香菜牛肉河粉", category: "義大利麵", price: 199 },
        { id: "m9", name: "南薑酸辣鮮蝦義大利麵", category: "義大利麵", price: 280 },
        { id: "m10", name: "起司焗烤肉醬斜管麵", category: "義大利麵", price: 300 },
        { id: "m11", name: "藍紋起司奶油豬排貝殼麵", category: "義大利麵", price: 320 },
        { id: "m12", name: "煙燻鮭魚奶油焗烤斜管麵", category: "義大利麵", price: 300 },
        { id: "m13", name: "焗烤羅勒青醬海鮮斜管麵", category: "義大利麵", price: 300 },
        { id: "m14", name: "奶香明太子海鮮義大利麵", category: "義大利麵", price: 360 },
        { id: "m_soup_1", name: "單點湯品", category: "義大利麵", price: 70 }, // 需求3
        { id: "m15", name: "升級套餐", category: "義大利麵", price: 150, isUpgradeCombo: true },

        // 燉飯
        { id: "m16", name: "優格豬排茄汁燉飯", category: "燉飯", price: 320 },
        { id: "m17", name: "嫩煎雞腿青醬燉飯", category: "燉飯", price: 320 },
        { id: "m18", name: "義式海鮮松露燉飯", category: "燉飯", price: 360 },
        { id: "m19", name: "（素）牛肝菌松露野菇燉飯", category: "燉飯", price: 270 },
        { id: "m20", name: "匈牙利紅酒牛肉燉飯", category: "燉飯", price: 320 },
        { id: "m21", name: "香煎干貝菠菜燉飯", category: "燉飯", price: 360 },
        { id: "m22", name: "蔥香雞腿薑黃飯", category: "燉飯", price: 280 },
        { id: "m_soup_2", name: "單點湯品", category: "燉飯", price: 70 }, // 需求3
        { id: "m23", name: "升級套餐", category: "燉飯", price: 150, isUpgradeCombo: true },

        // 早午餐
        { id: "m24", name: "愛上好萊屋", category: "早午餐", price: 280 },
        { id: "m25", name: "匈牙利嫩雞", category: "早午餐", price: 280 },

        // 沙拉
        { id: "m26", name: "優格鮮蝦蘋果沙拉", category: "沙拉", price: 270 },
        { id: "m27", name: "經典嫩雞凱薩沙拉", category: "沙拉", price: 270 },
        { id: "m28", name: " (素)田園鮮蔬沙拉", category: "沙拉", price: 220 },

        // 排餐
        { id: "m29", name: "義式酥煎嫩雞雙拼", category: "排餐", price: 430 },
        { id: "m30", name: "炙燒舒肥鴨胸佐甜蔥醬", category: "排餐", price: 540 },
        { id: "m31", name: "香煎鱸魚腓力", category: "排餐", price: 660 },
        { id: "m_soup_3", name: "單點湯品", category: "排餐", price: 70 }, // 需求3
        { id: "m32", name: "升級套餐", category: "排餐", price: 150, isUpgradeCombo: true },

        // 點心
        { id: "m33", name: "松露鮮奶油薯條(小)", category: "點心", price: 90 },
        { id: "m34", name: "松露鮮奶油薯條(大)", category: "點心", price: 200 },
        { id: "m35", name: "（素）起士烤餅佐莎莎醬", category: "點心", price: 180 },
        { id: "m36", name: "海鮮茄汁披薩", category: "點心", price: 330 },
        { id: "m37", name: "（素）什菌野菇披薩", category: "點心", price: 250 },
        { id: "m38", name: "海鮮蕃茄烘烤蛋", category: "點心", price: 260 },
        { id: "m39", name: "（素）歐式野菇時蔬烘烤蛋", category: "點心", price: 220 },

        // 兒童餐
        { id: "m40", name: "茄汁鮮蝦斜管麵", category: "兒童餐", price: 260 },
        { id: "m41", name: "奶油菇菇斜管麵", category: "兒童餐", price: 220 },

        // 下午茶
        { id: "m42", name: "下午茶套餐", category: "下午茶", price: 200, isTeaCombo: true },

        // 咖啡
        { id: "m43", name: "美式咖啡", category: "咖啡", price: 100, customizable: true },
        { id: "m44", name: "拿鐵", category: "咖啡", price: 120, customizable: true },
        { id: "m45", name: "榛果拿鐵", category: "咖啡", price: 140, customizable: true },
        { id: "m46", name: "摩卡咖啡", category: "咖啡", price: 140, customizable: true },

        // 茶飲
        { id: "m47", name: "鮮奶茶", category: "茶飲", price: 120, customizable: true },
        { id: "m48", name: "黑芝麻鮮奶茶", category: "茶飲", price: 140, customizable: true },
        { id: "m49", name: "海鹽焦糖鮮奶茶", category: "茶飲", price: 140, customizable: true },
        { id: "m50", name: "紅茶", category: "茶飲", price: 100, customizable: true },
        { id: "m51", name: "唐寧茶", category: "茶飲", price: 120, customizable: true },

        // 蔬果汁
        { id: "m52", name: "綠拿鐵", category: "蔬果汁", price: 160, customizable: true },
        { id: "m53", name: "仲夏野莓", category: "蔬果汁", price: 140, customizable: true },
        { id: "m54", name: "熱帶風情", category: "蔬果汁", price: 140, customizable: true },
        { id: "m55", name: "酪梨奶昔", category: "蔬果汁", price: 180, customizable: true },
        { id: "m56", name: "紅鑽香蘋", category: "蔬果汁", price: 140, customizable: true },

        // 氣泡飲
        { id: "m57", name: "藍紫星空氣泡飲", category: "氣泡飲", price: 160, customizable: true },
        { id: "m58", name: "柚香微氣泡", category: "氣泡飲", price: 140, customizable: true },
        { id: "m59", name: "蜜蘋微氣泡", category: "氣泡飲", price: 140, customizable: true },
        { id: "m60", name: "粉紅愛戀氣泡飲", category: "氣泡飲", price: 160, customizable: true },
        { id: "m61", name: "仲夏香草氣泡飲", category: "氣泡飲", price: 160, customizable: true },

        // 甜點
        { id: "m62", name: "彩虹蛋糕", category: "甜點", price: 140 },
        { id: "m63", name: "焦糖瑪奇朵", category: "甜點", price: 120 },
        { id: "m64", name: "重乳酪", category: "甜點", price: 120 },
        { id: "m65", name: "彩虹果凍", category: "甜點", price: 120 },
        { id: "m66", name: "三重奏", category: "甜點", price: 120 },

        // 甜點
        { id: "m67", name: "三重奏", category: "甜點", price: 120 },
    ]
};

// --- 全域資料狀態 ---
const ordersState = {};
const historyLogs = [];
let currentTable = null;
let currentCategory = appConfig.categories[0];
let selectedCartIndexForNote = null;
let tempDrinkOptionsTarget = null; // 暫存正在設定冰糖的飲料物件

const getFormattedTime = () => new Date().toLocaleTimeString('zh-TW', { hour12: false });

document.addEventListener("DOMContentLoaded", () => {
    renderTables();
    renderCategories();
    setupEventListeners();
    setupOverlayBackgroundClick();
    setupHorizontalScroll();
});

function setupHorizontalScroll() {
    const tabs = document.getElementById("category-tabs");
    tabs.addEventListener("wheel", (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            tabs.scrollLeft += e.deltaY;
        }
    });
}

function setupOverlayBackgroundClick() {
    const overlays = [
        { id: "order-overlay", closeFn: () => document.getElementById("order-overlay").classList.remove("active") },
        { id: "note-overlay", closeFn: () => handleNoteCancel() },
        { id: "drink-opt-overlay", closeFn: () => document.getElementById("drink-opt-overlay").classList.remove("active") },
        { id: "history-overlay", closeFn: () => document.getElementById("history-overlay").classList.remove("active") }
    ];

    overlays.forEach(item => {
        const overlayElem = document.getElementById(item.id);
        overlayElem.addEventListener("click", (e) => {
            if (e.target === overlayElem) item.closeFn();
        });
    });
}

function renderTables() {
    const grid = document.getElementById("table-grid");
    grid.innerHTML = "";
    appConfig.tables.forEach(table => {
        const card = document.createElement("div");
        const hasOrder = ordersState[table] && ordersState[table].items.length > 0;
        card.className = `table-card ${hasOrder ? 'table-active' : 'table-empty'}`;

        let firstTimeText = (hasOrder && ordersState[table].firstOrderTime)
            ? `<div style="font-size:0.75rem; margin-top:4px;">首點: ${ordersState[table].firstOrderTime}</div>`
            : '';
        card.innerHTML = `<div>${table}</div><div style="font-size:0.8rem; margin-top:2px;">${hasOrder ? '用餐中' : '空桌'}</div>${firstTimeText}`;
        card.onclick = () => openOrderOverlay(table);
        grid.appendChild(card);
    });
}

function openOrderOverlay(table) {
    currentTable = table;
    document.getElementById("modal-table-title").innerText = `桌號：${table}`;

    if (!ordersState[table]) {
        ordersState[table] = { guests: 1, items: [], isSaved: false, firstOrderTime: null };
    }

    document.getElementById("guest-count").value = ordersState[table].guests;
    renderCart();
    renderMenu();
    document.getElementById("order-overlay").classList.add("active");
}

function renderCategories() {
    const tabsContainer = document.getElementById("category-tabs");
    tabsContainer.innerHTML = "";
    appConfig.categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${cat === currentCategory ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = () => {
            currentCategory = cat;
            renderCategories();
            renderMenu();
        };
        tabsContainer.appendChild(btn);
    });
}

function renderMenu() {
    const menuGrid = document.getElementById("menu-grid");
    menuGrid.innerHTML = "";
    const filteredMenu = appConfig.menu.filter(m => m.category === currentCategory);

    filteredMenu.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `<div>${item.name}</div><div class="price">$${item.price}</div>`;
        card.onclick = () => addItemToCart(item);
        menuGrid.appendChild(card);
    });
}

// 新增餐點至購物車 (需求1: 點餐後直接進入購物車，不自動開啟彈窗)
function addItemToCart(item) {
    const tableData = ordersState[currentTable];
    const isExtra = tableData.isSaved;

    const newItem = {
        cartUid: Date.now() + Math.random(),
        id: item.id,
        name: item.name,
        basePrice: item.price,
        extraPrice: 0,
        price: item.price,
        qty: 1,
        isTeaCombo: item.isTeaCombo || false,
        isUpgradeCombo: item.isUpgradeCombo || false,
        selectedDrink: null,
        selectedCake: null,
        upgradeType: null, // "soup" 或 "drink"
        customizable: item.customizable || false,
        drinkOptions: item.customizable ? { temp: "冰", ice: "正常冰", sugar: "正常糖" } : null,
        note: "",
        isExtra: isExtra,
        orderTime: null
    };

    tableData.items.push(newItem);
    renderCart();
}

function deleteCartItem(index, e) {
    e.stopPropagation();
    const tableData = ordersState[currentTable];
    tableData.items.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    const tableData = ordersState[currentTable];
    let totalPrice = 0;

    tableData.items.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        totalPrice += itemTotal;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.onclick = () => triggerNoteModal(index);

        let detailsText = "";

        if (item.isUpgradeCombo) {
            // 需求4: 升級套餐細節
            if (item.upgradeType === "soup") {
                detailsText = "套餐內容: 主廚例湯";
            } else if (item.upgradeType === "drink" && item.selectedDrink) {
                let drinkOptStr = item.selectedDrink.customOptions ? ` (${item.selectedDrink.customOptions.temp}/${item.selectedDrink.customOptions.temp === '冰' ? item.selectedDrink.customOptions.ice : ''}/${item.selectedDrink.customOptions.sugar})` : '';
                detailsText = `套餐飲料: ${item.selectedDrink.name}${drinkOptStr} (補差額+$${item.extraPrice})`;
            } else {
                detailsText = "⚠️ 點擊設定套餐內容 (湯品或飲料二擇一)";
            }
        } else if (item.isTeaCombo) {
            if (item.selectedDrink && item.selectedCake) {
                const drinkExtra = Math.max(0, item.selectedDrink.price - 120);
                const cakeExtra = Math.max(0, item.selectedCake.price - 120);
                let drinkOptStr = item.selectedDrink.customOptions ? ` (${item.selectedDrink.customOptions.temp}/${item.selectedDrink.customOptions.temp === '冰' ? item.selectedDrink.customOptions.ice : ''}/${item.selectedDrink.customOptions.sugar})` : '';

                detailsText = `飲料: ${item.selectedDrink.name}${drinkOptStr}\n蛋糕: ${item.selectedCake.name}`;
            } else {
                detailsText = "⚠️ 點擊設定下午茶內容";
            }
        } else {
            let opts = [];
            if (item.customizable && item.drinkOptions) {
                let tempStr = item.drinkOptions.temp;
                if (tempStr === "冰") tempStr += `/${item.drinkOptions.ice}`;
                opts.push(`${tempStr}/${item.drinkOptions.sugar}`);
            }
            if (item.note) opts.push(`備註: ${item.note}`);
            detailsText = opts.length > 0 ? opts.join(" | ") : "點擊新增備註/調整冰糖";
        }

        const displayTime = item.orderTime ? item.orderTime : "待送單";

        div.innerHTML = `
          <div class="btn-delete-item" onclick="deleteCartItem(${index}, event)">✕</div>
          <div class="cart-item-header">
            <span>${item.isExtra ? '<span class="tag-extra">加點</span> ' : ''}${item.name} x ${item.qty}</span>
            <span>$${itemTotal}</span>
          </div>
          <div class="cart-item-sub">${detailsText}</div>
          <div class="item-time">狀態/時間: ${displayTime}</div>
        `;
        cartList.appendChild(div);
    });

    const guests = parseInt(document.getElementById("guest-count").value) || 1;
    tableData.guests = guests;
    const minChargeTotal = guests * appConfig.minChargePerPerson;

    const minChargeElem = document.getElementById("min-charge-info");
    document.getElementById("total-price").innerText = `總計：$${totalPrice}`;

    if (totalPrice >= minChargeTotal) {
        minChargeElem.className = "min-charge-info pass";
        minChargeElem.innerText = `低消門檻：$${minChargeTotal} (已達標)`;
    } else {
        minChargeElem.className = "min-charge-info fail";
        minChargeElem.innerText = `低消門檻：$${minChargeTotal} (尚差 $${minChargeTotal - totalPrice})`;
    }
}

// 點擊購物車項目開啟設定彈窗
function triggerNoteModal(index) {
    const item = ordersState[currentTable].items[index];
    selectedCartIndexForNote = index;

    document.getElementById("note-title").innerText = `${item.name} - 設定選項`;
    const container = document.getElementById("note-options-container");
    container.innerHTML = "";

    if (item.isUpgradeCombo) {
        renderUpgradeComboOptions(container, item); // 需求4
    } else if (item.isTeaCombo) {
        renderTeaComboOptions(container, item);
    } else {
        renderStandardItemOptions(container, item);
    }

    document.getElementById("note-overlay").classList.add("active");
}

// 需求4: 升級套餐彈窗內容 (湯/飲料二擇一，偵測單點湯品金額動態計算)
function renderUpgradeComboOptions(container, item) {
    const title = document.createElement("div");
    title.className = "note-group-title";
    title.innerText = "請選擇套餐組合 (二擇一)";
    container.appendChild(title);

    const soupChecked = item.upgradeType === "soup" ? "checked" : "";
    const drinkChecked = item.upgradeType === "drink" ? "checked" : "";

    container.innerHTML += `
        <label class="note-option">
          <input type="radio" name="upgrade-type" value="soup" ${soupChecked}> 主廚例湯 (無需額外加價)
        </label>
        <label class="note-option">
          <input type="radio" name="upgrade-type" value="drink" ${drinkChecked}> 折抵升級飲料 (折抵單點湯品價 $${appConfig.soupPrice})
        </label>
        <div id="upgrade-drink-select-sec" style="display:none; margin-top:10px;">
          <div class="note-group-title">選擇升級飲料 (飲料原價 - $${appConfig.soupPrice})</div>
          <div id="upgrade-drink-list"></div>
        </div>
      `;

    const drinkSec = container.querySelector("#upgrade-drink-select-sec");
    const drinkList = container.querySelector("#upgrade-drink-list");

    // 篩選出所有飲料品項 (可客製化冰糖者)
    const availableDrinks = appConfig.menu.filter(m => m.customizable);

    const renderDrinkList = () => {
        drinkList.innerHTML = "";
        availableDrinks.forEach(d => {
            const extraPrice = Math.max(0, d.price - appConfig.soupPrice); // 動態偵測單點湯品價格計算差額
            const isSelected = item.selectedDrink && item.selectedDrink.name === d.name;
            const checkedStr = isSelected ? "checked" : "";

            const div = document.createElement("div");
            div.style.cssText = "margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;";
            div.innerHTML = `
            <label style="cursor:pointer;">
              <input type="radio" name="upgrade-drink-item" value="${d.name}" data-price="${d.price}" data-extra="${extraPrice}" ${checkedStr}>
              ${d.name} ($${d.price}) <span style="color:#e53935;">[+${extraPrice}元]</span>
            </label>
            ${isSelected ? `<button class="btn-drink-opt" onclick="openDrinkOptOverlayForCurrentCombo('upgrade')">調整冰糖</button>` : ''}
          `;
            drinkList.appendChild(div);
        });

        // 綁定 Radio 事件
        drinkList.querySelectorAll("input[name='upgrade-drink-item']").forEach(radio => {
            radio.addEventListener("change", (e) => {
                const dName = e.target.value;
                const dObj = availableDrinks.find(x => x.name === dName);
                item.selectedDrink = {
                    name: dObj.name,
                    price: dObj.price,
                    customOptions: item.selectedDrink?.name === dObj.name ? item.selectedDrink.customOptions : { temp: "冰", ice: "正常冰", sugar: "正常糖" }
                };
                renderDrinkList();
            });
        });
    };

    const radios = container.querySelectorAll("input[name='upgrade-type']");
    radios.forEach(r => {
        r.addEventListener("change", (e) => {
            if (e.target.value === "drink") {
                drinkSec.style.display = "block";
                renderDrinkList();
            } else {
                drinkSec.style.display = "none";
            }
        });
    });

    if (item.upgradeType === "drink") {
        drinkSec.style.display = "block";
        renderDrinkList();
    }
}

// 渲染下午茶套餐彈窗
function renderTeaComboOptions(container, item) {
    const drinkGroupTitle = document.createElement("div");
    drinkGroupTitle.className = "note-group-title";
    drinkGroupTitle.innerText = "1. 選擇飲料 (折抵$120，超額補差價)";
    container.appendChild(drinkGroupTitle);

    appConfig.teaComboOptions.drinks.forEach((drink) => {
        const extra = Math.max(0, drink.price - 120);
        const extraStr = extra > 0 ? ` (+${extra}元)` : '';
        const isChecked = item.selectedDrink && item.selectedDrink.name === drink.name ? "checked" : "";

        const div = document.createElement("div");
        div.style.cssText = "margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;";
        div.innerHTML = `
          <label style="cursor:pointer;">
            <input type="radio" name="combo-drink" value="${drink.name}" data-price="${drink.price}" data-customizable="${drink.customizable}" ${isChecked}> 
            ${drink.name} ($${drink.price})${extraStr}
          </label>
          ${isChecked && drink.customizable ? `<button class="btn-drink-opt" onclick="openDrinkOptOverlayForCurrentCombo('tea')">調整冰糖</button>` : ''}
        `;
        container.appendChild(div);
    });

    // 監聽飲料選擇切換
    container.querySelectorAll("input[name='combo-drink']").forEach(radio => {
        radio.addEventListener("change", (e) => {
            const dObj = appConfig.teaComboOptions.drinks.find(x => x.name === e.target.value);
            item.selectedDrink = {
                name: dObj.name,
                price: dObj.price,
                customizable: dObj.customizable,
                customOptions: { temp: "冰", ice: "正常冰", sugar: "正常糖" }
            };
            triggerNoteModal(selectedCartIndexForNote); // 重設畫面
        });
    });

    const cakeGroupTitle = document.createElement("div");
    cakeGroupTitle.className = "note-group-title";
    cakeGroupTitle.innerText = "2. 選擇蛋糕 (折抵$120，超額補差價)";
    container.appendChild(cakeGroupTitle);

    appConfig.teaComboOptions.cakes.forEach((cake) => {
        const extra = Math.max(0, cake.price - 120);
        const extraStr = extra > 0 ? ` (+${extra}元)` : '';
        const isChecked = item.selectedCake && item.selectedCake.name === cake.name ? "checked" : "";

        const label = document.createElement("label");
        label.className = "note-option";
        label.innerHTML = `<input type="radio" name="combo-cake" value="${cake.name}" data-price="${cake.price}" ${isChecked}> ${cake.name} ($${cake.price})${extraStr}`;
        container.appendChild(label);
    });
}

// 一般餐點/飲料彈窗 (需求2: 冰糖改由 Overlay 彈窗呈現)
function renderStandardItemOptions(container, item) {
    if (item.customizable) {
        const drinkGroupTitle = document.createElement("div");
        drinkGroupTitle.className = "note-group-title";
        drinkGroupTitle.innerText = "飲料冰糖設定";
        container.appendChild(drinkGroupTitle);

        const btn = document.createElement("button");
        btn.className = "btn-drink-opt";
        btn.style.cssText = "width:100%; padding:10px; font-size:0.95rem; margin-bottom:10px;";
        btn.innerText = `開啟冰糖選單 (${item.drinkOptions.temp}/${item.drinkOptions.temp === '冰' ? item.drinkOptions.ice : ''}/${item.drinkOptions.sugar})`;
        btn.onclick = () => openDrinkOptOverlay(item.drinkOptions, (newOpts) => {
            item.drinkOptions = newOpts;
            renderStandardItemOptions(container, item);
        });
        container.appendChild(btn);
    }

    const noteGroupTitle = document.createElement("div");
    noteGroupTitle.className = "note-group-title";
    noteGroupTitle.innerText = "客製化備註";
    container.appendChild(noteGroupTitle);

    const input = document.createElement("input");
    input.type = "text";
    input.id = "custom-note-input";
    input.className = "custom-input";
    input.placeholder = "手動輸入備註 (如: 不要蔥、少油...)";
    input.value = item.note || "";
    container.appendChild(input);
}

// 需求2: 開啟獨立飲料冰糖 Overlay 彈窗
function openDrinkOptOverlay(currentOptions, saveCallback) {
    const container = document.getElementById("drink-opt-container");
    tempDrinkOptionsTarget = JSON.parse(JSON.stringify(currentOptions || { temp: "冰", ice: "正常冰", sugar: "正常糖" }));

    renderDrinkSubCustomizationUI(container, tempDrinkOptionsTarget);

    document.getElementById("btn-save-drink-opt").onclick = () => {
        const temp = container.querySelector("input[name='sub-temp']:checked")?.value || "冰";
        const ice = container.querySelector("input[name='sub-ice']:checked")?.value || "正常冰";
        const sugar = container.querySelector("input[name='sub-sugar']:checked")?.value || "正常糖";

        saveCallback({ temp, ice: temp === "熱" ? "熱" : ice, sugar });
        document.getElementById("drink-opt-overlay").classList.remove("active");
    };

    document.getElementById("drink-opt-overlay").classList.add("active");
}

// 輔助套餐呼叫冰糖彈窗
function openDrinkOptOverlayForCurrentCombo(comboType) {
    const item = ordersState[currentTable].items[selectedCartIndexForNote];
    if (item && item.selectedDrink) {
        openDrinkOptOverlay(item.selectedDrink.customOptions, (newOpts) => {
            item.selectedDrink.customOptions = newOpts;
            triggerNoteModal(selectedCartIndexForNote);
        });
    }
}

// 渲染冰熱/甜度選擇介面
function renderDrinkSubCustomizationUI(container, opts) {
    container.innerHTML = `
        <div style="font-weight:bold; margin-bottom:5px; font-size:0.9rem;">溫度：</div>
        <div>
          ${appConfig.drinkOptions.temp.map(t => `
            <label style="margin-right:15px; font-size:0.95rem;"><input type="radio" name="sub-temp" value="${t}" ${opts.temp === t ? 'checked' : ''}> ${t}</label>
          `).join('')}
        </div>
        
        <div id="ice-section" style="margin-top:12px; display:${opts.temp === '熱' ? 'none' : 'block'};">
          <div style="font-weight:bold; margin-bottom:5px; font-size:0.9rem;">冰量：</div>
          <div>
            ${appConfig.drinkOptions.ice.map(i => `
              <label style="margin-right:15px; font-size:0.95rem;"><input type="radio" name="sub-ice" value="${i}" ${opts.ice === i ? 'checked' : ''}> ${i}</label>
            `).join('')}
          </div>
        </div>

        <div style="margin-top:12px;">
          <div style="font-weight:bold; margin-bottom:5px; font-size:0.9rem;">甜度：</div>
          <div>
            ${appConfig.drinkOptions.sugar.map(s => `
              <label style="margin-right:15px; font-size:0.95rem;"><input type="radio" name="sub-sugar" value="${s}" ${opts.sugar === s ? 'checked' : ''}> ${s}</label>
            `).join('')}
          </div>
        </div>
      `;

    const tempRadios = container.querySelectorAll("input[name='sub-temp']");
    tempRadios.forEach(r => {
        r.addEventListener("change", (e) => {
            const iceSec = container.querySelector("#ice-section");
            if (iceSec) iceSec.style.display = e.target.value === "熱" ? "none" : "block";
        });
    });
}

function handleNoteCancel() {
    document.getElementById("note-overlay").classList.remove("active");
}

function renderHistoryModal() {
    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";

    if (historyLogs.length === 0) {
        historyList.innerHTML = "<p style='color:#777; text-align:center;'>本日尚未有結帳紀錄。</p>";
        return;
    }

    historyLogs.forEach((log, index) => {
        const card = document.createElement("div");
        card.className = "history-card";

        let itemsHtml = log.items.map(i => {
            let extraDesc = "";
            if (i.isUpgradeCombo) {
                if (i.upgradeType === "soup") extraDesc = "【主廚例湯】";
                else if (i.selectedDrink) extraDesc = `【升級飲料: ${i.selectedDrink.name}】`;
            } else if (i.isTeaCombo && i.selectedDrink && i.selectedCake) {
                extraDesc = `【飲料: ${i.selectedDrink.name}, 蛋糕: ${i.selectedCake.name}】`;
            } else if (i.customizable && i.drinkOptions) {
                extraDesc = `【${i.drinkOptions.temp}/${i.drinkOptions.ice}/${i.drinkOptions.sugar}】`;
            }
            if (i.note) extraDesc += ` [備註: ${i.note}]`;

            return `<div style="font-size:0.9rem; margin-top:4px;">
            - ${i.isExtra ? '[加點] ' : ''}${i.name} x${i.qty} ($${i.price * i.qty}) ${extraDesc}
            <span style="color:#888; font-size:0.75rem;">(${i.orderTime})</span>
          </div>`;
        }).join("");

        card.innerHTML = `
          <div class="history-card-header">
            <span>#${index + 1} - 桌號: ${log.table} (${log.guests}人)</span>
            <span>結帳金額: $${log.totalPrice}</span>
          </div>
          <div style="font-size:0.8rem; color:#666; margin: 4px 0;">
            首點時間: ${log.firstOrderTime} | 結帳時間: ${log.checkoutTime}
          </div>
          <div>${itemsHtml}</div>
        `;
        historyList.appendChild(card);
    });
}

function setupEventListeners() {
    document.getElementById("guest-count").addEventListener("change", (e) => {
        if (e.target.value < 1) e.target.value = 1;
        renderCart();
    });

    // 送單暫存 (批次紀錄時間)
    document.getElementById("btn-submit-order").onclick = () => {
        const tableData = ordersState[currentTable];

        if (tableData && tableData.items.length > 0) {
            const currentTime = getFormattedTime();

            tableData.items.forEach(item => {
                if (!item.orderTime) item.orderTime = currentTime;
            });

            tableData.isSaved = true;
            if (!tableData.firstOrderTime) tableData.firstOrderTime = currentTime;
        } else {
            delete ordersState[currentTable];
        }
        document.getElementById("order-overlay").classList.remove("active");
        renderTables();
    };

    // 結帳
    document.getElementById("btn-checkout").onclick = () => {
        const tableData = ordersState[currentTable];
        if (!tableData || tableData.items.length === 0) {
            alert("目前無可結帳的餐點！");
            return;
        }

        const currentTime = getFormattedTime();
        tableData.items.forEach(item => {
            if (!item.orderTime) item.orderTime = currentTime;
        });

        const totalPrice = tableData.items.reduce((sum, i) => sum + (i.price * i.qty), 0);

        historyLogs.push({
            table: currentTable,
            guests: tableData.guests,
            items: JSON.parse(JSON.stringify(tableData.items)),
            totalPrice: totalPrice,
            firstOrderTime: tableData.firstOrderTime || currentTime,
            checkoutTime: currentTime
        });

        delete ordersState[currentTable];

        document.getElementById("order-overlay").classList.remove("active");
        renderTables();
        alert(`桌號 ${currentTable} 結帳完成！共 $${totalPrice}`);
    };

    // 儲存小彈窗設定
    document.getElementById("btn-save-note").onclick = () => {
        if (selectedCartIndexForNote !== null) {
            const targetItem = ordersState[currentTable].items[selectedCartIndexForNote];

            if (targetItem.isUpgradeCombo) {
                // 需求4: 升級套餐儲存
                const upgradeTypeRadio = document.querySelector("input[name='upgrade-type']:checked");
                if (!upgradeTypeRadio) {
                    alert("請選擇套餐內容 (湯品或折抵飲料)！");
                    return;
                }
                targetItem.upgradeType = upgradeTypeRadio.value;

                if (targetItem.upgradeType === "drink") {
                    if (!targetItem.selectedDrink) {
                        alert("請選擇欲升級折抵的飲料！");
                        return;
                    }
                    const extra = Math.max(0, targetItem.selectedDrink.price - appConfig.soupPrice);
                    targetItem.extraPrice = extra;
                    targetItem.price = targetItem.basePrice + extra;
                } else {
                    targetItem.extraPrice = 0;
                    targetItem.price = targetItem.basePrice;
                }

            } else if (targetItem.isTeaCombo) {
                const cakeRadio = document.querySelector("input[name='combo-cake']:checked");
                if (!targetItem.selectedDrink || !cakeRadio) {
                    alert("飲料與蛋糕皆為必選項！");
                    return;
                }

                const cakeName = cakeRadio.value;
                const cakePrice = parseInt(cakeRadio.dataset.price);

                const drinkExtra = Math.max(0, targetItem.selectedDrink.price - 120);
                const cakeExtra = Math.max(0, cakePrice - 120);
                const totalExtra = drinkExtra + cakeExtra;

                targetItem.selectedCake = { name: cakeName, price: cakePrice };
                targetItem.extraPrice = totalExtra;
                targetItem.price = targetItem.basePrice + totalExtra;

            } else {
                // 一般餐點/飲料
                const noteInput = document.getElementById("custom-note-input");
                if (noteInput) targetItem.note = noteInput.value.trim();
            }

            renderCart();
        }
        document.getElementById("note-overlay").classList.remove("active");
    };

    document.getElementById("btn-cancel-note").onclick = () => handleNoteCancel();

    document.getElementById("btn-open-history").onclick = () => {
        renderHistoryModal();
        document.getElementById("history-overlay").classList.add("active");
    };

    document.getElementById("btn-close-history").onclick = () => {
        document.getElementById("history-overlay").classList.remove("active");
    };
}