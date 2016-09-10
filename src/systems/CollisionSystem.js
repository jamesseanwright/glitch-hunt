(function () {
    'use strict';

    function CollisionSystem() {

    }

    CollisionSystem.prototype = G.system.create(function next(entity) {
        var targets = this._entities.filter(function (e) {
            return e !== entity;
        });

        this.testForCollisions(entity, targets);
    });

    CollisionSystem.prototype.testForCollisions = function testForCollisions(entity, targets) {
        var target;
        var hasXCollision;
        var hasYCollision;

        for (var i = 0; i < targets.length; i++) {
            target = targets[i];
            hasXCollision = entity.x >= target.x && entity.x <= target.x + target.width;
            hasYCollision = entity.y >= target.y && entity.y <= target.y + target.height;

            if (hasXCollision && hasYCollision) {
                console.log('collision');
            }
        }
    };

    G.CollisionSystem = CollisionSystem;
}());