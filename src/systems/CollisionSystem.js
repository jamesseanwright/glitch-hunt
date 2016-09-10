(function () {
    'use strict';

    var COLUMNS = 4;
    var ROWS = 1;

    function CollisionSystem() {
        this.grid = CollisionSystem.createGrid(COLUMNS, ROWS);
    }

    CollisionSystem.prototype = G.system.create(function next(entity) {
        var newColumn = CollisionSystem.getEntityPos(entity, COLUMNS);
        var newRow = CollisionSystem.getEntityPos(entity, ROWS);
        var targets;

        if (entity.column !== newColumn || entity.row !== newRow) {
            this.updateEntityPos(entity, newColumn, newRow);
        }

        var targets = this.grid[entity.column][entity.row].filter(function (e) {
            return e !== entity;
        });

        this.testForCollisions(entity, targets);
    });

    CollisionSystem.prototype.updateEntityPos = function updateEntityPos(entity, newColumn, newRow) {
        this.grid[entity.column][entity.row] = this.grid[entity.column][entity.row].filter(function (e) {
            return e !== entity;
        });

        this.grid[newColumn][newRow].push(entity);

        entity.column = newColumn;
        entity.row = newRow;
    };


    CollisionSystem.createGrid = function createGrid(columnsCount, rowsCount) {
        var columns = new Array(columnsCount);

        for (var i = 0; i < columnsCount; i++) {
            columns[i] = new Array(rowsCount);

            for (var j = 0; j < rowsCount; j++) {
                columns[i][j] = [];
            }
        }

        return columns;
    };

    CollisionSystem.getEntityPos = function getEntityPos(entity, maxPos) {
        return Math.round(entity.x * maxPos - 1);
    };

    G.CollisionSystem = CollisionSystem;
}());