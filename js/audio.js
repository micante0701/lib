// (function () {
//     const player = document.getElementById("musicPlayer");

//     // 👉 只在 player 裡面找元素（關鍵）
//     const audio = player.querySelector(".bgm");
//     const playBtn = player.querySelector(".playBtn");
//     const muteBtn = player.querySelector(".muteBtn");
//     const volumeControl = player.querySelector(".volumeControl");
//     const status = player.querySelector(".status");

//     // 初始化音量
//     audio.volume = 0.5;
//     volumeControl.value = 0.5;

//     // 播放 / 暫停
//     playBtn.addEventListener("click", () => {
//         alert("click 觸發");

//         if (audio.paused) {
//             alert("準備播放");

//             const playPromise = audio.play();

//             if (playPromise !== undefined) {
//                 playPromise.then(() => {
//                     alert("播放成功");
//                     playBtn.textContent = "⏸";
//                     status.textContent = "播放中";
//                 }).catch(err => {
//                     alert("播放失敗: " + err.name);
//                     status.textContent = "播放被阻擋";
//                 });
//             }
//         } else {
//             alert("執行 pause");
//             audio.pause();
//             playBtn.textContent = "▶";
//             status.textContent = "已暫停";
//         }
//     });
//     // playBtn.addEventListener("click", () => {
//     //     if (audio.paused) {
//     //         audio.play()
//     //             .then(() => {
//     //                 playBtn.textContent = "⏸";
//     //                 status.textContent = "播放中";
//     //             })
//     //             .catch((err) => {
//     //                 console.error("播放失敗:", err);
//     //                 status.textContent = "播放被阻擋";
//     //             });
//     //     } else {
//     //         audio.pause();
//     //         playBtn.textContent = "▶";
//     //         status.textContent = "已暫停";
//     //     }
//     // });

//     // 靜音
//     muteBtn.addEventListener("click", () => {
//         audio.muted = !audio.muted;
//         muteBtn.textContent = audio.muted ? "🔇" : "🔊";
//     });

//     // 音量
//     volumeControl.addEventListener("input", () => {
//         audio.volume = volumeControl.value;
//     });
// })();

document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById("musicPlayer");
    const playBtn = player.querySelector(".playBtn");
    const muteBtn = player.querySelector(".muteBtn");
    const status = player.querySelector(".status");
    const volumeControl = player.querySelector(".volumeControl");
    const audio = player.querySelector(".bgm");

    // 初始化音量
    audio.volume = 0.5;
    volumeControl.value = audio.volume;

    // 播放 / 暫停
    playBtn.addEventListener("click", function () {
        if (audio.paused) {
            // 行動裝置需要使用者互動才能播放
            audio.play().then(() => {
                status.textContent = "播放中";
                playBtn.textContent = "⏸";
            }).catch(err => {
                console.log("播放失敗，可能被瀏覽器阻擋：", err);
            });
        } else {
            audio.pause();
            status.textContent = "已暫停";
            playBtn.textContent = "▶";
        }
    });

    // 靜音 / 取消靜音
    muteBtn.addEventListener("click", function () {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? "🔇" : "🔊";
    });

    // 音量控制
    volumeControl.addEventListener("input", function () {
        audio.volume = this.value;
    });

    // 當播放狀態改變時更新顯示
    audio.addEventListener("play", () => {
        status.textContent = "播放中";
        playBtn.textContent = "⏸";
    });

    audio.addEventListener("pause", () => {
        status.textContent = "已暫停";
        playBtn.textContent = "▶";
    });
});
