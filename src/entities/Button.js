(function () {
    'use strict';

    function Button() {

    }

    Button.prototype.init = function init(text, x, y, width, height, action) {
        G.positionable(this, x, y, width, height);
        G.rectRenderable(this, 'white', 'green');
        G.textRenderable(this, text, '16px monospace', 'white', 0.085, 0.12);
        G.clickable(this, action);
    };

    G.Button = Button;
}());