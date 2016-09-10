(function () {
    'use strict';

    var X = 0.05;
    var Y = 0.755;
    var WIDTH = 0.038;
    var ANIMATED_WIDTH = 0.08;
    var HEIGHT = 0.2;
    var SPEED = 0.012;
    var JUMP_SPEED = 0.016;
    var HEALTH = 4;
    var SHOOT_Y_OFFSET = 0.0745;
    var FRAME_RATE = 20;
    var FLASH_INTERVAL_MS = 500;
    var INVINCIBILITY_DURATION_MS = 3000;

    function Player() {

    }

    Player.prototype.init = function init() {
        G.spriteAnimatable.deregister(this);
        G.positionable(this, X, Y, WIDTH, HEIGHT);
        G.imageRenderable(this, this.getSprite);
		G.keyboardMoveable(this, SPEED);
        G.jumping(this, Y, JUMP_SPEED);
        G.shooting(this, 'bullet', SHOOT_Y_OFFSET);
        G.hurtable(this, HEALTH);
        G.collidable(this);
    };

	Player.prototype.getSprite = function getSprite() {
		if (this.direction === G.keyboardMoveable.direction.LEFT) {
			return G.spriteSheets.playerStationary.get(0);
		}

		return G.spriteSheets.playerStationary.get(1);
	};

    Player.prototype.onMove = function onMove(isLeft) {
        var spriteSheet;

        G.positionable(this, this.x, this.y, ANIMATED_WIDTH, HEIGHT);

        spriteSheet = isLeft ? G.spriteSheets.playerRunningLeft : G.spriteSheets.playerRunningRight;
        G.spriteAnimatable(this, spriteSheet, FRAME_RATE);
    };

    Player.prototype.onStop = function onStop() {
        G.spriteAnimatable.deregister(this);
        G.positionable(this, this.x, this.y, WIDTH, HEIGHT);
        G.imageRenderable(this, this.getSprite);
    };

    Player.prototype.onCollision = function onCollision(entity) {
        if (entity instanceof G.Glitch && !this.isInvincible) { // TODO: stop leaking invincible component abstraction
            G.flashing(this, FLASH_INTERVAL_MS, INVINCIBILITY_DURATION_MS);
            G.invincible(this);
            G.gameState.decreaseHealth();
        }
    };

    Player.prototype.onFlashEnd = function onFlashEnd() {
        G.flashing.deregister(this);
        G.invincible.deregister(this);
    };

    G.Player = Player;
}());