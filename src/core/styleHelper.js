'use strict';

import _ from 'lodash';
import findStyleContext from './findStyleContext';

/**
 * Converts an object of generic styles into an object holding styles for a given context.
 *
 * @param  {Object}  styles   Styles for the component
 * @param  {Object}  context  The state of the world, or the context of the component
 * @return {Object}           An object of valid for the given context
 */
function styleHelper(styles, context) {

  return _.mapValues(styles, (style) => {

    // Iterate through the properties of a style and add them to the resulting object.
    return Object.keys(style).reduce((o, k) => {
      let props = style[k];

      // Check if the properties are nested.
      return _.isObject(props)

        // If so, we need to find valid property definitions given a context.
        ? Object.assign(o, findStyleContext(k, props, context))

        // Otherwise, just assign the property to the resulting object.
        : Object.assign(o, { [k]: props });

    }, {});

  });

}

export default styleHelper;
