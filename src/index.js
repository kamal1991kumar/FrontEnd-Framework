import * as constants from 'constants';
import { initialize } from 'core/bootstrap';
import { MessageBus } from 'core/modules/MessageBus';

// bootstrap application when DOM tree is rendered
document.addEventListener( 'DOMContentLoaded', () => {
    
    // start bootstrap process
    initialize();

    // dispatch [message bus] bootstrap complete event
    MessageBus.trigger( constants.EVENT_BOOTSTRAP_COMPLETED );
} );
