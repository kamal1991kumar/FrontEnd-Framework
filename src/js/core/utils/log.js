/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
/**
 * A simple log interface to log messages to browser console.
 * log( ...messages ), log.info( ... ), log.warn( ... ), log.error( ... )
 */

import { DEFAULT_LOG_TAG } from 'core/constants';

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
const print = ( { tag, type, messages } ) => {
    if( enableLog ) {
        switch( type ) {
            case 'info':
                console.info( `%c ${ tag } `, 'background: blue; color: white; font-weight: bold;', ...messages );
                break;
            case 'warn':
                console.warn( `%c ${ tag } `, 'background: orange; color: white; font-weight: bold;', ...messages );
                break;
            case 'error':
                console.error( `%c ${ tag } `, 'background: red; color: white; font-weight: bold;', ...messages );
                break;
            case 'debug':
            default:
                console.log( `%c ${ tag } `, 'background: green; color: white; font-weight: bold;', ...messages );
        }
    }
};

export class Log {
    constructor( LOG_TAG ) {
        this.LOG_TAG = LOG_TAG;
    }

    // return new instance with custom log tag
    tag( LOG_TAG ) {
        return new this.constructor( LOG_TAG );
    }

    debug( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'debug', messages } );
    }

    info( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'info', messages } );
    }

    warn( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'warn', messages } );
    }

    error( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'error', messages } );
    }
}

// create instance with default log tag
const log = new Log( DEFAULT_LOG_TAG );

/*******************************************/

// set as global variable
global.log = log;

export { log };
