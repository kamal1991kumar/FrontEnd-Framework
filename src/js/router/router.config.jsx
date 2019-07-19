/* eslint-disable arrow-body-style */

/**
 * Application router configuration file.
 * This file contains route tree structure for entire application
 * identified by the `page` name and route `path` name.
 */

import React from 'react';
import { Redirect } from 'react-router-dom';

// HOC to lazy load component
import { withAsyncComponent } from 'core/hoc/withAsyncComponent';

// About sub components
import { HomeContainer } from 'containers/Home';
import { NotFoundContainer } from 'containers/NotFound';


/*****************************************************/


// route configuration and sub-routes
export const routes = {

    // router for `index.html` page
    // 'INDEX' ==> `page`
    INDEX: {

        // 'HOME' ==> `path`
        HOME: {
            path: '/',
            exact: true,
            component: HomeContainer
        },

        DOCUMENTATION: {
            path: '/documentation',
            exact: false,

            // [lazy load component]
            // we need to chain the promise using `then` and return actual component
            //  because we are not using `default` export
            component: withAsyncComponent( () => import( 'containers/Documentation' ).then( components => components.DocumentationContainer ) ),
       
            // child routes
            routes: {
                DOCUMENTATION_FRAMEWORK: {
                    path: '/documentation',
                    exact: true,
                    
                    // [lazy load component]
                    component: withAsyncComponent( () => import( 'containers/Framework' ).then( components => components.FrameworkContainer ) )
                },

                DOCUMENTATION_CLI: {
                    path: '/documentation/cli',
                    exact: true,
                    
                    // [lazy load component]
                    component: withAsyncComponent( () => import( 'containers/Cli' ).then( components => components.CliContainer ) )
                },
                
                DOCUMENTATION_GIT: {
                    path: '/documentation/git',
                    exact: true,
                    
                    // [lazy load component]
                    component: withAsyncComponent( () => import( 'containers/Git' ).then( components => components.GitContainer ) )
                }
            }
        },

        // 404 not found page
        NOT_FOUND: {
            path: '/not-found',
            exact: false,
            component: NotFoundContainer
        },

        // matches all paths but only if none of the above matches
        // it redirects to `/not-found` route
        REDIRECT: {
            path: '',
            exact: false,
            render( props ) {
                return <Redirect to={ { pathname: '/not-found', state: { previousURL: props.location.pathname } } } />;
            }
        }
    }
};
