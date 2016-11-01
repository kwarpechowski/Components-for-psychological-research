module.exports = {  
  entry: {
    'core': './src/main.ts',
    'rainbow': './src/themes/rainbow/theme.less'
  },
  output: {
    path: './dist',
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