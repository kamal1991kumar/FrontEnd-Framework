/**
 * withRouter( Component, props ) returns a component
 * wrapped with `BrowserRouter`
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const withRouter = function( Component, props = {} ) {
    return (
        <BrowserRouter>
            <Component { ...props } />
        </BrowserRouter>
    );
};

export { withRouter };
