// setup ball
function Ball(width){
    return {
        position: { x: width / 2, y: width / 2 },
        velocity: 0,
        mass: 0.5,                                          // in kg
        radius: 30,                                         // 1px = 1cm
    };
}

// Change ball velocity
function jumpBall(ball, reverseSpeedIndex, speedUp) {
    ball.velocity = (-(ball.position.y) / reverseSpeedIndex) - speedUp;
}