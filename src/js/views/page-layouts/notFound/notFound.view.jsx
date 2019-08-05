import React from 'react';

import PropTypes from 'prop-types';
import { Button } from 'modules/button';

export const notFoundView = React.forwardRef( ( props, forwardedRef ) => {
    return (
        <div className='view-not-found'>
            <div className="view-not-found__container">
                <div className="view-not-found__container__left">
                    <div className='view-not-found__container__left__title'>Hmm.</div>
                    <div className='view-not-found__container__left__description'>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home.</div>
                    <div className="view-not-found__container__left__buttons">
                        <Button
                            link={ true }
                            to='/'
                            size='small'
                            fill={ true }
                            className='view-not-found__container__left__buttons__button'
                        >Go to home</Button>

                        <Button
                            onClick={ () => { return props.history.goBack(); } }
                            className='view-not-found__container__left__buttons__button'
                            size='small'
                            secondary={ true }
                        >Go back</Button>
                    </div>
                </div>
                <div className="view-not-found__container__right">
                    <div className="space">
                        <div className="blackhole"></div>
                        <div className="ship"></div>
                    </div>
                </div>
            </div>

            <div className='view-not-found__redux'>
                <h1 className='view-not-found__redux__title'>Chat Bot (redux test)</h1>
                <div className='view-not-found__redux__chat-window'>
                    <div ref={ forwardedRef } className='view-not-found__redux__chat-window__chats'>
                        {
                            props.chats.map( ( chatMessage, index ) => {
                                return(
                                    <p key={ index } className='view-not-found__redux__chat-window__chats__item'>{ chatMessage }</p>
                                );
                            } )
                        }
                    </div>
                    <div className='view-not-found__redux__chat-window__input'>
                        <input
                            className='view-not-found__redux__chat-window__input__control'
                            type='text'
                            placeholder='Type message here and enter...'
                            onKeyUp={ props.onMessageEnter }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} );

// set display name
notFoundView.displayName = 'notFoundView';

// set default props
notFoundView.defaultProps = {};

// prop types
notFoundView.propTypes = {
    chats: PropTypes.arrayOf( PropTypes.string ).isRequired
};
