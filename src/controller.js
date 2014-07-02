(function() {

    var Controller = function() { this.init(); };
    Controller.prototype = {

        // input
        KEYS: null,
        KEY_SPACE: 32,

        init: function() {
            this.KEYS = [];
            // keyboard events
            var self = this;
            document.onkeydown = function() { self.keyPressHandler.apply(self, arguments); };
            document.onkeyup   = function() { self.keyReleaseHandler.apply(self, arguments); };

            window.onresize = function() { self.resize.apply(self, arguments); };
            this.resize();
        },

        resize: function( e ) {
        },

        keyPressHandler: function( e ) {
            var key_code = ( window.event ) ? event.keyCode : e.keyCode;
            this.KEYS[key_code] = true;
            // do something with the keys
            this.processKeys();
        },

        keyReleaseHandler: function( e ) {
            var key_code = ( window.event ) ? event.keyCode : e.keyCode;
            this.KEYS[key_code] = false;
        },

        processKeys: function() {
            if( this.KEYS[this.KEY_SPACE] ) {
            }
        }
    };

    window.Controller = Controller;

}());