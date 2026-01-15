(async function () {
    const canvas = document.getElementById('deepar-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const loader = document.getElementById("loader-wrapper");
    const feetText = document.getElementById("feet-text");

    const deepAR = await deepar.initialize({
        licenseKey: '93fd23143258e4fc89c18bfec6122b2dd9700076a8a205c7b6ba1b889714ae8b41dd48c2d79035f1',
        canvas: canvas,
        effect: './Effects/Shoe.deepar', // default
        frameDelay: 6,
        additionalOptions: {
            cameraConfig: { facingMode: "environment" },
            hint: "footInit"
        }
    });

    loader.style.display = "none";

    deepAR.callbacks.onFeetTracked = (leftFoot, rightFoot) => {
        if (leftFoot.detected || rightFoot.detected) {
            feetText.style.display = "none";
            deepAR.callbacks.onFeetTracked = undefined;
        }
    };


})();
