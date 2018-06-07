/**
 * Routes tree configuration file
 * This file contains tree structure for entire application
 * identified by the page name
 */

// for `index.html`
export const index = [
    {
        path: '/',
        exact: true,
        render: () => <h1>Hello, I am home.</h1>
    },
    {
        path: '/about',
        exact: false,
        render: () => <h1>Hello, I am about.</h1>
    }
];
