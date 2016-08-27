(function () {
	'use strict';

	initCanvases();
	G.scenes.title();

	function initCanvases() {
		var SCALE = G.constants.SCALE;
		var ASPECT_RATIO = G.constants.ASPECT_RATIO;

		G.renderingCanvas.width = (window.innerHeight * ASPECT_RATIO) / SCALE;
		G.renderingCanvas.height = window.innerHeight / SCALE;

		G.renderingContext['imageSmoothingEnabled'] = false;

		G.outputCanvas.width = window.innerHeight * ASPECT_RATIO;
		G.outputCanvas.height = window.innerHeight;
		G.outputContext['imageSmoothingEnabled'] = false;
		G.outputContext.scale(SCALE, SCALE);
	}

	function gameLoop(time) {
		G.renderingContext.clearRect(0, 0, G.renderingCanvas.width, G.renderingCanvas.height);	
		
		G.imageRenderSystem.update();
		G.rectRenderSystem.update();
		G.textRenderSystem.update();

		G.outputContext.clearRect(0, 0, G.outputCanvas.width, G.outputCanvas.height);
		G.outputContext.drawImage(G.renderingCanvas, 0, 0);
		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());