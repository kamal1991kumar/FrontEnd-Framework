/**
 * withAsyncComponent( Component, LoadingView ) returns async component
 * using `import()` function. First argument is function which returns
 * a import() promise and second is loading (spinner) view.
 */

import React from 'react';
import loadable from 'react-loadable';

/**
 * @ignore
 * @type {function}
 * @desc simple loading spinner view
 */
const SimpleLoadingView = () => {
    return <div className="hourglass-spinner"></div>;
};

/**
 * @type {function}
 * @desc This HOC is used to return a `react-loadable` component for lazy loading. It wraps a React component with `loadable` HOC from `react-loadable`.
 * @param {function} promiseFunction - A function which returns a Promise. This promise should resolve into a React component.
 * @param {object} [LoadingComponent=SimpleLoadingView] - A React component to show while a React component is lazy loaded. Default is `SimpleLoadingView` component.
 * @returns {object} A `loadable` React component.
 * @example
 * import { withAsyncComponent } from 'core/hoc/withAsyncComponent';
 *
 * const promiseFunction = () => import( 'views/Test.view' );
 * const LoadableComponent = withAsyncComponent( promiseFunction );
 *
 * // render
 * <LoadableComponent />
 */
const withAsyncComponent = ( promiseFunction, LoadingComponent = SimpleLoadingView ) => {
    return loadable( {
        loader: promiseFunction,
        loading: LoadingComponent
    } );
};

export { withAsyncComponent };
