function HotAirBalloon(x, y, speed, ctx) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = 30;
        this.height = 30;
        this.velocity = 0;
        this.mass = 0.3;
        this.ctx = ctx;
        this.radius = 30;
        this.borderPoints = function() {
            var borderPoints = [];
            
            var p1 = { x: this.x, y: this.y};
            var p2 = { x: this.x + this.width, y: this.y};
            var p3 = { x: this.x + this.width, y: this.y + this.height}; 
            var p4 = { x: this.x, y: this.y + this.height}; 
            var p5 = { x: this.x + 40, y: this.y - 20}; 
            var p6 = { x: this.x - 10, y: this.y - 20}; 
            var p7 = { x: this.x + 60, y: this.y - 60}; 
            var p8 = { x: this.x - 30, y: this.y - 60};

            var p9 = { x: this.x, y: this.y - 105};  
            var p10 = { x: this.x + this.width, y: this.y - 105}; 
            var p11 = { x: this.x + this.width/2, y: this.y - 105}; 
            var p12 = { x: this.x - this.width/2, y: this.y - 95};  
            var p13 = { x: this.x + this.width*3/2, y: this.y - 95}; 
            borderPoints.push(p1);
            borderPoints.push(p2);
            borderPoints.push(p3);
            borderPoints.push(p4);
            borderPoints.push(p5);
            borderPoints.push(p6);
            borderPoints.push(p7);
            borderPoints.push(p8);
            borderPoints.push(p9);
            borderPoints.push(p10);
            borderPoints.push(p11);
            borderPoints.push(p12);
            borderPoints.push(p13);
            return borderPoints;
        };

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
            this.ctx.moveTo(this.x - 10, this.y - 20);
            this.ctx.lineTo(this.x + 40, this.y - 20);
            this.ctx.lineTo(this.x + 60, this.y - 60);
            this.ctx.lineTo(this.x - 30, this.y - 60);
            this.ctx.lineTo(this.x - 10, this.y - 20);
            this.ctx.arc(this.x + 15, this.y - 60, 45, 0, Math.PI,true);
            this.ctx.fillStyle = "red";
            this.ctx.strokeStyle = "red";
            this.ctx.stroke();
            this.ctx.fill();        
        };


        this.moveUp = function (reverseSpeedIndex, speedUp) {
            this.velocity = (-(this.y) / reverseSpeedIndex) - speedUp;
        };

        this.moveDown = function () {
			this.y += speed;
		};

    }