(function () {
    'use strict';

    var WIDTH = 0.03;
    var HEIGHT = 0.01;
    var SPEED = 0.05;

    function Bullet() {

    }

    Bullet.prototype.init = function init(x, y, direction) {
        G.positionable(this, x, y, WIDTH, HEIGHT);
        G.rectRenderable(this, null, 'yellow');
        G.autoMoveable(this, SPEED, direction);
        G.collidable(this);
    };

    Bullet.prototype.onCollision = function onCollision(entity) {
        if (entity instanceof G.Glitch) {
            G.entityPool.reset(this);
        }
    };

    G.Bullet = Bullet;
}());