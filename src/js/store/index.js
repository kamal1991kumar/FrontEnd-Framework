/**
 * This is Redux store module of entire application.
 * This module provides `getStore` function which supplies
 * redux store with inital state value.
 */

import { createStore } from 'redux';

// import combined reducers
import { reducers } from './reducers';

// export function which returns store
export const getStore = ( initialState = {} ) => {
    return createStore( reducers, initialState );
};
