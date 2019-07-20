// import action types
import { REDUX_EVENT_SAVE_HOST_URLS } from 'constants/redux-events';

/********************************************************/

// export reducer function
export const hostsReducer = ( state = {}, action ) => {
    const { type, payload } = action;

    switch( type ) {
        case REDUX_EVENT_SAVE_HOST_URLS: {
            return { ...state, ...payload };
        }
        default: {
            return state;
        }
    }
};
