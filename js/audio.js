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

document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("musicPlayer");
    const audio = player.querySelector(".bgm");
    const playBtn = player.querySelector(".playBtn");
    const muteBtn = player.querySelector(".muteBtn");
    const volumeControl = player.querySelector(".volumeControl");
    const status = player.querySelector(".status");

    // 手機友善設定
    audio.preload = "auto";
    audio.playsInline = true;           // iOS
    audio.setAttribute("webkit-playsinline", "true"); // iOS Safari

    // 初始化音量
    audio.volume = 0.5;
    volumeControl.value = 0.5;

    // 音訊解鎖標記
    let unlocked = false;

    // 播放 / 暫停
    playBtn.addEventListener("click", () => {
        if (!unlocked) {
            // 第一次點擊：靜音解鎖
            audio.muted = true;
            const unlockPromise = audio.play();
            if (unlockPromise !== undefined) {
                unlockPromise.then(() => {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.muted = false;
                    unlocked = true;

                    // 解鎖後立刻播放
                    return audio.play();
                }).then(() => {
                    playBtn.textContent = "⏸";
                    status.textContent = "播放中";
                }).catch(err => {
                    status.textContent = "播放被阻擋";
                });
            }
            return;
        }

        if (audio.paused) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    playBtn.textContent = "⏸";
                    status.textContent = "播放中";
                }).catch(err => {
                    status.textContent = "播放被阻擋";
                });
            }
        } else {
            audio.pause();
            playBtn.textContent = "▶";
            status.textContent = "已暫停";
        }
    });

    // 靜音切換
    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? "🔇" : "🔊";
    });

    // 音量控制
    volumeControl.addEventListener("input", () => {
        audio.volume = volumeControl.value;
    });
});