import React from 'react';

import { homeView as HomeView } from 'views/indexPage/home.view';

export class HomeContainer extends React.Component {
    constructor( props ) {
        super( props );
    }

    componentWillMount() {
        log.tag( 'HomeContainer' ).debug( 'componentDidMount() ==> props: ', this.props );
    }

    render() {
        
        log.tag( 'HomeContainer' ).info( 'render()' );

        return (
            <HomeView { ...this.props } />
        );
    }

    componentWillUnmount() {
        
        log.tag( 'HomeContainer' ).warn( 'componentWillUnmount()' );
    }
}
