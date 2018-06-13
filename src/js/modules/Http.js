/**
 * Http utility module which provides easy abstractions over simple Http verbs.
 * Use Http.Get, Http.Post etc. methods to make AJAX network requests.
 * It's easy to intergrate; other Http libraries like `fetch` or `jQuery`.
 */

// using axios as current Http library
import axios from 'axios';
import axiosCancel from 'axios-cancel';
import shortid from 'shortid';
import _ from 'lodash';

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
            type: _.get( httpError, 'response.status' ) ? 'HTTP_ERROR' : 'NETWORK_ERROR',
            error: _.get( httpError, 'response.data', httpError.message ),
            status: _.get( httpError, 'response.status', 0 ),
            headers: _.get( httpError, 'response.headers', {} ),
            timestamp: Date.now()
        };
    }
};


/*************************************************************/


// HTTP GET method
// Use: http.get( config, { success, error } ) => cancelFunction
Http.get = ( { host = 'http://localhost', path = '/', timeout = 10000, headers = {} }, { success, error } ) => {
    
    // create unique request id
    const requestId = shortid.generate();

    // execute axios AJAX request
    axios( {
        method: 'get',
        url: host +  path,
        headers,
        timeout,
        requestId
    } )
    .then( ( response ) => {
        success( responseFormatter.success( response ) );
     } )
    .catch( ( response ) => {
        error( responseFormatter.error( response ) );
    } );

    // return cancel function
    return () => {
        axios.cancel( requestId );
    };
};

// HTTP POST method
// Use: http.post( config, { success, error } ) => cancelFunction
Http.post = ( { host = 'http://localhost', path = '/', timeout = 10000, headers = {}, data = {} }, { success, error } ) => {
    
    // create unique request id
    const requestId = shortid.generate();

    // execute axios AJAX request
    axios( {
        method: 'post',
        url: host +  path,
        data,
        headers,
        timeout,
        requestId
    } )
    .then( ( response ) => {
        success( responseFormatter.success( response ) );
     } )
    .catch( ( response ) => {
        error( responseFormatter.error( response ) );
    } );

    // return cancel function
    return () => {
        axios.cancel( requestId );
    };
};

// HTTP PUT method
// Use: http.put( config, { success, error } ) => cancelFunction
Http.put = ( { host = 'http://localhost', path = '/', timeout = 10000, headers = {}, data = {} }, { success, error } ) => {
    
    // create unique request id
    const requestId = shortid.generate();

    // execute axios AJAX request
    axios( {
        method: 'put',
        url: host +  path,
        data,
        headers,
        timeout,
        requestId
    } )
    .then( ( response ) => {
        success( responseFormatter.success( response ) );
     } )
    .catch( ( response ) => {
        error( responseFormatter.error( response ) );
    } );

    // return cancel function
    return () => {
        axios.cancel( requestId );
    };
};

// HTTP DELETE method
// Use: http.delete( config, { success, error } ) => cancelFunction
Http.delete = ( { host = 'http://localhost', path = '/', timeout = 10000, headers = {} }, { success, error } ) => {
    
    // create unique request id
    const requestId = shortid.generate();

    // execute axios AJAX request
    axios( {
        method: 'delete',
        url: host +  path,
        headers,
        timeout,
        requestId
    } )
    .then( ( response ) => {
        success( responseFormatter.success( response ) );
     } )
    .catch( ( response ) => {
        error( responseFormatter.error( response ) );
    } );

    // return cancel function
    return () => {
        axios.cancel( requestId );
    };
};
