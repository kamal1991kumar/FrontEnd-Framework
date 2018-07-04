import React from 'react';
import { indexPageView as IndexPageView } from 'views/indexPage.view';

import { MessageBus } from 'core/modules/MessageBus';
import { HTTP_REQUEST_TRANSACTION } from 'core/constants';

export class IndexPageContainer extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            httpReqInProgress: false
        };
    }

    componentDidMount() {
        MessageBus.on( HTTP_REQUEST_TRANSACTION, this.handleHttpReqTransaction, this );
    }

    // handle http request transaction
    handleHttpReqTransaction( status ) {
        this.setState( {
            ...this.state,
            httpReqInProgress: 'START' === status
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
