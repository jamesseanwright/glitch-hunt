'use strict';

function Clickable(action) {
    this.clickAction = action;
    clickSystem.register(this);
}