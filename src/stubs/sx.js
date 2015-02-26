'use strict';

function sx(css, classNames) {
    return !css
        ? {}
        : Object.keys(classNames)
            .filter((className) => classNames[className])
            .reduce((prev, className) => Object.assign(prev, css[className]), {});
}

export default sx;