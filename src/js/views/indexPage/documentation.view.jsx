import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { RouterOutlet } from 'router';
import { removeTrailingSlash } from 'utils';

export const documentationView = ( props ) => {
    return (
        <div className='view-index-documentation'>
            <div className='view-index-documentation__title'>Documentation</div>

            <ul className='view-index-documentation__menu'>
                <li className='view-index-documentation__menu__item'>
                    {/*
                      `removeTrailingSlash` util function remove trailing lash from URL received from router.
                      This is a bug in React which prevents correct route to load properly.
                    */}
                    <Link exact className='view-index-documentation__menu__item__link' to={ removeTrailingSlash( props.match.url ) } activeClassName='view-index-documentation__menu__item__link--active'>Ui Framework</Link>
                </li>
                <li className='view-index-documentation__menu__item'>
                    <Link className='view-index-documentation__menu__item__link' to={ removeTrailingSlash( props.match.url ) + '/cli' }activeClassName='view-index-documentation__menu__item__link--active'>Avizva CLI</Link>
                </li>
                <li className='view-index-documentation__menu__item'>
                    <Link className='view-index-documentation__menu__item__link' to={ removeTrailingSlash( props.match.url ) + '/git' } activeClassName='view-index-documentation__menu__item__link--active'>Git VCS</Link>
                </li>
            </ul>

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
