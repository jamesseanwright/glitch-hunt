(function () {
    'use strict';

    var X = 0;
    var Y = 0;
    var WIDTH = 1;
    var HEIGHT = 0.08;

    function Hud() {

    }

    Hud.prototype.init = function init() {
        G.positionable(this, X, Y, WIDTH, HEIGHT);
        G.rectRenderable(this, null, 'rgba(0, 0, 0, 0.6)', WIDTH, HEIGHT);
        G.textRenderable(this, Hud.computeText, 18, 0.01, -0.04);
    };

    Hud.computeText = function computeText() {
        return 'Score: ' + G.gameState.score +
            '  Level: ' + G.gameState.level +
            '  Hits: ' + G.gameState.health;
    };

    G.Hud = Hud;
}());