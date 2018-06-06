import React from 'react';

// async import
import { GREET } from '../vendors/greet';

// async import
setTimeout( () => {
    import( './lazy' ).then( window.console.warn );
}, 3000 );

setTimeout( () => {
    import( './busy' ).then( window.console.warn );
}, 5000 );

export const Greeting = () => {
    return (
        <h1>{ GREET }</h1>
    );
};
