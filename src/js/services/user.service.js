import { HttpService } from 'modules/HttpService';

/**
 * ===X DO NOT MODIFY CODE BELOW X===
 * Create new HTTP service instance with global configuration.
 * API host endpoint received from env config.
 */
const http = new HttpService( {
    host: CONFIG.hosts.api.main
} );


/*************************************************************/


export const getAllUsers = ( config ) => {
    return http.get( config );
};
