function Cloud(x, y, speed, ctx) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.width = 300;
      // this.height = 175;
      this.height = 170;
      this.clearX = this.x;
      this.clearY = this.y;
      this.ctx = ctx;

      this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(this.x + 40, this.y + 75);
            ctx.bezierCurveTo(this.x, this.y + 95, this.x, this.y + 145, this.x + 100, this.y + 145);
            ctx.bezierCurveTo(this.x + 120, this.y + 175, this.x + 190, this.y + 175, this.x + 180, this.y + 145);
            ctx.bezierCurveTo(this.x + 290, this.y + 155, this.x + 290, this.y + 115, this.x + 260, this.y + 95);
            ctx.bezierCurveTo(this.x + 300, this.y + 35, this.x + 240, this.y + 25, this.x + 210, this.y + 45);
            ctx.bezierCurveTo(this.x + 190, this.y, this.x + 120, this.y + 15, this.x + 120, this.y + 45);
            ctx.bezierCurveTo(this.x + 70, this.y, this.x + 20, this.y + 15, this.x + 40, this.y + 75);

            // ctx.moveTo(this.x + 40, this.y + 75);
            // ctx.bezierCurveTo(this.x + 40, this.y + 75 + 20, this.x + 40, this.y + 75 + 5, this.x + 40 + 100, this.y + 75 + 70);
            // ctx.bezierCurveTo(this.x + 40 + 120, this.y + 75 + 100, this.x + 40 + 190, this.y + 75 + 100, this.x + 40 + 180, this.y + 75 + 70);
            // ctx.bezierCurveTo(this.x + 40 + 290, this.y + 75 + 80, this.x + 40 + 290, this.y + 75 + 40, this.x + 40 + 260, this.y + 75 + 20);
            // ctx.bezierCurveTo(this.x + 40 + 300, this.y + 75 - 40, this.x + 40 + 240, this.y + 75 - 50, this.x + 40 + 210, this.y + 75 - 30);
            // ctx.bezierCurveTo(this.x + 40 + 190, this.y + 75 - 75, this.x + 40 + 120, this.y + 75 - 60, this.x + 40 + 120, this.y + 75 - 30);
            // ctx.bezierCurveTo(this.x + 40 + 70, this.y + 75 - 75, this.x + 40 + 20, this.y + 75 - 60, this.x + 40, this.y + 75);

            // complete custom shape
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.fillStyle = "darkgray";
            ctx.fill();
            ctx.strokeStyle = "gray";
            ctx.stroke();
      };

      this.clear = function(){
            ctx.clearRect(this.x, this.y, this.width, this.height); 
      };

      this.move = function (){
            this.x -= this.speed;
      };   

      this.newPosition = function ()
      {
            var waterHeight = 50;
            var maxYPosition = ctx.height - waterHeight - this.height;

            this.y = Math.floor((Math.random() * maxYPosition) + 1);
      };
}
