(function () {
	'use strict';

	initCanvas();
	G.scenes.title();

	function initCanvas() {
		G.renderingCanvas.width = G.constants.PIXEL_WIDTH;
		G.renderingCanvas.height = G.constants.PIXEL_HEIGHT;
	}

	function gameLoop(time) {
		G.renderingContext.clearRect(0, 0, G.renderingCanvas.width, G.renderingCanvas.height);	
		
		G.imageRenderSystem.update();
		G.rectRenderSystem.update();
		G.textRenderSystem.update();

		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());