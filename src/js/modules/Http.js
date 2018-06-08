/**
 * Http utility module which provides easy abstractions over simple Http verbs.
 * Use Http.Get, Http.Post etc. methods to make AJAX network requests.
 * It's east to intergrate other Http libraries like `fetch` or `jQuery`.
 */

// using axios as current Http library
import axios from 'axios';
import _ from 'lodash';

/**
 * ===X DO NOT MODIFY CODE BELOW X===
 * API host endpoint received from env config
 */
const API_HOST = CONFIG.hosts.api.main;

// Http module
export const Http = {};


/*************************************************************/


/**
 * Simple actions object to pass
 * network response data back to RxJS observer
 */
const ObserverActions = {
    
    // when http request resolves successfully
    success: ( observer, httpResponse ) => {
        observer.next( {
            data: httpResponse.data,
            status: httpResponse.status,
            headers: httpResponse.headers,
            timestamp: Date.now()
        } );

        // no more data will be sent
        return observer.complete();
    },
    
    // when http request returns error
    error: ( observer, httpError ) => {
        observer.error( {
            type: _.get( httpError, 'response.status' ) ? 'HTTP_ERROR' : 'NETWORK_ERROR',
            error: _.get( httpError, 'response.data', httpError.message ),
            status: _.get( httpError, 'response.status', 0 ),
            headers: _.get( httpError, 'response.headers', {} ),
            timestamp: Date.now()
        } );

        // no more data will be sent
        return observer.complete();
    }
};


/*************************************************************/


// Http Get
// Use: http.Get( observer, config )
Http.get = ( observer, { path = '/', timeout = 10000, headers = {} } ) => {
    return axios( {
        method: 'get',
        url: API_HOST +  path,
        headers,
        timeout
    } )
    .then( response => {
        return ObserverActions.success( observer, response );
    } )
    .catch( error => {
        return ObserverActions.error( observer, error );
    } );
};

// Http Post
// Use: http.post( observer, config )
Http.post = ( observer, { path = '/', timeout = 10000, headers = {}, data = {} } ) => {
    return axios( {
        method: 'post',
        url: API_HOST +  path,
        data,
        headers,
        timeout
    } )
    .then( response => {
        return ObserverActions.success( observer, response );
    } )
    .catch( error => {
        return ObserverActions.error( observer, error );
    } );
};

// Http Put
// Use: http.Put( observer, config )
Http.put = ( observer, { path = '/', timeout = 10000, headers = {}, data = {} } ) => {
    return axios( {
        method: 'put',
        url: API_HOST +  path,
        data,
        headers,
        timeout
    } )
    .then( response => {
        return ObserverActions.success( observer, response );
    } )
    .catch( error => {
        return ObserverActions.error( observer, error );
    } );
};

// Http Patch
// Use: http.Patch( observer, config )
Http.patch = ( observer, { path = '/', timeout = 10000, headers = {}, data = {} } ) => {
    return axios( {
        method: 'patch',
        url: API_HOST +  path,
        data,
        headers,
        timeout
    } )
    .then( response => {
        return ObserverActions.success( observer, response );
    } )
    .catch( error => {
        return ObserverActions.error( observer, error );
    } );
};

// Http Delete
// Use: http.Delete( observer, config )
Http.delete = ( observer, { path = '/', timeout = 10000, headers = {} } ) => {
    return axios( {
        method: 'delete',
        url: API_HOST +  path,
        headers,
        timeout
    } )
    .then( response => {
        return ObserverActions.success( observer, response );
    } )
    .catch( error => {
        return ObserverActions.error( observer, error );
    } );
};
