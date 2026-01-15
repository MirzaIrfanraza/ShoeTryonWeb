// Point to the root index.html which handles redirection
// We assume the current path is something like /ModelViewer.html
// We want to replace "ModelViewer.html" with "index.html" or just remove it.
// However, simplest is to just use the current origin + path but force index.html

// Get the base URL (removing the file name)
const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);
const targetUrl = baseUrl + "index.html";
console.log("Model Viewer")
// Generate QR code
const qrImage = document.getElementById('qr-code');
if (qrImage) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(targetUrl)}`;
}

// Modal Logic
const arButton = document.getElementById('ar-button');
const qrContainer = document.getElementById('qr-container');
const closeQr = document.getElementById('close-qr');

if (arButton && qrContainer) {
    arButton.addEventListener('click', () => {
        qrContainer.style.display = 'flex';
    });
}

if (closeQr && qrContainer) {
    closeQr.addEventListener('click', () => {
        qrContainer.style.display = 'none';
    });
}
