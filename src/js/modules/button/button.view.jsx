import React from 'react';
import { NavLink as Link } from 'react-router-dom';
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
        'avz-button--secondary': true === props.secondary,
        'avz-button--icon': true === props.hasIcon,
    } );

    if( true === props.link ) {
        return (
            <Link
                exact={ props.exact }
                to={ props.to }
                activeClassName={ props.activeClassName }
                className={ widgetClassName }
                data-tab={ props.name }
            >{ props.children }</Link>
        );
    } else if( true === props.anchor ) {
        return (
            <a
                href={ props.href }
                target={ props.target }
                className={ widgetClassName }
                data-tab={ props.name }
            >{ props.children }</a>
        );
    } else {
        return (
            <button
                className={ widgetClassName }
                data-tab={ props.name }
                onClick={ props.onClick }
            >{ props.children }</button>
        );
    }

};

// set display name
button.displayName = 'buttonView';

// set default props
button.defaultProps = {
    link: false,
    className: null,
    activeClassName: null,
    to: null,
    exact: false,
    size: null,
    fill: false,
    hasIcon: false,
    href: null,
    target: '_blank',
    name: 'button',
    title: 'Button Name',
    onClick: noop
};

