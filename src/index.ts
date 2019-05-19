import Paddle from './paddle'
import InputHandler from './input'

let canvas: any = document.getElementById('gameScreen');
let ctx: any = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

new InputHandler(paddle);

let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
