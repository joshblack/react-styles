'use strict';

import _ from 'lodash';
import check from './check';
import invariant from '../vendor/invariant';

// Valid Usage:
// sx(styles, ...classes) OR
// sx(styles, 'open', 'base');
// sx(styles, { open: true, base: false });

/**
 * Grabs all valid styles specified as class names from the styles object
 * @param  {Object}             styles         The object which holds all the styles
 * @param  {...[String|Object]} classNames  Array of Class names or an Object with class names as keys
 * @return {Object}                         Object of valid styles
 */
function sx(styles, ...classNames) {
    invariant(
        _.isPlainObject(styles),
        'The sx helper requires a valid styles object to be passed in as the first argument.'
    );

    invariant(
        check(styles, ...classNames),
        'All the class names passed into the sx helper should exist on the styles object passed in as the first argument.'
    );

    if (_.isPlainObject(classNames[0])) {
        classNames = Object.keys(classNames[0])
            .filter((className) => classNames[0][className]);
    }

    return classNames.reduce((style, className) => {
        return Object.assign(style, styles[className]);
    }, {});
}

export default sx;
