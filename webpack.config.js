var webpack = require('webpack');

module.exports = {
  entry: {
    'core-gew': './gew/src/main.ts',
    'rainbow-gew': './gew/src/themes/rainbow/theme.less',
      'core-plutchik': './plutchik/src/main.ts',
      'dark-plutchik': './plutchik/src/themes/dark/theme.less'
  },
  output: {
    path: './dist', // TODO KW MANY ENDPOINTS
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    preLoaders: [
        {
            test: /\.ts$/,
            loader: "tslint",
            exclude: "node_modules"
        }
    ],
    loaders: [
      { 
        test: /\.ts$/, 
        loader: 'ts-loader' 
      },{
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  tslint: {
      failOnHint: true,
      configuration: require('./tslint.json')
  },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};