
// Generic image class 
class Sprite {
    // sprite properties 
    constructor({ position, imageSrc }) {
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
        }
        this.image.src = imageSrc;
        this.loaded = false;
    }

    // draw sprite to canvas
    draw() {
        if(this.loaded){
            c.drawImage(this.image, this.position.x, this.position.y);
        }
    }
}