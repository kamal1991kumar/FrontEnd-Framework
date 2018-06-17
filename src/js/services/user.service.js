import { HttpService } from 'modules/HttpService';

/**
 * ===X DO NOT MODIFY CODE BELOW X===
 * Get singleton HTTP service instance with global configuration.
 * API host endpoint received from env config.
 */
const http = HttpService.create( {
    host: CONFIG.hosts.api.main
} );


/*************************************************************/


export const getAllUsers = ( config ) => {
    return http.get( config );
};
