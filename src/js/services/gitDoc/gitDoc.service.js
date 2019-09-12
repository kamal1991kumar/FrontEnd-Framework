/**
 * Promise type service.
 * A callback based HTTP service to get markdown documentation of Demo UI framework.
 * This service returns HTML by transforming markdown to HTML using `showdown` plugin.
 */

import { Http } from 'core/modules/Http';
import showdown from 'showdown';

// markdown converter
const markdown = new showdown.Converter();

/*************************************************************/

export const getGitDocumentation = ( handler ) => {
    return Http.get( {
        url: '/documentation/git.md',
        emitEvent: true,
        eventName: 'MY_HTTP_EVENT'
    }, {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        },
        error: handler.error
    } );
};
