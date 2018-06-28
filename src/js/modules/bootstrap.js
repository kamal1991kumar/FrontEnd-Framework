import $ from 'jquery';

import { createInstance } from 'modules/Controllers';
import { CONTROLLER_ELEM_ATTR } from 'constants';

/*+++++++++++++++++++++++++++++++++++*/
import 'controllers'; // import all controllers to bootstrap
/*+++++++++++++++++++++++++++++++++++*/

// state of bootstrap
let bootstrapping = false;

// list of HTML elements with `data-controller`
let controllerDirectives = [];

// counter for number of controller instances creates
let instCount = 0;

// controllers creation pause
let isPaused = false;

// while bootstrapping, if manual `run` request is received,
// push that request in the payloadQueue.
const payloadQueue = [];


/*********************************************************/


/**
 * Search controller directives in context of a HTML element
 * and store inside `controllerDirectives` array.
 */
const findControllerDirectives = ( context ) => {
    controllerDirectives = context.find( `[${ CONTROLLER_ELEM_ATTR }]` );
};

/**
 * From each controller directives in `controllerDirectives`,
 * create an instance of the controller.
 */
const initControllers = () => {
    for ( instCount = 0; instCount < controllerDirectives.length && ! isPaused ; instCount = instCount + 1 ) {
        const controllerName = controllerDirectives.eq( instCount ).attr( CONTROLLER_ELEM_ATTR );
        createInstance( controllerName, controllerDirectives.eq( instCount ) );
    }
};

// start bootstrap process
const bootstrap = ( context = 'body' ) => {
    if ( 'string' === typeof context || 'undefined' === typeof context.jquery ) {
        context = $( context );
    }
    
    // search controllers in give element context and save
    findControllerDirectives( context );

    // initialize controllers
    initControllers();
};

// check tasks in `payloadQueue` and call `run` method with payload
const runWithPayloadQueue = () => {
    if ( 0 < payloadQueue.length ) {
        
        // run with payload
        run( payloadQueue.splice( 0, 1 )[ 0 ] );
    }
};

/**
 * This will call bootstrap and will pass the context
 * in the bootstrap as an argument if context is defined.
 */
export const run = ( payload ) => {
    if ( true === bootstrapping ) {
        payloadQueue.push( payload );
    } else {
        bootstrapping = true;

        if ( 'undefined' === typeof payload || 'undefined' === typeof payload.context ) {
            bootstrap();
        } else {
            bootstrap( payload.context );
        }

        bootstrapping = false;
        
        // call `run` with payload queue
        runWithPayloadQueue();
    }
};


/**********************************************/


// initialize bootstrap process
export const initialize = ( context ) => {
    run( context );
};

// pause controllers creation
export const pause = () => {
    isPaused = true;
};

// resume controllers creation
export const resume = () => {
    isPaused = false;

    for ( ; instCount < controllerDirectives.length && ! isPaused ; instCount = instCount + 1 ) {
        const controllerName = controllerDirectives.eq( instCount ).attr( CONTROLLER_ELEM_ATTR );
        createInstance( controllerName, controllerDirectives.eq( instCount ) );
    }
};
