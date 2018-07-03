import React from 'react';
import showdown from 'showdown';

import { withRouterConnect } from 'core/hoc/withRouterConnect';
import { getDocumentation } from 'services/documentation.service';

import { cliView as CliView } from 'views/indexPage/documentation/cli.view';

// markdown converter
const markdown = new showdown.Converter();

class _CliContainer extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            docHTML: null
        };

        // get documentation HTML in HTTP service callback
        this.cancelDocHXR = getDocumentation( props.hosts.cli, {
            success: ( { data } ) => {
                this.setState( {
                    ...this.state,
                    docHTML: markdown.makeHtml( data.payload.data.cliDoc )
                } );
            },
            error: ( { error } ) => {
                this.setState( {
                    ...this.state,
                    docHTML: error
                } );
            }
        } );
    }

    render() {
        return (
            <CliView { ...this.props } docHTML={ this.state.docHTML }/>
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
