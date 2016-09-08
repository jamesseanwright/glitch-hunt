(function () {
	'use strict';

	G.scenes.title.start();
	G.keyboard.init(window);

	function gameLoop(timestamp) {
		G.renderingContext.clearRect(0, 0, G.renderingCanvas.width, G.renderingCanvas.height);

		G.imageRenderSystem.update(timestamp);
		G.spriteAnimationSystem.update(timestamp);
		G.rectRenderSystem.update(timestamp);
		G.textRenderSystem.update(timestamp);
		G.autoMoveSystem.update(timestamp);
		G.captureSystem.update(timestamp);
		G.generatorSystem.update(timestamp);
		G.shrinkSystem.update(timestamp);
		G.computedPositionSystem.update(timestamp);
		G.bounceSystem.update(timestamp);
		G.keyboardMoveSystem.update(timestamp);
		G.jumpSystem.update(timestamp);

		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());