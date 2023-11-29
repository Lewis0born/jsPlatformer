
// Controls
window.addEventListener('keydown', (event) => {
    switch(event.key){
        // jump up when w pressed (if player not already jumping/falling)
        case 'w':
            if(player.velocity.y == 0){
                player.velocity.y = -20;
            }
            break;
        // move player to the left
        case 'a':
            keys.a.pressed = true;
            break;
        // move player to the right
        case 'd':
            keys.d.pressed = true;
            break;

    }

});

// Stop player movement when key released
window.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'a':
            keys.a.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }
});