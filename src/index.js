'use strict';

var canvas = document.querySelector('.game');
var context = canvas.getContext('2d');
var text = document.querySelector('#text');

scaleDown(canvas, context);

context.drawImage(text, 20, 20);

function gameLoop() {
	requestAnimationFrame(gameLoop);
}

function scaleDown(canvas, context) {
	canvas.width = canvas.clientWidth / 4;
	canvas.height = canvas.clientHeight / 4;
	context.imageSmoothingEnabled = false;
}

gameLoop();