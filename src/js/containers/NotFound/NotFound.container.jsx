import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';

import { notFoundView as NotFoundView } from 'views/layout/notFound';
import { saveChat as saveChatAction } from 'store/actions/chats';

class _NotFoundContainer extends React.Component {
    constructor( props ) {
        super( props );

        // chat container reference
        this.chatWindowRef = React.createRef();

        // bind events and methods
        this.__bind();
    }

    /**
     * @desc bind events and methods
     */
    __bind() {
        this.handleMessageEnter = this.handleMessageEnter.bind( this );
    }

    /***********************************************/

    /**
     * @desc When new message is enters, save it in the store.
     */
    handleMessageEnter( event ) {
        event.preventDefault();

        // when enter key is pressed
        if( 13 === event.keyCode && ! isEmpty( event.target.value ) ) {
            this.props.actionSendChat( event.target.value );

            event.target.value = null;
        }
    }

    /***********************************************/

    /**
     * @desc When component updates, scroll chat window to bottom
     */
    componentDidUpdate() {
        this.chatWindowRef.current.scrollTop = this.chatWindowRef.current.scrollHeight;
    }

    render() {
        return (
            <NotFoundView
                ref={ this.chatWindowRef }
                onMessageEnter={ this.handleMessageEnter }
                chats={ this.props.chats }
            />
        );
    }
}

// map state to props
const mapStateToProps = ( state ) => {
    return {
        chats: state.chats
    };
};

// map dispatch to props
const mapDispatchToProps = ( dispatch ) => {
    return {
        actionSendChat: bindActionCreators( saveChatAction, dispatch )
    };
};

// wrap with connect
export const NotFoundContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( _NotFoundContainer );

// set display name
NotFoundContainer.displayName = 'NotFoundContainer';

// set default props
NotFoundContainer.defaultProps = {};
