const size = 5;

export default class Ball {
    constructor (height, width){
        this.x = 150;
        this.y = 50;
        this.vy = Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = (7 - Math.abs(this.vy)); // x direction
        //this.arc = (100, 100, 5, 0, Math.PI*2, true);
        this.size = size;
        this.speed = 5;
    }
    draw(context){
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, Math.PI*2, true);
        context.fill();
        context.closePath;
    }


   paddleCollision(player1, player2) {
   if (this.vx > 0) {
      const inRightEnd = player2.x <= this.x + this.width &&
      player2.x > this.x - this.vx + this.width;
      if (inRightEnd) {
         const collisionDiff = this.x + this.width - player2.x;
         const k = collisionDiff / this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitRightPaddle = y >= player2.y && y + this.height <=
         player2.y + player2.height;
         if (hitRightPaddle) {
            this.x = player2.x - this.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
         }
      }
   } else {
      const inLeftEnd = player1.x + player1.width >= this.x;
      if (inLeftEnd) {
         const collisionDiff = player1.x + player1.width - this.x;
         const k = collisionDiff / -this.vx;
         const y = this.vy * k + (this.y - this.vy);
         const hitLeftPaddle = y >= player1.y && y + this.height <=
         player1.y + player1.height;
         if (hitLeftPaddle) {
            this.x = player1.x + player1.width;
            this.y = Math.floor(this.y - this.vy + this.vy * k);
            this.vx = -this.vx;
         }
      }
 }
}

    

   render(context, player1, player2) {
     this.x += this.vx;
     this.y += this.vy;
     this.draw(context);
     this.paddleCollision(player1, player2);
   }
//    render(ctx) {
//       //...
//       const hitLeft = this.x >= this.width;
//       const hitRight = this.x + this.size <= 0;
//       const hitTop = this.y + this.size <= 0;
//       const hitBottom = this.y >= this.height;
//       //...
//    }
    /* ... */
}
