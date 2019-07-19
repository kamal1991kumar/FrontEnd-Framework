import { bootstrap } from 'core/bootstrap';

// App container is entry point of application
import { App } from 'containers/__App__';

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

    // bootstrap application
    bootstrap( App, 'app' );

    // dispatch [message bus] bootstrap complete event
    log.info( '[index.js] Bootstrap process completed.' );

} );
