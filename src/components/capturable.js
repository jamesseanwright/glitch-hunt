(function () {
    'use strict';

    G.capturable = function capturable(entity, key) {
        entity.key = key;
        entity.isCaptured = false;

        G.captureSystem.register(entity);
    };
}());