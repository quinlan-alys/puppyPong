export default class Ball {
    constructor (){
        this.x = 150
        this.y = 50
        this.vy = Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = (7 - Math.abs(this.vy)); // x direction
        this.size = size;
        this.speed = 5
    }

    render(context){

    }
}