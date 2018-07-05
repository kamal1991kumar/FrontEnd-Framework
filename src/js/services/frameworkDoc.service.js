/**
 * Promise type service.
 * A callback based HTTP service to get markdown documentation of avizva UI framework.
 * This service returns HTML by transforming markdown to HTML using `showdown` plugin.
 */

import { Http } from 'core/modules/Http';
import showdown from 'showdown';

// markdown converter
const markdown = new showdown.Converter();

/*************************************************************/

export const getOverview = ( handler ) => {
    return Http.get( '/documentation/framework-overview.md', {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};

export const getWebpack = ( handler ) => {
    return Http.get( '/documentation/webpack.md', {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        }
    } );
};

export const getFileStructure = ( handler ) => {
    return Http.get( '/documentation/framework-file-structure.md', {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};

export const getSource = ( handler ) => {
    return Http.get( '/documentation/framework-source.md', {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};

export const getDist = ( handler ) => {
    return Http.get( '/documentation/framework-distribution.md', {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};

export const getCoreModules = ( handler ) => {
    return Http.get( '/documentation/core-modules.md', {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};

export const getESDoc = ( handler ) => {
    return Http.get( '/documentation/esdoc.md', {
        success: ( { data } ) => {
            return handler.success( markdown.makeHtml( data ) );
        },
        error: handler.error
    } );
};
