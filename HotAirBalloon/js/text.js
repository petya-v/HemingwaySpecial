
var canvas,
    ctx,
    step = 10,
    steps = 80;

function text() {
    canvas = document.getElementById("text-canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.font = "10pt Papyrus";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    TextSmallToBig();
}

function TextSmallToBig() {
    step += 3;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.font = step + "pt Papyrus";
    ctx.fillText("GAME OVER", 0, 0);
    ctx.restore();
    if (step < steps) {
        requestAnimationFrame(TextSmallToBig);
        //setTimeout(TextSmallToBig, 20);
    }
}
