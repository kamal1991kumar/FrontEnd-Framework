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

export const getOverview = ( handler ) => {
    return Http.get( {
        url: '/documentation/framework-overview.md',
        emitEvent: true,
        eventName: 'MY_HTTP_EVENT'
    }, {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        },
        error: handler.error
    } );
};

export const getWebpack = ( handler ) => {
    return Http.get( {
        url: '/documentation/webpack.md',
        emitEvent: true
    }, {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        }
    } );
};

export const getFileStructure = ( handler ) => {
    return Http.get( '/documentation/framework-file-structure.md', {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        },
        error: handler.error
    } );
};

export const getSource = ( handler ) => {
    return Http.get( '/documentation/framework-source.md', {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        },
        error: handler.error
    } );
};

export const getDist = ( handler ) => {
    return Http.get( '/documentation/framework-distribution.md', {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        },
        error: handler.error
    } );
};

export const getCoreModules = ( handler ) => {
    return Http.get( '/documentation/framework-core-modules.md', {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        },
        error: handler.error
    } );
};

export const getESDoc = ( handler ) => {
    return Http.get( '/documentation/esdoc.md', {
        success: ( { body } ) => {
            return handler.success( markdown.makeHtml( body ) );
        },
        error: handler.error
    } );
};
