/**
 * Custom MessageBus or EventBus implementation.
 * Publisher Subscriber Implementation.
 * Used to exchange data between different components of the application.
 */

export const MessageBus = (
    () => {
        
        const _events = {}; //To store all events.

        /**
         * Adds handler to the subscriber list for a particular event.
         * @param event
         * @param callback
         * @param callbackObj
         * @private
         */
        const _on = function ( event, callback, callbackObj ) {
            if ( false === _events.hasOwnProperty( event ) ) {
                _events[ event ] = [];
            }
            _events[ event ].push( { callback: callback, callbackObj: callbackObj } );
        };

        /**
         * Removes handler from the subscriber list for a particular event.
         * @param event
         * @param callback
         * @param callbackObj
         * @private
         */
        const _off = function ( event, callback, callbackObj ) {
            let eventCount,
                currentEvent,
                ctr;
            if ( true === _events.hasOwnProperty( event ) ) {
                currentEvent = _events[ event ];
                eventCount = currentEvent.length;
                for ( ctr = 0; ctr < eventCount; ctr = ctr + 1 ) {
                    if ( callback === currentEvent[ ctr ].callback && callbackObj === currentEvent[ ctr ].callbackObj ) {
                        currentEvent.splice( ctr, 1 );
                        break;
                    }
                }
            }
        };

        /**
         * Publishes an event with given payload.
         * @param event
         * @param payload
         * @private
         */
        const _trigger = function( event, payload ) {
            let eventCount,
                currentEvent,
                ctr;
            if ( true === _events.hasOwnProperty( event ) ) {
                currentEvent = _events[ event ];
                eventCount = currentEvent.length;
                for ( ctr = 0; ctr < eventCount; ctr = ctr + 1 ) {
                    if( 'undefined' === typeof currentEvent[ ctr ].callbackObj ) {
                        if ( 'function' === typeof currentEvent[ ctr ].callback ) {
                            currentEvent[ ctr ].callback( payload );
                        }
                    } else {
                        if ( 'function' === typeof currentEvent[ ctr ].callback ) {
                            currentEvent[ ctr ].callback.call( currentEvent[ ctr ].callbackObj, payload );
                        }
                    }
                }
            }
        };

        /**
        * Exposes the following methods.
        */
        return {
            on: _on,
            off: _off,
            trigger: _trigger
        };
    }
)();
