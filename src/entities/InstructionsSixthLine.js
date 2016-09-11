(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.42;

    function InstructionsSixthLine() {
        G.positionable(this, X, Y);
        G.textRenderable(this, 'Sometimes, you will have to enter the system to', 12);
    }

    G.InstructionsSixthLine = InstructionsSixthLine;
}());