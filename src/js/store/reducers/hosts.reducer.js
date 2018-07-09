// import action types
import { TYPE_SAVE_HOSTS } from 'store/actions';

/********************************************************/

// export reducer function
export const hostsReducer = ( state = {}, action ) => {
    const { type, payload } = action;

    switch( type ) {
        case TYPE_SAVE_HOSTS: {
            return { ...state, ...payload };
        }
        default: {
            return state;
        }
    }
};
