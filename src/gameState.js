(function () {
    'use strict';

    G.gameState = {
        score: 0,
        level: 1,
        health: 5,
        keySpeed: 0.003,
        captureZoneX: 0.1,
        keyGenIntervalMs: 1000,

        increaseScore: function increaseScore() {
            G.gameState.score += G.constants.KEY_CAPTURE_SCORE_INCREMENT;

            if (G.gameState.score % G.constants.SCORE_LEVEL_UP_THRESHOLD === 0) {
                G.gameState.level++;
            }

            if (G.gameState.level % G.constants.BOSS_LEVEL_INTERVAL === 0) {
                G.scenes.hacking.end();
                G.scenes.boss.start();
            }
        },

        decreaseHealth: function decreaseHealth() {
            G.gameState.health--;

            if (G.gameState.health === 0) {
                G.scenes.hacking.end();
                G.scenes.boss.end();
                G.scenes.gameOver.start();
            }
        }
    };
}());