(function () {
    'use strict';

    function Hud() {

    }

    Hud.prototype.init = function init(x, y, width, height) {
        G.positionable(this, x, y, width, height);
        G.rectRenderable(this, null, 'rgba(0, 0, 0, 0.6)', width, height);
        G.textRenderable(this, Hud.computeText, 18, 0.01, -0.04);
    };

    Hud.computeText = function computeText() {
        return 'Score: ' + G.gameState.score + '   Level: ' + G.gameState.level;
    };

    G.Hud = Hud;
}());