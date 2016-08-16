'use strict';

var renderingCanvas = document.querySelector('.game-renderer');
var renderingContext = renderingCanvas.getContext('2d');
var outputCanvas = document.querySelector('.game-output');
var outputContext = outputCanvas.getContext('2d');

var SCALE = 4;

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
	renderingContext.font = '16px Courier New';
	renderingContext.fillStyle = 'white';
	renderingContext.fillText(ts, 20, 20);

	outputContext.clearRect(0, 0, 500 * SCALE, 36 * SCALE);		
	outputContext.drawImage(renderingCanvas, 0, 0);
	requestAnimationFrame(gameLoop);
}

gameLoop();