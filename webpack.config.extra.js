const path = require( 'path' );

// module alias
exports.alias = {
    'animations': path.resolve( __dirname, 'src/js/animations' ),
    'components': path.resolve( __dirname, 'src/js/components' ),
    'controllers': path.resolve( __dirname, 'src/js/controllers' ),
    'models': path.resolve( __dirname, 'src/js/models' ),
    'modules': path.resolve( __dirname, 'src/js/modules' ),
    'services': path.resolve( __dirname, 'src/js/services' ),
    'store': path.resolve( __dirname, 'src/js/store' ),
    'vendors': path.resolve( __dirname, 'src/js/vendors' ),
    'views': path.resolve( __dirname, 'src/js/views' ),
    'router': path.resolve( __dirname, 'src/js/router/index.js' ),
    'utils': path.resolve( __dirname, 'src/js/utils/index.js' ),
    'constants': path.resolve( __dirname, 'src/js/constants/index.js' )
};
