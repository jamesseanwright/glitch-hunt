(function () {
    'use strict';

    var A_CHAR_CODE = 'a'.charCodeAt();

    var specialIndices = {
        ' ': 27
    };

    function TextRenderSystem(context) {
        this.context = context;
    }

    TextRenderSystem.prototype = G.system.create(function next(entity) {
        var spriteIndex;
        var fontScale = entity.fontSize / G.spriteSheets.font.spriteHeight;
        var text = typeof entity.text === 'function' ? entity.text() : entity.text;
        text = text.toLowerCase();

        for (var i = 0; i < text.length; i++) {
            spriteIndex = specialIndices[text[i]] || text[i].charCodeAt() - A_CHAR_CODE;

            G.renderingContext.drawImage(
                G.spriteSheets.font.get(spriteIndex),
                G.getScreenXPos(entity.x) + (G.spriteSheets.font.spriteWidth * fontScale) * i,
                G.getScreenYPos(entity.y) + G.spriteSheets.font.spriteHeight * fontScale,
                G.spriteSheets.font.spriteWidth * fontScale,
                G.spriteSheets.font.spriteHeight * fontScale
            );
        }
    });

    G.TextRenderSystem = TextRenderSystem;
}());