/**
 *  ===X DO NOT TOUCH CODE BELOW X===
 * 
 * Export platform specific webpack configuration.
 * This will be merged with core webpack configuration.
 */
module.exports = {
    entry: [
        './src/index.js'
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
