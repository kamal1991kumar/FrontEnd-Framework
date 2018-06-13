import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/container/App.component';
import { withBrowserRouter } from 'modules/withBrowserRouter';
import { withRedux } from 'modules/withRedux';

// [Router] this wraps component with 'BrowserRouter`
const AppWithRouter = withBrowserRouter( App, { currentPage: 'INDEX' } );

// [Redux] this wraps component with 'Provider` and a `store`
const AppWithRedux = withRedux( AppWithRouter, {}, {} );

// render
ReactDOM.render( <AppWithRedux />, document.getElementById( 'app-root' ) );
