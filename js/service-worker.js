// Service Worker
export function registerServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("service.js")
                .then(reg => console.log("Service Worker Registered:", reg))
                .catch(err => console.error("Service Worker Registration Failed:", err));
        });
    }
}

// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//         navigator.serviceWorker.register("service.js")
//             .then(reg => console.log("Service Worker Registered:", reg))
//             .catch(err => console.error("Service Worker Registration Failed:", err));
//     });
// }