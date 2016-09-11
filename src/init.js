(function () {
    'use strict';

    var renderingCanvas = document.querySelector('.game-rendering');
    var spriteSheetCanvas = document.querySelector('.sprite-sheet-rendering');
    var individualSpriteCanvas = document.querySelector('.individual-sprite-rendering');

    G.renderingCanvas = renderingCanvas;
    G.renderingContext = renderingCanvas.getContext('2d');
    G.spriteSheetCanvas = spriteSheetCanvas;
    G.spriteSheetContext = spriteSheetCanvas.getContext('2d');
    G.individualSpriteCanvas = individualSpriteCanvas;
    G.individualSpriteContext = individualSpriteCanvas.getContext('2d');

    G.scenes = {};

    G.renderingCanvas.width = G.constants.PIXEL_WIDTH;
	G.renderingCanvas.height = G.constants.PIXEL_HEIGHT;

    G.renderingContext['imageSmoothingEnabled'] = false; // closure compiler hax!
    G.renderingContext['mozImageSmoothingEnabled'] = false;
    G.renderingContext['msImageSmoothingEnabled'] = false;
}());