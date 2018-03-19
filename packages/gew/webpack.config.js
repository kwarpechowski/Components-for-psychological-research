const webpackConfig = require('@psychological-components/core/webpack.config')(__dirname);

module.exports = {
    ...webpackConfig,
    entry: {
        'core-gew': './gew/src/main.ts',
        'core-gew-theme': './gew/src/themes/core/theme.less',
        'rainbow-gew': './gew/src/themes/rainbow/theme.less'
    }
};