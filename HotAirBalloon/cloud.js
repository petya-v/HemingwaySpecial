function Cloud(x, y, speed, ctx) {
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.volumeMultiplier = 0.75;
      this.width = 300*this.volumeMultiplier;
      this.height = 170*this.volumeMultiplier;
      this.clearX = this.x;
      this.clearY = this.y;
      this.ctx = ctx;
      

      this.draw = function () {
            ctx.beginPath();
            ctx.moveTo(this.x + 40 * this.volumeMultiplier, this.y + 75*this.volumeMultiplier);
            ctx.bezierCurveTo(this.x, this.y + 95*this.volumeMultiplier, this.x, this.y + 145*this.volumeMultiplier, this.x + 100*this.volumeMultiplier, this.y + 145*this.volumeMultiplier);
            ctx.bezierCurveTo(this.x + 120*this.volumeMultiplier, this.y + 175*this.volumeMultiplier, this.x + 190*this.volumeMultiplier, this.y + 175*this.volumeMultiplier, this.x + 180*this.volumeMultiplier, this.y + 145*this.volumeMultiplier);
            ctx.bezierCurveTo(this.x + 290*this.volumeMultiplier, this.y + 155*this.volumeMultiplier, this.x + 290*this.volumeMultiplier, this.y + 115*this.volumeMultiplier, this.x + 260*this.volumeMultiplier, this.y + 95*this.volumeMultiplier);
            ctx.bezierCurveTo(this.x + 300*this.volumeMultiplier, this.y + 35*this.volumeMultiplier, this.x + 240*this.volumeMultiplier, this.y + 25*this.volumeMultiplier, this.x + 210*this.volumeMultiplier, this.y + 45*this.volumeMultiplier);
            ctx.bezierCurveTo(this.x + 190*this.volumeMultiplier, this.y, this.x + 120*this.volumeMultiplier, this.y + 15*this.volumeMultiplier, this.x + 120*this.volumeMultiplier, this.y + 45*this.volumeMultiplier);
            ctx.bezierCurveTo(this.x + 70*this.volumeMultiplier, this.y, this.x + 20*this.volumeMultiplier, this.y + 15*this.volumeMultiplier, this.x + 40*this.volumeMultiplier, this.y + 75*this.volumeMultiplier);

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
