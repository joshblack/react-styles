'use strict';

import React from 'react';

const Window = {

    getInitialState () {
        return {
            'windowWidth': window.innerWidth
        }
    },

    childContextTypes: {
        'windowWidth': React.PropTypes.number
    },

    getChildContext () {
        return {
            'windowWidth': this.state.windowWidth
        }
    },

    handleWindowResize () {
        this.setState({ 'windowWidth': window.innerWidth });
    },

    componentDidMount () {
        window.addEventListener('resize', this.handleWindowResize);
    },

    componentWillUnmount () {
        window.removeEventListener('resize', this.handleWindowResize);
    }
}

export default Window;