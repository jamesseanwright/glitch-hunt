(function () {
	'use strict';

	G.keyboard.init(window);

	function gameLoop(timestamp) {
		G.renderingContext.clearRect(0, 0, G.renderingCanvas.width, G.renderingCanvas.height);

		G.imageRenderSystem.update(timestamp);
		G.spriteAnimationSystem.update(timestamp);
		G.rectRenderSystem.update(timestamp);
		G.textRenderSystem.update(timestamp);
		G.bounceSystem.update(timestamp);
		G.autoMoveSystem.update(timestamp);
		G.captureSystem.update(timestamp);
		G.generatorSystem.update(timestamp);
		G.shrinkSystem.update(timestamp);
		G.computedPositionSystem.update(timestamp);
		G.keyboardMoveSystem.update(timestamp);
		G.jumpSystem.update(timestamp);
		G.shootSystem.update(timestamp);
		G.collisionSystem.update(timestamp);
		G.flashSystem.update(timestamp);

		requestAnimationFrame(gameLoop);
	}

	/* Workaround for most browsers. Otherwise, the game starts
	 * with no images, even though they're base64-encoded strings. */

	G.initImages().then(function () {
		G.initSpriteSheets();
		G.initEntityPool();
		G.scenes.title.start();
		gameLoop();	
	});
}());