(function () {
    'use strict';

    function CaptureZone() {

    }

    CaptureZone.prototype.init = function init(x, y, width, height) {
        G.positionable(this, x, y, width, height);
        G.rectRenderable(this, 'white', null, width, height);
        G.capturing(this);
    };

    G.CaptureZone = CaptureZone;
}());