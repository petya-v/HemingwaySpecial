function HotAirBalloon(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 30;
        this.height = 30;

        this.draw = function (ctx) {
            // body of the balloon 
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "brown";
            ctx.strokeStyle = "darkbrown";
            ctx.fill();
            ctx.stroke();

            // ropes
            ctx.beginPath();
            ctx.moveTo(this.x + 30,this.y);
            ctx.lineTo(this.x + 40, this.y - 20);
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(this.x - 10, this.y - 20);
            ctx.stroke();

            // balloon
            ctx.beginPath();
            ctx.moveTo(this.x - 10,this.y - 20);
            ctx.lineTo(this.x + 40, this.y - 20);
            ctx.lineTo(this.x + 60, this.y - 60);
            ctx.lineTo(this.x - 30, this.y - 60);
            ctx.lineTo(this.x - 10,this.y - 20);
            ctx.arc(this.x + 15, this.y - 60, 45, 0, Math.PI,true);
            ctx.fillStyle = "red";
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.fill();       
        };

        this.moveUp = function () {
            this.y -= speed*15;
        };

        this.moveDown = function () {
			this.y += speed;
		};

    }