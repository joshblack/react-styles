'use strict';

module.exports = {
    'entry': './index.js',

    'output': {
        path: __dirname,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader?experimental'] }
        ]
    }
}