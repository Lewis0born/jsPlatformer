
// Create new array prototype (similar to a function)
Array.prototype.parse2D = function() {
    const rows = [];

    // push each row to new row array
    for (let i = 0; i < this.length; i+=16){
        rows.push(this.slice(i, i+16));
    }

    return rows;
}

// For each symbol in each row, push a collision to new array
Array.prototype.createObjectsFrom2D = function() {
    const objects = [];
    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if(symbol == 292){
                // push new collision into collisionBlocks array
                objects.push(new CollisionBlock({
                    position: {
                        x:x * 64,
                        y:y * 64, // ensure collision blocks line up in our canvas
                    }
                }))
            }
        })
    });
    return objects;
}