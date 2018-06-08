const path = require( 'path' );
const shortid = require( 'shortid' );
const glob = require( 'glob' );
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const ConfigWebpackPlugin = require( 'config-webpack' );

/**
 * ===X DO NOT MODIFY CODE BELOW X===
 * Set build platform based on environment variable
 */
const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'default';


/**
 * Initialize process environment variables from env.js file
 */
const envVariables = require( './env.js' );
Object.entries( envVariables ).map( ( [ name, value ] ) => {
    process.env[ name ] = value;
} );


/*=========== WEBPACK HELPER FUNCTIONS ===========*/

// Copy static assets, webpack plugin `src => dist` mapper
const copyWebpackPluginMap = ( srcDir, destDir ) => {
    return { from: path.resolve( __dirname, srcDir ), to: path.resolve( __dirname, 'dist', PLATFORM, destDir ) };
};

/*================================================*/


/**
 * ===X DO NOT MODIFY CODE BELOW X===
 * Load platform dependent webpack configuration
 */
const platformConfig = require( `./.platforms/${ PLATFORM }.webpack.config.js` );

/**
 * Core configurations of webpack,
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
        filename: 'js/[name].js',

        // it's the path of assets insertion in HTML page
        // must be `/` in WDS but should be `./` on production server
        publicPath: ( 'production' === process.env.NODE_ENV  ? '/' : '/' )
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

            // extract CSS to file(s) using `MiniCSSExtractPlugin`,
            // avoid plugin when `CSS_MODE` is `inline`
            {
                test: /\.scss$/,
                use: [
                    ( 'inline' === process.env.CSS_MODE  ? 'style-loader' : MiniCSSExtractPlugin.loader ),
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
            'animations': path.resolve( __dirname, 'src/js/animations' ),
            'components': path.resolve( __dirname, 'src/js/components' ),
            'controllers': path.resolve( __dirname, 'src/js/controllers' ),
            'models': path.resolve( __dirname, 'src/js/models' ),
            'modules': path.resolve( __dirname, 'src/js/modules' ),
            'router': path.resolve( __dirname, 'src/js/router' ),
            'services': path.resolve( __dirname, 'src/js/services' ),
            'store': path.resolve( __dirname, 'src/js/store' ),
            'vendors': path.resolve( __dirname, 'src/js/vendors' ),
            'views': path.resolve( __dirname, 'src/js/views' )
        }
    },

    // webpack plugins
    // allow only non-empty plugin by using `filter`
    plugins: [
        
        // generate HTML pages for preview/build
        // except `test-*.html`, which won't be generated
        // return array of `HTMLWebpackPlugin` instances and spread it
        ...glob.sync( path.resolve( __dirname, 'src/pages/!(test.)*.html' ), { absolute: true } )
        .map( filePath => {
            
            // name of the HTML file
            const basename = path.basename( filePath );

            // return `HTMLWebpackPlugin` instance
            return new HTMLWebpackPlugin( {
                filename: basename,
                template: path.resolve( __dirname, 'src/pages/', basename )
            } );
        } ),

        // to `as-is` copy files/folders
        // use `copyWebpackPluginMap( dirPath, folderNameInDist )` to create destribution map
        new CopyWebpackPlugin( [
            copyWebpackPluginMap( 'src/assets', 'assets' )
        ] ),

        // extract CSS to a file
        // avoid plugin when `CSS_MODE` is `inline
        ( 'inline' === process.env.CSS_MODE ) ? null : new MiniCSSExtractPlugin( {
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
        ( 'production' !== process.env.NODE_ENV  ) ? null : new CleanWebpackPlugin( [
            path.resolve( __dirname, 'dist', PLATFORM, 'js/chunks/**/*' ),
            path.resolve( __dirname, 'dist', PLATFORM, 'css/chunks/**/*' )
        ] ),

        // ConfigWebpackPlugin is used here to use `node-config`
        // use `CONFIG` global variable to get environment
        // written in './config' json file
        new ConfigWebpackPlugin()
    ].filter( Boolean ), // filter only non `null` plugins

    // webpack optimizations
    optimization: {
        splitChunks: {
            maxAsyncRequests: 2, // max. 2 `.js` file lazy load in parallel
            maxInitialRequests: 2, // max. 2 `.js` file lazy load at entry in parallel
            minSize: 1 * 1000 * 1000, // 1MB minimum size before splitting up in new chunk
            
            cacheGroups: {
                vendor: {
                    
                    // both : sync + async imports
                    chunks: 'all',
                    
                    // [name] of chunk file being generated
                    name: 'vendor',
                    
                    // test path [RegExp, function or string]
                    test: /(node_modules|src\/js\/vendor)/,

                    // high priority chunk will have modules also matches other cache groups,
                    priority: -10,
                    
                    // force this chunk to split despite of `splitChunks` conditions
                    enforce: true
                },
                main: {
                    name: 'main',
                    priority: -20,
                    enforce: true,

                    // only sync imports
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
        open: true
    },

    // generate source map
    devtool: 'source-map',

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
