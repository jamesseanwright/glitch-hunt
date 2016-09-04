(function () {
    'use strict';

    G.positionable = function positionable(entity, x, y, width, height) {
        entity.x = x;
        entity.y = y;
        entity.width = width;
        entity.height = height;
    };
}());