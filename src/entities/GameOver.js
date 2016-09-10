(function () {
    'use strict';

    var X = 0.33;
    var Y = 0.4;

    function GameOver() {
	    G.positionable(this, X, Y);
	    G.textRenderable(this, 'Game Over', 24);
    }

    G.GameOver = GameOver;
}())