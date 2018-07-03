import React from 'react';
import showdown from 'showdown';

import { debug } from 'core/utils';
import { withRouterConnect } from 'core/hoc/withRouterConnect';
import { getDocumentation } from 'services/documentation.service';

import { frameworkView as FrameworkView } from 'views/indexPage/documentation/framework.view';

// markdown converter
const markdown = new showdown.Converter();

class _FrameworkContainer extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            cliDoc: null,
            activeTab: 'frameworkOverview'
        };

        // get documentation HTML in HTTP service callback
        this.cancelDocHXR = getDocumentation( props.hosts.framework, {
            success: ( { data } ) => {
                this.setState( {
                    ...this.state,
                    cliDoc: data.payload.data.cliDoc
                } );
            },
            error: ( { error } ) => {
                alert( 'Something went wrong!' );
                debug.log( error );
            }
        } );

        // bind methods to `this`
        this.bindMethods();
    }

    // bind methods
    bindMethods() {
        this.handleTabChange = this.handleTabChange.bind( this );
    }

    // handle tab change
    handleTabChange( event ) {
        event.preventDefault();
        const newTab = event.target.getAttribute( 'data-tab' );

        if( this.state.activeTab !== newTab  ) {
            this.setState( {
                ...this.state,
                activeTab: newTab
            } );
        }
    }

    render() {
        return (
            <FrameworkView { ...this.props } cliDoc={ this.state.cliDoc } activeTab={ this.state.activeTab } docHTML={ this.state.cliDoc ? markdown.makeHtml( this.state.cliDoc[ this.state.activeTab ].markdown ) : null } handleTabChange={ this.handleTabChange } />
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
// props from `BrowserRouter` to <_FrameworkContainer> and use `connect` function of React Redux
export const FrameworkContainer = withRouterConnect( _FrameworkContainer, mapStateToProps );
