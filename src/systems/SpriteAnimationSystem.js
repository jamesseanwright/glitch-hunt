(function () {
    'use strict';

    var ONE_SECOND_MS = 1000;

    function SpriteAnimationSystem() {
        this.lastFrameTimeMs = 0;
        this.currentFrame = 0;
    }

    SpriteAnimationSystem.prototype = G.system.create(function next(entity, timestamp) {
        var frameDurationMs = ONE_SECOND_MS / entity.frameRate;

        if (timestamp - this.lastFrameTimeMs > frameDurationMs) {
            this.currentFrame = this.currentFrame === entity.spriteSheet.spritesCount - 1 ? 0 : this.currentFrame + 1;
            this.lastFrameTimeMs = timestamp;
        }

        entity.image = entity.spriteSheet.get(this.currentFrame);
    });

    G.SpriteAnimationSystem = SpriteAnimationSystem;
}());