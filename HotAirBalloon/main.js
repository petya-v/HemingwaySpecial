(function () {
    var physics,
        canvas,
        cloudsCanvas,
        ballonPositionX,
        ballonPositionY,
        balloon,
        cloudSpeed,
        cloudPositionX,
        cloudPositionY,
        seaSpeed,
        seaPositionX,
        seaPositionY,
        cloud,
        sea,
        isAnimationOn,
        isStop;

    physics = PhysicsSettings();

    canvas = document.getElementById("balloon-canvas");
    ctx = canvas.getContext("2d");

    cloudsCanvas = document.getElementById("clouds-canvas");
    cloudsCtx = cloudsCanvas.getContext("2d");
    cloudsCtx.height = canvas.height;
    cloudsCtx.width = canvas.width;

    //create The balloon
    ballonPositionX = canvas.width / 3;
    ballonPositionY = 200;

    balloon = new HotAirBalloon(ballonPositionX, ballonPositionY, ctx);
    balloon.draw();

    //create a cloud
    cloudSpeed = 5;
    cloudPositionX = canvas.width;
    cloudPositionY = canvas.height / 2;

    cloud = new Cloud(cloudPositionX, cloudPositionY, cloudSpeed, cloudsCtx);
    cloud.newPosition();
    cloud.draw();

    // create sea
    seaSpeed = 1;
    seaPositionX = 0;
    seaPositionY = canvas.height;

    sea = new Sea(seaPositionX, seaPositionY, seaSpeed, cloudsCtx);
    sea.draw();

    createBackgroundSVG();

    isAnimationOn = false;
    isStop = false;

    document.body.addEventListener("keydown", function (e) {
        if (e.keyCode === 38) {
            balloon.moveUp(physics.reverseSpeedIndex, physics.speedUp);
        }
    });

    document.getElementById("btn-start")
        .addEventListener("click", onButtonPlayGameStart);

    document.getElementById("btn-pause")
        .addEventListener("click", onButtonPauseGameStop);


    function animationFrame() {
        var Fy,
            ay,
            collision;
        // ===================== FLUENT MOVEMENT OF BALLOON ===========================
        Fy = -0.5 * physics.Cd * physics.A * physics.rho * balloon.velocity * balloon.velocity * balloon.velocity / Math.abs(balloon.velocity);
        Fy = (isNaN(Fy) ? 0 : Fy);                                          // Drag force: Fd = -1/2 * Cd * A * rho * v * v  
        ay = physics.ag + (Fy / balloon.mass);                              // Calculate acceleration ( F = ma )    
        balloon.velocity += ay * physics.frameRate;                         // Calculate velocity    
        balloon.y += balloon.velocity * physics.frameRate * 100;            // Calculate position

        if (balloon.y <= 0 + 60) {                                          // Prevent balloon from overflowing canvas
            balloon.y = 60 + 1;
        }
        // =============================================================================

        //TODO: Add function clear to balloon to clean only Balloon range, not all context  (performance)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cloud.clear();
        sea.clear();

        balloon.draw();
        cloud.draw();
        sea.draw();
        cloud.move();
        sea.move();


        if (isAnimationOn) {
            collision = isInColision(cloudsCtx, balloon.borderPoints());
            if (collision) {
                isStop = true;
                isAnimationOn = false;
            }
            else {
                requestAnimationFrame(animationFrame);
            }
        }
    }

    // Buttons
    function onButtonPlayGameStart() {
        if (!isAnimationOn && !isStop) {
            isAnimationOn = true;
            requestAnimationFrame(animationFrame);
        }
    }

    function onButtonPauseGameStop() {
        isAnimationOn = false;
    }

    function isInColision(ctx, arrWithPoint) {
        var imgData,
            point,
            data,
            i,
            len;

        for (i = 0, len = arrWithPoint.length; i < len; i += 1) {
            point = arrWithPoint[i];
            imgData = ctx.getImageData(point.x, point.y, 1, 1);
            data = imgData.data;

            if (data[0] !== 0 || data[1] !== 0 || data[2] !== 0)
                return true;
        }

        return false;
    }
} ());