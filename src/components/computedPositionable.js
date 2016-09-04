(function () {
    'use strict';

    G.computedPositionable = function computedPositionable(entity, computeX, computeY) {
        entity.computeX = computeX;
        entity.computeY = computeY;

        G.computedPositionSystem.register(entity);
    };
}());