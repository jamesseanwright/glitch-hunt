(function () {
    'use strict';
    
    var PIXEL_WIDTH = G.constants.PIXEL_WIDTH;
    var PIXEL_HEIGHT = G.constants.PIXEL_HEIGHT;
    var WORLD_WIDTH = G.constants.WORLD_WIDTH;
    var WORLD_HEIGHT = G.constants.WORLD_HEIGHT;
    
    var offset = G.renderingCanvas.getBoundingClientRect(); 

    G.getScreenXPos = function getScreenXPos(x) {
        return x / WORLD_WIDTH * PIXEL_WIDTH + offset.x;
    };

    G.getScreenYPos = function getScreenYPos(y) {
        return y / WORLD_HEIGHT * PIXEL_HEIGHT + offset.y;
    };
}());