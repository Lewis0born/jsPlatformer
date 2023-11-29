
// select canvas element, set context as 2d
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// aspect ratio should be 16:9 (tiles will be 64x64: 64px * 16, 64px * 9)
canvas.width = 1024;
canvas.height = 576;

let playerPositionY = 100;
let playerHeight = 100;
let playerBottom = playerPositionY + playerHeight;

// animation loop
function animate() {
    window.requestAnimationFrame(animate);
    // fill canvas 
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // create player (red rect for now)
    c.fillStyle = 'red';
    c.fillRect(100, playerPositionY, 100, playerHeight);

    // GRAVITY, increase player Y position until bottom == canvas height
    if (playerBottom < canvas.height){
        playerPositionY++;
        playerBottom = playerPositionY + 100;
    }
    

}

animate();
