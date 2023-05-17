const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};