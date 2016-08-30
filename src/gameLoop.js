(function () {
	'use strict';

	G.scenes.title();
	G.keyboard.init(window);

	function gameLoop(time) {
		G.renderingContext.clearRect(0, 0, G.renderingCanvas.width, G.renderingCanvas.height);	
		
		G.imageRenderSystem.update();
		G.rectRenderSystem.update();
		G.textRenderSystem.update();
		G.autoMoveSystem.update();
		G.captureSystem.update();

		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());