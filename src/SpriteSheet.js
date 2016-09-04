(function () {
    'use strict';

    G.SpriteSheet = function SpriteSheet(image, spriteWidth, spriteHeight, sheetWidth) {
        this.image = image;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.sheetWidth = sheetWidth;
        this.sprites = this.renderSprites();
    };

    G.SpriteSheet.prototype.renderSprites = function renderSprites() {
        var spritesCount = this.sheetWidth / this.spriteWidth;
        var sprites = new Array(spritesCount);

        G.spriteContext.width = this.spriteWidth;
        G.spriteContext.height = this.spriteHeight;
        G.spriteContext.drawImage(this.image, 0, 0, this.sheetWidth, this.spriteHeight);

        for (var i = 0; i < spritesCount; i++) {
            sprites[i] = G.spriteContext.getImageData(i * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight);
        }

        return sprites;
    };

    G.SpriteSheet.prototype.get = function get(index) {
        return this.sprites[index];
    };
}());