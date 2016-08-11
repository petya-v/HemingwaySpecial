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
        isStop,
        clouds,
        frameCountsForGenerateClouds,
        intervalForCreateClouds,
        score = 0;

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
    clouds = [];

    addCloud(clouds, cloudsCtx);

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
        if (e.keyCode === 38 || e.keyCode === 32) {
            balloon.moveUp(physics.reverseSpeedIndex, physics.speedUp);
            balloon.drawFire();
        }
    });

    document.getElementById("btn-start")
        .addEventListener("click", onButtonPlayGameStart);

    document.getElementById("btn-pause")
        .addEventListener("click", onButtonPauseGameStop);


    frameCountsForGenerateClouds = 0;
    intervalForCreateClouds = 100;
    function animationFrame() {
        var Fy,
            ay,
            collision,
            i,
            currCloud;
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
        sea.clear();
        // cloud.clear();

        balloon.draw();

        

        if (frameCountsForGenerateClouds >= intervalForCreateClouds) {
            addCloud(clouds, cloudsCtx);
            
            // add score
            document.getElementById("score-number").innerHTML = score;
            score += 1;

            frameCountsForGenerateClouds = 0;
        }

        for (i = 0; i < clouds.length; i += 1) {
            //debugger;
            currCloud = clouds[i];
            currCloud.clear();

            if (currCloud.x + currCloud.width > 0) {
                currCloud.draw();
                currCloud.move();
            }
            else {
                clouds.splice(i, 1);
                i -= 1;
            }
        }

        sea.draw();
        sea.move();

        if (isAnimationOn) {
            collision = isInColision(cloudsCtx, balloon.borderPoints());
            if (collision) {
                isStop = true;
                isAnimationOn = false;
                text();
            }
            else {
                frameCountsForGenerateClouds += 1;
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

        // when GameOver, click startGame button to refresh page and start again
        if(isStop){
            location.reload(true);
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

    function addCloud(clouds, cloudsCtx) {
        var possibleY = [1, 30, 150, 400],
            randomY = possibleY[Math.floor((Math.random() * 3) + 1)],
            cloudSpeed = 5,
            cloud;

        cloudSpeed = 5;
        cloud = new Cloud(canvas.width, randomY, cloudSpeed, cloudsCtx);
        clouds.push(cloud);
    }
} ());