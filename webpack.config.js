const path = require('path');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

// set build platform
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'default';

/**
 * ===X DO NOT TOUCH CODE BELOW X===
 * 
 * Load platform dependent webpack configuration
 */
const platformConfig = require(`./__platforms__/${ PLATFORM }.webpack.config.js`);

/**
 * Core configurations of webpack,
 * this will be eventually merged with `platformConfig`
 */
const coreConfig = {
    // webpack optimization mode
    mode: ( process.env.NODE_ENV ? process.env.NODE_ENV : 'development' ),
    
    // entry file(s)
    entry: './src/index.js',
    
    // output file(s) and chunks
    output: {
        path: path.resolve( __dirname, `dist/${ PLATFORM }` ),
        filename: 'main.js',
        publicPath: '/'
    },

    // loaders configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    // resolve files configuration
    resolve: {
        /**
         * ===X WARNING X===
         * Do not add `.js` extension below.  `.js` extensions will 
         * be received & merged from `platformConfig`.
         */
        extensions: [
            '.scss',
            '.css',
            '.json'
        ],

        // alias
        alias: {
            'animations'    :  path.resolve( __dirname, 'src/js/animations' ),
            'components'    :  path.resolve( __dirname, 'src/js/components' ),
            'controllers'   :  path.resolve( __dirname, 'src/js/controllers' ),
            'models'        :  path.resolve( __dirname, 'src/js/models' ),
            'modules'       :  path.resolve( __dirname, 'src/js/modules' ),
            'router'        :  path.resolve( __dirname, 'src/js/router' ),
            'services'      :  path.resolve( __dirname, 'src/js/services' ),
            'store'         :  path.resolve( __dirname, 'src/js/store' ),
            'vendors'       :  path.resolve( __dirname, 'src/js/vendors' ),
            'views'         :  path.resolve( __dirname, 'src/js/views' )
        }
    },

    // webpack plugins
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.resolve( __dirname, 'src/pages/index.html' )
        })
    ],

    // development server configuration
    devServer: {
        // must be `true` for SPAs
        historyApiFallback: true,

        // open browser on server start
        open: true
    }
};

/**
 * Export final webpack configuration.
 * Use `webpack-merge` to "smart merge" different configurations.
 * https://github.com/survivejs/webpack-merge#mergesmartconfiguration-configuration
 */
module.exports = merge.smart( coreConfig, platformConfig );