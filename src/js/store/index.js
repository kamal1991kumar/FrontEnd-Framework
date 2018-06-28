/**
 * This is Redux store module of entire application.
 * This module provides `getStore` function which supplies
 * redux store with inital state value.
 */

import { createStore } from 'redux';

// import combined reducers
import { reducers } from './reducers';

// get global store
let globalStore = null;
export const getStore = ( initialState = {} ) => {
    if( ! globalStore ) {
        globalStore = createStore( reducers, initialState );
    }

    return globalStore;
};
