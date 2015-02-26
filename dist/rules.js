"use strict";

var rules = new Map();

rules.set("minWidth", function (styleWidth, contextWidth) {
    return styleWidth < contextWidth;
});

rules.set("maxWidth", function (styleWidth, contextWidth) {
    return styleWidth > contextWidth;
});

module.exports = rules;