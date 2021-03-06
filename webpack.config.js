const path = require( 'path' );
const shortid = require( 'shortid' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const _ = require( 'lodash' );
const boolean = require( 'boolean' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const ConfigWebpackPlugin = require( 'config-webpack' );
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// extra webpack configuration
const { alias } = require( './webpack.config.extra' );

/**
 * Set build platform based on environment variable
 */
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'default';

/**
 * Set valid node environment variable
 */
process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';


/**
 * Initialize process environment variables from `env.js` file
 */
const envVariables = require( './env.js' );
Object.entries( envVariables ).forEach( ( [ name, value ] ) => {
    if( _.isEmpty( process.env[ name ] ) ) {
        process.env[ name ] = value;
    }
} );


/*=========== WEBPACK HELPER FUNCTIONS ===========*/

// Copy static assets, webpack plugin `src => dist` mapper
const copyWebpackPluginMap = ( srcDir, destDir ) => {
    return { from: path.resolve( __dirname, srcDir ), to: path.resolve( __dirname, 'dist', PLATFORM, destDir ) };
};


/*================================================*/


/**
 * Load platform dependent webpack configuration
 */
const platformConfig = require( `./.platforms/${ PLATFORM }.webpack.config.js` );

/**
 * Core configurations of webpack,
 * this will be eventually merged with `platformConfig`
 */
const coreConfig = {
    
    // webpack optimization mode
    mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),
    
    // entry file(s) : entry .js file is provided by platform specific webpack config file
    entry: [

        // stylesheet
        './src/scss/app.style.scss',

        // inject service worker initializer script
        ( false === boolean( _.get( process, 'env.WDS_SW', false ) ) ) ? null : './src/js/sw/init.js'
    ].filter( Boolean ),
    
    // output file(s) and chunks
    output: {
        path: path.resolve( __dirname, `dist/${ PLATFORM }` ),
        filename: 'js/[name].js',

        // it's the path of assets insertion in HTML page
        // must be `/` in WDS but should be `./` on production server
        publicPath: ( 'production' === process.env.NODE_ENV  ? './' : '/' )
    },

    // module/loaders configuration
    module: {
        rules: [
            
            // use eslint for linting `.js` or `.jsx` files
            {
                enforce: 'pre', // ==> allow only original/non-transformed files to pass
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                options: {
                    emitWarning: true,
                    formatter: require( 'eslint-friendly-formatter' )
                }
            },

            // use babel-loader for `.js` or `.jsx` files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },

            
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader, // extract CSS to file
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    // resolve files configuration
    resolve: {
        
        /**
         * Do not add `.js` extension below.  `.js` extensions will
         * be received & merged from `platformConfig`.
         */
        extensions: [
            '.json'
        ],

        // module alias
        alias: alias
    },

    // webpack plugins
    // allow only non-empty plugin by using `filter`
    plugins: [

        // do not allow case-insensitivity in import paths
        new CaseSensitivePathsPlugin(),
        
        // use `index.html` to bootstrap application
        new HTMLWebpackPlugin( {
            filename: 'index.html',
            template: path.resolve( __dirname, 'src/index.html' )
        } ),

        // to `as-is` copy files/folders
        // use `copyWebpackPluginMap( dirPath, folderNameInDist )` to create distribution map
        new CopyWebpackPlugin( [
            copyWebpackPluginMap( 'src/assets', 'assets' ),

            // copy service worker file
            ( false === boolean( _.get( process, 'env.WDS_SW', false ) ) ) ? null : copyWebpackPluginMap( 'src/js/sw/sw.js', 'sw.js' ),

            // copy documentation to distribution when `WDS_INJECT_DOC` environment variable is `true`
            ( false === boolean( _.get( process, 'env.WDS_INJECT_DOC', false ) ) ) ? null : copyWebpackPluginMap( 'documentation', 'documentation' )
        ].filter( Boolean ) ),

        // extract CSS to a file
        new MiniCSSExtractPlugin( {
            filename: 'css/style.css'
        } ),

        // rename chunk file names using `NamedChunksPlugin`
        // `chunk.name` will be `null` if chunk is not a `cacheGroups` bundle
        // use only in `production` for faster development
        ( 'production' !== process.env.NODE_ENV ) ? null : new webpack.NamedChunksPlugin( chunk => {
            return chunk.name ? chunk.name : `chunks/${ shortid.generate().toLowerCase() }.chunk`;
        } ),

        // remove chunk files from distribution before new build
        // use only in `production` for faster development
        ( 'production' !== process.env.NODE_ENV  ) ? null : new CleanWebpackPlugin( {
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: [
                path.resolve( __dirname, 'dist', PLATFORM, 'js/chunks/**/*' ),
                path.resolve( __dirname, 'dist', PLATFORM, 'css/chunks/**/*' )
            ]
        } ),

        // ConfigWebpackPlugin is used here to use `node-config`
        // use `CONFIG` global variable to get environment
        // written in './config' json file
        new ConfigWebpackPlugin()
    ].filter( Boolean ), // filter only non `null` plugins

    // webpack optimizations
    optimization: {
        splitChunks: {
            maxAsyncRequests: 4, // max. 4 `.js` file async load request
            maxInitialRequests: 4, // max. 4 `.js` file sync load request
            minSize: 30 * 1000, // min. 30KB chunk size before split
            
            cacheGroups: {
                default: false,
                vendors: false,
                
                vendor: {
                    
                    // both : consider sync + async chunks for evaluation
                    chunks: 'all',
                    
                    // [name] of chunk file being generated
                    name: 'vendor',
                    
                    // test path [RegExp, function or string]
                    test: /(node_modules|src\/js\/vendor)/,

                    // high priority chunk will have modules also matches other cache groups,
                    priority: 20
                },
                common: {
                    name: 'common',
                    priority: 10,
                    minChunks: 2,
                    enforce: true,

                    // consider sync chunks for evaluation
                    chunks: 'initial',

                    // re-use chunks instead of creating new, use `vendor` chunks
                    reuseExistingChunk: true
                }
            }
        }
    },

    // development server configuration
    devServer: {
        
        // must be `true` for SPAs
        historyApiFallback: true,

        // open browser on server start
        open: true === boolean( _.get( process, 'env.WDS_OPEN', false ) )
    },

    // generate source map
    devtool: ( 'production' === process.env.NODE_ENV ? 'source-map' : 'cheap-module-eval-source-map' ),

    // avoid `fs` package error
    node: {
        fs: 'empty'
    },

    // performance
    performance: {
        hints: false
    }
};

/**
 * export final webpack configuration.
 * Use `webpack-merge` to "smart merge" different configurations.
 * https://github.com/survivejs/webpack-merge#mergesmartconfiguration-configuration
 */
module.exports = merge.smart( coreConfig, platformConfig );
