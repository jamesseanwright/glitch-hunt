(function () {
    'use strict';

    /* G is game's namespace,
     * string property accessor is
     * workaround for Closure Compiler */

    window['G'] = {
        constants: {
            PIXEL_WIDTH: 640,
            PIXEL_HEIGHT: 360,
            WORLD_WIDTH: 1,
            WORLD_HEIGHT: 1,
            GRAVITY: 0.0003,

            KEY_GEN_DECREMENT_MS: 80,
            KEY_CAPTURE_SCORE_INCREMENT: 100,
            KEY_SPEED_INCREMENT: 0.001,
            SCORE_LEVEL_UP_THRESHOLD: 1000,
            CAPTURE_ZONE_X_INCREMENT: 0.01,
            BOSS_LEVEL_INTERVAL: 3
        }
    };
}());