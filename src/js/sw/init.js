/**
 * @desc Service worker initialization script.
 * This is another entry point of webpack.
 */

// service worker logger
const logger = log.tag( 'SW' );

if( 'serviceWorker' in navigator ) {
    window.addEventListener( 'load', () => {
        navigator.serviceWorker.register( '/sw.js' )
        .then( ( registration ) => {
            logger.debug( 'service worker successfully registered with registration', registration );
        } )
        .catch( ( error ) => {
            logger.error( 'service worker failed to register with error', error );
        } );
    } );
}
