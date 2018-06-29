/**
 * MessageBus, a simple pub-sub utility module.
 * Any publisher will be able to emit an event with a payload and
 * any consumer will be able to listen to that event.
 */

import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


// A RxJS Subject observable as mediator / intersection
// for all MessageBus event traffic
const mediator$ = new Subject();


/*************************************************************/


/**
 * MessageBus.emit( 'my-event', payload ) emits `my-event` event with `payload`.
 * Calls `next` method on `mediator$` observable with `__MB_EVENT__` key in payload.
 */
export const emit = ( eventName, payload, isError = false ) => {
    
    // eventName is mandatory, throw error if
    // argument received is `null`, `undefined` or not a `string` type.
    if( ! eventName || 'string' !== typeof eventName ) {
        throw new Error( `[MessageBus] 'emit' method requires 'eventName' as argument, ${ eventName } was given.` );
    }

    // send data/error to `mediator$`
    mediator$.next( {
        payload: payload,
        __MB_EVENT__: eventName,
        __MB_ERROR__: true === isError
    } );
};

/**
 * MessageBus.emitError( 'my-event', payload ) calls
 * `emit` method with `isError` argument set to `true`.
 */
export const emitError = ( ...args ) => {
    emit( ...args, true );
};

/**
 * MessageBus.on( 'my-event' ) returns a
 * piped / filtered copy of `mediator$` observable.
 */
export const on = ( eventName, successCallback, errorCallback ) => {
    
    // event name is mandatory, throw error if
    // argument received is `null`, `undefined` or not a `string` type.
    if( ! eventName || 'string' !== typeof eventName ) {
        throw new Error( `[MessageBus] 'on' method requires 'event' name as argument, ${ event } was given.` );
    }
    
    // return observable which emits data when `__MB_EVENT__`
    // key in payload matches to the event name received here.
    return mediator$.pipe(
        filter( data => {
            return eventName === data.__MB_EVENT__;
        } ),
        map( data => {
            const { __MB_ERROR__, payload } = data;

            if( __MB_ERROR__ ) {
                throw new class extends Error {
                    constructor() {
                        super( payload );
                        this.payload = payload;
                    }
                };
            } else {
                return payload;
            }
        } )
    ).subscribe( successCallback, errorCallback );
};

/**
 * MessageBus.off( subscription ) will unsubscribe
 * a subscription by calling `unsubscribe` method on it.
 */
export const off = ( ...subscriptions ) => {
    for( const subscription of subscriptions ) {
        if( subscription instanceof Subscription ) {
            subscription.unsubscribe();
        } else{
            throw new Error( '[MessageBus] `off` method requires `subscription` argument of type RxJS `Subscription`.' );
        }
    }
};


/*************************************************************/


// import { MessageBus } from 'MessageBus'
export const MessageBus = { on, emit, emitError, off };
