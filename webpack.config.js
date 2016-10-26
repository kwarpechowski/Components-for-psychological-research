module.exports = {  
  entry: {
    'core': './src/main.ts',
    'rainbow': './src/main-rainbow.ts',
  },
  output: {
    path: './dist',
    filename: "[name]-gew.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
      { 
        test: /\.ts$/, 
        loader: 'ts-loader' 
      },{
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  }
}