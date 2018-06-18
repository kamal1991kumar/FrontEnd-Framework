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


export const getAllUsers = ( requestConfig ) => {
    return http.get( requestConfig );
};

export const addUser = ( requestConfig, serviceConfig ) => {
    return http.post( requestConfig, serviceConfig );
};
