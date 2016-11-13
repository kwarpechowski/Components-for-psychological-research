module.exports = {  
  entry: {
    'core': './gew/src/main.ts',
    'rainbow': './gew/src/themes/rainbow/theme.less'
  },
  output: {
    path: './gew/dist', // TODO KW MANY ENDPOINTS
    filename: "[name]-gew.js"
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
    }
};