/**
 * Http utility module which provides easy abstractions over simple Http verbs.
 * Use Http.Get, Http.Post etc. methods to make AJAX network requests.
 * It's easy to intergrate; other Http libraries like `fetch` or `jQuery`.
 */

// using axios as current Http library
import axios from 'axios';
import axiosCancel from 'axios-cancel';
import shortid from 'shortid';
import { get } from 'lodash';

// add `cancel` prototype method
// to abort `XHR` requests and promise
axiosCancel( axios );

// Http module
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

// `makeRequestConfig` return a fully-fledged config object for axios
// with some default config values
const makeRequestConfig = ( config ) => {
    
    // default request configuration
    const requestConfig = {
        requestId: shortid.generate(),
        method: 'GET',
        host: 'http://localhost',
        path: '/',
        timeout: 60 * 1000 // 1 min
    };

    // add progress listener to config
    if( config.onUploadProgress && ( 'function' === typeof config.onUploadProgress ) ) {
        const currentCallback = config.onUploadProgress;
        
        config.onUploadProgress = ( event ) => {
            currentCallback( {
                sent: event.loaded,
                total: event.total,
                percentSent: Math.round( ( event.loaded / event.total ) * 100 )
            } );
        };
    }

    if( 'string' === typeof config ) {
        return Object.assign( {}, requestConfig, { url: config } );
    } else{
        const _config = Object.assign( {}, requestConfig, config );
        return Object.assign( {}, _config, { url: _config.host + _config.path } );
    }
};


/*************************************************************/


// HTTP GET method
// Use: http.get( config, { success, error } ) => cancelFunction
Http.get = ( config, { success, error } ) => {
    
    // create request configuration for axios
    const reqConfig =  makeRequestConfig( config );

    // execute axios AJAX request
    axios( reqConfig )
    .then( ( response ) => {
        success( responseFormatter.success( response ) );
     } )
    .catch( ( response ) => {
        error( responseFormatter.error( response ) );
    } );

    // return cancel function
    return () => {
        axios.cancel( reqConfig.requestId );
    };
};


// HTTP POST method
// Use: http.post( config, { success, error } ) => cancelFunction
Http.post = ( config, { success, error } ) => {
    
    // create request configuration for axios
    const reqConfig =  makeRequestConfig( config );

    // execute axios AJAX request
    axios( reqConfig )
    .then( ( response ) => {
        success( responseFormatter.success( response ) );
     } )
    .catch( ( response ) => {
        error( responseFormatter.error( response ) );
    } );

    // return cancel function
    return () => {
        axios.cancel( reqConfig.requestId );
    };
};
