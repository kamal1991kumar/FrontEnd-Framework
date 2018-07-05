import React from 'react';

import { homeView as HomeView } from 'views/indexPage/home.view';

export class HomeContainer extends React.Component {
    constructor( props ) {
        super( props );
    }

    componentWillMount() {
        log( 'HomeContainer componentDidMount()', this.props );
    }

    render() {
        log.info( 'HomeContainer render()' );

        return (
            <HomeView { ...this.props } />
        );
    }

    componentWillUnmount() {
        log.warn( 'HomeContainer componentWillUnmount()' );
    }
}
