import React from 'react';
import { noop } from 'lodash';

import { withRouterConnect } from 'core/hoc/withRouterConnect';
import * as frameworkDocService from 'services/frameworkDoc.service';

import { frameworkView as FrameworkView } from 'views/indexPage/documentation/framework.view';

class _FrameworkContainer extends React.Component {
    constructor( props ) {
        super( props );

        // navigation { name/serviceName : title }
        this.nav = {
            getOverview: 'Framework Overview',
            getWebpack: 'Webpack config',
            getFileStructure: 'File/Folder structure',
            getSource: 'Source files',
            getDist: 'Distribution files',
            getCoreModules: 'Core modules',
            getESDoc: 'ESDoc'
        };
        
        this.state = {
            docHTML: null
        };

        // get initial markdown
        this.getMarkdown( 'getOverview' );

        // bind methods
        this.handleChange = this.handleChange.bind( this );
    }

    // get markdown from a service
    getMarkdown( serviceName ) {
        if( this.cancelDocHXR && 'function' === typeof this.cancelDocHXR ) {
            this.cancelDocHXR(); // cancel existing request
        }

        this.cancelDocHXR = frameworkDocService[ serviceName ]( {
            success: ( html ) => {
                this.setState( {
                    ...this.state,
                    docHTML: html
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
            <FrameworkView { ...this.props } nav={ this.nav } docHTML={ this.state.docHTML } handleChange={ this.handleChange } />
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
