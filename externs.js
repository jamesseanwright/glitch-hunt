var entityPool = {
    _entities: {
        button: {
            activeCount: 0,
            items: [ {} ]
        },

        key: {
            activeCount: 0,
            items: [ {} ]
        },

        singletons: {
            hud: {},
            logo: {},
            screen: {},
            captureZone: {},
            keyGen: {}
        }
    }
};

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
    }
};