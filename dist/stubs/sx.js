"use strict";

function sx(css, classNames) {
    return !css ? {} : Object.keys(classNames).filter(function (className) {
        return classNames[className];
    }).reduce(function (prev, className) {
        return Object.assign(prev, css[className]);
    }, {});
}

module.exports = sx;