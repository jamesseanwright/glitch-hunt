(function () {
    'use strict';

    function Player() {

    }

    Player.prototype.init = function init(x, y, width, height, speed) {
        G.positionable(this, x, y, width, height);
        G.imageRenderable(this, G.spriteSheets.playerStationary.get(0));
		G.keyboardMoveable(this, speed);
    };

    G.Player = Player;
}());