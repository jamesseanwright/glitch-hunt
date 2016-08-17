'use strict';

function getScreenXPos(x) {
    return x / WORLD_WIDTH * window.innerWidth / SCALE;
}

function getScreenYPos(y) {
    return y / WORLD_HEIGHT * window.innerHeight / SCALE;
}