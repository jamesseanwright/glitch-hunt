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

            for (var i in images) {
                imageName = images[i].src.replace('.png', '');
                this[imageName] = images[i];
            } 
        }
    };

    G.images.load();
}());