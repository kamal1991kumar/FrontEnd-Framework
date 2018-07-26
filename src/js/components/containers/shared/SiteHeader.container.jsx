import React from 'react';

// React view component to render
import { siteHeaderView as SiteHeaderView } from 'views/shared/siteHeader.view';

/**
 * @type {class}
 * @desc Header container component for global site header.
 * @example
 * import { SiteHeaderContainer } from 'containers/shared/SiteHeader.container';
 *
 * // render
 * <SiteHeaderContainer stuck={ true }/>
 */
export class SiteHeaderContainer extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            stuck: false
        };
    }

    /**
     * @desc This changes `stuck` prop of `SiteHeaderView` based on window scroll offset.
     */
    makeHeaderSticky() {
        this.setState( {
            stuck: 10 < document.body.scrollTop
        } );
    }

    componentDidMount() {
        window.addEventListener( 'scroll', this.makeHeaderSticky.bind( this ) );
    }

    render() {
        return (
            <SiteHeaderView stuck={ this.state.stuck }/>
        );
    }

    componentWillUnmount() {
        window.removeEventListener( 'scroll', this.makeHeaderSticky.bind( this ) );
    }
}
