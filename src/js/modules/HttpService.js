import { Observable, Subscriber } from 'rxjs';
import { Http } from './Http';

/**
 * new HttpSubscriber( subscriber, method, config )
 * This class provides a tear-down logic to send Ajax request
 * on subscription and abort exisiting XHR requests on unsubscription
 */
class HttpSubscriber extends Subscriber {
    constructor( subscriber, method, config ) {
        super( subscriber );

        // send network request
        this.send( subscriber, method, config );

        // request already aborted
        this.aborted = false;
    }

    // send AJAX request
    send( subscriber, method, config ) {
        this.abortRequest = Http[ method ]( config, {
            success: ( result ) => {
                subscriber.next( result );
                subscriber.complete();
            },
            error: ( error ) => {
                subscriber.error( error );
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
    constructor( method, config ) {
        super( ( subscriber ) => {
            return new HttpSubscriber( subscriber, method.toLowerCase(), config );
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

    get( config ) {
        return new HttpObservable( 'get', Object.assign( this.config, config ) );
    }

    post( config ) {
        return new HttpObservable( 'post', Object.assign( this.config, config ) );
    }

    put( config ) {
        return new HttpObservable( 'put', Object.assign( this.config, config ) );
    }

    delete( config ) {
        return new HttpObservable( 'delete', Object.assign( this.config, config ) );
    }
}
