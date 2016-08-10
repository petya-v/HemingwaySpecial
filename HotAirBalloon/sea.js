function Sea(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;

        this.draw = function (ctx) {

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y - 20);

            for (var i = 0; i < 1024 / 100; i += 1) {
                ctx.quadraticCurveTo(this.x + 50, this.y - 70, this.x + 100, this.y - 20);
                this.x = this.x + 100;
            }

            ctx.lineTo(this.x, this.y);
            ctx.lineWidth = 1;
            ctx.fillStyle = "#67C5C2";
            ctx.strokeStyle = "#67C5C2";
            ctx.stroke();
            ctx.fill();
        };

        this.move = function () {
            this.x += speed;
            //this.y += speed;
            //this.x -= speed;
            //this.y -= speed;
        };
    }