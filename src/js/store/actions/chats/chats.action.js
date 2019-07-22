// export action types
import { ACTION_CHAT_SAVE } from 'constants/redux-events';

/********************************************************/

/**
 * @type {function}
 * @param {object} payload - payload object (data to dispatch)
 * @desc Returns action object for **TYPE_SOME_EVENT** event
 * @returns {object} - Redux action object
 * @property {string} type - Event name (from constant)
 * @property {object} payload - payload to dispatch
 * @example
 * import { saveChat } from 'store/actions/chats';
 *
 * // dispatch action
 * store.dispatch( saveChat( payload ) );
 */
export const saveChat = ( payload ) => {
    return {
        type: ACTION_CHAT_SAVE,
        payload: payload
    };
};
