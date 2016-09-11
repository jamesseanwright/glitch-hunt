(function () {
    'use strict';

    G.scenes.gameOver = {
        start: function start() {
            G.audio.playTrack('gameOver');
            G.entityPool.getSingleton('gameOver');

            G.audio.onTrackStop = function onTrackStop() {
                G.scenes.gameOver.end();
                G.scenes.title.start();
            };
        },

        end: function end() {
            G.entityPool.resetSingleton('gameOver');
        }
    };
}());