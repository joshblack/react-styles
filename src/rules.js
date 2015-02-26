'use strict';

let rules = new Map();

rules.set('minWidth', (styleWidth, contextWidth) => {
    return styleWidth < contextWidth;
});

rules.set('maxWidth', (styleWidth, contextWidth) => {
    return styleWidth > contextWidth;
});

export default rules;