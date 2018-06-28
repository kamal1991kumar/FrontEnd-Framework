import { Controller } from 'modules/Controller';
import { AppContainer } from 'container/App.container';
import { reactRender, getEmbeddedJSON } from 'utils';
import { withStore } from 'modules/withStore';
import { getStore } from 'store';

// get global redux store
const store = getStore();

// wrap app container component global redux store
const AppComponentwithStoreStore = withStore( AppContainer, store );

// import action to save embedded json in store
import { saveEmbeddedJsonAction } from 'store/actions/embeddedJson.action';

export class TestController extends Controller {
    constructor( el, attr ) {
        super( el, attr );
    }
    
    // on initialize
    onInit() {
        const hostsJSON = getEmbeddedJSON( 'hosts' );
        store.dispatch( saveEmbeddedJsonAction( hostsJSON ) );
    }

    // controller installed and ready
    onReady() {
        this.render();
    }

    // render React component
    render() {
        reactRender( AppComponentwithStoreStore, { propName: 'propValue' } )( this.el );
    }
}

/*************************************************************/

// register controller
TestController.register();
