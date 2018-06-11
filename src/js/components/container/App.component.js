import React from 'react';
import { RenderRoutes } from 'router';

import Header from 'views/Header.view';
import Footer from 'views/Footer.view';
import { MessageBus } from 'modules/MessageBus';
import { UserService } from 'services/user.service';

export class App extends React.Component {
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
    }

    render() {
        return (
            <div>
                <Header />

                <RenderRoutes page="INDEX" />

                <Footer />
            </div>
        );
    }

    componentWillUnmount() {
        MessageBus.off( this.messageBusSubscription );
        this.sub.subscribe();
    }
}
