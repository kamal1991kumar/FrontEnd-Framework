// import action types
import { ACTION_CHAT_SAVE } from 'constants/redux-events';

/********************************************************/

/**
 * @type {function}
 * @desc A Redux Reducer to manage state of the Redux Store
 * @param {object} [state={}] - Current state of the Redux Store at given state key
 * @param {object} action - Redux **action** object with **event name** and **payload**
 * @example
 * import { chats } from 'js/store/reducers/chats';
 */
export const chats = ( state = [], action ) => {
    const { type, payload } = action;

    switch( type ) {
        case ACTION_CHAT_SAVE:
            return state.concat( payload );
        default:
            return state;
    }
};
