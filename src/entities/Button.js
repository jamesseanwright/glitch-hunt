'use strict';

function Button(text, x, y, width, height) {
    var components = [
        new TextRenderable(text, '16px Courier New', x, y),
        new RectRenderable('black', 'green', x, y, width, height)
    ];

    return new Entity(components);
}