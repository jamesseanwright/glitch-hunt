(function () {
    'use strict';

    var entityPool = {
        _entities: {
            button: {
                activeCount: 0,
                items: [ new G.Button() ]
            },

            singletons: {
                logo: new G.Logo()
            }
        },

        get: function get(name) {
            var group = this._entities[name];
            var entity = group.items[group.activeCount];

            group.activeCount++;
            return entity;
        },

        reset: function reset(name, entity) {
            var group = this._entities[name];

            group.activeCount--;
            entity.isActive = false;
        },

        getSingleton: function getSingleton(name) {
            return this._entities.singletons[name];
        }
    };

    G.entityPool = entityPool;
}());