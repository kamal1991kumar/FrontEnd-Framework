import { Controller } from 'core/modules/Controller';
import { reactRender, getEmbeddedJSON } from 'core/utils';
import { AppContainer } from 'containers/App.container';
import { withStore } from 'core/hoc/withStore';
import { getStore } from 'store';
import { saveHostsAction } from 'store/actions/hosts.action';

// get or create new store
const store = getStore();

export class AppController extends Controller {
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

    // render react component
    render() {
        reactRender( withStore( AppContainer, store ) )( this.el );
    }
}

/*************************************************************/

// register controller
AppController.register();
