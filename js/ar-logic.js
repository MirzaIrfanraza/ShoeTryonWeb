(async function () {
    const canvas = document.getElementById('deepar-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const loader = document.getElementById("loader-wrapper");
    const feetText = document.getElementById("feet-text");

    let deepAR;
    try {
        deepAR = await deepar.initialize({
            licenseKey: 'ccca4d45a10a8b605b8df411f765e5af0e63a12a318b13e0dd7be7c3e482ddfd4b0bca8231aec30f',
            canvas: canvas,
            effect: './Effects/Shoe.deepar', // default
            frameDelay: 6,
            additionalOptions: {
                cameraConfig: { facingMode: "environment" },
                hint: "footInit"
            }
        });
    } catch (error) {
        console.error(error);
        alert("DeepAR Error: " + error);
        loader.innerText = "Error: " + error;
        return;
    }

    loader.style.display = "none";

    deepAR.callbacks.onFeetTracked = (leftFoot, rightFoot) => {
        if (leftFoot.detected || rightFoot.detected) {
            feetText.style.display = "none";
            deepAR.callbacks.onFeetTracked = undefined;
        }
    };


})();
