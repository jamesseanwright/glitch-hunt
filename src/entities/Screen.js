(function () {
    'use strict';

    function Screen() {
        
    }

    Screen.prototype.init = function init(x, y, width, height) {        
        G.Positionable.call(this, x, y, width, height);
        G.ImageRenderable.call(this, G.images.screen);
    };

    G.Screen = Screen;
}());