(function () {
    'use strict';

    var renderingCanvas = document.querySelector('.game-renderer');
    var outputCanvas = document.querySelector('.game-output');

    /* string property accessor is
     * workaround for Closure Compiler */
    window['G'] = {
        constants: {
            SCALE: 4,
            WORLD_WIDTH: 1,
            WORLD_HEIGHT: 1
        },

        renderingCanvas: document.querySelector('.game-renderer'),
        renderingContext: renderingCanvas.getContext('2d'),
        outputCanvas: document.querySelector('.game-output'),
        outputContext: outputCanvas.getContext('2d')
    };
}());