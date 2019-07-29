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
 * <RouterOutlet />
 * <RouterOutlet path={ props.path }/>
 */
export const routerOutlet = ( routes ) => {
    return class RouterOutlet extends React.Component {
        constructor( props ) {
            super( props );
        }
    
        render() {
            if( ! this.props.path ) {
                
                // current route is not provided, must be top-most (starting) level routes
                return (
                    <Switch>
                        { Object.entries( routes ).map( ( [ routeName, route ] ) => {
                            if( route.render && 'function' === typeof route.render ) {
                                return (
                                    <Route key={ routeName } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                        return route.render( { ...this.props, ...props, path: routeName, routeData: route.data } );
                                    } } />
                                );
                            } else {
                                return (
                                    <Route key={ routeName } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                        return <route.component { ...this.props } { ...props } path={ routeName } routeData={ route.data } />;
                                    } } />
                                );
                            }
                        } ) }
                    </Switch>
                );
            } else {
                
                // loop on nested `routes` when `path` prop is present
                return (
                    <Switch>
                        { Object.entries( _.get( routes, `${ this.props.path }.routes`, [] ) ).map( ( [ routeName, route ] ) => {
                            const routePath = this.props.path + '.routes.' + routeName;

                            if( route.render && 'function' === typeof route.render ) {
                                return (
                                    <Route key={ routePath } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                        return route.render( { ...this.props, ...props, path: routePath, routeData: route.data } );
                                    } } />
                                );
                            } else {
                                return (
                                    <Route key={ routePath } exact={ route.exact } path={ route.path } render={ ( props ) => {
                                        return <route.component { ...this.props } { ...props } path={ routePath } routeData={ route.data } />;
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
