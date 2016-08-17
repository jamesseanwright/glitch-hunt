'use strict';

function EntityStateMachine() {
	this.states = {};
}

EntityStateMachine.prototype.on = function on(stateName, components) {
	this.states[stateName] = components;
};