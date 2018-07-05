/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/**
 * A simple log interface to log messages to browser console.
 * log( ...messages ), log.info( ... ), log.warn( ... ), log.error( ... )
 */

const getQueryStringValue = ( key ) => {
    if( window && 'function' === typeof window.decodeURIComponent ) {
        return decodeURIComponent(
            window.location.search.replace(
                new RegExp(
                    '^(?:.*[&\\?]' + encodeURIComponent( key ).replace( /[\.\+\*]/g, '\\$&' ) + '(?:\\=([^&]*))?)?.*$', 'i'
                ), '$1'
            )
        );
    } else {
        return false;
    }
};

// enable logging if log is enabled from config or when query string parameter `debug` is 'true'
// disable when query string parameter `debug` is 'false'
const enableLog = ( CONFIG.enableLog || ( 'true' === getQueryStringValue( 'debug' ) ) ) && ( 'false' !== getQueryStringValue( 'debug' ) );

const log = ( ...messages ) => {
    if( enableLog ) {
        console.log( ...messages );
    }
};

log.info = ( ...messages ) => {
    if( enableLog ) {
        console.info( ...messages );
    }
};

log.warn = ( ...messages ) => {
    if( enableLog ) {
        console.warn( ...messages );
    }
};

log.error = ( ...messages ) => {
    if( enableLog ) {
        console.error( ...messages );
    }
};

/*******************************************/

// set as global variable
global.log = log;

export { log };
