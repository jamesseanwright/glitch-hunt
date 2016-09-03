(function () {
    'use strict';

    var renderingCanvas = document.querySelector('.game-rendering');

    // Global namespace for game
    var G = {
        constants: {
            PIXEL_WIDTH: 640,
            PIXEL_HEIGHT: 360,
            WORLD_WIDTH: 1,
            WORLD_HEIGHT: 1,

            KEY_GEN_INTERVAL_MS: 1000,
            KEY_CAPTURE_SCORE_INCREMENT: 100,
            SCORE_LEVEL_UP_THRESHOLD: 1000
        },

        gameState: {
            score: 0,
            level: 1
        },

        // actions for CaptureSystem
        captureActions: {
            increaseScore: function increaseScore() {
                G.gameState.score += G.constants.KEY_CAPTURE_SCORE_INCREMENT;

                if (G.gameState.score % G.constants.SCORE_LEVEL_UP_THRESHOLD === 0) {
                    G.gameState.level++;
                }
            }
        },

        renderingCanvas: renderingCanvas,
        renderingContext: renderingCanvas.getContext('2d'),

        scenes: {}
    };

    G.renderingCanvas.width = G.constants.PIXEL_WIDTH;
	G.renderingCanvas.height = G.constants.PIXEL_HEIGHT;


    /* string property accessor is
     * workaround for Closure Compiler */
    window['G'] = G;
}());