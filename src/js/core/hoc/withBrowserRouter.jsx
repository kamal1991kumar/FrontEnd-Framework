import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * @type {function}
 * @desc This HOC returns the component wrapped with `BrowserRouter` component from **react-router**.
 * @param {object} Component - A React component
 * @param {object} [props={}] - Props to inject
 * @returns {object} A react component
 * @example
 * import { withBrowserRouter } from 'core/hoc/withBrowserRouter';
 * import { TestView } from 'views/Test.view';
 *
 * const ComponentWithRouter = withBrowserRouter( TestView );
 *
 * // render
 * <ComponentWithRouter />
 */
const withBrowserRouter = ( Component, props = {} ) => {
    return class WithRouter extends React.Component {
        constructor() {
            super();
        }

        render() {
            return (
                <BrowserRouter>
                    <Component { ...props } />
                </BrowserRouter>
            );
        }
    };
};

export { withBrowserRouter };
