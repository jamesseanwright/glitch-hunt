(function () {
    'use strict';

    var PIXEL_WIDTH = G.constants.PIXEL_WIDTH;
    var PIXEL_HEIGHT = G.constants.PIXEL_HEIGHT;
    var WORLD_WIDTH = G.constants.WORLD_WIDTH;
    var WORLD_HEIGHT = G.constants.WORLD_HEIGHT;

    G.getScreenXPos = function getScreenXPos(x) {
        return x / WORLD_WIDTH * PIXEL_WIDTH;
    };

    G.getScreenYPos = function getScreenYPos(y) {
        return y / WORLD_HEIGHT * PIXEL_HEIGHT;
    };
}());