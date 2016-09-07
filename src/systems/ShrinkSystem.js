(function () {
    'use strict';

    function ShrinkSystem() {

    }

    ShrinkSystem.prototype = G.system.create(function next(entity) {
		if (entity.width > 0 || entity.height > 0) {
            entity.x += 0.005;
            entity.y += 0.005;
            entity.width -= 0.01;
            entity.height -= 0.01;
        }
    });

    G.ShrinkSystem = ShrinkSystem;
}());