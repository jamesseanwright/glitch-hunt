(function () {
    'use strict';

    // Because images must be loaded first
    G.initSpriteSheets = function initSpriteSheets() {
        G.spriteSheets = {
            keys: new G.SpriteSheet(G.images.keys, 9, 9, 54),
            font: new G.SpriteSheet(G.images.font, 6, 6, 252),
            playerStationary: new G.SpriteSheet(G.images.playerStationary, 8, 26, 16),
            playerRunningLeft: new G.SpriteSheet(G.images.playerRunningLeft, 18, 26, 162),
            playerRunningRight: new G.SpriteSheet(G.images.playerRunningRight, 18, 26, 162)
        };
    };
}());