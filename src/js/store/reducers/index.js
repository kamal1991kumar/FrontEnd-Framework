import { combineReducers } from 'redux';

/********************************************************/

// import reducers
import { userReducer } from './user.reducer';
import { embeddedJsonReducer } from './embeddedJson.reducer';

/********************************************************/

// export combined reducer
// key of combined reducer is key of state, so be careful
export const reducers = combineReducers( {
    users: userReducer,
    hosts: embeddedJsonReducer
} );
