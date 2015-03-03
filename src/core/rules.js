'use strict';

import invariant from '../vendor/invariant';

let rules = new Map();

rules.set('minWidth', (styleWidth, context) => {

  invariant(
    !Number.isNaN(Number(styleWidth)),
    'Keys in media query declarations must be valid numbers.'
  );

  invariant(
    context.contextWidth,
    'A contextWidth must be set on the context object passed into React Styles in order for media query rules to work.'
  );

  return context.contextWidth >= Number(styleWidth);
});

rules.set('maxWidth', (styleWidth, context) => {

  invariant(
    !Number.isNaN(Number(styleWidth)),
    'Keys in media query declarations must be valid numbers.'
  );

  invariant(
    context.contextWidth,
    'A contextWidth must be set on the context object passed into React Styles in order for media query rules to work.'
  );

  return context.contextWidth <= Number(styleWidth)
});

export default rules;
