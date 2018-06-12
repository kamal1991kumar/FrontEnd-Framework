import React from 'react';

import { RenderRoutes } from 'router';
import { Header } from 'views/Header.view';
import { Footer } from 'views/Footer.view';
import { MessageBus } from 'modules/MessageBus';
import { UserService } from 'services/user.service';
import { addUserAction } from 'store/actions/user.action';
import { withRouterConnect } from 'modules/withRouterConnect';

class _App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {

        // call a service
        this.sub = UserService.getAllUsers().subscribe( data => {
            window.console.log( '[UserService getAllUsers]', data );
        } );

        // listen to message bus `CHAT_MESSAGE` event
        this.messageBusSubscription = MessageBus.on( 'CHAT_MESSAGE', ( data ) => {
            window.console.log( '[MessageBus CHAT_MESSAGE]', data );
        } );
    }

    componentDidMount() {
        
        // emit message bus `CHAT_MESSAGE` event
        let intvCount = 1;
        const intv = setInterval( () => {
            MessageBus.emit( 'CHAT_MESSAGE', {
                fromUserId: 1,
                toUserId: 2,
                message: `[${ intvCount }] Hey User Two, I am user One.`
            } );

            intvCount = intvCount + 1;
            if( 3 < intvCount ) {
                clearInterval( intv );
            }
        }, 3000 );

        this.props.addUser( {
            name: 'John Doe',
            email: 'john_doe@gmail.com'
        } );
    }

    render() {
        return (
            <div>
                <Header />

                { this.props.users.map( user => {
                    return (
                        <div key={ user.name }>
                            <h3>{ user.name }</h3>
                            <h5>{ user.email }</h5>
                        </div>
                    );
                } ) }

                <RenderRoutes currentPage={ this.props.currentPage } />

                <Footer />
            </div>
        );
    }

    componentWillUnmount() {
        MessageBus.off( this.messageBusSubscription );
        this.sub.subscribe();
    }
}

const mapStateToProps = ( state ) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        addUser: ( user ) => {
            dispatch( addUserAction( user ) );
        }
    };
};

// export `App` class with redux store and router
// `withRouterConnect` is necessary for component to work with react router and redux
export const App = withRouterConnect( _App, mapStateToProps, mapDispatchToProps );
