const webpackConfig = require('@psychological-components/core/webpack.config')(__dirname);

module.exports = {
    ...webpackConfig,
    entry: {
        'core-plutchik': './plutchik/src/main.ts',
        'core-plutchik-theme': './plutchik/src/themes/core/theme.less',
        'dark-plutchik': './plutchik/src/themes/dark/theme.less'
    }
};