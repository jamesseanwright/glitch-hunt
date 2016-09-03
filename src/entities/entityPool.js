(function () {
    'use strict';

    var entityPool = {
        _entities: {
            button: {
                position: 0,
                items: [new G.Button()]
            },

            key: {
                position: 0,
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
                hud: new G.Hud(),
                logo: new G.Logo(),
                screen: new G.Screen(),
                keyGen: new G.KeyGen()
            }
        },

        get: function get(name) {
            var group = this._entities[name];
            var entity = group.items[group.position];

            entity.name = name;
            entity.isActive = true;
            group.position = group.position === group.items.length - 1 ? 0 : group.position + 1;

            return entity;
        },

        getSingleton: function getSingleton(name) {
            var entity = this._entities.singletons[name];

            entity.isActive = true;
            return entity;
        },

        reset: function reset(entity) {
            entity.isActive = false;
        },

        resetSingleton: function resetSingleton(name) {
            var entity = this._entities.singletons[name];
            entity.isActive = false;
        }
    };

    G.entityPool = entityPool;
}());