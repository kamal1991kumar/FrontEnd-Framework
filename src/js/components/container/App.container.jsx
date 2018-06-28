import React from 'react';
import { connect } from 'react-redux';

//import { getUsers } from 'services/user.service';

class App extends React.Component {
    constructor( props ) {
        super( props );
    }
    
    componentWillMount() {

        window.console.log( this.props.hosts );
        
        /* getUsers( this.props.hosts.users, {
            success: ( data ) => {
                window.console.log( 'App Component', data );
            }
        } ); */
    }

    render() {
        return (
            <div>
                <h1>App component</h1>
                <h3>props => propName : { this.props.propName }</h3>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        hosts: state.hosts
    };
};

export const AppContainer = connect( mapStateToProps )( App );
