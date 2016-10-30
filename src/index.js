import './game.css';
import Game from './Game'


var game = new Game();
const ms = 30;
(function gameLoop() {
   setTimeout(gameLoop, ms);
   game.render()
   
}());
