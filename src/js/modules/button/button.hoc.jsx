import React from 'react';
import { button as ButtonView } from './button.view';

/**
 * @desc button module
 * @example
 * import { button } from 'modules/button';
 * import { Button } from 'modules/button';
 */
export const button = ( Component = ButtonView ) => {
    return class Button extends React.Component {
        constructor() {
            super();
        }

        render() {
            return (
                <Component { ...this.props }/>
            );
        }
    };
};

// export instance
export const Button = button();

// set display name
button.displayName = 'button';

// set default props
button.defaultProps = {};

