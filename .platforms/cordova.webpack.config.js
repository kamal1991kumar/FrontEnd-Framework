/**
 *  ===X DO NOT TOUCH CODE BELOW X===
 * 
 * Export platform specific webpack configuration.
 * This will be merged with core webpack configuration.
 */
module.exports = {
    resolve: {
        extensions: [
            '.cordova.js',
            '.cordova.jsx',
            '.js',
            '.jsx'
        ]
    }
}