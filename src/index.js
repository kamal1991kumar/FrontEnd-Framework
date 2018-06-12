import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/container/App.component';
import { withBrowserRouter } from 'modules/withBrowserRouter';
import { withRedux } from 'modules/withRedux';

// inject `App` componnent with router
// pass a [component] and extra [props]
const AppWithRouter = withBrowserRouter( App, { currentPage: 'INDEX' } );

// inject `AppWithRouter` componnent with redux
// pass a [component], [state] and extra [props]
const AppWithRedux = withRedux( AppWithRouter, {}, {} );

// render
ReactDOM.render( <AppWithRedux />, document.getElementById( 'app-root' ) );
