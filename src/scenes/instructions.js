(function () {
    'use strict';

    var BUTTON_X = 0.4;
    var BUTTON_Y = 0.7;
    var BUTTON_WIDTH = 0.22;
    var BUTTON_HEIGHT = 0.2;

    G.scenes.instructions = {
        start: function start() {
            this.button = G.entityPool.get('button');

            // because my MVP doesn't suppport line breaks LOL'
            G.entityPool.getSingleton('instructionsTitle');
            G.entityPool.getSingleton('instructionsFirstLine');
            G.entityPool.getSingleton('instructionsSecondLine');
            G.entityPool.getSingleton('instructionsThirdLine');
            G.entityPool.getSingleton('instructionsFourthLine');
            G.entityPool.getSingleton('instructionsFifthLine');
            G.entityPool.getSingleton('instructionsSixthLine');
            G.entityPool.getSingleton('instructionsSeventhLine');
            G.entityPool.getSingleton('instructionsEighthLine');

            this.button.init('Start', BUTTON_X, BUTTON_Y, BUTTON_WIDTH, BUTTON_HEIGHT, function () {
                G.scenes.instructions.end();
                G.scenes.getReady.start();
            });
        },

        end: function end() {
            G.entityPool.resetSingleton('instructionsTitle');
            G.entityPool.resetSingleton('instructionsFirstLine');
            G.entityPool.resetSingleton('instructionsSecondLine');
            G.entityPool.resetSingleton('instructionsThirdLine');
            G.entityPool.resetSingleton('instructionsFourthLine');
            G.entityPool.resetSingleton('instructionsFifthLine');
            G.entityPool.resetSingleton('instructionsSixthLine');
            G.entityPool.resetSingleton('instructionsSeventhLine');
            G.entityPool.resetSingleton('instructionsEighthLine');
            G.entityPool.reset(this.button);
        }
    };
}());