(function () {
    'use strict';

    var entityPool = {
        _entities: {
            bullet: {
                position: 0,
                items: [
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet(),
                    new G.Bullet()
                ]
            },

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
                background: new G.Background(),
                captureZone: new G.CaptureZone(),
                gameOver: new G.GameOver(),
                glitch: new G.Glitch(),
                hud: new G.Hud(),
                instructionsTitle: new G.InstructionsTitle(),
                instructionsFirstLine: new G.InstructionsFirstLine(),
                instructionsSecondLine: new G.InstructionsSecondLine(),
                instructionsThirdLine: new G.InstructionsThirdLine(),
                instructionsFourthLine: new G.InstructionsFourthLine(),
                instructionsFifthLine: new G.InstructionsFifthLine(),
                instructionsSixthLine: new G.InstructionsSixthLine(),
                instructionsSeventhLine: new G.InstructionsSeventhLine(),
                instructionsEighthLine: new G.InstructionsEighthLine(),
                keyGen: new G.KeyGen(),
                logo: new G.Logo(),
                player: new G.Player(),
                screen: new G.Screen()
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

        resetGroup: function resetGroup(groupName) {
            var groupItems = this._entities[groupName].items;

            for (var i = 0; i < groupItems.length; i++) {
                this.reset(groupItems[i]);
            }
        },

        resetSingleton: function resetSingleton(name) {
            var entity = this._entities.singletons[name];
            entity.isActive = false;
        }
    };

    G.entityPool = entityPool;
}());