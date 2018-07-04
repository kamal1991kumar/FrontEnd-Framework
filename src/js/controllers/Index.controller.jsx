import { Controller } from 'core/modules/Controller';
import { reactRender, getEmbeddedJSON } from 'core/utils';
import { IndexPageContainer } from 'containers/IndexPage.container';
import { withBrowserRouter } from 'core/hoc/withBrowserRouter';
import { withStore } from 'core/hoc/withStore';
import { getStore } from 'store';
import { saveHostsAction } from 'store/actions';

// get or create new store
const store = getStore();

export class IndexController extends Controller {
    constructor( el, attr ) {
        super( el, attr );
    }
    
    // controller initialized
    onInit() {

        // get embedded json by `name` attr value
        const hosts = getEmbeddedJSON( 'hosts', this.el );

        // save hosts in redux store
        store.dispatch( saveHostsAction( hosts ) );
    }

    // controller ready
    onReady() {

        // render a react component
        this.render();
    }

    // render React component
    render() {

        // Render give React component in controller DOM element (`this.el`)
        reactRender(

            // avail Redux Store (<Provider>) using `withStore` HOC and a global `store`
            withStore(

                // avail <BrowserRouter> ( <BrowserRouter> ) using withBrowserRouter HOC to <IndexPageContainer>
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
