import { Observable, Subscriber } from 'rxjs';
import { Http } from './Http';

/**
 * new HttpSubscriber( observer, method, config )
 * This class provides a tear-down logic to send Ajax request
 * on subscription and abort exisiting XHR requests on unsubscription
 */
class HttpSubscriber extends Subscriber {
    constructor( observer, method, config, { progress } ) {
        super( observer );

        // emit progress event
        if( ( ( true === progress ) && [ 'post', 'put' ].includes( method ) ) && ( ! config.onUploadProgress ) ) {
            
            // add `onUploadProgress` callback to `config`
            config.onUploadProgress = ( event ) => {
                observer.next( {
                    type: 'progress',
                    data: event
                } );
            };

            // send network request
            this.send( observer, method, config, true );
        } else {

            // send network request
            this.send( observer, method, config, false );
        }

        // request already aborted
        this.aborted = false;
    }

    // send AJAX request
    send( observer, method, config, sendingProgress ) {
        this.abortRequest = Http[ method ]( { ...config, method }, {
            success: ( result ) => {
                this.aborted = true;

                // if observable is sending progress event,
                // then wrap result with `type` and `data`
                if ( true === sendingProgress ) {
                    observer.next( {
                        type: 'response',
                        data: result
                    } );
                } else {
                    observer.next( result );
                }

                // complete observable emission
                observer.complete();
            },
            error: ( error ) => {
                this.aborted = true;
                observer.error( error );
            }
        } );
    }

    // abort network request on unsubscribe
    unsubscribe() {
        if ( ! this.aborted ) {
            this.aborted = true;
            this.abortRequest();
        }

        super.unsubscribe();
    }
}


/**
 * new HttpObservable( method, config )
 * This class creates an observable which can send Ajax request on subscription
 * and abort current XHR requests on unsubscription
 */
class HttpObservable extends Observable {
    constructor( method, config, serviceConfig ) {
        super( ( observer ) => {
            return new HttpSubscriber( observer, method.toLowerCase(), config, serviceConfig );
        } );
    }
}


/**
 * const http = new HttpService( globalConfig )
 * const request$ = http.get( method, config )
 * An instance of HttpService provides basic HTTP methods API.
 * A method returns an observable which on ubsubscribe cancels the XHR.
 */
export class HttpService {
    constructor( config ) {
        this.config = config;
    }

    // return singleton instance
    static create( config ) {
        if( ! this.instance ) {
            this.instance = new this( config );
        }

        return this.instance;
    }

    get( config, serviceConfig = {} ) {
        return new HttpObservable( 'get', Object.assign( this.config, config ), serviceConfig );
    }

    post( config, serviceConfig = {} ) {
        return new HttpObservable( 'post', Object.assign( this.config, config ), serviceConfig );
    }

    put( config, serviceConfig = {} ) {
        return new HttpObservable( 'put', Object.assign( this.config, config ), serviceConfig );
    }

    delete( config, serviceConfig = {} ) {
        return new HttpObservable( 'delete', Object.assign( this.config, config ), serviceConfig );
    }
}
