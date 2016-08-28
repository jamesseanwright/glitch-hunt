(function () {
	'use strict';

	G.scenes.title();

	function gameLoop(time) {
		G.renderingContext.clearRect(0, 0, G.renderingCanvas.width, G.renderingCanvas.height);	
		
		G.imageRenderSystem.update();
		G.rectRenderSystem.update();
		G.textRenderSystem.update();

		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());