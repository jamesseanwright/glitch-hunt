(function () {
    'use strict';
    
    var WORLD_WIDTH = G.constants.WORLD_WIDTH;
    var WORLD_HEIGHT = G.constants.WORLD_HEIGHT;
    var SCALE = G.constants.SCALE;
    var ASPECT_RATIO = 1.777777;

    G.getScreenXPos = function getScreenXPos(x, ignoreScale) {
        var scale = ignoreScale ? 1 : SCALE;
        return x / WORLD_WIDTH * (window.innerHeight * ASPECT_RATIO) / scale;
    };

    G.getScreenYPos = function getScreenYPos(y, ignoreScale) {
        var scale = ignoreScale ? 1 : SCALE;    
        return y / WORLD_HEIGHT * window.innerHeight / scale;
    };
}());