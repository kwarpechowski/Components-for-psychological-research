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
    preLoaders: [
        {
            test: /\.ts$/,
            loader: "tslint"
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
        configuration: {
            rules: {
                "class-name": true,
                "comment-format": [true, "check-space"],
                "indent": [true, "spaces"],
                "no-duplicate-variable": true,
                "no-eval": true,
                "no-internal-module": true,
                "no-trailing-whitespace": true,
                "no-var-keyword": true,
                "one-line": [true, "check-open-brace", "check-whitespace"],
                "quotemark": [true, "double"],
                "semicolon": true,
                "triple-equals": [true, "allow-null-check"],
                "typedef-whitespace": [true, {
                    "call-signature": "nospace",
                    "index-signature": "nospace",
                    "parameter": "nospace",
                    "property-declaration": "nospace",
                    "variable-declaration": "nospace"
                }],
                "variable-name": [true, "ban-keywords"],
                "whitespace": [true,
                    "check-branch",
                    "check-decl",
                    "check-operator",
                    "check-separator",
                    "check-type"
                ]
                    }
                },
         
        // tslint errors are displayed by default as warnings 
        // set emitErrors to true to display them as errors 
        emitErrors: false,
 
        // tslint does not interrupt the compilation by default 
        // if you want any file with tslint errors to fail 
        // set failOnHint to true 
        failOnHint: true
    }
}