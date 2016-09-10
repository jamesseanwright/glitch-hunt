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
            pan: 0.8,
            gain: 0.4
        },
    };

    var tracks = {
        title: {
            bpm: 180,
            isLooping: true,

            parts: [
                'VOXC44C44G44A44A#44A44G44E44C44C44G44A44A#44A44G44E44F44F44C54D54D#54D54C54A44C44C44G44A44A#44A44G44E44G44B44D54B44F44A44C54A44C44C44G44A44A#44A44G44E44',
                'GTRC32C42C32C42E32E42E32E42G32G42G32G42A#32A#42A#32A#42C32C42C32C42E32E42E32E42G32G42G32G42A#32A#42A#32A#42F32F42F32F42A32A42A32A42C42C52C42C52D#42D#52D#42D#52C32C42C32C42E32E42E32E42G32G42G32G42A#32A#42A#32A#42G32G42G32G42D32D42D32D42F32F42F32F42C32C42C32C42C32C42C32C42E32E42E32E42G32G42G32G42A#32A#42A#32A#42',

                'BSSC24C24G14G14A#14A#14B14B14C24C24G14G14A#14A#14B14B14F24F24D24D24D#24D#24E24E24C24C24G14G14A#14A#14B14B14G24B24G24B24F24A24F24A24C24C24G14G14A#14A#14B14B14'
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