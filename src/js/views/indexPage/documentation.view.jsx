import React from 'react';
import { NavLink as Link, Route, Switch } from 'react-router-dom';

import { FrameworkContainer } from 'containers/indexPage/documentation/Framework.container';
import { CliContainer } from 'containers/indexPage/documentation/Cli.container';
import { GitContainer } from 'containers/indexPage/documentation/Git.container';

export const documentationView = ( props ) => {
    return (
        <div className='view-index-documentation'>
            <div className='view-index-documentation__title'>Documentation</div>

            <ul className='view-index-documentation__menu'>
                <li className='view-index-documentation__menu__item'>
                    <Link exact className='view-index-documentation__menu__item__link' to={ props.match.url } activeClassName='view-index-documentation__menu__item__link--active'>Ui Framework</Link>
                </li>
                <li className='view-index-documentation__menu__item'>
                    <Link className='view-index-documentation__menu__item__link' to={ props.match.url + '/cli' }activeClassName='view-index-documentation__menu__item__link--active'>Avizva CLI</Link>
                </li>
                <li className='view-index-documentation__menu__item'>
                    <Link className='view-index-documentation__menu__item__link' to={ props.match.url + '/git' } activeClassName='view-index-documentation__menu__item__link--active'>Git VCS</Link>
                </li>
            </ul>

            <div className="view-index-documentation__content">
                <Switch>
                    <Route exact path="/documentation" component={ FrameworkContainer } />
                    <Route exact path="/documentation/cli" component={ CliContainer } />
                    <Route exact path="/documentation/git" component={ GitContainer } />
                </Switch>
            </div>
        </div>
    );
};
