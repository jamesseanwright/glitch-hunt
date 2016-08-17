'use strict';

function getScreenXPos(x, ignoreScale) {
    var scale = ignoreScale ? 1 : SCALE;
    return x / WORLD_WIDTH * window.innerWidth / scale;
}

function getScreenYPos(y, ignoreScale) {
    var scale = ignoreScale ? 1 : SCALE;    
    return y / WORLD_HEIGHT * window.innerHeight / scale;
}