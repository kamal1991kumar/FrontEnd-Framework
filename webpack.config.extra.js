const path = require( 'path' );

// module alias
exports.alias = {
    'core': path.resolve( __dirname, 'src/js/core' ),
    'animations': path.resolve( __dirname, 'src/js/animations' ),
    'containers': path.resolve( __dirname, 'src/js/components/containers' ),
    'hoc': path.resolve( __dirname, 'src/js/components/hoc' ),
    'controllers': path.resolve( __dirname, 'src/js/controllers' ),
    'models': path.resolve( __dirname, 'src/js/models' ),
    'modules': path.resolve( __dirname, 'src/js/modules' ),
    'services': path.resolve( __dirname, 'src/js/services' ),
    'store': path.resolve( __dirname, 'src/js/store' ),
    'vendors': path.resolve( __dirname, 'src/js/vendors' ),
    'views': path.resolve( __dirname, 'src/js/views' ),
    'router': path.resolve( __dirname, 'src/js/router/index.js' ),
    'utils': path.resolve( __dirname, 'src/js/utils' ),
    'constants': path.resolve( __dirname, 'src/js/constants/' ),

    // scss
    'scss': path.resolve( __dirname, 'src/scss/' )
};
