import React from 'react';
import Typed from 'typed.js';

const typedOptions = {
    strings: [ 'Multi Platform Support', 'Single/Multi Page App', 'Command Line Tool', 'Build Optimizations', 'Faster Development Time', 'Well Documented' ],
    typeSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: false
};

import { homeView as HomeView } from 'views/indexPage/home.view';

export class HomeContainer extends React.Component {
    constructor( props ) {
        super( props );

        this.viewRef =  React.createRef();
    }

    componentWillMount() {
        log.tag( 'HomeContainer' ).debug( 'componentDidMount() ==> props: ', this.props );
    }

    componentDidMount() {
        this.animate();
        this.initTyped( this.viewRef.current.querySelector( '#typed' ) );

        log.tag( 'HomeContainer' ).debug( 'componentDidMount() ==> props: ' );
    }

    render() {
        
        log.tag( 'HomeContainer' ).info( 'render()' );

        return <HomeView ref={ this.viewRef } { ...this.props } />;
    }

    componentWillUnmount() {
        
        log.tag( 'HomeContainer' ).warn( 'componentWillUnmount()' );
    }

    // start typed plugin
    initTyped( element ) {
        if( this.viewRef.current ) {
            this.typed = new Typed( element, typedOptions );
        }
    }

    // animate elements
    animate() {
        
        // animate column elements using velocity
        if( this.viewRef.current ) {
            const columnsElements = this.viewRef.current.querySelectorAll( '[velocity="column"]' );
            columnsElements.velocity( {
                opacity: [ 1, 0 ],
                transform: [ 'translateY(0px)', 'translateY(30px)' ]
            }, { duration: 300, stagger: 500, easing: 'ease-in-out' } ).then( () => {
                log.tag( 'velocity' ).debug( 'columns animations completed.' );
                
                // animate link buttons
                if( this.viewRef.current ) {
                    const linksElement = this.viewRef.current.querySelectorAll( '[velocity="links"]' );
                    linksElement.velocity( {
                        opacity: [ 1, 0 ],
                        transform: [ 'translateY(0px)', 'translateY(10px)' ]
                    }, { duration: 300, easing: 'ease-in' } );
                }
            } );
        }
    }
}
