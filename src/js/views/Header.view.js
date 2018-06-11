import React from 'react';
import { NavLink as Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='site-header'>
            <div className='site-header__logo-section'>
                <img className='site-header__logo-section__logo' src='/assets/images/logo.png' alt=''/>
            </div>

            <div className='site-header__nav-section nav'>
                <Link to='/' exact={ true } className='nav__link' activeClassName='nav__link--active'>Home</Link>
                <Link to='/about' exact={ false } className='nav__link' activeClassName='nav__link--active'>About</Link>
                <Link to='/contact' exact={ false } className='nav__link' activeClassName='nav__link--active'>Contact</Link>
            </div>
        </div>
    );
};
