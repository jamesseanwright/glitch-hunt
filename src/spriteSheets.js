(function () {
    'use strict';

    G.spriteSheets = {
        keys: new G.SpriteSheet(G.images.keys, 9, 9, 54),
        font: new G.SpriteSheet(G.images.font, 6, 6, 240),
        playerStationary: new G.SpriteSheet(G.images.playerStationary, 8, 26, 16),
    };
}());