(function () {
    'use strict';

    G.images = {};

    var imageData = [
        {
            name: 'background',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAkCAMAAADvudnxAAAADFBMVEUAAAAAAIAAANyAgIDmc9uuAAAArUlEQVR4Ad3SsQ7CMBRD0fj2//8ZISJTyoubN7Bgpgid3iEZ6o75U0npUrxhS6J4H1V/pFkF+tW0UP0PylJqkDdY0361ovmWEjWhS5Gj9CgGta2p5XjuZdmm83Acx5BE3a7vVUiuSr7TreqbepvVilrPv86yfk3Xd2gKWNZveKOqRVW3Va2q3FW1ripXFarEqopqnKtt6mqfej+lnNeihFOmXKpsU76qbFKKamUf4t0Jg1Zint4AAAAASUVORK5CYII='
        },

        {
            name: 'keys',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAMAAABOty+XAAAABlBMVEUAAAD//8waCf7LAAAARUlEQVR4AWNgJAswECvMgMFjYACRGAwoE51GaANCVCkgQLChNIKLaRuamRCAKQK3DdMpcNvgytFtQ7gAUxuGtykLSbIAAI8cAZxzfQ7cAAAAAElFTkSuQmCC'
        },

        {
            name: 'screen',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAkCAMAAADvudnxAAAACVBMVEUAAAD//wD//8wSrcKEAAAAAXRSTlMAQObYZgAAACpJREFUeAFjYCIbUKaVgSwwqhUPGNU6qnVU66jWUa2jWkkCjIyMUBZFWgGy3gLL3paT/AAAAABJRU5ErkJggg=='
        },

        {
            name: 'font',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPwAAAAGCAMAAADQfAMqAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAANFJREFUeNqN1AsSgjAMBNDk/pe2U+M8YEUp03XNh2RJoaq7F2zcP8N7OPcOYGdZWEdL3hOP3ERVZg1dkIt3+OBE6x8XE4XryqGNKfO++qsYKDe8m6hwjiavLN57LbCiouThF0s8xWPU6b/rTrwp2f0B8qLjP+Ll6musZn5tmrwHk+9+NnmReezl/RIPb449c4pXxYvDHwqeHvsQn5HEsytPfG7PwPytULwA2oBF57xITClOROUHT2GWON76lyuvcHewzx88gyBeb/F55qdLvFu8AGAKAhFG5HgxAAAAAElFTkSuQmCC'
        },

        {
            name: 'playerStationary',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAMAAACJtiw1AAAAG1BMVEUAAAAAAAAUd7UWg8eAgIDNAAD/AAD/3LH//wD+TbStAAAAAXRSTlMAQObYZgAAAFlJREFUeNrNjkEKwDAIBDdGY///4rqKhEJy7xyy7iASAE+AzhxIB3HSQYaPEjGcNsp0kPXhIrSKllCSnfDWUqfIyLO523EWJOMmROacQDwifxJm+6dm3SnKvD86BWOst/iZAAAAAElFTkSuQmCC'
        },

        {
            name: 'playerRunningLeft',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAaCAMAAAADtXcxAAAAG1BMVEUAAAAAAAAUd7UWg8eAgIDNAAD/AAD/3LH//wD+TbStAAAAAXRSTlMAQObYZgAAAVpJREFUeAHV1VFuJCEMhGEG2vTe/8QbaJVM+CNqXttPy7cluzIaJWXOv58pGpIHH/LiQp48mJARQ/eYQvoWfMiLoc/9SQF58CEvpLd9igUAMmBCXgz1Zw7kwIe8kF5X8UohefAhL0e6xqSQPPiQlxPd/bpTSB58yMuZet+A5MGHvJBeVbGnkDz4kBfSyyrW2lp7/o8kaAlIaEamblAfCEa4mbsh2Z0hADc3NWLFiGCEm3ldoB+kqWNVqG+N0AeFBsUKU2pEMMLNvL5WnNG1Yr61nH0qSo+J+J2RIYLNuC6YsTlJCnV+ifSepynjfgimKMcIN/O6KqrgTmvFjKz3KbWi4t8RbsZ1wZg9pOnbpqysc5FSNJFvbWOEm3l9Aw1Mo89e/57RiOB9vkncjOsAGCbyu6nfrmr4dUWzmdcjT8A4gYYlYhe8D4TNvB4r0Lgor4nwRwvvA2Ezrv8HwHwZi9noM+IAAAAASUVORK5CYII='
        },

        {
            name: 'playerRunningRight',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAaCAMAAAADtXcxAAAAG1BMVEUAAAAAAAAUd7UWg8eAgIDNAAD/AAD/3LH//wD+TbStAAAAAXRSTlMAQObYZgAAAVdJREFUeNrV1dFug0AQQ9FmYaH//8XtAI5Rr0ZW88Y+dQ/WjEui9ut9vn+Pb4BAMZIlb5d1kClHshB89jodZMqRLB3YXvurg0w5kgXwpLdoDBAoRKKkyHaeDjLlSBbAAyuuNkCmHMnSgWyt00GmHMnSgG1ft72DTDmSpQOjXiwhU45kITyvYp0OMuVIFsCTKp4/LcsyhoggWkRNalRGl3nSECGEyZirvv+oKDF5mfpI5pyuyBAmY7sbLvo1jAoN9umXzYJD1HCUiBDCZGxXxePxQmNFvg4vq0p1VWndnUEIk9vtJ1Tkwk0hQfcVOircX9qQ6PklTQiT++2oKGDoXvHv9nsfR3LIk9vtygs3sUJlaDi1StsxTRNkCHEytvsYeffbF+sjq4d2bqcROPmDipo07VdH/Y39vCInczvWzubOQfUIHS00ACezDVHKOwcJwn88G4GTuf0HlWAZi4nu2O4AAAAASUVORK5CYII='
        },

        {
            name: 'glitch',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUAAACAgICmpqa0tLTAwMBW9+IOAAAAZklEQVR4AS3LAQoEIRTD0KbN/c+8+HcCUnxoUEBQ25JO/0gBAiaqW1IIqslM6PxedAnv0IMnWxJp1OX/JfYP4uh0tkGYstFXmIisA0q8WndrdHebH+AgF/0g8XpLBrMtgNDsCVK5fiSkAjR8RMHvAAAAAElFTkSuQmCC'
        },

        {
            name: 'glitchShot',
            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUAAACAgICmpqa0tLTAwMBW9+IOAAAAZklEQVR4AT3NMULAABTCUAK5/5n1t1WGDG8hKCCobUmnL9JLwFV1qz1QE3dlI2B+t7f0H3aVRl3irusL4uh0tkGYstFbmIisA0p81jrVGl0riR/g4O/zA/WBqmQwu6QgNDtBKs9+AC4bAjws5NC8AAAAAElFTkSuQmCC'
        }
    ];

    G.initImages = function initImages() {
        var loadPromises = imageData.map(function (data) {
            return loadAndRegisterImage(data);
        });

        return Promise.all(loadPromises);
    };

    function loadAndRegisterImage(data) {
        return new Promise(function (resolve) {
            var image = new Image();
            
            image.onload = function () {
                G.images[data.name] = image;
                resolve();
            };

            image.src = data.src;
        });
    }
}());