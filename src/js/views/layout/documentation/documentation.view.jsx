import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { RouterOutlet } from 'router';
import { removeTrailingSlash } from 'utils';

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
                <Link exact className='view-index-documentation__menu__item avz-button avz-button--size-small avz-button--icon' to={ removeTrailingSlash( props.match.url ) } activeClassName=' avz-button--fill'>
                    <i className='icon ion-md-images'></i>  Ui Framework
                </Link>
                <Link className='view-index-documentation__menu__item avz-button avz-button--size-small avz-button--icon' to={ removeTrailingSlash( props.match.url ) + '/cli' } activeClassName='avz-button--fill'>
                    <i className='icon ion-md-code-working'></i> Avizva CLI
                </Link>
                <Link className='view-index-documentation__menu__item avz-button avz-button--size-small avz-button--icon' to={ removeTrailingSlash( props.match.url ) + '/git' } activeClassName='avz-button--fill'>
                    <i className='icon ion-md-git-merge'></i>  Git Basics
                </Link>
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
