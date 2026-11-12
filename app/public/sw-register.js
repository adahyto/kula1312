// The service worker (offline page), registered from a file of its own: the Content Security Policy allows no
// script written into the page
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(() => {});
  });
}
