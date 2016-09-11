(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.32;

    function InstructionsFifthLine() {
        G.positionable(this, X, Y);
        G.textRenderable(this, 'Missing too many keys means game over!', 12);
    }

    G.InstructionsFifthLine = InstructionsFifthLine;
}());