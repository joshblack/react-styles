"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var _ = _interopRequire(require("lodash"));

var findStyleContext = _interopRequire(require("./findStyleContext"));

/**
 * Converts an object of generic styles into an object holding styles for a given context.
 *
 * @param  {Object}  styles   Styles for the component
 * @param  {Object}  context  The state of the world, or the context of the component
 * @return {Object}           An object of valid for the given context
 */
function styleHelper(styles, context) {

  return _.mapValues(styles, function (style) {

    // Iterate through the properties of a style and add them to the resulting object.
    return Object.keys(style).reduce(function (o, k) {
      var props = style[k];

      // Check if the properties are nested.
      return _.isObject(props)

      // If so, we need to find valid property definitions given a context.
      ? Object.assign(o, findStyleContext(k, props, context))

      // Otherwise, just assign the property to the resulting object.
      : Object.assign(o, _defineProperty({}, k, props));
    }, {});
  });
}

module.exports = styleHelper;