import { Controller } from 'core/modules/Controller';
import { reactRender, getEmbeddedJSON, debug } from 'core/utils';

// React container component to render
import { SomeContainer } from 'containers/Some.container';

/**
 * @type {class}
 * @desc Controller SomeController to render React container component.
 * There is no need to import or export this controller, bootstrap process will pick up all controllers of the application.
 * But make sure to call `register` static method on SomeController class to register it.
 */
export class SomeController extends Controller {
    
    /**
     * @param {HTMLElement} el - HTMLElement to render React component inside
     * @param {object} attr - Attributes of given `el` HTML element
     */
    constructor( el, attr ) {
        super( el, attr );
    }
    
    /**
     * @desc A callback method when controller is being registered
     */
    onInit() {
        const hosts = getEmbeddedJSON( 'hosts', this.el ); // get embedded json by `name` attr value
        debug.log( hosts );
    }

    /**
     * @desc A callback method when controller is initialized and ready
     */
    onReady() {
        this.render(); // render a react component
    }

    /**
     * @desc Render react container component
     */
    render() {
        reactRender( SomeContainer, { propName: 'propMyValue' } )( this.el );
    }
}

/*************************************************************/

// register controller
SomeController.setName( 'SomeController' ).register();
