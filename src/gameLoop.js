(function () {
	'use strict';

	var button = G.entityPool.get('button');
	var logo = G.entityPool.getSingleton('logo');

	button.init('New Game', 0.34, 0.3, 0.3, 0.2, function () {
		console.log('click');
		game.start();
	});

	initCanvases();

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
		
		G.rectRenderSystem.update();
		G.textRenderSystem.update();	

		G.outputContext.clearRect(0, 0, G.outputCanvas.width, G.outputCanvas.height);		
		G.outputContext.drawImage(G.renderingCanvas, 0, 0);
		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());