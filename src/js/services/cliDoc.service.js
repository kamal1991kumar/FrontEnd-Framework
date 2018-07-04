import { Http } from 'core/modules/Http';
import showdown from 'showdown';

// markdown converter
const markdown = new showdown.Converter();

// get markdown file URLs from `CONFIG`
// check `config/default.config` file
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
