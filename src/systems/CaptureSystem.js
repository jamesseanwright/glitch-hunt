(function () {
    'use strict';

    function CaptureSystem(captureActions) {
		this.captureActions = captureActions;
	}

    CaptureSystem.prototype = G.system.create(function next(entity) {
        var isInBounds = entity.x >= this.capturer.x
							&& entity.x + entity.width <= this.capturer.x + this.capturer.width;

		if (isInBounds && G.keyboard.isPressed(entity.key) && !entity.isCaptured) {
			entity.isCaptured = true;
			entity.onCapture();
		}
    });

	CaptureSystem.prototype.registerCapturer = function registerCapturer(capturer) {
		this.capturer = capturer;
	};

    G.CaptureSystem = CaptureSystem;
}());