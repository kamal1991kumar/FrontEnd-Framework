import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/container/App.component';

const withRouter = function( Component, props = {} ) {
    return (
        <BrowserRouter>
            <Component { ...props } />
        </BrowserRouter>
    );
};

// render initial component
ReactDOM.render( withRouter( App ), document.getElementById( 'app-root' ) );
