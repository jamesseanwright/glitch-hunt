(function () {
    'use strict';

    function SpriteAnimationSystem() {
		this.lastFrameTimeMs = 0;
    }

    SpriteAnimationSystem.prototype = G.system.create(function next(entity, timestamp) {
        entity.image = entity.spriteSheet.get(0);
    });

    G.SpriteAnimationSystem = SpriteAnimationSystem;
}());