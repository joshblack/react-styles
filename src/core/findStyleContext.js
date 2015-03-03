'use strict';

import rules from './rules';
import invariant from '../vendor/invariant';

/**
 * Finds valid properties for a given context and type.
 *
 * @param  {String} type    The type of rule we are verifying
 * @param  {Object} props   All styles that we are looking to verify
 * @param  {Object} context The state of the world or a given component context
 *
 * @return {Object}         An object containing all valid styles for a given context and type
 */
function findStyleContext(type, props, context) {

  invariant(
    rules.has(type),
    'findStyleContext: Unable to find a rule for the corresponding type. This function requires a valid @media property in order to find valid styles for the given context.'
  );

  let rule = rules.get(type);

  return Object.keys(props)
      .filter((prop) => rule(prop, context))
      .reduce((o, k) => Object.assign(o, props[k]), {});
}

export default findStyleContext;
