import Paddle from './paddle'
import InputHandler from './input'
import Ball from './ball'

export default class Game {
    public gameWidth: number;
    public gameHeight: number;

    public paddle: any;
    public ball: any;
    public gameObjects: any;

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        new InputHandler(this.paddle);

        this.gameObjects = [this.ball, this.paddle];
    }

    update(deltaTime) {
        this.gameObjects.forEach(object => {
            object.update(deltaTime);
        });
    }
    draw(ctx) {
        this.gameObjects.forEach(object => {
            object.draw(ctx);
        });
    }
}