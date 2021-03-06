import React from 'react';
import Typed from 'typed.js';

import { homeView as HomeView } from 'views/page-layouts/home';

const typedOptions = {
    strings: [ 'Multi Platform Support', 'Single/Multi Page App', 'Service Worker Support', 'Command Line Tool', 'Build Optimizations', 'Faster Development Time', 'Well Documented' ],
    typeSpeed: 30,
    backDelay: 2000,
    loop: true,
    showCursor: false
};

export class HomeContainer extends React.Component {
    constructor( props ) {
        super( props );

        this.viewRef =  React.createRef();
    }

    componentDidMount() {
        this.animate();
        this.initTyped( this.viewRef.current.querySelector( '#typed' ) );

        log.tag( 'HomeContainer' ).debug( 'componentDidMount()' );
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

// set display name
HomeContainer.displayName = 'HomeContainer';

// set default props
HomeContainer.defaultProps = {};
