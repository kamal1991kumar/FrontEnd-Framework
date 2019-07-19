import React from 'react';

// import styles
import './myView.style.scss';

/**
 * @type {object}
 * @desc A React presentation/dumb view component.
 * @example
 * import { myView } from 'views/js/views/widgets/myView';
 *
 * // render
 * <myView propName='propValue'/>
 */
export const myView = ( props ) => {
    return (
        <div className='ui-my-view'>
            <p>Prop value : { props.value }</p>
        </div>
    );
};

// set display name
myView.displayName = 'myView';

// set default props
myView.defaultProps = {};