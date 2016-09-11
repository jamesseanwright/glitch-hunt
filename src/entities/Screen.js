(function () {
    'use strict';

    var X = 0;
    var Y = 0;
    var WIDTH = 1;
    var HEIGHT = 1;

    function Screen() {

    }

    Screen.prototype.init = function init(x, y, width, height) {
        G.positionable(this, X, Y, WIDTH, HEIGHT);
        G.imageRenderable(this, G.images.screen);
    };

    G.Screen = Screen;
}());