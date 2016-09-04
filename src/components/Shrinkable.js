(function () {
    'use strict';

    G.Shrinkable = function Shrinkable() {
        G.shrinkSystem.register(this);
    };

    G.Shrinkable.deregister = function deregister(entity) {
        G.shrinkSystem.deregister(entity);
    };
}())
