(function () {
    'use strict';

    var entityPool = {
        _entities: {
            button: {
                activeCount: 0,
                items: [new G.Button()]
            },

            key: {
                activeCount: 0,
                items: [
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key(),
                    new G.Key()
                ]
            },

            singletons: {
                captureZone: new G.CaptureZone(),
                logo: new G.Logo(),
                screen: new G.Screen(),
                keyGen: new G.KeyGen()
            }
        },

        get: function get(name) {
            var group = this._entities[name];
            var entity = group.items[group.activeCount];

            entity.name = name;
            entity.isActive = true;
            group.activeCount++;
            return entity;
        },

        getSingleton: function getSingleton(name) {
            var entity = this._entities.singletons[name];

            entity.isActive = true;
            return entity;
        },

        reset: function reset(entity) {
            var group = this._entities[entity.name];

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