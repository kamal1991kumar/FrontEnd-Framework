import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomeContainer } from 'containers/IndexPage/Home.container';
import { DocumentationContainer } from 'containers/IndexPage/Documentation.container';
import { BestPracticesContainer } from 'containers/IndexPage/BestPractices.container';

import { siteHeaderView as SiteHeaderView } from 'views/shared/siteHeader.view';
import { siteFooterView as SiteFooterView } from 'views/shared/siteFooter.view';

export const indexPageView = () => {
    return (
        <div className='view-index'>
            <SiteHeaderView />

            <div className='view-index__content'>
                <Switch>
                    <Route exact path='/' component={ HomeContainer } />
                    <Route path='/documentation' component={ DocumentationContainer } />
                    <Route path='/best-practices' component={ BestPracticesContainer } />
                </Switch>
            </div>

            <SiteFooterView />
        </div>
    );
};
