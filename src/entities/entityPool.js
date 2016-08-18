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

            entity.isActive = true;
            group.activeCount++;
            return entity;
        },

        getSingleton: function getSingleton(name) {
            var entity = this._entities.singletons[name];

            entity.isActive = true;
            return entity;
        },

        reset: function reset(name, entity) {
            var group = this._entities[name];

            entity.isActive = false;            
            group.activeCount--;
        },

        resetSingleton: function resetSingleton(name) {
            var entity = this._entities.singletons[name];
            entity.isActive = false;
        }
    };

    G.entityPool = entityPool;
}());