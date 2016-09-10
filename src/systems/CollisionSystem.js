(function () {
    'use strict';

    var GRID_COLUMNS = 4;
    var GRID_ROWS = 3;

    function CollisionSystem() {
        this.grid = CollisionSystem.createGrid(GRID_COLUMNS, GRID_ROWS);
    }

    CollisionSystem.prototype = G.system.create(function next(entity) {

    });

    CollisionSystem.createGrid = function createGrid(columnsCount, rowsCount) {
        var columns = new Array(columnsCount);

        for (var i = 0; i < rowsCount; i++) {
            columns[i] = new Array(rowsCount);
        }

        return columns;
    };

    G.CollisionSystem = CollisionSystem;
}());