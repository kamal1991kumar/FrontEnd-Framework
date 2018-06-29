/**
 * use => reactRender( App, { propName: 'propMyValue' } )( this.el );
 * Returns a function which can be called with DOMElement argument
 * to render a React component.
 */

import React from 'react';
import { render } from 'react-dom';

export const reactRender = ( type, props, ...children ) => {
    const ReactElement = React.createElement( type, props, ...children );

    return ( context ) => {
        render( ReactElement, context );
    };
};
