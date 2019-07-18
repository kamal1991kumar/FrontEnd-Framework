import { isArray } from 'lodash';

/* eslint-disable no-console */
/* eslint-disable no-useless-escape */
const { DEFAULT_LOG_TAG } = CONFIG.constants;

// extract a query string value from URL
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

// print console log messages with CSS type style
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

        // output warning for more than 2 messages
        if( isArray( messages ) && 1 < messages.length ) {
            console.warn( 'You are logging more than 1 messages using log utility function ==> ', messages );
        }
    }
};

/**
 * @ignore
 */
class Log {
    constructor( LOG_TAG ) {
        this.LOG_TAG = LOG_TAG;

        // bind methods to instance
        this.tag = this.tag.bind( this );
        this.debug = this.debug.bind( this );
        this.info = this.info.bind( this );
        this.warn = this.warn.bind( this );
        this.error = this.error.bind( this );
    }

    // return new instance with custom log tag
    tag( LOG_TAG ) {

        // if instance with name { LOG_TAG } does not exists, create one and save
        if( ! Log.__instances.hasOwnProperty( LOG_TAG ) ) {
            Log.__instances[ LOG_TAG ] = new this.constructor( LOG_TAG );
        }

        return Log.__instances[ LOG_TAG ];
    }

    debug( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'debug', messages } );
        return this;
    }

    info( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'info', messages } );
        return this;
    }

    warn( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'warn', messages } );
        return this;
    }

    error( ...messages ) {
        print( { tag: this.LOG_TAG, type: 'error', messages } );
        return this;
    }
}

// store to re-usable instances
Log.__instances = {};

// create instance with default log tag
const log = new Log( DEFAULT_LOG_TAG );

/*******************************************/

/**
 * @type {object}
 * @desc An utility module to print console log messages with a **LOG_TAG**.
 * This module supports different log levels and is available globally (does not need a import statement).
 * @property {function(messages: ...string)} debug - log **debug** level messages
 * @property {function(messages: ...string)} info - log **info** level messages
 * @property {function(messages: ...string)} warn - log **warn** level messages
 * @property {function(messages: ...string)} error - log **error** level messages
 * @property {function(messages: ...string)} tag - returns log module with custom LOG_TAG value
 * @example
 * log.debug( 'my-message' );
 * log.info( 'my-message' );
 * log.warn( 'my-message' );
 * log.error( 'my-message' );
 * log.tag( 'MY_TAG' ).debug( 'my-message' );
 */
global.log = log;
