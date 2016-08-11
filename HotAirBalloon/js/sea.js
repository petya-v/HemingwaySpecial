function Sea(x, y, speed, ctx) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.ctx = ctx;
    this.countMoves = 0;
    this.movesToSwitch = 50;
    this.dir = -1;

    this.draw = function () {
        var drawingX,
            drawingY = this.y;

        if (this.x < 1024) {
            drawingX = this.x;
        }
        else {
            this.x = 0;
        }

        drawWave(drawingX, drawingY, this.ctx);
        drawWave(drawingX - 1024, drawingY, this.ctx);

        function drawWave(drawingX, drawingY, ctx) {
            ctx.beginPath();
            ctx.moveTo(drawingX, drawingY + 50);
            ctx.lineTo(drawingX, drawingY - 20);


            for (var i = 0; i < 5; i += 1) {
                ctx.quadraticCurveTo(drawingX + 50, drawingY - 70, drawingX + 100, drawingY - 20);
                drawingX = drawingX + 100;

                ctx.quadraticCurveTo(drawingX + 50, drawingY - 100, drawingX + 100, drawingY - 20);
                drawingX = drawingX + 120;
            }
            
            ctx.lineTo(drawingX, 600);
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.fillStyle = "#0d8796";
            ctx.strokeStyle = "#0d8796";
            ctx.stroke();
            ctx.fill();
        }
    };

    this.move = function () {
        if (this.countMoves < this.movesToSwitch) {
            this.y += (speed * this.dir);
        }
        else {
            this.ChangeDir();
            this.countMoves = 0;
        }

        this.x += speed;
        this.countMoves += 1;
    };

    this.ChangeDir = function () {
        this.dir *= -1;
    };

    this.clear = function () {
        this.ctx.clearRect(this.x - 1024, this.y - 100, 2048, 100);
    };
}