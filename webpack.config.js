const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: `${__dirname}/app`,
  entry: {
      'core-gew': './gew/src/main.ts',
      'core-gew-theme': './gew/src/themes/core/theme.less',
      'rainbow-gew': './gew/src/themes/rainbow/theme.less',
      'core-plutchik': './plutchik/src/main.ts',
      'core-plutchik-theme': './plutchik/src/themes/core/theme.less',
      'dark-plutchik': './plutchik/src/themes/dark/theme.less'
  },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
        modules: [
          path.join(__dirname, 'node_modules'),
          path.resolve(__dirname, 'app')
        ]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    tsConfigFile: 'tslint.json'
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ],
    }
};