module.exports = {
    entry: './lib/index.js',
    output: {
        path: __dirname + "/umd",
        filename: 'plutchik.js',
        libraryTarget: 'umd',
        library: 'Plutchik'
    }
};
