(function () {
    'use strict';
    var WIDTH = 0.09;
    var HEIGHT = 0.11;

    function Key() {

    }

    Key.prototype.init = function init(x, y) {
        var keyIndex = Key.getRandomKeyIndex();

        G.shrinkable.deregister(this);
        G.positionable(this, x, y, WIDTH, HEIGHT);
        G.imageRenderable(this, G.spriteSheets.keys.get(keyIndex));
        G.autoMoveable(this, G.computations.computeKeySpeed, G.autoMoveable.direction.LEFT);
        G.capturable(this, G.keyboard.supportedKeys[keyIndex]);
    };

    Key.prototype.onCapture = function onCapture() {
        G.gameState.increaseScore();
        G.audio.capture();

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