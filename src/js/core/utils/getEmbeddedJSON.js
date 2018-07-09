/**
 * @type {function}
 * @desc Returns embedded JSON value inside a HTML element.
 * @param {string} name - A **name** HTML attribute value of `script` element
 * @param {HTMLElement} [context] - A parent `HTMLElement` to find `script` tag in, default `document.body`
 * @return {object} An embedded object (_parsed JSON_)
 * @example
 * import { getEmbeddedJSON } from 'core/utils/getEmbeddedJSON';
 *
 * // extract embedded JSON
 * const context = document.getElementById( 'container' );
 * const data = getEmbeddedJSON( 'API_ENDPOINTS', context );
 */
export const getEmbeddedJSON = ( name, context ) => {

    // set `body` as context if `context` is not provided
    if( ! context ) {
        context = document.body;
    }

    const elements = context.querySelectorAll( `script[name="${ name }"]` );
    const json = {};

    elements.forEach( element => {
        try {
            const _json = JSON.parse( element.textContent ) || {};
            Object.assign( json, _json );
        } catch( e ) {
            window.console.log( e );
        }
    } );

    return json;
};


