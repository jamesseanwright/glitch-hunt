(function () {
	'use strict';

	function gameLoop() {
		requestAnimationFrame(gameLoop);
	}

	gameLoop();
}());