import React from 'react';
import { noop } from 'lodash';

import { withRouterConnect } from 'core/hoc/withRouterConnect';
import * as cliDocService from 'services/cliDoc';

import { cliView as CliView } from 'views/layout/cli';

class _CliContainer extends React.Component {
    constructor( props ) {
        super( props );

        // navigation { name/serviceName : title }
        this.nav = {
            getIntro: 'CLI Tool Intro',
            getFramework: 'Framework CLI commands',
            getServer: 'Preview server commands'
        };
        
        this.state = {
            docHTML: null,
            activeTab: 'getIntro'
        };

        // get initial markdown
        this.getMarkdown( this.state.activeTab );

        // bind methods
        this.handleChange = this.handleChange.bind( this );
    }

    // get markdown from a service
    getMarkdown( serviceName ) {
        if( this.cancelDocHXR && 'function' === typeof this.cancelDocHXR ) {
            this.cancelDocHXR(); // cancel existing request
        }

        this.cancelDocHXR = cliDocService[ serviceName ]( {
            success: ( html ) => {
                this.setState( {
                    ...this.state,
                    docHTML: html,
                    activeTab: serviceName
                } );
            },
            error: noop
        } );
    }

    // handle tab change
    handleChange( event ) {
        event.stopPropagation();
        const tabName = event.target.getAttribute( 'data-tab' );
        this.getMarkdown( tabName );
    }
    

    render() {
        return (
            <CliView { ...this.props } nav={ this.nav } activeTab={ this.state.activeTab } docHTML={ this.state.docHTML } handleChange={ this.handleChange } />
        );
    }

    componentWillUnmount() {

        // cancel service XHR
        this.cancelDocHXR();
    }
}

const mapStateToProps = ( state ) => {
    return {
        hosts: state.hosts
    };
};

// `withRouterConnect` HOC will use `withRouter` HOC from `react-router` to pass
// props from `BrowserRouter` to <_CliContainer> and use `connect` function of React Redux
export const CliContainer = withRouterConnect( _CliContainer, mapStateToProps );

// set display name
CliContainer.displayName = 'CliContainer';

// set default props
CliContainer.defaultProps = {};
