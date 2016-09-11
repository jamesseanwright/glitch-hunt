(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.003;

    function InstructionsTitle() {
        G.positionable(this, X, Y);
        G.textRenderable(this, 'How To Play', 18);
    }

    G.InstructionsTitle = InstructionsTitle;
}());