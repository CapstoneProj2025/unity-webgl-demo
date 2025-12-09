const buildUrl = "Build";
const config = {
  dataUrl: buildUrl + "/WebGLExample.data",
  frameworkUrl: buildUrl + "/WebGLExample.framework.js",
  codeUrl: buildUrl + "/WebGLExample.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "My Company",
  productName: "My Game",
  productVersion: "1.0",
};

const canvas = document.getElementById("unity-canvas");
const loadingBar = document.getElementById("unity-loading-bar");
const progressBarFull = document.getElementById("unity-progress-bar-full");
const warningBanner = document.getElementById("unity-warning");

function unityShowBanner(msg, type) {
  warningBanner.style.display = "block";
  warningBanner.textContent = msg;
  if (type === "error") {
    warningBanner.style.color = "#ff4c4c";
  } else {
    warningBanner.style.color = "#ffb347";
  }

  if (type !== "error") {
    setTimeout(() => {
      warningBanner.style.display = "none";
    }, 5000);
  }
}

createUnityInstance(canvas, config, (progress) => {
  loadingBar.style.display = "block";
  progressBarFull.style.width = (100 * progress) + "%";
}).then((unityInstance) => {
  loadingBar.style.display = "none";
  window.unityInstance = unityInstance;
}).catch((message) => {
  unityShowBanner("Failed to load Unity WebGL build: " + message, "error");
});
