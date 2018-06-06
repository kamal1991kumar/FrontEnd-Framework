const path = require('path');
const shortid = require('shortid');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/**
 * ===X DO NOT TOUCH CODE BELOW X===
 * set build platform based on environment variable
 */
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'default';


/*=========== WEBPACK HELPER FUNCTIONS ===========*/

// copy webpack plugin `src => dist` mapper
const copyWebpackPluginMap = ( srcDir, destDir ) => {
    return { from: path.resolve( __dirname, srcDir ), to: path.resolve( __dirname, 'dist', PLATFORM, destDir ) };
};

/*================================================*/


/**
 * ===X DO NOT TOUCH CODE BELOW X===
 * 
 * load platform dependent webpack configuration
 */
const platformConfig = require(`./__platforms__/${ PLATFORM }.webpack.config.js`);

/**
 * core configurations of webpack,
 * this will be eventually merged with `platformConfig`
 */
const coreConfig = {
    // webpack optimization mode
    mode: ( process.env.NODE_ENV ? process.env.NODE_ENV : 'development' ),
    
    // entry file(s)
    entry: [
        './src/index.js',
        './src/scss/index.scss'
    ],
    
    // output file(s) and chunks
    output: {
        path: path.resolve( __dirname, `dist/${ PLATFORM }` ),
        filename: '[name].js',

        // it's the path of assets insertion in HTML page
        // must be `/` in WDS but should be `./` on production server
        publicPath: ( process.env.NODE_ENV === 'production' ? './' : '/' ),
    },

    // module/loaders configuration
    module: {
        rules: [
            // use eslint for linting `.js` or `.jsx` files
            {
                enforce: 'pre', // ==> only original/non-transformed files
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

            // extract CSS to file(s) only in production
            // for performance improvement in development mode
            {
                test: /\.scss$/,
                use: [ 
                    ( process.env.NODE_ENV === 'production' ? MiniCSSExtractPlugin.loader : 'style-loader' ),
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
         * ===X WARNING X===
         * do not add `.js` extension below.  `.js` extensions will 
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
    // allow only non-empty plugin by using `filter`
    plugins: [
        // to preview/build HTML pages
        new HTMLWebpackPlugin( {
            filename: 'index.html',
            template: path.resolve( __dirname, 'src/pages/index.html' )
        } ),

        // to `as-is` copy files/folders
        // use `copyWebpackPluginMap( dirPath, folderNameInDist )` to create destribution map
        new CopyWebpackPlugin( [
            copyWebpackPluginMap( 'src/assets', 'assets' )
        ] ),

        // extract CSS to a file
        // use only in `production` for faster development
        ( process.env.NODE_ENV != 'production' ) ? null : new MiniCSSExtractPlugin( {
            chunkFilename: 'style.css'
        } ),

        // rename chunk file names using `NamedChunksPlugin`
        // `chunk.name` will be `null` if chunk is not a `cacheGroups` bundle
        // use only in `production` for faster development
        ( process.env.NODE_ENV != 'production' ) ? null : new webpack.NamedChunksPlugin( chunk => {
            return chunk.name ? chunk.shortid : shortid.generate().toLocaleLowerCase() + '.chunk';
        } ),

        // remove chunk files from distribution before new build
        // use only in `production` for faster development
        ( process.env.NODE_ENV != 'production' ) ? null : new CleanWebpackPlugin([
            path.resolve( __dirname, 'dist', PLATFORM, '*.chunk.js' ),
            path.resolve( __dirname, 'dist', PLATFORM, '*.chunk.css' )
        ])
    ].filter( Boolean ), // filter only non `null` plugins

    // webpack optimizations
    optimization: {
        splitChunks: {
            maxAsyncRequests: 2, // max. 2 `.js` file lazy load in parallel
            maxInitialRequests: 2, // max. 2 `.js` file lazy load at entry in parallel
            
            cacheGroups: {
                vendor: {
                    chunks: 'all', // both : sync + async imports
                    name: 'vendor', // [name] of chunk file being generated
                    test: /(node_modules|src\/js\/vendor)/, // test path [RegExp, function or string]
                    priority: -10, // high priority chunk will have modules also matches other cache groups,
                    enforce: true, // force this chunk to split despite of `splitChunks` conditions
                },
                main: {
                    chunks: 'initial', // only sync imports
                    name: 'main',
                    priority: -20,
                    reuseExistingChunk: true, // re-use chunks instead of creating new, use `vendor` chunks
                    enforce: true
                }
            }
        }
      },

    // development server configuration
    devServer: {
        // must be `true` for SPAs
        historyApiFallback: true,

        // open browser on server start
        open: true
    }
};

/**
 * export final webpack configuration.
 * Use `webpack-merge` to "smart merge" different configurations.
 * https://github.com/survivejs/webpack-merge#mergesmartconfiguration-configuration
 */
module.exports = merge.smart( coreConfig, platformConfig );