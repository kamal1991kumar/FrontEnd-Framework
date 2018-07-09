import React from 'react';
import { Provider } from 'react-redux';

/**
 * @type {function}
 * @desc Return a React component wrapped with Redux <Provider>. This enables a component to have separate instand of Redux store.
 * @param {class} Component - A React component class
 * @param {object} store - A redux store
 * @param {props} [props={}] - Props to inject
 * @returns {object} A React component
 * @example
 * import { withStore } from 'core/hoc/withStore';
 * import { TestView } from 'views/Test.view';
 * import { getStore } from 'store';
 *
 * const store = getStore();
 * const TestViewWithStore = withStore( TestView, store, { propName: 'propValue' } );
 */
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
