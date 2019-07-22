import { combineReducers } from 'redux';

/********************************************************/

// import reducers
import { chats } from 'store/reducers/chats';

/********************************************************/

// export combined reducer
// key of combined reducer is key of state, so be careful
export const combinedReducer = combineReducers( {
    chats
} );
