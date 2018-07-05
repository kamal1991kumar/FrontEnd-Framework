import React from 'react';
import { indexPageView as IndexPageView } from 'views/indexPage.view';

import { MessageBus } from 'core/modules/MessageBus';
import { HTTP_REQUEST_TRANSACTION } from 'core/constants';

export class IndexPageContainer extends React.Component {
    constructor( props ) {
        super( props );

        this.pendingRequests = new Set();

        this.state = {
            httpReqInProgress: false
        };
    }

    componentDidMount() {
        MessageBus.on( HTTP_REQUEST_TRANSACTION, this.handleHttpReqTransaction, this );
    }

    // handle http request transaction
    handleHttpReqTransaction( request ) {
        if( 'SENT' === request.type ) {
            this.pendingRequests.add( request.id );
        } else {
            this.pendingRequests.delete( request.id );
        }

        log( request );

        this.setState( {
            ...this.state,
            httpReqInProgress: 0 < this.pendingRequests.size
        } );
    }

    render() {
        return (
            <IndexPageView loading={ this.state.httpReqInProgress } />
        );
    }

    componentWillUnmount() {
        MessageBus.off( HTTP_REQUEST_TRANSACTION, this.handleHttpReqTransaction, this );
    }
}
