(function () {
    'use strict';

    function BounceSystem() {

    }

    BounceSystem.prototype = G.system.create(function next(entity) {
		if (BounceSystem.hasHitScreenEdge(entity)) {
            entity.direction *= -1;
        }
    });

    BounceSystem.hasHitScreenEdge = function hasLeftScreen(entity) {
		if (entity.direction === G.autoMoveable.direction.LEFT) {
			return entity.x <= 0;
		}

		return entity.x + entity.width >= G.constants.WORLD_WIDTH;
	}

    G.BounceSystem = BounceSystem;
}());