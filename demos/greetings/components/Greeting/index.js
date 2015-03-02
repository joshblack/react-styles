'use strict';

import React from 'react';
import sx from '../../../../dist/stubs/sx';
import styles from 'react-styles!./styles';
import styleHelper from '../../../../index';

const Greeting = React.createClass({

    contextTypes: {
        'windowWidth': React.PropTypes.number.isRequired
    },

    getInitialState () {
        return { open: false };
    },

    handleOnClick () {
        this.setState({ open: !this.state.open })
    },

    styles () {
        const { base, open } = styleHelper(styles, this.context);

        return Object.assign({}, { base }, { open });
    },

    render () {

        let style = sx(this.styles(), {
            'base': true,
            'open': this.state.open
        });

        return (
            <div>
                <h1 style={style}>Hello from React Styles!</h1>
                <button onClick={this.handleOnClick}>Toggle styles</button>
            </div>
        );
    }

});

export default Greeting;
