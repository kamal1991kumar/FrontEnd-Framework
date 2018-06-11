import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/container/App.component';

// render initial component
ReactDOM.render( (
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById( 'app-root' ) );
