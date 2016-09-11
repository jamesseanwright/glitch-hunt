(function () {
    'use strict';

    var X = 0.29;
    var Y = 0.75;

    function Author() {
        G.positionable(this, X, Y);
        G.textRenderable(this, 'By James Wright', 18);
    }

    G.Author = Author;
}())