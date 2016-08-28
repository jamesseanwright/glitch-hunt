(function () {
    'use strict';

    var renderingCanvas = document.querySelector('.game-rendering');

    /* string property accessor is
     * workaround for Closure Compiler */
    window['G'] = {
        constants: {
            PIXEL_WIDTH: 640,
            PIXEL_HEIGHT: 360,
            WORLD_WIDTH: 1,
            WORLD_HEIGHT: 1
        },

        renderingCanvas: renderingCanvas,
        renderingContext: renderingCanvas.getContext('2d'),

        scenes: {}
    };

    G.renderingCanvas.width = G.constants.PIXEL_WIDTH;
	G.renderingCanvas.height = G.constants.PIXEL_HEIGHT;
}());