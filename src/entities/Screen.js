(function () {
    'use strict';

    function Screen() {

    }

    Screen.prototype.init = function init(x, y, width, height) {
        G.positionable(this, x, y, width, height);
        G.imageRenderable(this, G.images.screen);
    };

    G.Screen = Screen;
}());