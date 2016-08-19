(function () {
    'use strict';

    var keyboard = {
        keys: {
            UP: 'ArrowUp',
            DOWN: 'ArrowDown',
            LEFT: 'ArrowLeft',
            RIGHT: 'ArrowRight',
            A: 'a',
            S: 's',
        },

        _activeKeys: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            a: false,
            s: false
        },

        init(target) {
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