module.exports = {
    entry: './lib/index.js',
    output: {
        path: __dirname + "/umd",
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'plutchik'
    }
};
