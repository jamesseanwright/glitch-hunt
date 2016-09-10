var entityPool = {
    _entities: {
        button: {
            activeCount: 0,
            items: []
        },

        key: {
            activeCount: 0,
            items: []
        },

        bullet: {
            activeCount: 0,
            items: []
        },

        singletons: {
            background: {},
            gameOver: {},
            hud: {},
            logo: {},
            screen: {},
            captureZone: {},
            keyGen: {},
            glitch: {},
            player: {}
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

var instruments = {
    VOX: {
        wave: 'square',
        pan: -0.5,
        gain: 0.3
    },

    BSS: {
        wave: 'triangle',
        pan: 0.5,
        gain: 0.7
    },

    GTR: {
        wave: 'sawtooth',
        pan: 0.8,
        gain: 0.4
    },
};

var tracks = {
    title: {
        bpm: 180,
        isLooping: true,

        parts: []
    },

    snippet: {
        bpm: 240,
        isLooping: false,

        parts: []
    }
};