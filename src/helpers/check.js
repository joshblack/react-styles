'use strict';

import _ from 'lodash';

/**
 * Verifies that all class names given by classes are present in the css object
 * @param  {Object}             css      The styles object that we are checking against
 * @param  {...[String|Object]} classes  Object of classes or classes passed into check
 * @return {Boolean}            Whether or not all class names are present
 */
function check(css, ...classes) {
    let classNames = Object.keys(css),
        classNamesToCheck = _.isPlainObject(classes[0])
            ? Object.keys(classes[0])
            : classes;

    return classNamesToCheck.every((e) => classNames.includes(e));
}

export default check;