// using axios as current Http library
import axios from 'axios';
import axiosCancel from 'axios-cancel';
import shortid from 'shortid';
import { get, isEmpty, merge, includes } from 'lodash';

import { MessageBus } from 'core/modules/MessageBus';
import { EVENT_HTTP_REQUEST_TRANSACTION, EVENT_HTTP_AUTH_ERROR } from 'core/constants';
import { genericSuccessResponse } from 'models/genericSuccessResponse.config';

//@desc Globally setting AJAX requests to carry application/json header.
//axios.defaults.headers.common[ 'Accept' ] = 'application/json';
axios.defaults.headers.post[ 'Content-Type' ] = 'application/json';

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
            body: httpResponse.data,
            status: httpResponse.status,
            headers: httpResponse.headers,
            timestamp: Date.now()
        };
    },

    // when http request returns error
    error: ( httpError ) => {
        return {
            type: get( httpError, 'status' ) ? 'HTTP_ERROR' : 'NETWORK_ERROR',
            error: get( httpError, 'data', httpError.message ),
            status: get( httpError, 'status', 0 ),
            headers: get( httpError, 'headers', {} ),
            timestamp: Date.now()
        };
    }
};

// dispatch message-bus event for HTTP transaction
const dispatchMBTransactionEvent = ( requestConfig, payload ) => {
    if( true === requestConfig.emitEvent ) {
        const eventName = get( requestConfig, 'eventName', EVENT_HTTP_REQUEST_TRANSACTION );
        MessageBus.trigger( eventName, { ...payload, eventName: eventName } );
    }
};

// dispatch message-bus event when unauthenticated error (401)
const dispatchAuthErrorEvent = ( response ) => {

    if( includes( [ 401, 403 ], response.status ) ) {
        dispatchMBTransactionEvent( {
            emitEvent: true,
            eventName: EVENT_HTTP_AUTH_ERROR
        }, {
            statusCode: response.status
        } );
    }
};

// dispatch message-bus event when not connect to the network
/*const dispatchNetworkErrorEvent = () => {

    dispatchMBTransactionEvent( {
        emitEvent: true,
        eventName: EVENT_HTTP_NETWORK_ERROR
    }, {} );
}; */

// `makeRequestConfig` return a fully-fledged config object for axios
// with some default config values
const makeRequestConfig = ( method, config ) => {

    // default request configuration
    const requestConfig = {
        requestId: shortid.generate(),
        host: 'http://localhost',
        path: '/',
        timeout: 5 * 60 * 1000, // 5 min
        withCredentials: true === CONFIG.enableAjaxWithCredentials,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',   // need to check why,
            'Accept': 'application/json'
        }
    };

    if ( config.headers ) {
        requestConfig.headers = {
            ...requestConfig.headers,
            ...config.headers
        };
    }

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
        return merge( {}, requestConfig, { method: method, url: config } );
    } else {
        const _config = merge( {}, requestConfig, config );

        if( ! isEmpty( _config.url ) ) {
            return merge( {}, _config, { method: method } );
        } else {
            return merge( {}, _config, { method: method, url: _config.host + _config.path } );
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

                // dispatch message bus event
                dispatchMBTransactionEvent( config, { type: 'SUCCESS', id: reqConfig.requestId } ); // send message-bus 'COMPLETE' event
				reqConfig.completed = true;

                // resolve response with basic structure
                return resolve( responseFormatter.success( response ) );
            } )
            .catch( ( error ) => {

                const { response } = error;

                // dispatch message bus event
                dispatchMBTransactionEvent( config, { type: 'ERROR', id: reqConfig.requestId } ); // send message-bus 'ERROR' event
                reqConfig.completed = true;

                // dispatch event for 401 status
                const _response = responseFormatter.error( response );
                dispatchAuthErrorEvent( _response );

                return reject( _response );
            } );
        } );

        // add cancel method to promise
        promise.cancel = () => {
            if( ! reqConfig.completed ) {

                // dispatch message bus event
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

                // dispatch message bus event
                dispatchMBTransactionEvent( config, { type: 'SUCCESS', id: reqConfig.requestId } ); // send message-bus 'COMPLETE' event
				reqConfig.completed = true;

                // call `success` callback
                handler.success( responseFormatter.success( response ) );

                // call `done` callback
                if ( handler.hasOwnProperty( 'done' ) && 'function' === typeof handler.done ) {
                    handler.done( 'SUCCESS', response );
                }
            }
        } )
        .catch( ( error ) => {

            // extract response from error
            const { response } = error;

            // execute only if network request is not completed
            if( ! reqConfig.completed ) {

                // check status exists in network response
                if( get( response, 'status', null ) ) {

                    // dispatch message bus event
                    dispatchMBTransactionEvent( config, { type: 'ERROR', id: reqConfig.requestId } ); // send message-bus 'ERROR' event
                    reqConfig.completed = true;

                    // create formatted error response
                    const _response = responseFormatter.error( response );

                    // dispatch event for 401 status
                    dispatchAuthErrorEvent( _response );
                    
                    // handle error and send generic response
                    if( handler.hasOwnProperty( 'error' ) && 'function' === typeof handler.error ) {
                        handler.error( _response );
                    }

                } else {

                    // service returned without any response status
                    reqConfig.completed = true;

                    // create generic error response
                    const _response = responseFormatter.error( {} );

                    // handle error and send generic response
                    if( handler.hasOwnProperty( 'error' ) && 'function' === typeof handler.error ) {
                        handler.error( _response );
                    }

                }

                // call done callback
                if ( handler.hasOwnProperty( 'done' ) && 'function' === typeof handler.done ) {
                    handler.done( 'ERROR' );
                }
            }
        } );

        // return cancel function
        return () => {
            if( ! reqConfig.completed ) {

                // dispatch message bus event
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
