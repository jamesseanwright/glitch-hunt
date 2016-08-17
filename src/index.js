(function () {
	'use strict';

	var renderingCanvas = document.querySelector('.game-renderer');
	var renderingContext = renderingCanvas.getContext('2d');
	var outputCanvas = document.querySelector('.game-output');
	var outputContext = outputCanvas.getContext('2d');

	G.textRenderSystem = new G.TextRenderSystem(renderingContext);
	G.rectRenderSystem = new G.RectRenderSystem(renderingContext);
	G.clickSystem = new G.ClickSystem(outputCanvas);

	var button = new G.Button('New Game', 0.34, 0.3, 0.3, 0.2, function () {
		console.log('click');
		game.start();
	});

	var logo = new G.Logo();

	initCanvases();

	function initCanvases() {
		var scale = G.constants.SCALE;

		renderingCanvas.width = window.innerWidth / scale;
		renderingCanvas.height = window.innerHeight / scale;

		outputCanvas.width = window.innerWidth;
		outputCanvas.height = window.innerHeight;

		outputContext['imageSmoothingEnabled'] = false;
		outputContext.scale(scale, scale);
	}

	function gameLoop(time) {
		renderingContext.clearRect(0, 0, renderingCanvas.width, renderingCanvas.height);	
		
		G.rectRenderSystem.update();
		G.textRenderSystem.update();	

		outputContext.clearRect(0, 0, outputCanvas.width, outputCanvas.height);		
		outputContext.drawImage(renderingCanvas, 0, 0);
		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());