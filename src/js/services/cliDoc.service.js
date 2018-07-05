/**
 * Promise type service.
 * A callback based HTTP service to get markdown documentation of avizva CLI tool.
 * This service returns HTML by transforming markdown to HTML using `showdown` plugin.
 */

import { Http } from 'core/modules/Http';
import showdown from 'showdown';

// markdown converter
const markdown = new showdown.Converter();

// get markdown file URLs from `CONFIG` ( check `config/*.config` files )
const urls = CONFIG.docUrls.cli;

/*************************************************************/

export const getIntro = ( handler ) => {
    return Http.get( urls.intro, {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};

export const getFramework = ( handler ) => {
    return Http.get( urls.framework, {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};

export const getServer = ( handler ) => {
    return Http.get( urls.server, {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};
