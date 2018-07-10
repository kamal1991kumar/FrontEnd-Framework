/**
 * @type {function}
 * @desc Returns an URL with all trailing slashes removed
 * @example
 * const newURL = removeTrailingSlash( url );
 */
export const removeTrailingSlash = ( url ) => {
    return url.replace( /\/+$/, '' );
};
