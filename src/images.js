(function () {
    'use strict';

    /* images to be preloaded and referenced should
     * be created in the DOM with a `game-image` class.
     * The preload method mutates the object directly which
     * is isn't a best practice, but I'm trying to save bytes
     *
     * TODO: preload images before rendering game */

    G.images = {
        load: function load() {
            var images = document.querySelectorAll('.game-image');
            var imageName;

            for (var i = 0; i < images.length; i++) {
                imageName = images[i].dataset.name;
                this[imageName] = images[i];
            }
        }
    };

    //G.images.load();

    G.images.keys = new Image();
    G.images.keys.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAMAAABOty+XAAAABlBMVEUAAAD//8waCf7LAAAARUlEQVR4AWNgJAswECvMgMFjYACRGAwoE51GaANCVCkgQLChNIKLaRuamRCAKQK3DdMpcNvgytFtQ7gAUxuGtykLSbIAAI8cAZxzfQ7cAAAAAElFTkSuQmCC';

    G.images.screen = new Image();
    G.images.screen.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAkCAYAAADYZynDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGpJREFUaIHt2bERgEAIAEFwLMn+K/ieMHrHzEh/PG4jQm4IyapR0cC2eoGv7HPIPFbu8ZqqERGNLmoojaE0htIYSmMojaE0htIYSmMojaE0htIYSmMojaE0htJc/9H5R/yP+z/3efc2Fz0BapUK3+tMql8AAAAASUVORK5CYII=';
}());