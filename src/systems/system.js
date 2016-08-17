'use strict';

var system = {
    _entities: [],

    create: function create(next) {
        var proto = Object.create(this);
        proto.next = next;

        return proto;
    },

    register: function register(entity) {
        this._entities.push(entity);
    },

    update: function update() {
        for (var i in this._entities) {
            this.next(this._entities[i]);
        }
    }
}
