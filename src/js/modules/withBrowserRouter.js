/**
 * withRouter( Component, props ) returns a component
 * wrapped with `BrowserRouter`
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// export function which returns `WithRouter` class
const withBrowserRouter = function( Component, props = {} ) {
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
