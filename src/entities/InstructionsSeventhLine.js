(function () {
    'use strict';

    var X = 0.02;
    var Y = 0.47;

    function InstructionsSeventhLine() {
        G.positionable(this, X, Y);
        G.textRenderable(this, 'battle a glitch. In this case, A jumps, S shoots,', 12);
    }

    G.InstructionsSeventhLine = InstructionsSeventhLine;
}());