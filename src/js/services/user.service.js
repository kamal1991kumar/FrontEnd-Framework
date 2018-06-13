// use `Http` module for making network requests
// all environment related configuration is implemented by this module
import { Http } from 'modules/Http';

// import `Service` class to create a service
import { Service } from 'modules/Service';


/**
 * ===X DO NOT MODIFY CODE BELOW X===
 * API host endpoint received from env config
 * `CONFIG` object is injected by webpack plugin and `node-config`
 */
const API_HOST = CONFIG.hosts.api.main;


/*************************************************************/


// return service function which returns user list
export const getAllUsers = ( handler, transformer ) => {

    // create new service instance and return
    const service =  new Service( handler, transformer );

    // make axios AJAX request
    const cancel = Http.get( { host: API_HOST, path: '/users' }, {
        success: ( data ) => {
            service.send( data ); // send data back to service
        },
        error: ( error ) => {
            service.sendError( error ); // send error to service
        }
    } );

    // on abort, cancel HTTP request
    service.onAbort( () => {
        window.console.log( '{user.service.js} getAllUsers was aborted' );
        cancel();
    } );

    return service;
};
