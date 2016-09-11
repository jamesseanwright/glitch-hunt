(function () {
    'use strict';

    var BUTTON_X = 0.355;
    var BUTTON_Y = 0.5;
    var BUTTON_WIDTH = 0.3;
    var BUTTON_HEIGHT = 0.2;

    G.scenes.title = {
        start: function start() {
            G.audio.playTrack('title');
            this.button = G.entityPool.get('button');

            G.entityPool.getSingleton('background');
            G.entityPool.getSingleton('logo');

            this.button.init('New Game', BUTTON_X, BUTTON_Y, BUTTON_WIDTH, BUTTON_HEIGHT, function () {
                G.scenes.title.end();
                G.scenes.instructions.start();
            });
        },

        end: function end() {
            G.entityPool.reset(this.button);
            G.entityPool.resetSingleton('background');
            G.entityPool.resetSingleton('logo');
        }
    };
}());