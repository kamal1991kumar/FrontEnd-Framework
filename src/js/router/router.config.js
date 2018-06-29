/* eslint-disable arrow-body-style */

/**
 * Routes tree configuration file
 * This file contains tree structure for entire application
 * identified by the page name
 */


import { withAsyncComponent } from 'core/hoc/withAsyncComponent';

// About sub components
import { AboutDigital } from 'views/AboutDigital.view';
import { AboutPortal } from 'views/AboutPortal.view';
import { AboutPlatforms } from 'views/AboutPlatforms.view';


/*****************************************************/


// route configuration and sub-routes
export const routes = {

    // router for `index.html` page
    INDEX: {
        HOME: {
            path: '/',
            exact: true,

            // avoid default export and use named export e.g. export { Home }
            component: withAsyncComponent( () => import( 'views/Home.view' ).then( components => components.Home ) )
        },

        ABOUT: {
            path: '/about',
            exact: false,
            component: withAsyncComponent( () => import( 'views/About.view' ).then( components => components.About ) ),
            routes: {
                ABOUT_DIGITAL: {
                    path: '/about',
                    exact: true,
                    component: AboutDigital
                },
                ABOUT_PORTAL: {
                    path: '/about/portal',
                    exact: true,
                    component: AboutPortal
                },
                ABOUT_PLATFORMS: {
                    path: '/about/platforms',
                    exact: true,
                    component: AboutPlatforms
                }
            }
        },

        CONTACT: {
            path: '/contact',
            exact: false,
            component: withAsyncComponent( () => import( 'views/Contact.view' ).then( components => components.Contact ) )
        }
    }
};
