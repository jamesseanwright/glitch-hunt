(function () {
    'use strict';

    var keyboard = {
        supportedKeys: [
            'ArrowUp',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'a',
            's'
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

        _updateKey(keyName, isActive) {
            this._activeKeys[keyName] = isActive;
        }
    };

    G.keyboard = keyboard;
}());