(function () {
	'use strict';

	initCanvases();
	G.scenes.title();

	function initCanvases() {
		var scale = G.constants.SCALE;

		G.renderingCanvas.width = window.innerWidth / scale;
		G.renderingCanvas.height = window.innerHeight / scale;

		G.outputCanvas.width = window.innerWidth;
		G.outputCanvas.height = window.innerHeight;

		G.outputContext['imageSmoothingEnabled'] = false;
		G.outputContext.scale(scale, scale);
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