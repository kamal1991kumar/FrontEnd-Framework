import { Http } from 'core/modules/Http';

/*************************************************************/

export const getUsers = ( config, handler ) => {
    return Http.get( config, handler );
};
