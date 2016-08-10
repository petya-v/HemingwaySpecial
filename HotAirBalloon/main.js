(function () {
    var canvas = document.getElementById("balloon-canvas"),
        ctx = canvas.getContext("2d");

    var cloudsCanvas = document.getElementById("clouds-canvas"),
        cloudsCtx = cloudsCanvas.getContext("2d");

    //create The balloon
    var balloonSpeed = 1,
        ballonPositionX = canvas.width / 2.5,
        ballonPositionY = 200;

    var balloon = new HotAirBalloon(ballonPositionX, ballonPositionY, balloonSpeed);
    balloon.draw(ctx);

    //create a cloud
    var cloudSpeed = 5,
        cloudPositionX = canvas.width,
        cloudPositionY = canvas.height/2;

    // create sea
    var seaSpeed = 1,
        seaPositionX = 0,
        seaPositionY = canvas.height;

    cloudsCtx.height = canvas.height;
    cloudsCtx.width = canvas.width;

    var cloud = new Cloud(cloudPositionX, cloudPositionY, cloudSpeed, cloudsCtx);
    cloud.newPosition();
    cloud.draw();

    var sea = new Sea(seaPositionX, seaPositionY, seaSpeed);
    

    animationFrame();

    function animationFrame() {
        //TODO: Add function clear to balloon to clean only Balloon range, not all context  (performance)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //TODO Modify function clear on Cloud
        cloud.clear(cloudsCtx);

        //cloudsCtx.clearRect(0, 0, canvas.width, canvas.height);

        balloon.draw(ctx);
        balloon.moveDown();
        
        cloud.draw(cloudsCtx);
        sea.draw(cloudsCtx);
        
        cloud.move();
        requestAnimationFrame(animationFrame);
    }



    document.body.addEventListener("keydown", function (e) {
        //TODO CHECK BUTTON
        balloon.moveUp();
    });
} ());