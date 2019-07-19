import React from 'react';
import { noop } from 'lodash';
import classNames from 'classnames';

// import styles
import './button.style.scss';

/**
 * @desc common button view
 */
export const button = ( props ) => {

    const widgetClassName = classNames( 'avz-button', props.className, {
        'avz-button--size-mini': 'mini' === props.size,
        'avz-button--size-small': 'small' === props.size,
        'avz-button--size-medium': 'medium' === props.size,
        'avz-button--fill': true === props.fill,
        'avz-button--secondary': true === props.secondary
    } );

    return (
        <button
            className={ widgetClassName }
            data-tab={ props.name }
            onClick={ props.onClick }
        >{ props.children }</button>
    );
};

// set display name
button.displayName = 'buttonView';

// set default props
button.defaultProps = {
    className: null,
    size: null,
    fill: false,
    name: 'button',
    title: 'Button Name',
    onClick: noop
};

