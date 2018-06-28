/**
 * withStore( Component, props ) returns a component
 * wrapped with `Provider` from react-redux.
 * Here, store is import from `getStore` function provided
 * by `store` directory module.
 */

import React from 'react';
import { Provider } from 'react-redux';

// export function which returns `withStore` class
export const withStore = ( Component, store, props = {} ) => {
    return class _withStore extends React.Component {
        constructor() {
            super();
        }

        render() {
            return (
                <Provider store={ store }>
                    <Component { ...props } />
                </Provider>
            );
        }
    };
};
