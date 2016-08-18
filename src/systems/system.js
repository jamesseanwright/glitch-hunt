'use strict';

G.system = {
    create: function create(next) {
        var proto = Object.create(this);
        proto._entities = [];
        proto.next = next;

        return proto;
    },

    register: function register(entity) {
        this._entities.push(entity);
    },

    update: function update(data) {
        for (var i in this._entities) {
            if (this._entities[i].isActive) {
                this.next(this._entities[i], data);
            }
        }
    }
};