import React from 'react';

import { RenderRoutes } from 'router';
import { Header } from 'views/Header.view';
import { Footer } from 'views/Footer.view';
import { MessageBus } from 'modules/MessageBus';

import { fromEvent } from 'rxjs';
import { pluck, debounceTime } from 'rxjs/operators';
import { getAllUsers } from 'services/user.service';

export class App extends React.Component {
    constructor() {
        super();

        this.inputRef = React.createRef();
    }

    makeRequest() {

        // getAllUsers( hander, transformer )
        this.serviceRef = getAllUsers( {
            success: ( data ) => {
                this.handleUsers( data );
            },
            error: ( err ) => {
                window.console.log( '[ GetAllUsers Service Error ] ===> ', err );
            },
            complete: () => {
                window.console.log( '[ GetAllUsers Service Complete ]' );
            }
        }, [ pluck( 'data' ) ] );
    }

    cancelRequest() {
        this.serviceRef.abort();
    }

    handleUsers( data ) {
        window.console.log( '[ GetAllUsers Service Success ] ===> ', data );
    }

    componentWillMount() {

        // listen to message bus `CHAT_MESSAGE` event
        this.messageBusSubscription = MessageBus.on( 'CHAT_MESSAGE', ( data ) => {
            window.console.log( '[MessageBus CHAT_MESSAGE]', data );
        } );
    }

    componentDidMount() {

        // RxJS from event
        fromEvent( this.inputRef.current, 'input' )
        .pipe( debounceTime( 1000 ) )
        .subscribe( this.makeRequest.bind( this ) );

        
        // emit message bus `CHAT_MESSAGE` event
        MessageBus.emit( 'CHAT_MESSAGE', {
            fromUserId: 1,
            toUserId: 2,
            message: 'Hey User Two, I am user One'
        } );
    }

    render() {
        return (
            <div>
                <Header />

                <button onClick={ this.makeRequest.bind( this ) }>Get user list</button>
                <button onClick={ this.cancelRequest.bind( this ) }>Cancel request</button>


                <br/>

                <input type="text" ref={ this.inputRef } />

                <RenderRoutes currentPage={ this.props.currentPage } />

                <Footer />
            </div>
        );
    }

    componentWillUnmount() {
        MessageBus.off( this.messageBusSubscription );
    }
}
