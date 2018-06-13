import { Subject } from 'rxjs';
import { isArray, isEmpty } from 'lodash';

export class Service {
    constructor( handler, transformer ) {
        
        // save a RxJS subject obervable
        this.subject = new Subject();

        // replace `success` key with `next`
        if( handler.success ) {
            handler.next = handler.success;
            delete handler.success;
        }

        // subscribe with RxJS operators (transformer), if provided
        if ( ! isEmpty( transformer ) && isArray( transformer ) ) {
            this.subject.pipe( ...transformer ).subscribe( handler );
        } else {
            this.subject.subscribe( handler );
        }
    }

    // `send` method receive `data` argument
    // this method calls `next` on observable
    send( data ) {
        this.subject.next( data );

        // complete the observable
        this.subject.complete();
    }

    // `sendError` method receives an `error` argument
    // this method callas `error` on observable
    sendError( error ) {
        this.subject.error( error );
    }

    // `abort` method received no argument
    // it is used to call user defined `onAbortCallback` method
    // associated with the class instance provided by `onAbort` method
    abort() {
        
        // complete the observable
        this.subject.complete();

        // on `onAbortCallback` method provided by user
        if( this.onAbortCallback  && ( 'function' === typeof this.onAbortCallback ) ) {
            this.onAbortCallback();
        }
    }

    // `onAbort` method receives a callback argument
    // when service request is aborted, the `onAbortCallback` is called
    onAbort( callback ) {
        this.onAbortCallback = callback;
    }
}
