function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Detect mobile devices (Android, iOS, etc.)
    if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        return "mobile";
    }
    return "desktop";
}

const deviceType = detectDevice();

if (deviceType === "mobile") {
    window.location.replace("ARScene.html");
} else {
    // Only redirect to ModelViewer if we are NOT already on ModelViewer page to avoid infinite loops
    // But this script runs on index.html, so it should redirect to ModelViewer.html
    window.location.replace("ModelViewer.html");
}
