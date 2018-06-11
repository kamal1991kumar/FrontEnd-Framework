import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { RenderRoutes } from 'router';
import { Test } from 'views/Test.view';

export const About = ( props )  => {
    return (
        <div className='about-component'>
            <h1 className='about-component__title'>About</h1>
            <div className='about-component__tabs'>
                <div className="about-component__tabs__menu nav nav--dark">
                    <Link to='/about' exact={ true } className='nav__link' activeClassName='nav__link--active'>
                        Digital Design
                    </Link>

                    <Link to='/about/portal' exact={ false } className='nav__link' activeClassName='nav__link--active'>
                        Portal Solutions
                    </Link>

                    <Link to='/about/platforms' exact={ false } className='nav__link' activeClassName='nav__link--active'>
                        Integration Platforms
                    </Link>
                </div>

                <RenderRoutes currentPage={ props.currentPage } currentRoute={ props.currentRoute } />

                <Test />
            </div>
        </div>
    );
};
