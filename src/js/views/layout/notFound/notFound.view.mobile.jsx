import React from 'react';
import { Link } from 'react-router-dom';

// import styles
import './notFound.style.scss';

export const notFoundView = ( props ) => {
    return (
        <div className='view-not-found'>
            <div className="view-not-found__container">
                <div className="view-not-found__container__left">
                    <div className='view-not-found__container__left__title'>Hmm. Mobile.</div>
                    <div className='view-not-found__container__left__description'>It seems that you're lost in a perpetual black hole. Let us help guide you out and get you back home.</div>
                    <div className="view-not-found__container__left__buttons">
                        <Link to='/' className="view-not-found__container__left__buttons__button avz-button avz-button--size-small avz-button avz-button--fill">Go to home</Link>
                        <button onClick={ () => { return props.history.goBack(); } } className="view-not-found__container__left__buttons__button avz-button avz-button--size-small">Go back</button>
                    </div>
                </div>
                <div className="view-not-found__container__right">
                    <div className="space">
                        <div className="blackhole"></div>
                        <div className="ship"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// set display name
notFoundView.displayName = 'notFoundView';

// set default props
notFoundView.defaultProps = {};


