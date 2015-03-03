'use strict';

import styleHelper from './styleHelper';

class ReactStyles {
    constructor(context) {
        this.context = context;
    }

    getStylesFor (className) {
        return styleHelper(className, this.context);
    }
}

export default ReactStyles;
