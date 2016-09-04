(function () {
    'use strict';

    function Key() {

    }

    Key.prototype.init = function init(x, y, width, height, speed) {
        var key = Key.getRandom();

        G.shrinkable.deregister(this);
        G.positionable(this, x, y, width, height);
        G.imageRenderable(this, G.images[key + 'Key']);
        G.autoMoveable(this, speed, G.autoMoveable.direction.LEFT);
        G.capturable(this, key);
    };

    Key.prototype.onCapture = function onCapture() {
        G.gameState.increaseScore();

        G.autoMoveable.deregister(this);
        G.shrinkable(this);
    };

    Key.getRandom = function getRandom() {
        var index = Math.floor(Math.random() * G.keyboard.supportedKeys.length);
        return G.keyboard.supportedKeys[index];
    }

    G.Key = Key;
}());