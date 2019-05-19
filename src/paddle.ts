export default class Paddle {
    public width: number;
    public height: number;
    public position: {[key: string]: number};

    constructor(gameWidth: number, gameHeight: number) {
        this.width = 50;
        this.height = 30;
        
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    };

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
}