/**
 * Router Outlet Component to auto render sub-routes based
 * on `path` prop on `RouterOutlet` component
 */

import React from 'react';
import _ from 'lodash';
import { Route, Switch } from 'react-router-dom';

export const routerOutlet = ( routes ) => {
    return class RouterOutlet extends React.Component {
        constructor() {
            super();
        }
    
        render() {
            if( ! this.props.currentRoute ) {
                
                // current route is not provided,
                // must be page level routes
                return (
                    <Switch>
                        { Object.entries( _.get( routes, this.props.currentPage, [] ) ).map( ( [ routeName, route ] ) => {
                            return (
                                <Route key={ routeName } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                    return <route.component { ...props } currentPage={ this.props.currentPage } currentRoute={ routeName } />;
                                } } />
                            );
                        } ) }
                    </Switch>
                );
            } else {
                
                // current route (`key` in router.config.js) is provided,
                // loop on nested `routes` inside `current page + current route` config object
                return (
                    <Switch>
                        { Object.entries( _.get( routes, `${ this.props.currentPage }.${ this.props.currentRoute }.routes`, [] ) ).map( ( [ routeName, route ] ) => {
                            return (
                                <Route key={ routeName } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                    return <route.component { ...props } currentPage={ this.props.currentPage } currentRoute={ routeName } />;
                                } } />
                            );
                        } ) }
                    </Switch>
                );
            }
        }
    };
};
