(function () {
    'use strict';

    G.spriteAnimatable = function spriteAnimatable(entity, spriteSheet, frameRate) {
		this.spriteSheet = spriteSheet;
		this.frameRate = frameRate;

        G.spriteAnimationSystem.register(entity);
    };
}());