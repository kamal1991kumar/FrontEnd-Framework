/**
 * Routes tree configuration file
 * This file contains tree structure for entire application
 * identified by the page name
 */

// for `index.html`
import Home from 'views/Home.view';
import About from 'views/About.view';
import Contact from 'views/Contact.view';

// router for `index.html` page
export const index = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: false,
        component: About
    },
    {
        path: '/contact',
        exact: false,
        component: Contact
    }
];
