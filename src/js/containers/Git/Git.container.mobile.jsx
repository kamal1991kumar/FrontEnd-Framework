import React, { Fragment } from 'react';
import { noop } from 'lodash';

import { withRouterConnect } from 'core/hoc/withRouterConnect';
import { getGitDocumentation } from 'services/gitDoc';

import { gitView as GitView } from 'views/layout/git';

class _GitContainer extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            docHTML: null
        };
    }

    componentWillMount() {
        log.tag( 'GitContainer' ).debug( 'This is a mobile container!' );
    }

    componentDidMount() {
        this.cancelDocHXR = getGitDocumentation( {
            success: ( html ) => {
                this.setState( {
                    ...this.state,
                    docHTML: html
                } );
            },
            error: noop
        } );
    }

    render() {
        return (
            <Fragment>
                <GitView { ...this.props } docHTML={ this.state.docHTML }/>
            </Fragment>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        hosts: state.hosts
    };
};

// `withRouterConnect` HOC will use `withRouter` HOC from `react-router` to pass
// props from `BrowserRouter` to <_GitContainer> and use `connect` function of React Redux
export const GitContainer = withRouterConnect( _GitContainer, mapStateToProps );
