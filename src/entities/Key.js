(function () {
    'use strict';

    function Key() {

    }

    Key.prototype.init = function init(x, y, width, height, speed) {
        var keyIndex = Key.getRandomKeyIndex();

        G.shrinkable.deregister(this);
        G.positionable(this, x, y, width, height);
        G.imageRenderable(this, G.spriteSheets.keys.get(keyIndex));
        G.autoMoveable(this, speed, G.autoMoveable.direction.LEFT);
        G.capturable(this, G.keyboard.supportedKeys[keyIndex]);
    };

    Key.prototype.onCapture = function onCapture() {
        G.gameState.increaseScore();

        G.autoMoveable.deregister(this);
        G.shrinkable(this);
    };

    Key.prototype.onLeftScreen = function onLeftScreen() {
        G.gameState.decreaseHealth();
    };

    Key.getRandomKeyIndex = function getRandomKeyIndex() {
        return Math.floor(Math.random() * G.keyboard.supportedKeys.length);
    }

    G.Key = Key;
}());