function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Detailed iPad detection (iPadOS 13+ often lies and says it's a Macintosh)
    const isIpad = /iPad/i.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // Detect mobile devices (Android, iOS, iPad, etc.)
    if (/android/i.test(userAgent) || /iPhone|iPod/.test(userAgent) || isIpad) {
        return "mobile";
    }
    return "desktop";
}

const deviceType = detectDevice();
console.log("Hello")
console.log(`Device Type: ${deviceType}`);
if (deviceType === "mobile") {
    window.location.replace("ARScene.html");
} else {
    // Only redirect to ModelViewer if we are NOT already on ModelViewer page to avoid infinite loops
    // But this script runs on index.html, so it should redirect to ModelViewer.html
    window.location.replace("ModelViewer.html");
}
