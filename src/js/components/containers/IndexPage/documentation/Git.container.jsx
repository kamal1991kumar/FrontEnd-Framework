import React from 'react';
import showdown from 'showdown';
import { noop } from 'lodash';

import { Http } from 'core/modules/Http';
import { withRouterConnect } from 'core/hoc/withRouterConnect';

import { gitView as GitView } from 'views/indexPage/documentation/git.view';

// markdown converter
const markdown = new showdown.Converter();

class _GitContainer extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {
            docHTML: null
        };

        // `hosts` coming from redux state, using `Promise` version of `Http` service
        // make sure to store the promise object first to get `cancel` method
        // below request gets `.json` file from `assets/json`
        this.request = Http.get( props.hosts.git );
        this.request.then( ( response ) => {

            // override previous request instance to make cancellation easier,
            // it will override previous request when it resolves
            // below request gets `.md` file from `documentation`
            this.request = Http.get( response.data.payload.data.url );
            this.request.then( ( _response ) => {
                this.setState( {
                    docHTML: markdown.makeHtml( _response.data )
                } );
            } ).catch( noop );
        } ).catch( noop );
    }

    render() {
        return (
            <GitView { ...this.props } docHTML={ this.state.docHTML }/>
        );
    }

    componentWillUnmount() {
        this.request.cancel(); // cancel service XHR
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
