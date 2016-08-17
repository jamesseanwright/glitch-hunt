'use strict';

var WORLD_WIDTH = 1;
var WORLD_HEIGHT = 1;

function getScreenXPos(x) {
    return x / WORLD_WIDTH * window.innerWidth;
}

function getScreenYPos(y) {
    return y / WORLD_HEIGHT * window.innerHeight;
}