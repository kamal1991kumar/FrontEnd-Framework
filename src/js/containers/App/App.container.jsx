import { withStore } from 'core/hoc/withStore';
import { withBrowserRouter } from 'core/hoc/withBrowserRouter';
import { IndexPageContainer } from 'containers/IndexPage/IndexPage.container';
import { getStore } from 'store';

// get a global redux store ( creates empty store if not already created )
const store = getStore();

/**
 * @desc This containers is entry point of the application.
 * @example
 * import { App } from 'containers/App.container';
 */
export const App = withStore(

    // avail <BrowserRouter> ( <BrowserRouter> ) using withBrowserRouter HOC to <IndexPageContainer>
    // withBrowserRouter( Component, props )
    withBrowserRouter( IndexPageContainer ),

    // global Redux store
    store
);
