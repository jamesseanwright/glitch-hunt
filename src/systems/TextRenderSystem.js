(function () {
    'use strict';

    var A_CHAR_CODE = 'a'.charCodeAt();
    var ZERO_INDEX = 32;

    var specialIndices = {
        ' ': 26,
        '?': 27,
        '!': 28,
        ':': 29,
        '.': 30,
        ',': 31
    };

    function TextRenderSystem(context) {
        this.context = context;
    }

    TextRenderSystem.prototype = G.system.create(function next(entity) {
        var spriteIndex;
        var fontScale = entity.fontSize / G.spriteSheets.font.spriteHeight;
        var text = entity.text instanceof Function ? entity.text() : entity.text;

        text = text.toLowerCase();

        for (var i = 0; i < text.length; i++) {
            spriteIndex = TextRenderSystem.getSpriteIndex(text[i]);

            this.context.drawImage(
                G.spriteSheets.font.get(spriteIndex),
                G.getScreenXPos(entity.x + entity.xOffset) + (G.spriteSheets.font.spriteWidth * fontScale) * i,
                G.getScreenYPos(entity.y + entity.yOffset) + G.spriteSheets.font.spriteHeight * fontScale,
                G.spriteSheets.font.spriteWidth * fontScale,
                G.spriteSheets.font.spriteHeight * fontScale
            );
        }
    });

    TextRenderSystem.getSpriteIndex = function getSpriteIndex(char) {
        var charAsNumber = parseInt(char);

        if (!isNaN(charAsNumber)) {
            return ZERO_INDEX + charAsNumber;
        }

        return specialIndices[char] || char.charCodeAt() - A_CHAR_CODE;
    };

    G.TextRenderSystem = TextRenderSystem;
}());