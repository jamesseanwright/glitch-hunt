(function () {
    'use strict';

    function Key() {

    }

    Key.prototype.init = function init(x, y, width, height, speed) {
        var key = Key.getRandom();

        G.Positionable.call(this, x, y, width, height);
        G.ImageRenderable.call(this, G.images[key + 'Key']);
        G.AutoMoveable.call(this, speed, G.AutoMoveable.direction.LEFT);
        G.Capturable.call(this, key);
    };

    Key.prototype.onCapture = function onCapture() {
        G.gameState.increaseScore();

        this.speed = 0; // TODO - house in AutoMoveable
        G.Shrinkable.call(this);
    };

    Key.getRandom = function getRandom() {
        var index = Math.floor(Math.random() * G.keyboard.supportedKeys.length);
        return G.keyboard.supportedKeys[index];
    }

    G.Key = Key;
}());