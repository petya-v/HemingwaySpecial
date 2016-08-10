(function () {

    // ============ SET PHYSICS RULES ============
    let physics = PhysicsSettings();
    // ===========================================



    let canvas = document.getElementById("balloon-canvas"),
        ctx = canvas.getContext("2d");

    let cloudsCanvas = document.getElementById("clouds-canvas"),
        cloudsCtx = cloudsCanvas.getContext("2d");

    //create The balloon
    let balloonSpeed = 1,
        ballonPositionX = canvas.width / 2.5,
        ballonPositionY = 200;

    let balloon = new HotAirBalloon(ballonPositionX, ballonPositionY, balloonSpeed, ctx);
    balloon.draw();

    //create a cloud
    let cloudSpeed = 5,
        cloudPositionX = canvas.width,
        cloudPositionY = canvas.height / 2;

    // create sea
    let seaSpeed = 1,
        seaPositionX = 0,
        seaPositionY = canvas.height;

    cloudsCtx.height = canvas.height;
    cloudsCtx.width = canvas.width;

    let cloud = new Cloud(cloudPositionX, cloudPositionY, cloudSpeed, cloudsCtx);
    cloud.newPosition();
    cloud.draw();

    let sea = new Sea(seaPositionX, seaPositionY, seaSpeed, cloudsCtx);
    sea.draw();

    createBackgroundSVG();

    animationFrame();

    var isAnimationOn = false;


    function animationFrame() {

        // ===================== FLUENT MOVEMENT OF BALLOON ===========================
        let Fy = -0.5 * physics.Cd * physics.A * physics.rho * balloon.velocity * balloon.velocity * balloon.velocity / Math.abs(balloon.velocity);
        Fy = (isNaN(Fy) ? 0 : Fy);                                          // Drag force: Fd = -1/2 * Cd * A * rho * v * v  
        let ay = physics.ag + (Fy / balloon.mass);                          // Calculate acceleration ( F = ma )    
        balloon.velocity += ay * physics.frameRate;                         // Calculate velocity    
        balloon.y += balloon.velocity * physics.frameRate * 100;            // Calculate position

        if (balloon.y <= 0 + 60) {                                          // Prevent balloon from overflowing canvas
            balloon.y = 60 + 1;
        }
        // =============================================================================


        //TODO: Add function clear to balloon to clean only Balloon range, not all context  (performance)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cloud.clear(cloudsCtx);
        sea.clear();

        balloon.draw();
        balloon.moveDown();

        cloud.draw(cloudsCtx);
        sea.draw();
        cloud.move();
        sea.move();

        if (isAnimationOn) {
            let collision = isInColision(cloudsCtx, balloon.borderPoints());
            console.log(collision);
            requestAnimationFrame(animationFrame);
        }
    }

    // Buttons
    function onButtonPlayGameStart() {
        isAnimationOn = true;
        requestAnimationFrame(animationFrame);
    }

    function onButtonPauseGameStop() {
        isAnimationOn = false;
    }

    function isInColision(ctx, arrWithPoint) {
        let imgData;
        let point;
        let data;

        for (let i = 0, len = arrWithPoint.length; i < len; i += 1) {
            point = arrWithPoint[i];
            imgData = ctx.getImageData(point.x, point.y, 1, 1);
            data = imgData.data;

            if (data[0] !== 0 || data[1] !== 0 || data[2] !== 0)
                return true;
        }

        return false;
    }

    document.body.addEventListener("keydown", function (e) {
        if (e.keyCode === 38) {
            balloon.moveUp(physics.reverseSpeedIndex, physics.speedUp);
        }
    });

    document.getElementById("btn-start")
        .addEventListener("click", onButtonPlayGameStart);
    document.getElementById("btn-pause")
        .addEventListener("click", onButtonPauseGameStop);
} ());