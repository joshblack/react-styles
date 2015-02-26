"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var rules = _interopRequire(require("./rules"));

var _ = _interopRequire(require("lodash"));

function findStyleContext(type, props, context) {
    return Object.keys(props).filter(function (prop) {
        var rule = rules.get(type);

        return rule(Number(prop), context.windowWidth);
    }).reduce(function (o, k) {
        return Object.assign(o, props[k]);
    }, {});
}

function styleHelper(styles, context) {
    return _.mapValues(styles, function (style) {
        return Object.keys(style).reduce(function (o, k) {
            var props = style[k];

            return _.isObject(props) ? Object.assign(o, findStyleContext(k, props, context)) : Object.assign(o, _defineProperty({}, k, props));
        }, {});
    });
}

module.exports = styleHelper;