(function () {
    'use strict';

    var keyboard = {
        // order corresponds to sprite sheet
        supportedKeys: [
            'a',
            's',
            'ArrowUp',
            'ArrowRight',
            'ArrowDown',
            'ArrowLeft',
        ],

        _activeKeys: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            a: false,
            s: false
        },

        init: function(target) {
            this._activeKeys = {};

            for (var i = 0; i < this.supportedKeys.length; i++) {
                this._activeKeys[this.supportedKeys[i]] = false;
            }

            target.addEventListener('keydown', function (e) {
                keyboard._updateKey(e.key, true);
            });

            target.addEventListener('keyup', function (e) {
                keyboard._updateKey(e.key, false);
            });
        },

        isPressed(keyName) {
            return this._activeKeys[keyName];
        },

        isNothingPressed() {
            return this.supportedKeys.reduce(function (isLastPressed, key) {
                return isLastPressed || G.keyboard._activeKeys[key];
            }, false);
        },

        _updateKey(keyName, isActive) {
            this._activeKeys[keyName] = isActive;
        }
    };

    G.keyboard = keyboard;
}());