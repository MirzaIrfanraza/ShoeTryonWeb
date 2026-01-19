(async function () {
    const canvas = document.getElementById('deepar-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const loader = document.getElementById("loader-wrapper");
    const feetText = document.getElementById("feet-text");

    let deepAR;
    try {
        deepAR = await deepar.initialize({
            // licenseKey: '116b29c05f7f337a2040431bbd50821bbc57b01fec2a7765230e5fd99f4f6af7013ead36839ad23a',
            licenseKey: '93fd23143258e4fc89c18bfec6122b2dd9700076a8a205c7b6ba1b889714ae8b41dd48c2d79035f1',
            canvas: canvas,

            effect: './Effects/Shoe.deepar', // default
            frameDelay: 6,
            additionalOptions: {
                cameraConfig: { facingMode: "environment" },
                hint: "footInit"
            }
        });

        // Force the light to be brighter after loading
        deepAR.changeParameterFloat("SunLight", "intensity", 3.0);
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

    // Handle window resize to keep canvas full screen and correct resolution
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

})();
