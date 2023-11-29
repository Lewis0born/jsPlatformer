
// select canvas element, set context as 2d
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// aspect ratio should be 16:9 (tiles will be 64x64: 64px * 16, 64px * 9)
canvas.width = 1024;
canvas.height = 576;

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
const player = new Player();

// animation loop
function animate() {
    window.requestAnimationFrame(animate);
    // fill canvas 
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // create player
    player.draw();
    player.update();
}

animate();
