import React from 'react';

// import styles
import './siteFooter.style.scss';

export const siteFooterView = () => {
    return (
        <div className='site-footer'>
            <div className='site-footer__content'>
                <div className='site-footer__content__left'>
                    <ul className='site-footer__menu'>
                        <li className='site-footer__menu__item'>
                            <a className='site-footer__menu__item__link' href='https://gitlab.com/avizva'>GitLab</a>
                        </li>

                        <li className='site-footer__menu__item'>
                            <a className='site-footer__menu__item__link' href='http://npm.avizva.com'>NPM Registry</a>
                        </li>

                        <li className='site-footer__menu__item'>
                            <a className='site-footer__menu__item__link' href='https://avizva.com'>About Avizva</a>
                        </li>
                    </ul>

                    <div className="site-footer__content__left__contact">
                        For framework and CLI related queries, contact <b>Avizva UI</b> team.
                    </div>
                </div>

                <div className='site-footer__content__right'>
                    You are using non-public confidential property of Avizva Solutions Pvt. Ltd. All Rights Reserved. Unauthorized copying of this software or any code it contains, via any medium is strictly prohibited. Please consult <b>Avizva Frontend Team</b> before distributing or making changes to this software or any file it contains.
                </div>
            </div>
        </div>
    );
};

// set display name
siteFooterView.displayName = 'siteFooterView';

// set default props
siteFooterView.defaultProps = {};


