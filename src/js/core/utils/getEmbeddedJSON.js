/**
 * use => getEmbeddedJSON( name, context );
 * Returns a embedded json in the HTML script element.
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


