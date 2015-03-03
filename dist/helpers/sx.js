"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _ = _interopRequire(require("lodash"));

var check = _interopRequire(require("./check"));

var invariant = _interopRequire(require("../vendor/invariant"));

// Valid Usage:
// sx(styles, ...classes) OR
// sx(styles, 'open', 'base');
// sx(styles, { open: true, base: false });

/**
 * Grabs all valid styles specified as class names from the styles object
 * @param  {Object}             styles         The object which holds all the styles
 * @param  {...[String|Object]} classNames  Array of Class names or an Object with class names as keys
 * @return {Object}                         Object of valid styles
 */
function sx(styles) {
    for (var _len = arguments.length, classNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        classNames[_key - 1] = arguments[_key];
    }

    invariant(_.isPlainObject(styles), "The sx helper requires a valid styles object to be passed in as the first argument.");

    invariant(check.apply(undefined, [styles].concat(classNames)), "All the class names passed into the sx helper should exist on the styles object passed in as the first argument.");

    if (_.isPlainObject(classNames[0])) {
        classNames = Object.keys(classNames[0]).filter(function (className) {
            return classNames[0][className];
        });
    }

    return classNames.reduce(function (style, className) {
        return Object.assign(style, styles[className]);
    }, {});
}

module.exports = sx;