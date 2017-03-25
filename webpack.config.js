const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        'core-gew': '../gew/src/main.ts',
        'core-gew-theme': '../gew/src/themes/core/theme.less',
        'rainbow-gew': '../gew/src/themes/rainbow/theme.less',
        'core-plutchik': '../plutchik/src/main.ts',
        'core-plutchik-theme': '../plutchik/src/themes/core/theme.less',
        'dark-plutchik': '../plutchik/src/themes/dark/theme.less'
    },
    output: {
        path: './dist', // TODO KW MANY ENDPOINTS
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
        modules: ['node_modules', path.resolve(__dirname, 'core')]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }, {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    tsConfigFile: 'tslint.json'
                }
            }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    }
};