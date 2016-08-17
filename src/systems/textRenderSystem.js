'use strict';

var textRenderSystem = {
    _entities: [],

    register: function register(entity) {
        this._entities.push(entity);
    },

    update: function update(context) {
        var entity;

        for (var i in this._entities) {
            entity = this._entities[i];
            context.fillStyle = entity.fill;
            context.font = entity.font;
            context.fillText(entity.text, entity.x, entity.y);
        }
    }
};