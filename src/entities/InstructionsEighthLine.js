(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.52;

    function InstructionsEighthLine() {
        G.positionable(this, X, Y);
        G.textRenderable(this, 'and the arrow keys move. Got it?', 12);
    }

    G.InstructionsEighthLine = InstructionsEighthLine;
}());