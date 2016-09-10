(function () {
    'use strict';

    G.flashing = function flashing(entity, flashIntervalMs, flashDurationMs) {
        entity.flashIntervalMs = flashIntervalMs;
        entity.flashDurationMs = flashDurationMs;

        G.flashSystem.register(entity);
    };

    G.flashing.deregister = function deregister(entity) {
        G.flashSystem.deregister(entity);
    };
}());