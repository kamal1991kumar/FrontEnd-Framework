import React from 'react';
import { documentationView as DocumentationView } from 'views/layout/documentation';

export class DocumentationContainer extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <DocumentationView { ...this.props } />
        );
    }
}

// set display name
DocumentationContainer.displayName = 'DocumentationContainer';

// set default props
DocumentationContainer.defaultProps = {};
