/**
 * withAsyncComponent( Component, LoadingView ) returns async component
 * using `import()` function. First argument is function which returns
 * a import() promise and second is loading (spinner) view.
 */

import React from 'react';
import loadable from 'react-loadable';

// simple loading spinner view
const SimpleLoadingView = () => {
    return <div className="hourglass-spinner"></div>;
};

// return async component
const withAsyncComponent = ( promiseFunction, LoadingComponent = SimpleLoadingView ) => {
    return loadable( {
        loader: promiseFunction,
        loading: LoadingComponent
    } );
};

export { withAsyncComponent };
