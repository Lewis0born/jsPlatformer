
// Player class
class Player {
    // Player properties (position/width/height)
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }

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
        // GRAVITY, increase player Y position until bottom == canvas height
        if (this.sides.bottom < canvas.height){
            this.position.y++;
            this.sides.bottom = this.position.y + this.height;
        }
    }
}