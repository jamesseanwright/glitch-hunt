(function () {
    'use strict';

    var X = 0.33;
    var Y = 0.4;

    function GetReady() {
        G.positionable(this, X, Y);
        G.textRenderable(this, 'Get Ready!', 24);
    }

    G.GetReady = GetReady;
}())