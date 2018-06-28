import { initialize } from 'modules/Bootstrap';
import * as constants from 'constants';

// create event for bootstrap action
const eventBootstrapCompleted = new CustomEvent( constants.EVENT_BOOTSTRAP_COMPLETED, {
    detail: {
        eventName: constants.EVENT_BOOTSTRAP_COMPLETED
    }
} );

// bootstrap application when DOM tree is rendered
document.addEventListener( 'DOMContentLoaded', () => {
    
    // start bootstrap
    initialize();

    // displatch bootstrap complete event
    document.dispatchEvent( eventBootstrapCompleted );
} );
