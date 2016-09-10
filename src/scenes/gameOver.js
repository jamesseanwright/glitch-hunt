(function () {
    'use strict';

    G.scenes.gameOver = {
        start: function start() {
            G.entityPool.getSingleton('gameOver');
        }
    };
}());