"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var invariant = _interopRequire(require("../vendor/invariant"));

var rules = new Map();

rules.set("minWidth", function (styleWidth, context) {

  invariant(!Number.isNaN(Number(styleWidth)), "Keys in media query declarations must be valid numbers.");

  invariant(context.contextWidth, "A contextWidth must be set on the context object passed into React Styles in order for media query rules to work.");

  return context.contextWidth >= Number(styleWidth);
});

rules.set("maxWidth", function (styleWidth, context) {

  invariant(!Number.isNaN(Number(styleWidth)), "Keys in media query declarations must be valid numbers.");

  invariant(context.contextWidth, "A contextWidth must be set on the context object passed into React Styles in order for media query rules to work.");

  return context.contextWidth <= Number(styleWidth);
});

module.exports = rules;