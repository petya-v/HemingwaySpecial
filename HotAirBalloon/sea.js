function Sea(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;

        this.draw = function () {

            seaCtx.beginPath();
            seaCtx.moveTo(this.x, this.y);
            seaCtx.lineTo(this.x, this.y - 20);

            for (var i = 0; i < 1024 / 100; i += 1) {
                seaCtx.quadraticCurveTo(this.x + 50, this.y - 70, this.x + 100, this.y - 20);
                this.x = this.x + 100;
            }

            seaCtx.lineTo(this.x, this.y);
            seaCtx.lineWidth = 1;
            seaCtx.fillStyle = "#67C5C2";
            seaCtx.strokeStyle = "#67C5C2";
            seaCtx.stroke();
            seaCtx.fill();
        };

        this.move = function () {
            this.x += speed;
            //this.y += speed;
            //this.x -= speed;
            //this.y -= speed;
        };
    }