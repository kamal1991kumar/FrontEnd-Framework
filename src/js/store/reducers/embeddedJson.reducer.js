// import action types from .action file
import { TYPE_ADD_EMBEDDED_JSON } from 'store/actions/embeddedJson.action';

// export reducer function
export const embeddedJsonReducer = ( state = {}, action ) => {
    const { type, payload } = action;

    switch( type ) {
        case TYPE_ADD_EMBEDDED_JSON:
            return { ...state, ...payload };
        default:
            return state;
    }
};
