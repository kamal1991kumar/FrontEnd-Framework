import { combineReducers } from 'redux';

/********************************************************/

// import reducers
import { hostsReducer } from './hosts.reducer';

/********************************************************/

// export combined reducer
// key of combined reducer is key of state, so be careful
export const reducers = combineReducers( {
    hosts: hostsReducer
} );
