(function () {
    'use strict';

    var context = new (window.AudioContext || webkitAudioContext)();

    var instruments = {
        VOX: {
            wave: 'square',
            pan: -0.5,
            gain: 0.1
        },

        BSS: {
            wave: 'triangle',
            pan: 0.5,
            gain: 0.5
        },

        GTR: {
            wave: 'sawtooth',
            pan: 0.4,
            gain: 0.09
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

            parts: [
                'VOXG44A#44G42A#44C58',
                'GTRC416',
                'BSSF28D#22D23C27'
            ]
        },

        gameOver: {
            bpm: 60,

            parts: [
                'VOXF38E34D34G316',
                'GTRA48G44F44E41F41E41D41E412',
                'BSSF28E24D24C216'
            ]
        }
    };

    var nanoTunes = new NT(instruments, tracks, context);

    nanoTunes.onStop = function onStop() {
        G.audio.onTrackStop && G.audio.onTrackStop();
    };

    G.audio = {
        playTrack: function playTrack(name) {
            nanoTunes.play(name);
        },

        jump: function jump() {
            var oscillatorNode = context.createOscillator();
            var gainNode = context.createGain();

            oscillatorNode.type = 'square';
            oscillatorNode.frequency.setValueAtTime(100, context.currentTime);
            oscillatorNode.frequency.exponentialRampToValueAtTime(200, context.currentTime + 0.3);

            gainNode.gain.value = 0.2;

            oscillatorNode.connect(gainNode);
            gainNode.connect(context.destination);
            oscillatorNode.start();
            oscillatorNode.stop(context.currentTime + 0.3);
        },

        shoot: function shoot() {
            var oscillatorNode = context.createOscillator();
            var gainNode = context.createGain();

            oscillatorNode.type = 'triangle';
            oscillatorNode.frequency.setValueAtTime(70, context.currentTime);
            oscillatorNode.frequency.exponentialRampToValueAtTime(50, context.currentTime + 0.2);

            gainNode.gain.value = 0.3;

            oscillatorNode.connect(gainNode);
            gainNode.connect(context.destination);
            oscillatorNode.start();
            oscillatorNode.stop(context.currentTime + 0.2);
        },

        hit: function hit() {
            var oscillatorNode = context.createOscillator();
            var gainNode = context.createGain();

            oscillatorNode.type = 'sawtooth';
            oscillatorNode.frequency.value = 40;

            gainNode.gain.value = 0.15;

            oscillatorNode.connect(gainNode);
            gainNode.connect(context.destination);
            oscillatorNode.start();
            oscillatorNode.stop(context.currentTime + 0.3);
        }
    };
}());