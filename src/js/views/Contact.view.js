import React from 'react';
import Test from 'views/Test.view';

const Contact = () => {
    return (
        <div className='contact-component'>
            <h1 className='contact-component__title'>Contact US</h1>
            <p className='contact-component__content'>
                We believe in an open and connected world. We are always on, at either end of the globe, so it’s always a good time to connect with us. We partner with you to understand your business. Be it your plans for expansion, re-engineering processes, transformation or solving challenging business scenarios - We utilize technology to draw a landscape for your own custom products.
            </p>

            <Test />
        </div>
    );
};

export default Contact;
