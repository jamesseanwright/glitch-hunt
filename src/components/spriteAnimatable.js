(function () {
    'use strict';

    G.spriteAnimatable = function spriteAnimatable(entity, spriteSheet, frameRate) {
        entity.spriteSheet = spriteSheet;
        entity.frameRate = frameRate;

        G.spriteAnimationSystem.register(entity);
    };

    G.spriteAnimatable.deregister = function deregister(entity) {
        G.spriteAnimationSystem.deregister(entity);
    };
}());