/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/**
 * A simple log interface to log messages to browser console.
 * log( ...messages ), log.info( ... ), log.warn( ... ), log.error( ... )
 */

import { LOG_TAG } from 'core/constants';

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

// print with format
const print = ( { type, messages } ) => {
    if( enableLog ) {
        switch( type ) {
            case 'info':
                console.info( `%c ${ LOG_TAG } `, 'background: blue; color: white; font-weight: bold;', ...messages );
                break;
            case 'warn':
                console.info( `%c ${ LOG_TAG } `, 'background: orange; color: white; font-weight: bold;', ...messages );
                break;
            case 'error':
                console.info( `%c ${ LOG_TAG } `, 'background: red; color: white; font-weight: bold;', ...messages );
                break;
            case 'log':
            default:
                console.info( `%c ${ LOG_TAG } `, 'background: green; color: white; font-weight: bold;', ...messages );
        }
    }
};

const log = ( ...messages ) => {
    print( { type: 'log', messages } );
};

log.info = ( ...messages ) => {
    print( { type: 'info', messages } );
};

log.warn = ( ...messages ) => {
    print( { type: 'warn', messages } );
};

log.error = ( ...messages ) => {
    print( { type: 'error', messages } );
};

/*******************************************/

// set as global variable
global.log = log;

export { log };
