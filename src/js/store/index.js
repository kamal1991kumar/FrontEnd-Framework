/**
 * This is Redux store module of entire application.
 * This module provides `getStore` function which supplies
 * redux store with initial state value.
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import combined reducers
import { combinedReducer } from 'store/reducers/combinedReducer';

// get global store
let globalStore = null;
export const getStore = ( initialState = {} ) => {
    if( ! globalStore ) {

        // if Redux debugging is enabled, add `composeWithDevTools` middleware
        if( CONFIG.enableReduxDebug ) {
            globalStore = createStore( combinedReducer, initialState, composeWithDevTools( {} )( applyMiddleware( thunk ) ) );
        } else {
            globalStore = createStore( combinedReducer, initialState, applyMiddleware( thunk ) );
        }
    }

    return globalStore;
};
