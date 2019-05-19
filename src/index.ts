import Paddle from './paddle'

let canvas: any = document.getElementById('gameScreen');
let ctx: any = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);

// ctx.fillStyle = '#f00';
// ctx.fillRect(10, 10, 200, 100);

// ctx.fillStyle = '#00f';
// ctx.fillRect(300, 400, 50, 50);
