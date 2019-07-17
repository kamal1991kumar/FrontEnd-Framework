import * as constants from 'core/constants';
import { initialize } from 'core/bootstrap';
import { MessageBus } from 'core/modules/MessageBus';
import FastClick from 'vendors/FastClick';

//import { get } from 'lodash';

// import pollyfills
import 'promise-polyfill';

// velocity.js (DOM prototypes)
import 'velocity-animate';

// use smooth scroll
import 'smoothscroll-for-websites';

// bootstrap application when DOM tree is rendered
document.addEventListener( 'DOMContentLoaded', () => {

    // start bootstrap process
    log.debug( '[index.js] Bootstrap process started.' );

    // attach fastclick on mobile devices to remove click delay
    FastClick.attach( document.body );

    // initialize controllers
    initialize();

    // dispatch [message bus] bootstrap complete event
    log.info( '[index.js] Bootstrap process completed.' );
    MessageBus.trigger( constants.EVENT_BOOTSTRAP_COMPLETED );

} );
