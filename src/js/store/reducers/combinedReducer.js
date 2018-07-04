import { combineReducers } from 'redux';

/********************************************************/

// import reducers
import { hostsReducer } from 'store/reducers';

/********************************************************/

// export combined reducer
// key of combined reducer is key of state, so be careful
export const combinedReducer = combineReducers( {
    hosts: hostsReducer
} );