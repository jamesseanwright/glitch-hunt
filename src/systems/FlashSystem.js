(function () {
    'use strict';

    function FlashSystem() {
    }

    FlashSystem.prototype = G.system.create(function next(entity, timestamp) {
        entity.flashStartMs = entity.flashStartMs || timestamp;
        entity.lastFlashTimeMs = entity.lastFlashTimeMs || entity.flashIntervalMs + 1;

        if (entity.lastFlashTimeMs + entity.flashIntervalMs < timestamp) {
            entity.isHidden = !entity.isHidden;
            entity.lastFlashTimeMs = timestamp;
        }

        if (timestamp - entity.flashStartMs > entity.flashDurationMs) {
            entity.isHidden = false;
            entity.flashStartMs = undefined;
            entity.lastFlashTimeMs = undefined;
            entity.onFlashEnd();
        }
    });

    G.FlashSystem = FlashSystem;
}());