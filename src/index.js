'use strict';

import rules from './rules';
import _ from 'lodash';

function findStyleContext(type, props, context) {
    return Object.keys(props).filter((prop) => {
        let rule = rules.get(type);

        return rule(Number(prop), context.windowWidth);
    }).reduce((o, k) => Object.assign(o, props[k]), {});
}

function styleHelper(styles, context) {
    return _.mapValues(styles, (style) => {
        return Object.keys(style).reduce((o, k) => {
            let props = style[k];

            return _.isObject(props)
                ? Object.assign(o, findStyleContext(k, props, context))
                : Object.assign(o, { [k]: props });
        }, {});
    });
}

export default styleHelper;