

export default class ScoreBoard {
   constructor(x, y) {
      this.x = x;
      this.y = y;
      this.score = 0;
   }
   drawScore(context) {
      context.font = "15px Helvetica";
      context.fillText(this.score, this.x, this.y);
   }

//    scoreIncrement() {
//        if (this.x + this.radius <= 0) {

//        }
//    }


render(context) {
    this.drawScore(context);

}
}