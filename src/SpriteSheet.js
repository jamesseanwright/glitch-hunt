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
        var spritesCount = Math.ceil(this.sheetWidth / this.spriteWidth);
        var sprites = new Array(spritesCount);
        var imageData;
        var image;

        G.spriteSheetCanvas.width = this.sheetWidth;
        G.spriteSheetCanvas.height = this.spriteHeight;
        G.spriteSheetContext.drawImage(this.image, 0, 0, this.sheetWidth, this.spriteHeight);

        G.individualSpriteCanvas.width = this.spriteWidth;
        G.individualSpriteCanvas.height = this.spriteHeight;

        for (var i = 0; i < spritesCount; i++) {
            imageData = G.spriteSheetContext.getImageData(i * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight);
            G.individualSpriteContext.putImageData(imageData, 0, 0);
            image = new Image();
            image.src = G.individualSpriteCanvas.toDataURL('image/png');
            sprites[i] = image;
        }

        return sprites;
    };

    G.SpriteSheet.prototype.get = function get(index) {
        return this.sprites[index];
    };
}());