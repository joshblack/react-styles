'use strict';

import React from 'react';
import Greeting from '../Greeting';
import Window from '../mixins/Window';

const App = React.createClass({

    mixins: [Window],

    render () {
        return <Greeting/>
    }
});

export default App;