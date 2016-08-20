(function () {
    'use strict';

    function Screen() {
        
    }

    Screen.prototype.init = function init(x, y, width, height) {        
        G.Positionable.call(this, x, y, width, height);
        G.RectRenderable.call(this, 'white', 'green', width, height);
    };

    G.Screen = Screen;
}());