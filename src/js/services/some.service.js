import { Http } from 'core/modules/Http';

/*************************************************************/

/**
 * @type {function}
 * @desc fetch data using HTTP GET request using Axios.
 * @param {object} config - [Axios](https://github.com/axios/axios) configuration object
 * @param {object} [handler] - An object with `success` and `error` callback functions. If `handler` is empty, then it returns a promise.
 * @returns {function|promise} - Returns a function which can be executed to cancel XHR. If `handler` is empty then it returns a promise which has `cancel` method to cancel XHR.
 * @example
 * import { SomeService } from 'services/some.service';
 *
 * // example 1 : callback approach
 * const cancelXHR = getSomeService( config, {
 *   success: ( response ) => {},
 *   error: ( error ) => {}
 * } );
 * cancelXHR();
 *
 * // example 2 : promise approach
 * const promise = getSomeService( config );
 * promise.then( response => {} ).catch( error => {} );
 * promise.cancel(); // cancel XHR
 */
export const getSomeService = ( config, handler ) => {
    return Http.get( config, handler );
};
