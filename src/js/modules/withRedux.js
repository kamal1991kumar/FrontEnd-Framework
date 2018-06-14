/**
 * withRedux( Component, props ) returns a component
 * wrapped with `Provider` from react-redux.
 * Here, store is import from `getStore` function provided
 * by `store` directory module.
 */

import React from 'react';
import { Provider } from 'react-redux';

// import `getStore` function which creates store
// with initial state value.
import { getStore } from 'store';

// export function which returns `WithRedux` class
export const withRedux = ( Component, state = {}, props = {} ) => {
    return class WithRedux extends React.Component {
        constructor() {
            super();
        }

        render() {
            return (
                <Provider store={ getStore( state ) }>
                    <Component { ...props } />
                </Provider>
            );
        }
    };
};
