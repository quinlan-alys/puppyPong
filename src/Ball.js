const size = 5;


export default class Ball {
    constructor(boardHeight, boardWidth) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.ballReset()
        this.vy = 1;//Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = 1;//(7 - Math.abs(this.vy)); // x direction 
        this.height = 10;
        this.width = 10;
        this.radius = 10;
       // this.size = 10;
        this.speed = 1;
        
    }
    draw(context) {
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.fill();
        context.closePath;
    }


    // bounce() {
    //     if (this.y <= 0 + this.size || this.y >= this.boardHeight - this.size) {
    //         this.vy *= -1
    //     }
    //         if (this.x <= 0 + this.size || this.x >= this.boardWidth - this.size) {
    //         this.vx *= -1
    //     }
    // }
    goalRight(){
         if (this.x + this.radius >= this.boardWidth) {
             console.log("goal");
             this.ballReset()
             this.vx = (-7 - Math.abs(this.vy));
         }

    }

     goalLeft(){
         if (this.x + this.radius <= 0) {
             console.log("goal Left!");
             this.ballReset()
             this.vx = (7 - Math.abs(this.vy));
         }

    }

    ballReset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;
            // if (this.x + this.size >= this.boardWidth - this.size) {
            //     console.log("goal");
            // }
        }

        score(p1Score, p2Score){
            if (this.x + this.radius <= 0){
                this.ballReset();
                p1Score.score++;
                this.vx = (7 - Math.abs(this.vy));
            } else if  (this.x + this.radius >= this.boardWidth) {
                this.ballReset();
                p2Score.score++;
                this.vx = (-7 - Math.abs(this.vy));
                
            }
        }

  paddleCollision(p1, p2){
       if (this.vx > 0) {
           const inRightEnd = this.x + this.radius >= p2.x;
           if (inRightEnd) {
               if (this.y >= p2.y && this.y <= (p2.y + p2.height)){
                   this.vx *= -1;
               }
           }
       } else {
           const inLeftEnd = this.x - this.radius <= p1.x + p1.width
           
           if (inLeftEnd) {
               if (this.y >= p1.y && this.y <= (p1.y + p1.height)) {
                   this.vx *= -1;
               }
           } 
       } 
  }



        render(context, p1, p2, p1Score, p2Score) {
            // this.bounce();
            this.score(p1Score, p2Score);
            this.goalRight();
            this.goalLeft();    
            this.x += this.vx;
            this.y += this.vy;
            this.paddleCollision(p1, p2);
            this.draw(context);

   const hitLeft = this.x - this.radius >= this.boardWidth;
   const hitRight = this.x + this.radius <= 0;
   const hitTop = this.y - this.radius <= 0;
   const hitBottom = this.y + this.radius >= this.boardHeight;

if (hitRight || hitLeft) {
     this.vx *= -1;
   }

   if (hitTop || hitBottom) {
     this.vy *= -1;
   }

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

