(function () {
    'use strict';

    function Hud() {
        
    }

    Hud.prototype.init = function init(x, y, width, height) {        
        G.Positionable.call(this, x, y, width, height);
        G.RectRenderable.call(this, null, 'rgba(0, 0, 0, 0.6)', width, height);
        G.TextRenderable.call(this, 'HUD', '16px monospace', 'white', 0.01, 0.055);
    };

    G.Hud = Hud;
}());