'use strict';

function sxw(css, exceptions) {
    return Object.keys(css)
        .filter((property) => {
            return exceptions.indexOf(property) === -1;
        })
        .reduce((prev, property) => assign(prev, css[property]), {});
}

export default sxw;