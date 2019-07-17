import React from 'react';
import { HashRouter } from 'react-router-dom';

/**
 * @type {function}
 * @desc This HOC returns the component wrapped with `HashRouter` component from **react-router**.
 * @param {object} Component - A React component
 * @param {object} [props={}] - Props to inject
 * @returns {object} A react component
 * @example
 * import { withHashRouter } from 'core/hoc/withHashRouter';
 * import { TestView } from 'views/Test.view';
 *
 * const ComponentWithRouter = withHashRouter( TestView );
 *
 * // render
 * <ComponentWithRouter />
 */
const withHashRouter = ( Component, props = {} ) => {
    return class WithRouter extends React.Component {
        constructor() {
            super();
        }

        render() {
            return (
                <HashRouter>
                    <Component { ...props } />
                </HashRouter>
            );
        }
    };
};

export { withHashRouter };
