/**
 * use => removeTrailingSlash( url );
 * Returns an URL with all trailing slashes removed
 */
export const removeTrailingSlash = ( url ) => {
    return url.replace( /\/+$/, '' );
};
