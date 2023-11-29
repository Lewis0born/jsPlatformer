
// select canvas element, set context as 2d
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// aspect ratio should be 16:9 (tiles will be 64x64: 64px * 16, 64px * 9)
canvas.width = 1024;
canvas.height = 576;

// Create background object
const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './assets/backgroundLevel1.png'
});

// Create player object
const player = new Player();

// Listen what keys are being pressed
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

// animation loop
function animate() {
    window.requestAnimationFrame(animate);
    // draw background
    backgroundLevel1.draw();

    // reset velocity, change based on key pressed
    player.velocity.x = 0;
    if (keys.d.pressed){
        player.velocity.x = 5;
    } else if(keys.a.pressed){
        player.velocity.x = -5;
    }

    // create player
    player.draw();
    player.update();
}

animate();


