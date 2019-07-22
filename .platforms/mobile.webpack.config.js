/**
 *  ===X DO NOT TOUCH CODE BELOW X===
 *
 * Export platform specific webpack configuration.
 * This will be merged with core webpack configuration.
 */
module.exports = {
    entry: [
        './src/index.mobile.js'
    ],
    resolve: {
        extensions: [ '.mobile.js', '.mobile.jsx', '.js', '.jsx', '.mobile.scss', '.scss' ]
    }
};
