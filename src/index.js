'use strict';

var renderingCanvas = document.querySelector('.game-renderer');
var renderingContext = renderingCanvas.getContext('2d');
var outputCanvas = document.querySelector('.game-output');
var outputContext = outputCanvas.getContext('2d');

var SCALE = 4;
var button = new Button('Foo', 20, 20, 100, 100);

initCanvases();

function initCanvases() {
	renderingCanvas.width = window.innerWidth / SCALE;
	renderingCanvas.height = window.innerHeight / SCALE;

	outputCanvas.width = window.innerWidth;
	outputCanvas.height = window.innerHeight;

	outputContext.imageSmoothingEnabled = false;
	outputContext.scale(SCALE, SCALE);
}

function gameLoop(ts) {
	renderingContext.clearRect(0, 0, 500, 36);	
	textRenderableSystem.update(renderingContext);

	outputContext.clearRect(0, 0, 500 * SCALE, 36 * SCALE);		
	outputContext.drawImage(renderingCanvas, 0, 0);
	requestAnimationFrame(gameLoop);
}

gameLoop();