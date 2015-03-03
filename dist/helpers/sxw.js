"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _ = _interopRequire(require("lodash"));

var check = _interopRequire(require("./check"));

var invariant = _interopRequire(require("../vendor/invariant"));

// Valid Usage:
// sxw(styles, ...classes) OR
// sxw(styles, 'open', 'base');
// sxw(styles, { open: false, base: true });

/**
 * Grabs all valid styles not specified as exceptions from the styles object
 * @param  {Object}             styles         The object which holds all the styles
 * @param  {...[String|Object]} exceptions  Array of Class names or an Object with class names as keys
 * @return {Object}                         Object of valid styles
 */
function sxw(styles) {
    for (var _len = arguments.length, exceptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        exceptions[_key - 1] = arguments[_key];
    }

    invariant(_.isPlainObject(styles), "The sxw helper requires a valid styles object to be passed in as the first argument.");

    invariant(check.apply(undefined, [styles].concat(exceptions)), "All the class names passed into the sxw helper should exist on the styles object passed in as the first argument.");

    if (_.isPlainObject(exceptions[0])) {
        exceptions = Object.keys(exceptions[0]).filter(function (className) {
            return exceptions[0][className];
        });
    }

    var validStyles = Object.keys(styles).filter(function (style) {
        return !exceptions.includes(style);
    });

    return validStyles.reduce(function (style, className) {
        return Object.assign(style, styles[className]);
    }, {});
}

module.exports = sxw;