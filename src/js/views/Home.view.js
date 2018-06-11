import React from 'react';
import Test from 'views/Test.view';

export const Home = () => {
    return (
        <div className='home-component'>
            <h1 className='home-component__title'>We are</h1>
            <p className='home-component__content'>
                a team of enthusiasts and experts bringing together creativity and technology to provide right consulting, thoughtful design and customised solutions. We are sticklers for engaging and sensible design.
            </p>

            <Test />
        </div>
    );
};
 
export default Home;
