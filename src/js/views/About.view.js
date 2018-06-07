import React from 'react';
import { NavLink as Link, Route, Switch } from 'react-router-dom';

import AboutDigital from 'views/AboutDigital.view';
import AboutPortal from 'views/AboutPortal.view';
import AboutPlatforms from 'views/AboutPlatforms.view';

const About = () => {
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
                
                <Switch>
                    <Route exact={ true } path='/about' component={ AboutDigital } />
                    <Route exact={ false } path='/about/portal' component={ AboutPortal } />
                    <Route exact={ false } path='/about/platforms' component={ AboutPlatforms } />
                </Switch>
            </div>
        </div>
    );
};

export default About;
