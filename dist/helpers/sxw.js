"use strict";

function sxw(css, exceptions) {
    return Object.keys(css).filter(function (property) {
        return exceptions.indexOf(property) === -1;
    }).reduce(function (prev, property) {
        return assign(prev, css[property]);
    }, {});
}

module.exports = sxw;