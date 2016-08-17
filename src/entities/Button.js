(function () {
    'use strict';

    function Button() {
        
    }

    Button.prototype.init = function init(text, x, y, width, height, action) {
        G.Positionable.call(this, x, y);
        G.RectRenderable.call(this, 'white', 'green', width, height);
        G.TextRenderable.call(this, text, '16px monospace', 'white', 0.03, 0.14);
        G.Clickable.call(this, action);
    };

    G.Button = Button;
}());