(function () {
    'use strict';

    function CaptureSystem() {
	}

    CaptureSystem.prototype = G.system.create(function next(entity) {
        var isInBounds = entity.x >= this.capturer.x 
							&& entity.x + entity.width <= this.capturer.x + this.capturer.width;

		if (isInBounds && G.keyboard.isPressed(entity.key)) {
			console.log('captured');
			entity.isCaptured = true;
		}
    });

	CaptureSystem.prototype.registerCapturer = function registerCapturer(capturer) {
		this.capturer = capturer;
	};

	console.log(CaptureSystem.prototype);

    G.CaptureSystem = CaptureSystem;
}());