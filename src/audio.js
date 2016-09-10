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
                'VOXA42G42F42E42D42C42A42C42A42G42F42E42D42C42A42C42',
                'GTRF44F44F44F44F44F44F44E44',
                'BSSD22D22D22D22F22F22F22F22A22A22A22A22D32D32D32D32'
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