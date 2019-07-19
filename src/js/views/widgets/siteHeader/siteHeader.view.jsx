import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Button } from 'modules/button';

// import styles
import './siteHeader.style.scss';

export const siteHeaderView = ( props ) => {
    return (
        <div className={ 'site-header' + ( props.stuck ? ' site-header--stuck' : '' ) }>
            <div className='site-header__content'>
                <div className='site-header__content__left'>
                    <Link exact to='/'>
                        <img className='site-header__content__left__logo' src='/assets/images/logo.png' alt='logo'/>
                    </Link>
                </div>

                <div className='site-header__content__right'>
                    <Button
                        link={ true }
                        exact={ true }
                        className='site-header__content__right__item'
                        size='small'
                        hasIcon={ true }
                        to='/'
                        activeClassName='avz-button--fill'>
                        <i className='icon ion-md-information-circle-outline'></i> About Framework
                    </Button>

                    <div className="avz-dropdown site-header__content__right__item">
                        <div className="avz-dropdown__trigger">
                            <Button
                                link={ true }
                                size='small'
                                hasIcon={ true }
                                to='/documentation'
                                activeClassName='avz-button--fill'>
                                <i className="icon ion-md-paper"></i> Documentation
                            </Button>
                        </div>
                        <div className="avz-dropdown__menu">
                            <Link exact to="/documentation" className="avz-dropdown__menu__item">UI framework</Link>
                            <Link to="/documentation/cli" className="avz-dropdown__menu__item">CLI commands</Link>
                            <Link to="/documentation/git" className="avz-dropdown__menu__item">How to use Git?</Link>
                        </div>
                    </div>

                    <Button
                        link={ true }
                        to='/best-practices'
                        activeClassName='avz-button--fill'
                        size='small'
                        hasIcon={ true }
                        className='site-header__content__right__item'
                    >
                        <i className="icon ion-md-checkmark-circle-outline"></i> Best Practices
                    </Button>
                </div>
            </div>
        </div>
    );
};

// set display name
siteHeaderView.displayName = 'siteHeaderView';

// set default props
siteHeaderView.defaultProps = {};
