import React from 'react';

import { homeView as HomeView } from 'views/indexPage/home.view';

export class HomeContainer extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <HomeView { ...this.props } />
        );
    }
}
