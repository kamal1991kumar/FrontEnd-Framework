// using axios as current Http library
import axios from 'axios';
import axiosCancel from 'axios-cancel';
import shortid from 'shortid';
import { get, isEmpty } from 'lodash';

import { MessageBus } from 'core/modules/MessageBus';
import { HTTP_REQUEST_TRANSACTION } from 'core/constants';

// add `cancel` prototype method
// to abort `XHR` requests and promise
axiosCancel( axios );

/**
 * @type {object}
 * @desc Http utility module which provides easy abstractions over simple Http verbs.
 * Use Http.Get, Http.Post etc. methods to make AJAX network requests. Currently, this module
 * uses Axios library to make HTTP calls, hence [config](https://github.com/axios/axios) object configuration is here.
 * @property {function|promise} get - Send HTTP GET request
 * @property {function|promise} post - Send HTTP POST request
 * @property {function|promise} put - Send HTTP PUT request
 * @property {function|promise} delete - Send HTTP DELETE request
 * @example
 * import Http from 'core/modules/Http';
 * // example 1 : callback approach
 * const cancelXHR = Http.get( config, {
 *   success: ( response ) => {},
 *   error: ( error ) => {}
 * } );
 * cancelXHR();
 *
 * // example 2 : promise approach
 * const promise = Http.get( config );
 * promise.then( response => {} ).catch( error => {} );
 * promise.cancel(); // cancel XHR
 */
export const Http = {};

/*************************************************************/

// HTTP Response formatter
// return Standard Response Format regardless
// of any AJAX library is used
const responseFormatter = {
    
    // when http request resolves successfully
    success: ( httpResponse ) => {
        return {
            data: httpResponse.data,
            status: httpResponse.status,
            headers: httpResponse.headers,
            timestamp: Date.now()
        };
    },
    
    // when http request returns error
    error: ( httpError ) => {
        return {
            type: get( httpError, 'response.status' ) ? 'HTTP_ERROR' : 'NETWORK_ERROR',
            error: get( httpError, 'response.data', httpError.message ),
            status: get( httpError, 'response.status', 0 ),
            headers: get( httpError, 'response.headers', {} ),
            timestamp: Date.now()
        };
    }
};

// dispatch message-bus event for HTTP transaction
const dispatchMBTransactionEvent = ( requestConfig, payload ) => {
    if( true === requestConfig.emitEvent ) {
        const eventName = get( requestConfig, 'eventName', HTTP_REQUEST_TRANSACTION );
        MessageBus.trigger( eventName, { ...payload, eventName: eventName } );
    }
};

// `makeRequestConfig` return a fully-fledged config object for axios
// with some default config values
const makeRequestConfig = ( method, config ) => {
    
    // default request configuration
    const requestConfig = {
        requestId: shortid.generate(),
        host: 'http://localhost',
        path: '/',
        timeout: 60 * 1000 // 1 min
    };

    // add upload progress listener to config
    if( config.onUploadProgress && ( 'function' === typeof config.onUploadProgress ) ) {
        const currentCallback = config.onUploadProgress;
        
        config.onUploadProgress = ( event ) => {
            currentCallback( {
                sent: event.loaded,
                total: event.total,
                percent: 0 !== event.total ? Math.round( ( event.loaded / event.total ) * 100 ) : null
            } );
        };
    }

    // add download progress listener to config
    if( config.onDownloadProgress && ( 'function' === typeof config.onDownloadProgress ) ) {
        const currentCallback = config.onDownloadProgress;
        
        config.onDownloadProgress = ( event ) => {
            currentCallback( {
                received: event.loaded,
                total: event.total,
                percent: 0 !== event.total ? Math.round( ( event.loaded / event.total ) * 100 ) : null
            } );
        };
    }

    if( 'string' === typeof config ) {
        return Object.assign( {}, requestConfig, { method: method, url: config } );
    } else {
        const _config = Object.assign( {}, requestConfig, config );

        if( ! isEmpty( _config.url ) ) {
            return Object.assign( {}, _config, { method: method } );
        } else {
            return Object.assign( {}, _config, { method: method, url: _config.host + _config.path } );
        }
    }
};

// execute request and take response action
const executeRequest = ( method, config, handler ) => {
    
    // create request configuration for axios
    const reqConfig =  makeRequestConfig( method, config );

    // send message-bus 'START' event
    dispatchMBTransactionEvent( config, { type: 'SENT', id: reqConfig.requestId } );

    // if handler is empty, return promise and cancel function
    // in an `object`, else just return cancel function
    if( isEmpty( handler ) ) {
        const promise =  new Promise( ( resolve, reject ) => {
            axios( reqConfig ).then( ( response ) => {
                dispatchMBTransactionEvent( config, { type: 'SUCCESS', id: reqConfig.requestId } ); // send message-bus 'COMPLETE' event
                reqConfig.completed = true;

                return resolve( responseFormatter.success( response ) );
            } )
            .catch( ( response ) => {
                dispatchMBTransactionEvent( config, { type: 'ERROR', id: reqConfig.requestId } ); // send message-bus 'ERROR' event
                reqConfig.completed = true;

                return reject( responseFormatter.error( response ) );
            } );
        } );

        // add cancel method to promise
        promise.cancel = () => {
            if( ! reqConfig.completed ) {
                dispatchMBTransactionEvent( config, { type: 'ABORT', id: reqConfig.requestId } ); // send message-bus 'ABORT' event
                axios.cancel( reqConfig.requestId );
            }

            reqConfig.completed = true;
        };

        return promise;

    } else {

        // resolve request and call handler callbacks
        axios( reqConfig ).then( ( response ) => {
            if( ! reqConfig.completed ) {
                dispatchMBTransactionEvent( config, { type: 'SUCCESS', id: reqConfig.requestId } ); // send message-bus 'COMPLETE' event
                reqConfig.completed = true;

                handler.success( responseFormatter.success( response ) );
            }
        } )
        .catch( ( response ) => {
            if( ! reqConfig.completed ) {
                dispatchMBTransactionEvent( config, { type: 'ERROR', id: reqConfig.requestId } ); // send message-bus 'ERROR' event
                reqConfig.completed = true;

                if( handler.hasOwnProperty( 'error' ) && 'function' === typeof handler.error ) {
                    handler.error( responseFormatter.error( response ) );
                }
            }
        } );

        // return cancel function
        return () => {
            if( ! reqConfig.completed ) {
                dispatchMBTransactionEvent( config, { type: 'ABORT', id: reqConfig.requestId } ); // send message-bus 'ABORT' event
                axios.cancel( reqConfig.requestId );
            }
            
            reqConfig.completed = true;
        };
    }
};

/*************************************************************/


// HTTP GET method
// Use: http.get( config, {success, error} ) => cancelFunction
// Use: http.get( config ) => { promise, cancel }
Http.get = ( config, handler ) => {
    return executeRequest( 'GET', config, handler );
};

// HTTP POST method
// Use: http.post( config, {success, error} ) => cancelFunction
// Use: http.post( config ) => { promise, cancel }
Http.post = ( config, handler ) => {
    return executeRequest( 'POST', config, handler );
};

// HTTP PUT method
// Use: http.put( config, {success, error} ) => cancelFunction
// Use: http.put( config ) => { promise, cancel }
Http.put = ( config, handler ) => {
    return executeRequest( 'PUT', config, handler );
};

// HTTP DELETE method
// Use: http.delete( config, {success, error} ) => cancelFunction
// Use: http.delete( config ) => { promise, cancel }
Http.delete = ( config, handler ) => {
    return executeRequest( 'DELETE', config, handler );
};
