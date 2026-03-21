(function () {
    const player = document.getElementById("musicPlayer");

    // 👉 只在 player 裡面找元素（關鍵）
    const audio = player.querySelector(".bgm");
    const playBtn = player.querySelector(".playBtn");
    const muteBtn = player.querySelector(".muteBtn");
    const volumeControl = player.querySelector(".volumeControl");
    const status = player.querySelector(".status");

    // 初始化音量
    audio.volume = 0.5;
    volumeControl.value = 0.5;

    // 播放 / 暫停
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    playBtn.textContent = "⏸";
                    status.textContent = "播放中";
                })
                .catch((err) => {
                    console.error("播放失敗:", err);
                    status.textContent = "播放被阻擋";
                });
        } else {
            audio.pause();
            playBtn.textContent = "▶";
            status.textContent = "已暫停";
        }
    });

    // 靜音
    muteBtn.addEventListener("click", () => {
        audio.muted = !audio.muted;
        muteBtn.textContent = audio.muted ? "🔇" : "🔊";
    });

    // 音量
    volumeControl.addEventListener("input", () => {
        audio.volume = volumeControl.value;
    });
})();