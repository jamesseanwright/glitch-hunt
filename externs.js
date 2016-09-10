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

        parts: [
            'VOXC44C44G44A44A#44A44G44E44',
            'GTRC32C42C32C42E32E42E32E42G32G42G32G42C32C42C32C4',
            'BSSC24C24G14G14A#14A#14B14B14',
        ]
    }
};