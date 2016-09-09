(function () {
    'use strict';

    var X = 0;
    var Y = 0;
    var WIDTH = 1;
    var HEIGHT = 1;

    function Background() {
        G.positionable(this, X, Y, WIDTH, HEIGHT);
        G.imageRenderable(this, G.images.background);
    }

    G.Background = Background;
}());