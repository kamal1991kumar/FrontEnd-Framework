/* eslint-disable max-nested-callbacks */
/* eslint-disable no-console */

/*******************************************************
                    CACHE MANAGEMENT
*******************************************************/

// cache tag name
const cacheName = 'AVIZVA_UI_CACHE_V1';

// file to cache
const filesToCache = [
    '/index.html',
    '/js/main.js',
    '/js/vendor.js'
];

/* ==================================================== */

// when service worker is installed, cache all files
self.addEventListener( 'install', function( event ) {
    event.waitUntil(
        caches.open( cacheName )
        .then( function( cache ) {
            return cache.addAll( filesToCache );
        } )
    );
} );

// when service worker activates, remove old cached files
self.addEventListener( 'activate', function( event ) {
    event.waitUntil(
        caches.keys()
        .then( function( cacheNames ) {
            return Promise.all(
                cacheNames.map( function( cName ) {
                    if( cName !== cacheName ) {
                        return caches.delete( cName );
                    }
                } )
            );
        } )
    );
} );

// when a resource is fetched, return cached response
self.addEventListener( 'fetch', function( event ) {
    event.respondWith(
        caches.match( event.request )
        .then( function( _response ) {
            if( _response ) {
                return _response;
            } else{
                
                // clone request stream
                // as stream once consumed, can not be used again
                const reqCopy = event.request.clone();
                
                return fetch( reqCopy ) // reqCopy stream consumed
                .then( function( response ) {
                    
                    // bad response
                    // response.type !== 'basic' means third party origin request
                    if( !response || 200 !== response.status  || 'basic' !== response.type ) {
                        return response; // response stream consumed
                    }

                    // clone response stream
                    // as stream once consumed, can not be used again
                    const resCopy = response.clone();


                    // ================== IN BACKGROUND ===================== //

                    // add response to cache and return response
                    caches.open( cacheName )
                    .then( function( cache ) {
                        return cache.put( reqCopy, resCopy ); // reqCopy, resCopy streams consumed
                    } );

                    // ====================================================== //


                    return response; // response stream consumed
                } );
            }
        } )
    );
} );
