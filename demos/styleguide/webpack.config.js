'use strict';

var path = require('path');

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
    },

    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }
}