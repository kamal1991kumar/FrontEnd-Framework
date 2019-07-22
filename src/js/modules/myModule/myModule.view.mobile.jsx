import React from 'react';

/**
 * @type {object}
 * @desc A React presentation/dumb view component.
 */
export const myModule = ( props ) => {
    return (
        <div className='ui-my-module'>
            <h1>Hi World. I am { props.name }</h1>
        </div>
    );
};

// set display name
myModule.displayName = 'myModule';

// set default props
myModule.defaultProps = {};
