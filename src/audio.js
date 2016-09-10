(function (global) {
    'use strict';

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
            pan: 0.4,
            gain: 0.23
        },
    };

    var tracks = {
        title: {
            bpm: 180,
            isLooping: true,

            parts: [
                'VOXA42G22F42E42D42C42A42C42',
                'GTRF44F44F44F44',
                'BSSD21D21D21D21F21F21F21F21A21A21A21A21D31D31D31D31'
            ]
        },

        snippet: {
            bpm: 240,
            isLooping: false,

            parts: [
                'VOXG44A#44G42A#44C58',
                'GTRC416',
                'BSSF28D#22D23C27'
            ]
        }
    };

    var nanoTunes = new NT(instruments, tracks);

    G.audio = {
        playTrack: function playTrack(name) {
            nanoTunes.play(name);
        }
    };
}(this));