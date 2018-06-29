import React from 'react';
import { connect } from 'react-redux';
import { debug } from 'core/utils';

class _AppContainer extends React.Component {
    constructor( props ) {
        super( props );

        debug.log( 'props.hosts from redux', props.hosts );
    }

    render() {
        return (
            <h1>Hey man...</h1>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        hosts: state.hosts
    };
};

export const AppContainer = connect( mapStateToProps )( _AppContainer );
