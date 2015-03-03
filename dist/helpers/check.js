"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _ = _interopRequire(require("lodash"));

/**
 * Verifies that all class names given by classes are present in the css object
 * @param  {Object}             css      The styles object that we are checking against
 * @param  {...[String|Object]} classes  Object of classes or classes passed into check
 * @return {Boolean}            Whether or not all class names are present
 */
function check(css) {
    for (var _len = arguments.length, classes = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        classes[_key - 1] = arguments[_key];
    }

    var classNames = Object.keys(css),
        classNamesToCheck = _.isPlainObject(classes[0]) ? Object.keys(classes[0]) : classes;

    return classNamesToCheck.every(function (e) {
        return classNames.includes(e);
    });
}

module.exports = check;