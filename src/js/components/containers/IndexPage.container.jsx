import React from 'react';
import { indexPageView as IndexPageView } from 'views/indexPage.view';

export class IndexPageContainer extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <IndexPageView />
        );
    }
}
