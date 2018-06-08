import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import loadable from 'react-loadable';

import Header from 'views/Header.view';
import Footer from 'views/Footer.view';
import Home from 'views/Home.view';
import { MessageBus } from 'modules/MessageBus';
import { UserService } from 'services/user.service';

const Loading = () => {
    return <h1>loading...</h1>;
};

const AboutAsync = loadable( {
    loader: () => {
        return import( 'views/About.view' );
    },
    loading: Loading
} );

const ContactAsync = loadable( {
    loader: () => {
        return import( 'views/Contact.view' );
    },
    loading: Loading
} );

export class App extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {

        // call a service
        UserService.getAllUsers().subscribe( data => {
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
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    
                    <Switch>
                        <Route exact={ true } path='/' component={ Home } />
                        <Route exact={ false } path='/about' component={ AboutAsync } />
                        <Route exact={ false } path='/contact' component={ ContactAsync } />
                    </Switch>
    
                    <Footer />
                </div>
            </Router>
        );
    }

    componentWillUnmount() {
        MessageBus.off( this.messageBusSubscription );
    }
}
