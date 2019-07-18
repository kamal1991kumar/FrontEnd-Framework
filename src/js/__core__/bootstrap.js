import React from 'react';
import ReactDOM from 'react-dom';

// import global dependencies
import './utils/log';

/**
 * @desc bootstrap a react component inside a HTML element. This is entry point of the application.
 * @param {*} Component - React component
 * @param {*} element - DOM element or HTML element id
 * @param {*} defaultProps - Default props passed to the Component
 */
export const bootstrap = ( Component, element, defaultProps = {} ) => {

    // if element is string, use it as id to get HTML element
    if( 'string' === typeof element ) {
        element = document.getElementById( element );
    }

    ReactDOM.render( <Component { ...defaultProps } />, element );
};

