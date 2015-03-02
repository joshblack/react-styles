"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _ = _interopRequire(require("lodash"));

var invariant = _interopRequire(require("../vendor/invariant"));

// Valid Usage:
// sx(styles, ...classes) OR
// sx(styles, 'open', 'base');
// sx(styles, { open: true, base: true });

function sx(css) {
    for (var _len = arguments.length, classNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        classNames[_key - 1] = arguments[_key];
    }

    invariant(_.isObject(css), "The sx helper requires a valid styles object to be passed in as the first argument.");

    invariant(check(css, classNames), "All the class names passed into the sx helper should exist on the styles object passed in as the first argument.");

    if (_.isObject(classNames[0])) {
        return Object.keys(classNames).filter(function (className) {
            return classNames[className];
        }).reduce(function (prev, className) {
            return Object.assign(prev, css[className]);
        }, {});
    } else {}
}

module.exports = sx;

function check(css, classes) {
    var classNames = Object.keys(css),
        classNamesToCheck = _.isObject(classes) ? Object.keys(classes) : classes,
        intersection = classNamesToCheck.filter(function (x) {
        return classNames[x];
    });

    return Object.is(intersection, classNamesToCheck);
}