import React from 'react';
import { documentationView as DocumentationView } from 'views/layout/documentation/documentation.view';

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
