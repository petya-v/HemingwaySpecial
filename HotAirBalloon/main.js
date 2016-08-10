(function () {
    var canvas = document.getElementById("balloon-canvas"),
        ctx = canvas.getContext("2d");

    var cloudsCanvas = document.getElementById("clouds-canvas"),
        cloudsCtx = cloudsCanvas.getContext("2d");

    //create The balloon
    var balloonSpeed = 1,
        ballonPositionX = canvas.width / 2.5,
        ballonPositionY = 200;

    var balloon = new HotAirBalloon(ballonPositionX, ballonPositionY, balloonSpeed, ctx);
    balloon.draw();

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

    var sea = new Sea(seaPositionX, seaPositionY, seaSpeed, cloudsCtx);
    
    animationFrame();

    function animationFrame() {
        //TODO: Add function clear to balloon to clean only Balloon range, not all context  (performance)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cloud.clear(cloudsCtx);
        sea.clear();

        balloon.draw();
        balloon.moveDown();
        
        cloud.draw();
        sea.draw(cloudsCtx);
        
        cloud.move();
        sea.move();

        var collision = isInColision(cloudsCtx, balloon.borderPoints());
        console.log(collision);
        requestAnimationFrame(animationFrame);
    }

    function isInColision(ctx, arrWithPoint) {
        var imgData;
        var point;
        var data;
        
        for (var i = 0, len = arrWithPoint.length; i < len; i+=1) {
            point = arrWithPoint[i];
            imgData = ctx.getImageData( point.x, point.y, 1, 1);
            data = imgData.data;

            if(data[0] !== 0 || data[1] !== 0 || data[2] !== 0) 
                return true;
        }

        return false;
    }

    document.body.addEventListener("keydown", function (e) {
        //TODO CHECK BUTTON
        balloon.moveUp();
    });
} ());