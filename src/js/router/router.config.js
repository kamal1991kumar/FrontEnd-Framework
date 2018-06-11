/* eslint-disable arrow-body-style */

/**
 * Routes tree configuration file
 * This file contains tree structure for entire application
 * identified by the page name
 */


import { withAsync } from 'modules/withAsync';

// About sub components
import AboutDigital from 'views/AboutDigital.view';
import AboutPortal from 'views/AboutPortal.view';
import AboutPlatforms from 'views/AboutPlatforms.view';


/*****************************************************/


// route configuration and sub-routes
export const routes = {

    // router for `index.html` page
    INDEX: {
        HOME: {
            path: '/',
            exact: true,
            component: withAsync( () => import( 'views/Home.view' ).then( components => components.Home ) )
        },

        ABOUT: {
            path: '/about',
            exact: false,
            component: withAsync( () => {
                return import( 'views/About.view' );
            } ),
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
            component: withAsync( () => {
                return import( 'views/Contact.view' );
            } )
        }
    }
};
