import React from 'react';
import { bestPracticesView as BestPracticesView } from 'views/indexPage/bestPractices.view';

export class BestPracticesContainer extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <BestPracticesView { ...this.props } />
        );
    }
}
