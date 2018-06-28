import { Http } from 'modules/Http';

/*************************************************************/

export const getUsers = ( config, handler ) => {
    return Http.get( config, handler );
};
