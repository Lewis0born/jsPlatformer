
// select canvas element, set context as 2d
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// aspect ratio should be 16:9 (tiles will be 64x64: 64px * 16, 64px * 9)
canvas.width = 1024;
canvas.height = 576;

// Create player object
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
