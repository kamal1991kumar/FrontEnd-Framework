/**
 * use => removeTrailingSlash( url );
 * Returns an URL with all trailing slash removed.
 */
export const removeTrailingSlash = ( url ) => {
    return url.replace( /\/+$/, '' );
};
