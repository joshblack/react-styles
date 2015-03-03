"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var styleHelper = _interopRequire(require("./styleHelper"));

var ReactStyles = (function () {
    function ReactStyles(context) {
        _classCallCheck(this, ReactStyles);

        this.context = context;
    }

    _prototypeProperties(ReactStyles, null, {
        getStylesFor: {
            value: function getStylesFor(className) {
                return styleHelper(className, this.context);
            },
            writable: true,
            configurable: true
        }
    });

    return ReactStyles;
})();

module.exports = ReactStyles;