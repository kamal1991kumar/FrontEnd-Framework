import { Controller } from 'core/modules/Controller';
import { reactRender, getEmbeddedJSON } from 'core/utils';
import { IndexPageContainer } from 'containers/IndexPage.container';
import { withBrowserRouter } from 'core/hoc/withBrowserRouter';
import { withStore } from 'core/hoc/withStore';
import { getStore } from 'store';
import { saveHostsAction } from 'store/actions';

// get a global redux store ( creates empty store if not already created )
const store = getStore();

/**
 * @ignore
 */
export class IndexController extends Controller {
    constructor( el, attr ) {
        super( el, attr );
    }
    
    // [lifecycle method] controller is initialized
    onInit() {

        // get embedded json from controller DOM element
        const hosts = getEmbeddedJSON( 'hosts', this.el );

        // save hosts in redux store
        store.dispatch( saveHostsAction( hosts ) );
    }

    // [lifecycle method] controller is ready
    onReady() {

        // call render method
        this.render();
    }

    // render a view
    render() {

        // Render a React component in controller's context ( HTML/DOM element ) => `this.el`
        // reactRender( Component, props, children )( DOMContext )
        reactRender(

            // avail Redux Store (<Provider>) using `withStore` HOC and a global `store`
            // withStore( Component, store )
            withStore(

                // avail <BrowserRouter> ( <BrowserRouter> ) using withBrowserRouter HOC to <IndexPageContainer>
                // withBrowserRouter( Component, props )
                withBrowserRouter( IndexPageContainer ),

                // global Redux store
                store
            )
        )( this.el );
    }
}

/*************************************************************/

// register controller with a name
IndexController.setName( 'IndexController' ).register();
