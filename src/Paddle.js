  const keys = {
   a: 65,
   z: 90,
   up: 38,
   down: 40,
};


  
   export default class Paddle {
   constructor(boardHeight, x, keys) {
      this.width = 5;
      this.height = 50;
      this.speed =10;
      this.boardHeight = boardHeight;
      this.keys = keys; 
      //this.color = color;
      this.x = x;
      this.y = (boardHeight / 2) - (this.height / 2);

       document.addEventListener('keydown', event => this.keyListener(event));
   }
      wallBounce(){

       }

keyListener(event){
         switch(event.keyCode) {
         case this.keys.up:
         console.log('up');
         this.moveUp();
         break;

         case this.keys.down:
        console.log('down');
         this.moveDown();
         break;
         
         }
         };
 
   moveUp(){
     //need an if statement so that it doesnt fly off screen
     if (this.y >= 3){
     this.y -= this.speed;
     }

   }
    moveDown(){
      if (this.y + this.height + this.speed <= this.boardHeight){
     this.y += this.speed;
      }
   }

   render(ctx) { // What is ctx? Where does it come from?
    // context.fillStyle = this.color;
      ctx.fillRect(
         this.x, this.y,
         this.width, this.height );
        }
   }