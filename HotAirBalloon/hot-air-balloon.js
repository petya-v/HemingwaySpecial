function HotAirBalloon(x, y, speed, ctx) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 30;
        this.height = 30;
        this.ctx = ctx;

        this.draw = function () {
            // body of the balloon 
            this.ctx.rect(this.x, this.y, this.width, this.height);
            this.ctx.fillStyle = "brown";
            this.ctx.strokeStyle = "darkbrown";
            this.ctx.fill();
            this.ctx.stroke();

            // ropes
            this.ctx.beginPath();
            this.ctx.moveTo(this.x + 30,this.y);
            this.ctx.lineTo(this.x + 40, this.y - 20);
            this.ctx.moveTo(this.x,this.y);
            this.ctx.lineTo(this.x - 10, this.y - 20);
            this.ctx.stroke();

            // balloon
            this.ctx.beginPath();
            this.ctx.moveTo(this.x - 10,this.y - 20);
            this.ctx.lineTo(this.x + 40, this.y - 20);
            this.ctx.lineTo(this.x + 60, this.y - 60);
            this.ctx.lineTo(this.x - 30, this.y - 60);
            this.ctx.lineTo(this.x - 10,this.y - 20);
            this.ctx.arc(this.x + 15, this.y - 60, 45, 0, Math.PI,true);
            this.ctx.fillStyle = "red";
            this.ctx.strokeStyle = "red";
            this.ctx.stroke();
            this.ctx.fill();       
        };

        this.moveUp = function () {
            this.y -= speed*15;
        };

        this.moveDown = function () {
			this.y += speed;
		};

    }