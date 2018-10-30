import React from 'react';
import _ from 'lodash';
import { Route, Switch } from 'react-router-dom';

/**
 * @type {function}
 * @desc Router Outlet Component to auto render sub-routes based on `path` prop on `RouterOutlet` component.
 * @param {object} routes - A router configuration object
 * @example
 * import { routerOutlet } from 'core/hoc/routerOutlet';
 * import { config } from './router.config';
 *
 * const RouterOutlet = routerOutlet( config );
 *
 * // render
 * <RouterOutlet page="INDEX"/>
 * <RouterOutlet page={ props.page } path={ props.path }/>
 */
export const routerOutlet = ( routes ) => {
    return class RouterOutlet extends React.Component {
        constructor( props ) {
            super( props );
        }
    
        render() {
            if( ! this.props.path ) {
                
                // current route is not provided,
                // must be page level routes
                return (
                    <Switch>
                        { Object.entries( _.get( routes, this.props.page, [] ) ).map( ( [ routeName, route ] ) => {
                            if( route.render && 'function' === typeof route.render ) {
                                return (
                                    <Route key={ routeName } exact={ route.exact } path={ route.path } render={ route.render } />
                                );
                            } else {
                                return (
                                    <Route key={ routeName } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                        return <route.component { ...props } page={ this.props.page } path={ routeName } />;
                                    } } />
                                );
                            }
                        } ) }
                    </Switch>
                );
            } else {
                
                // route (`key` in router.config.js) is provided,
                // loop on nested `routes` inside `page + route` config object
                return (
                    <Switch>
                        { Object.entries( _.get( routes, `${ this.props.page }.${ this.props.path }.routes`, [] ) ).map( ( [ routeName, route ] ) => {
                            if( route.render && 'function' === typeof route.render ) {
                                return (
                                    <Route key={ routeName } exact={ route.exact } path={ this.props.path + '.routes.' + routeName } render={ route.render } />
                                );
                            } else {
                                return (
                                    <Route key={ routeName } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                        return <route.component { ...props } page={ this.props.page } path={ this.props.path + '.routes.' + routeName } />;
                                    } } />
                                );
                            }
                        } ) }
                    </Switch>
                );
            }
        }
    };
};
