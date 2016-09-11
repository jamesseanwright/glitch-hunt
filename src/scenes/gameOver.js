(function () {
    'use strict';

    G.scenes.gameOver = {
        start: function start() {
            G.audio.playTrack('gameOver');
            G.entityPool.getSingleton('gameOver');
        }
    };
}());