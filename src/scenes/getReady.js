(function () {
    'use strict';

    G.scenes.getReady = {
        start: function start() {
            /* TODO: audio end event so that
             * whole track plays before changing
             * scene */

            G.audio.playTrack('snippet');
            G.entityPool.getSingleton('getReady');

            G.audio.onTrackStop = function onTrackStop() {
                G.scenes.getReady.end();
                G.scenes.hacking.start();
            };
        },

        end: function end() {
            G.entityPool.resetSingleton('getReady');
        }
    };
}());