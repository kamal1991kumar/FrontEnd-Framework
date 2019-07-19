const path = require( 'path' );

// module alias
exports.alias = {
    'core': path.resolve( __dirname, 'src/js/__core__' ),
    'animations': path.resolve( __dirname, 'src/js/animations' ),
    'containers': path.resolve( __dirname, 'src/js/containers' ),
    'hoc': path.resolve( __dirname, 'src/js/hoc' ),
    'models': path.resolve( __dirname, 'src/js/models' ),
    'modules': path.resolve( __dirname, 'src/js/modules' ),
    'services': path.resolve( __dirname, 'src/js/services' ),
    'nonHttpServices': path.resolve( __dirname, 'src/js/nonHttpServices' ),
    'store': path.resolve( __dirname, 'src/js/store' ),
    'vendors': path.resolve( __dirname, 'src/js/vendors' ),
    'views': path.resolve( __dirname, 'src/js/views' ),
    'router': path.resolve( __dirname, 'src/js/router' ),
    'utils': path.resolve( __dirname, 'src/js/utils' ),
    'constants': path.resolve( __dirname, 'src/js/constants/' ),
    'jsons': path.resolve( __dirname, 'src/assets/jsons/' ),

    // scss globals
    'scss-globals': path.resolve( __dirname, 'src/scss/globals/index.scss' )
};
