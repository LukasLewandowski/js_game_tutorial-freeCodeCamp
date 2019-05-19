export default class Ball {
    public image: any;
    public gameWidth: number;
    public gameHeight: number;
    public position: {[key: string]: number}
    public speed: {[key: string]: number};
    public size: number;

    constructor(game) {
        this.image = document.getElementById('img_ball');
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.position = {x: 10, y: 10};
        this.speed = {x: 5, y: 5};
        this.size = 17;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
    
    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = - this.speed.x;
        }
        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = - this.speed.y;
        }
    };
}