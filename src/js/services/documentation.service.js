import { Http } from 'core/modules/Http';

/*************************************************************/

export const getDocumentation = ( config, handler ) => {
    return Http.get( config, handler );
};
