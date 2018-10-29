import * as constants from 'constants';
import { initialize } from 'core/bootstrap';
import { MessageBus } from 'core/modules/MessageBus';

// import pollyfills
import 'promise-polyfill';

// velocity.js (DOM prototypes)
import 'velocity-animate';

// bootstrap application when DOM tree is rendered
document.addEventListener( 'DOMContentLoaded', () => {

    // start bootstrap process
    log.debug( '[index.js] Bootstrap process started.' );

    initialize();
    
    log.info( '[index.js] Bootstrap process completed.' );

    // dispatch [message bus] bootstrap complete event
    MessageBus.trigger( constants.EVENT_BOOTSTRAP_COMPLETED );
} );
