
// Player class
class Player {
    // Player properties (position/width/height)
    constructor({
        collisionBlocks = []
    }) {
        this.position = {
            x: 200,
            y: 200
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.gravity = 1;

        this.collisionBlocks = collisionBlocks;

        this.width = 25;
        this.height = 25;
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
    // NOTICE: how we abstract away the actual methods so update is clearer on what its doing, do that more!
    update() {
        // update player position based on current velocity
        this.position.x += this.velocity.x;

        // check for collisions
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();

    }


    checkForHorizontalCollisions(){
        for(let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];
            // if collision exists
            // if left of player is <= right of block, and right of player >=  left of block
            // same tops and bottoms
            if(this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
                    // collision on x axis moving left
                    if(this.velocity.x < 0){
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
                        break;
                    }
                    // collision on x axis moving right
                    if (this.velocity.x > 0){
                        this.position.x = collisionBlock.position.x - this.width - 0.01;
                        break;
                    }
            }
        }
    }

    applyGravity(){
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
    }

    checkForVerticalCollisions(){
        for(let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i];
            // if collision exists
            // if left of player is <= right of block, and right of player >=  left of block
            // same tops and bottoms
            if(this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
                    // collision on y axis moving down
                    if(this.velocity.y < 0){
                        this.velocity.y = 0;
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01;
                        break;
                    }
                    // collision on y axis moving up
                    if (this.velocity.y > 0){
                        this.velocity.y = 0;
                        this.position.y = collisionBlock.position.y - this.height - 0.01;
                        break;
                    }
            }
        }
    }


}