import React from 'react';
import { indexPageView as IndexPageView } from 'views/page-layouts/indexPage';

import { MessageBus } from 'core/modules/MessageBus';
import { EVENT_HTTP_REQUEST_TRANSACTION } from 'core/constants';

export class IndexPageContainer extends React.Component {
    constructor( props ) {
        super( props );

        // store all ongoing HTTP request ids
        this.pendingRequests = new Set();

        // component state
        this.state = {
            httpReqInProgress: false
        };
    }

    // on MB `HTTP_REQUEST_TRANSACTION` event, call `handleHttpReqTransaction` method
    componentDidMount() {
        MessageBus.on( EVENT_HTTP_REQUEST_TRANSACTION, this.handleHttpReqTransaction, this );
        MessageBus.on( 'MY_HTTP_EVENT', this.handleHttpReqTransaction, this );
    }

    // on HTTP request, save/delete request id
    handleHttpReqTransaction( request ) {
        log.debug( request );

        if( 'SENT' === request.type ) {
            this.pendingRequests.add( request.id );
        } else {
            this.pendingRequests.delete( request.id );
        }

        this.setState( {
            ...this.state,
            httpReqInProgress: 0 < this.pendingRequests.size
        } );
    }

    // render `IndexPageView` view with `loading` prop
    render() {
        return (
            <IndexPageView loading={ this.state.httpReqInProgress } />
        );
    }

    // unsubscribe from message bus event on component unmount
    componentWillUnmount() {
        MessageBus.off( EVENT_HTTP_REQUEST_TRANSACTION, this.handleHttpReqTransaction, this );
        MessageBus.off( 'MY_HTTP_EVENT', this.handleHttpReqTransaction, this );
    }
}

// set display name
IndexPageContainer.displayName = 'IndexPageContainer';

// set default props
IndexPageContainer.defaultProps = {};
