const size = 5;
var pingPaddle = new Audio('85664__cgeffex__single-small-dog-angry-bark.mp3') ;
var pingWall = new Audio('277058__kwahmah-02__single-dog-bark.wav');
var pingScore = new Audio('350593__austinxyz__chihuahua-puppy-whine.wav');


export default class Ball {
    constructor(boardHeight, boardWidth) {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.ballReset()
        this.vy = Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = (7 - Math.abs(this.vy)); // x direction 
        this.height = 10;
        this.width = 10;
        this.radius = 10;
        this.speed = 1;
        
    }
    draw(context) {
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.fill();
        context.closePath;
    }

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
                pingScore.play()
                this.vx = (7 - Math.abs(this.vy));
            } else if  (this.x + this.radius >= this.boardWidth) {
                this.ballReset();
                p2Score.score++;
                this.vx = (-7 - Math.abs(this.vy));
                pingScore.play()
                
            }
        }

  paddleCollision(p1, p2){
       if (this.vx > 0) {
           const inRightEnd = this.x + this.radius >= p2.x;
           if (inRightEnd) {
               if (this.y >= p2.y && this.y <= (p2.y + p2.height)){
                   this.vx *= -1;
                   pingPaddle.play()
               }
           }
       } else {
           const inLeftEnd = this.x - this.radius <= p1.x + p1.width
           
           if (inLeftEnd) {
               if (this.y >= p1.y && this.y <= (p1.y + p1.height)) {
                   this.vx *= -1;
                   pingPaddle.play()
               }
           } 
       } 
  }



        render(context, p1, p2, p1Score, p2Score) {
          
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
     pingWall.play();
   }

        }
 
    }

