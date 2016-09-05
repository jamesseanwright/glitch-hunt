(function () {
    'use strict';

    var renderingCanvas = document.querySelector('.game-rendering');
    var spriteSheetCanvas = document.querySelector('.sprite-sheet-rendering');
    var individualSpriteCanvas = document.querySelector('.individual-sprite-rendering');

    // Global namespace for game
    var G = {
        constants: {
            PIXEL_WIDTH: 640,
            PIXEL_HEIGHT: 360,
            WORLD_WIDTH: 1,
            WORLD_HEIGHT: 1,

            KEY_GEN_DECREMENT_MS: 80,
            KEY_CAPTURE_SCORE_INCREMENT: 100,
            KEY_SPEED_INCREMENT: 0.001,
            SCORE_LEVEL_UP_THRESHOLD: 1000,
            CAPTURE_ZONE_X_INCREMENT: 0.01
        },

        gameState: {
            score: 0,
            level: 1,
            health: 3,
            keySpeed: 0.003,
            captureZoneX: 0.1,
            keyGenIntervalMs: 1000,

            increaseScore: function increaseScore() {
                G.gameState.score += G.constants.KEY_CAPTURE_SCORE_INCREMENT;

                if (G.gameState.score % G.constants.SCORE_LEVEL_UP_THRESHOLD === 0) {
                    G.gameState.level++;
                }
            }
        },

        renderingCanvas: renderingCanvas,
        renderingContext: renderingCanvas.getContext('2d'),
        spriteSheetCanvas: spriteSheetCanvas,
        spriteSheetContext: spriteSheetCanvas.getContext('2d'),
        individualSpriteCanvas: individualSpriteCanvas,
        individualSpriteContext: individualSpriteCanvas.getContext('2d'),

        scenes: {}
    };

    G.renderingCanvas.width = G.constants.PIXEL_WIDTH;
	G.renderingCanvas.height = G.constants.PIXEL_HEIGHT;

    G.renderingContext['imageSmoothingEnabled'] = false; // closure compiler hax!


    /* string property accessor is
     * workaround for Closure Compiler */
    window['G'] = G;
}());