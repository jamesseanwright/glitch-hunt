(function () {
    'use strict';

    G.gameState = {
        score: 0,
        level: G.constants.STARTING_LEVEL,
        health: G.constants.STARTING_HEALTH,
        keySpeed: G.constants.STARTING_KEY_SPEED,
        captureZoneX: G.constants.CAPTURE_ZONE_START_X,

        increaseScore: function increaseScore(increment) {
            G.gameState.score += increment || G.constants.KEY_CAPTURE_SCORE_INCREMENT;

            if (G.gameState.score % G.constants.SCORE_LEVEL_UP_THRESHOLD === 0) {
                G.gameState.level++;
            }

            if (G.gameState.level % G.constants.BOSS_LEVEL_INTERVAL === 0) {
                G.scenes.hacking.end();
                G.scenes.boss.start();
            }
        },

        onBossDefeated: function onBossDefeated() {
            G.gameState.increaseScore(G.constants.BOSS_DEFEAT_SCORE_INCREMENT);
        },

        decreaseHealth: function decreaseHealth() {
            G.gameState.health--;

            if (G.gameState.health === 0) {
                G.scenes.hacking.end();
                G.scenes.boss.end();
                G.scenes.gameOver.start();
                G.gameState.reset();
            }
        },

        reset: function reset() {
            G.gameState.score = 0;
            G.gameState.level = G.constants.STARTING_LEVEL;
            G.gameState.health = G.constants.STARTING_HEALTH;
            G.gameState.keySpeed = G.constants.STARTING_KEY_SPEED;
            G.gameState.captureZoneX = G.constants.CAPTURE_ZONE_START_X;
        }
    };
}());