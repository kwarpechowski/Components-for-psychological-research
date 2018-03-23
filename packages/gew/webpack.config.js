module.exports = {
    entry: './lib/index.js',
    output: {
        path: __dirname + "/umd",
        filename: 'gew.js',
        libraryTarget: 'umd',
        library: 'GEW'
    }
};
