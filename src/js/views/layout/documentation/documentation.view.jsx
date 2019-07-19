import React from 'react';

import { RouterOutlet } from 'router';
import { removeTrailingSlash } from 'utils/removeTrailingSlash';

import { Button } from 'modules/button';

// import styles
import './documentation.style.scss';

export const documentationView = ( props ) => {
    return (
        <div className='view-index-documentation'>
            <div className='view-index-documentation__title'>Documentation &amp; Guide</div>

            <div className='view-index-documentation__menu'>
                {/*
                    `removeTrailingSlash` util function remove trailing lash from URL received from router.
                    This is a bug in React which prevents correct route to load properly.
                */}
                <Button
                    link={ true }
                    exact={ true }
                    className='view-index-documentation__menu__item'
                    to={ removeTrailingSlash( props.match.url ) }
                    activeClassName='avz-button--fill'
                    hasIcon={ true }
                    size='small'
                >
                    <i className='icon ion-md-images'></i>  Ui Framework
                </Button>

                <Button
                    link={ true }
                    className='view-index-documentation__menu__item avz-button'
                    to={ removeTrailingSlash( props.match.url ) + '/cli' }
                    activeClassName='avz-button--fill'
                    hasIcon={ true }
                    size='small'
                >
                    <i className='icon ion-md-code-working'></i> Avizva CLI
                </Button>

                <Button
                    link={ true }
                    className='view-index-documentation__menu__item'
                    to={ removeTrailingSlash( props.match.url ) + '/git' }
                    activeClassName='avz-button--fill'
                    hasIcon={ true }
                    size='small'
                >
                    <i className='icon ion-md-git-merge'></i>  Git Basics
                </Button>
            </div>

            <div className="view-index-documentation__content">
                {/*
                    prop.page and prop.path is injected by `router` module.
                    it should match exactly as written in `router.config.js` file
                */ }
                <RouterOutlet page={ props.page } path={ props.path }/>
            </div>
        </div>
    );
};

// set display name
documentationView.displayName = 'CliView';

// set default props
documentationView.defaultProps = {};
