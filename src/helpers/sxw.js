'use strict';

import _ from 'lodash';
import check from './check';
import invariant from '../vendor/invariant';

// Valid Usage:
// sxw(styles, ...classes) OR
// sxw(styles, 'open', 'base');
// sxw(styles, { open: false, base: true });

/**
 * Grabs all valid styles not specified as exceptions from the styles object
 * @param  {Object}             styles         The object which holds all the styles
 * @param  {...[String|Object]} exceptions  Array of Class names or an Object with class names as keys
 * @return {Object}                         Object of valid styles
 */
function sxw(styles, ...exceptions) {

    invariant(
        _.isPlainObject(styles),
        'The sxw helper requires a valid styles object to be passed in as the first argument.'
    );

    invariant(
        check(styles, ...exceptions),
        'All the class names passed into the sxw helper should exist on the styles object passed in as the first argument.'
    );

    if (_.isPlainObject(exceptions[0])) {
        exceptions = Object.keys(exceptions[0])
            .filter((className) => exceptions[0][className]);
    }

    let validStyles = Object.keys(styles)
        .filter((style) => !exceptions.includes(style));

    return validStyles.reduce((style, className) => {
        return Object.assign(style, styles[className]);
    }, {});
}

export default sxw;