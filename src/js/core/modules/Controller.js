import { clone, isEmpty, has } from 'lodash';
import $ from 'jquery';

import * as constants from 'core/constants';
import { MessageBus } from 'core/modules/MessageBus';

// stores class definition against controller's name
const controllersMap = {};

// stores controller instances against their IDs
const instanceMap = {};

// check if controller name is valid
const isValidControllerName = ( controllerName ) => {
    return ! isEmpty( controllerName );
};

// check if controller exists in controllersMap
const isRegisteredController = ( controllerName ) => {
    return has( controllersMap, controllerName );
};

// add new instance to `instanceMap`
const addInstance = ( objectID, instance ) => {
    instanceMap[ objectID ] = instance;
};

/*************************************************************/


/**
 * @ignore
 * @desc get instance of a controller
 */
export const createInstance = ( controllerName, el, attr ) => {
    let $el,
        instance = null;

    if ( ! isValidControllerName( controllerName ) ) {
        throw new Error( constants.CONTROLLER_NAME_UNKNOWN_ERROR );
    } else if ( ! isRegisteredController( controllerName ) ) {
        throw new Error( constants.CONTROLLER_ALREADY_REGISTERED_ERROR + ' : ' +  controllerName );
    } else if ( ! controllerName || ! el ) {
        throw new Error( constants.TOO_FEW_PARAMETERS );
    } else {
        if ( 'string' === typeof el ) {
            $el = $( '#'  + el );
        } else if ( 'undefined' !== typeof el.jquery ) {
            $el = el;
        } else {
            $el = $( el );
        }

        instance = $el.data( 'instance' );

        if ( instance && instance.length && ( instance in instanceMap ) ) {
            instance = instanceMap[ instance ];
        } else {
            instance = new controllersMap[ controllerName ]( el, attr );
            instanceMap[ instance.objectID ] = instance;
            $el.data( 'instance', instance.objectID );
        }
    }

    return instance;
};

/**
 * @ignore
 * @desc remove an instance from `instanceMap`
 */
export const removeInstance = ( objectID ) => {
    const _instance = instanceMap[ objectID ];
    if ( 'function' === typeof _instance.unbind ) {
        _instance.unbind();
    }
    if ( 'function' === typeof _instance.remove ) {
        _instance.remove();
    }
    if ( 'function' === typeof _instance.onClose ) {
        _instance.onClose();
    }

    delete _instance.data;
    delete _instance.cache;
    delete _instance.selectors;
    delete instanceMap[ objectID ];
};


/**
 * @type {class}
 * @desc Controller super class provides a mechanism to render a React component on demand.
 */
export class Controller {
    
    /**
     * @param {HTMLElement} el - HTML element to render component in
     * @param {*} attr - attributes of HTML element
     * @param {*} controllerName - Name of the controller class
     */
    constructor( el, attr, controllerName ) {
        const controllerClass = this.constructor; // controller class

        // save controller name
        this.controllerName = controllerName;

        if ( 'string' === typeof el ) {
            this.el = document.getElementById( el );
        } else if ( 'undefined' !== typeof el.jquery ) {
            this.el = el.get( 0 );
        } else {
            this.el = el;
        }

        controllerClass.instanceCount = 'undefined' === typeof controllerClass.instanceCount ? 1 : controllerClass.instanceCount + 1;
        this.objectID = this.controllerName + '__' + controllerClass.instanceCount;

        this.$el = $( this.el );
        this.attr = clone( attr );
        this.cache = {};
        this.data = {};
        this.selectors = {};

        // add instance to `instanceMap`
        addInstance( this.objectID, this );

        // execute `init` function, if exists
        if ( 'function' === typeof this.onInit ) {
            this.onInit();
        }

        // execute `onReady` when document `bootstrapped` event is fired
        if ( 'function' === typeof this.onReady ) {
            MessageBus.on( constants.EVENT_BOOTSTRAP_COMPLETED, this.onReady, this );
        }
    }

    /**
     * @desc set name for the controller
     * @param {string} controllerName - controller name
     * @returns {this} - Instance of the class
     */
    static setName( controllerName ) {
        this.controllerName = controllerName;
        return this;
    }

    /**
     * @desc Register a controller
     */
    static register() {
        const controllerName = this.controllerName;

        if ( ! isValidControllerName( controllerName ) ) {
            throw new Error( constants.CONTROLLER_NAME_UNKNOWN_ERROR );
        } else if ( isRegisteredController( controllerName ) ) {
            throw new Error( constants.CONTROLLER_ALREADY_REGISTERED_ERROR + ' : ' +  controllerName );
        } else {
            controllersMap[ controllerName ] = this;
        }
    }

    /**
     * @desc Remove controller instance
     */
    close() {
        removeInstance( this.objectID );
    }

    /**
     * @desc Remove DOM element
     */
    remove() {
        this.$el.remove();
    }
}
