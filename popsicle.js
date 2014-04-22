/*!
 * @author Sean Coker <sean@seancoker.com>
 * @version 0.1.0
 * @url https://github.com/okcoker/popsicle
 */

;(function() {
    var DEFAULTS = {
            url: null,
            height: 500,
            width: 700,
            window_options: {
                name: 'Popsicle',
                toolbar: 'no',
                menubar: 'no',
                scrollbars: 'no',
                resizable: 'no',
                location: 'no',
                directories: 'no',
                status: 'no',
                top: 'auto',
                left: 'auto'
            }
        },

        _isObj = function(obj) {
            return obj && obj.constructor && obj.constructor === Object;
        },

        _deepExtend = function() {
            if (arguments.length < 2) {
                return;
            }
            var master = arguments[0];
            for (var i = 1, l = arguments.length; i < l; i++) {
                var obj = arguments[i];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key) && obj[key] && _isObj(obj[key])) {
                          master[key] = _deepExtend(master[key] || {}, obj[key]);
                    }
                    else {
                        master[key] = obj[key];
                    }
                }
            }

            return master;
        };

    /**
     * @constructor
     * @name Popsicle
     */
    function Popsicle() {
        var self = this;
        self.sticks = {};

        return self;
    }

    /**
     * Add a custom stick/key name to call upon with open()
     *
     * @param  {String} key hash key to store custom options for
     * @param  {Object} options custom options for the key
     */
    Popsicle.prototype.stick = function(key, options) {
        var self = this,
            filtered = self._parseOptions(options);

        self.sticks[key] = filtered;

        return self;
    };

    /**
     * Open a window key'd by a hash key, or just a new window with custom options
     *
     * @param  {String|Object} key     hash key to look up or custom options
     * @param  {Object} options Custom options to open the window with
     * @return {Object}         The opened window
     */
    Popsicle.prototype.open = function(key, options) {
        var self = this,
            custom = self.sticks[key],
            is_valid_key = typeof key === 'string' && _isObj(custom);

        // Passed only options in, allow for argument switching
        if (typeof key !== 'string' && _isObj(key)) {
            options = key;
        }
        // Register custom stick
        else if (is_valid_key) {
            if (_isObj(options)) {
                options = _deepExtend({}, custom, options);
            }
            else {
                options = self.sticks[key];
            }
        }

        if (_isObj(options)) {
            options = self._parseOptions(options);
        }

        return self._open(options);
    };

    /**
     * Parse options. As of right now it doesnt do much.
     *
     * @private
     * @param  {Object} options Options to merge
     * @return {Object}         new options
     */
    Popsicle.prototype._parseOptions = function(options) {
        return _deepExtend({}, DEFAULTS, options || {});
    };

    /**
     * Handles the parsing of options before window popup is initiated
     *
     * @private
     * @param  {Object} Options
     * @return {Object}         window object
     */
    Popsicle.prototype._open = function(options) {
        if (!options.url) {
            throw new Error('No url passed to Popsicle');
        }

        var url = typeof options.url === 'function' ? options.url() : options.url,
            exclude = ['name'],
            name = options.window_options.name,
            height = options.height,
            width = options.width,
            extras = '';

        for (var key in options.window_options) {
            if (options.window_options.hasOwnProperty(key) && exclude.indexOf(key) === -1) {
                // Center window if values left at auto
                if (key === 'left' && options.window_options[key] === 'auto') {
                    options.window_options[key] = Math.max(0, (window.innerWidth - width) / 2);
                }
                if (key === 'height' && options.window_options[key] === 'auto') {
                    options.window_options[key] = Math.max(0, (window.innerHeight - height) / 2);
                }
                extras += (',' + key + '=' + options.window_options[key]);
            }
        }

        return window.open(url, name, 'height=' + height + ', width=' + width + extras);
    };

    window.Popsicle = Popsicle;
})();
