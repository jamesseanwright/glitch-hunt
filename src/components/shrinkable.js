(function () {
    'use strict';

    G.shrinkable = function shrinkable(entity) {
        G.shrinkSystem.register(entity);
    };

    G.shrinkable.deregister = function deregister(entity) {
        G.shrinkSystem.deregister(entity);
    };
}());