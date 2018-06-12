// import action types from .action file
import { TYPE_ADD_USER } from 'store/actions/user.action';

// export reducer function
export const userReducer = ( state = [], action ) => {
    const { type, payload } = action;

    switch( type ) {
        case TYPE_ADD_USER:
            return [ ...state, payload ];
        default:
            return state;
    }
};
