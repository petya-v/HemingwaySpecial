(function () {
    
    let width = 800;
    let height = 800;
    let frameRate = 1 / 40;                                 // seconds
    let frameDelay = frameRate * 1000;                      // ms
    let ctx;
    let speedUp = 4;
    let reverseSpeedIndex = 200;

    let ball = new Ball(width);

    let Cd = 0.5;                                           // drag coefficient of sphere is ~ 0.5
    let rho = 1.29;                                         // density of air in kg / m^3
    let A = Math.PI * ball.radius * ball.radius / (10000);  // reference area in m^2
    let ag = 9.81;                                          // earth gravity in m / s^2

    

    // Jump ball with spacebar
    let onClick = document.addEventListener("keydown", function (e) {
        if (e.keyCode == 32) {
            jumpBall(ball, reverseSpeedIndex, speedUp);
        }
    }, false);


    let setup = function () {
        let canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        ctx.fillStyle = 'red';
        let loopTimer = setInterval(loop, frameDelay);
    };

    let loop = function () {
        let Fy = -0.5 * Cd * A * rho * ball.velocity * ball.velocity * ball.velocity / Math.abs(ball.velocity); 
        Fy = (isNaN(Fy) ? 0 : Fy);                              // Drag force: Fd = -1/2 * Cd * A * rho * v * v
       
        let ay = ag + (Fy / ball.mass);                         // Calculate acceleration ( F = ma )
       
        ball.velocity += ay * frameRate;                        // Calculate velocity
      
        ball.position.y += ball.velocity * frameRate * 100;     // Calculate position
      
        if (ball.position.y <= 0 + ball.radius) {             // Prevent ball from overflowing canvas
            ball.position.y = ball.radius + 1;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.translate(ball.position.x, ball.position.y);
        ctx.beginPath();
        ctx.arc(0, 0, ball.radius, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };

    setup();
} ());

