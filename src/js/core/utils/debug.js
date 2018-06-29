/**
 * A simple debug interface to
 * log messages to browser console
 */

const log = ( ...messages ) => {
    window.console.log( ...messages );
};

const info = ( ...messages ) => {
    window.console.info( ...messages );
};

const warn = ( ...messages ) => {
    window.console.warn( ...messages );
};

const error = ( ...messages ) => {
    window.console.error( ...messages );
};

/*******************************************/

// export as `debug` object
export const debug = {
    log, info, warn, error
};

