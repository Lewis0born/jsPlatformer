
// Player class
class Player {
    // Player properties (position/width/height)
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.gravity = 1;

        this.width = 100;
        this.height = 100;
        this.sides = {
            bottom: this.position.y + this.height
        }
    }

    // draw player (red rect for now)
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    // Properties to change/update
    update() {
        // update player position based on current velocity
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

        // Apply gravity (constant incrementing of y velocity until bottom reached)
        if (this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += this.gravity;
            this.sides.bottom = this.position.y + this.height;
        } else this.velocity.y = 0;
    }
}