(function () {
    'use strict';

    function ComputedPositionSystem() {

	}

    ComputedPositionSystem.prototype = G.system.create(function next(entity) {
        if (entity.computeX) {
            entity.x = entity.computeX();
        }

        if (entity.computeY) {
            entity.y = entity.computeY();
        }
    });

    G.ComputedPositionSystem = ComputedPositionSystem;
}());