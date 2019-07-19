import React from 'react';

import { notFoundView as NotFoundView } from 'views/layout/notFound';

export class NotFoundContainer extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <NotFoundView { ...this.props }/>
        );
    }
}

// set display name
NotFoundContainer.displayName = 'NotFoundContainer';

// set default props
NotFoundContainer.defaultProps = {};
