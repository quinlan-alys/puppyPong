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
      this.x = x;
      this.y = (boardHeight / 2) - (this.height / 2);

       document.addEventListener('keydown', event => this.keyListener(event));
   }
      wallBounce(){

       }

keyListener(event){
         switch(event.keyCode) {
         case this.keys.up:
        
         this.moveUp();
         break;

         case this.keys.down:
        
         this.moveDown();
         break;
         
         }
         };
 
   moveUp(){
     
     if (this.y >= 3){
     this.y -= this.speed;
     }

   }
    moveDown(){
      if (this.y + this.height + this.speed <= this.boardHeight){
     this.y += this.speed;
      }
   }

   render(context) { 
      context.fillRect(
         this.x, this.y,
         this.width, this.height );
        }
   }