import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export const siteHeaderView = () => {
    return (
        <div className='site-header'>
            <div className='site-header__content'>
                <div className='site-header__content__left'>
                    <Link exact to='/'>
                        <img className='site-header__content__left__logo' src='/assets/images/logo.png' alt='logo'/>
                    </Link>
                </div>

                <div className='site-header__content__right'>
                    <ul className='site-header__menu'>
                        <li className='site-header__menu__item'>
                            <Link exact className='site-header__menu__item__link' to='/' activeClassName='site-header__menu__item__link--active'>Home</Link>
                        </li>
                        <li className='site-header__menu__item'>
                            <Link className='site-header__menu__item__link' to='/documentation' activeClassName='site-header__menu__item__link--active'>Documentation</Link>
                        </li>
                        <li className='site-header__menu__item'>
                            <Link className='site-header__menu__item__link' to='/best-practices' activeClassName='site-header__menu__item__link--active'>Best Practices</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
