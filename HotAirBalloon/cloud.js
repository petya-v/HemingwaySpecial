function Cloud(x, y, speed) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.width = 300;
      this.height = 175;
      this.clearX = this.x - 40;
      this.clearY = this.y - 75;

      this.draw = function (ctx) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x - 40, this.y + 20, this.x - 40, this.y + 70, this.x + 60, this.y + 70);
            ctx.bezierCurveTo(this.x + 80, this.y + 100, this.x + 150, this.y + 100, this.x + 140, this.y + 70);
            ctx.bezierCurveTo(this.x + 250, this.y + 80, this.x + 250, this.y + 40, this.x + 220, this.y + 20);
            ctx.bezierCurveTo(this.x + 260, this.y - 40, this.x + 200, this.y - 50, this.x + 170, this.y - 30);
            ctx.bezierCurveTo(this.x + 150, this.y - 75, this.x + 80, this.y - 60, this.x + 80, this.y - 30);
            ctx.bezierCurveTo(this.x + 30, this.y - 75, this.x - 20, this.y - 60, this.x, this.y);

            // complete custom shape
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.fillStyle = "darkgray";
            ctx.fill();
            ctx.strokeStyle = "gray";
            ctx.stroke();
      };

      this.clear = function(ctx){
            ctx.clearRect(this.clearX, this.clearY, this.width, this.height); 
      };

      this.move = function (){
            this.x -= this.speed;
            this.clearX -= this.speed;
      };      
}
