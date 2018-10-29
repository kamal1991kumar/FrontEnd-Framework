// import action types
import { REDUX_EVENT_SAVE_HOST_URLS } from 'constants';

// save hosts action
export const saveHostsAction = ( payload ) => {
    return {
        type: REDUX_EVENT_SAVE_HOST_URLS,
        payload: payload
    };
};
