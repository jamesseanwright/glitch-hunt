(function () {
    'use strict';

    function CaptureZone() {
        
    }

    CaptureZone.prototype.init = function init(x, y, width, height) {        
        G.Positionable.call(this, x, y, width, height);
        G.RectRenderable.call(this, 'white', null, width, height);
        // G.Capturing.call(this);
    };

    G.CaptureZone = CaptureZone;
}());