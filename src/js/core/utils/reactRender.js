import React from 'react';
import { render } from 'react-dom';

/**
 * @type {function}
 * @desc An utility function to render a React component inside given `HTMLElement`.
 * @param {any} type - A React component class or HTML tag
 * @param {object} [props] - Props to inject
 * @param {...any} [children] - Render additional children inside this component
 * @return { function(context: HTMLElement) } A function which should be called with `HTMLElement`.
 * @example
 * import { reactRender } from 'core/utils/reactRender';
 * import { TestView } from 'views/Test.view';
 *
 * const context = document.getElementById( 'container' );
 *
 * // render `TestView` React component inside `context`
 * reactRender( TestView, { propName: 'propValue' } )( context );
 */
export const reactRender = ( type, props, ...children ) => {
    const ReactElement = React.createElement( type, props, ...children );

    /**
     * @ignore
     */
    return ( context ) => {
        render( ReactElement, context );
    };
};
