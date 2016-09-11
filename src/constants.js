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
            GRAVITY: 0.00045,

            KEY_GEN_DECREMENT_MS: 80,
            KEY_GEN_INTERVAL_MS: 1000,
            KEY_CAPTURE_SCORE_INCREMENT: 100,
            STARTING_KEY_SPEED: 0.003,
            KEY_SPEED_INCREMENT: 0.00065,
            SCORE_LEVEL_UP_THRESHOLD: 1000,
            CAPTURE_ZONE_START_X: 0.1,
            CAPTURE_ZONE_X_INCREMENT: 0.007,
            BOSS_LEVEL_INTERVAL: 3,
            BOSS_DEFEAT_SCORE_INCREMENT: 1000,

            STARTING_HEALTH: 5,
            STARTING_LEVEL: 1,

        }
    };
}());