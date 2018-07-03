import React from 'react';

export const homeView = () => {
    return (
        <div className='view-index-home'>
            <div className='view-index-home__title'>Ui Framework</div>

            <div className='view-index-home__motivation'>
                Motivation behind creating Avizva's very own UI framework are based on following points

                <ul className='view-index-home__motivation__list'>
                    <li className='view-index-home__motivation__list__item'>Keep a standard project structure</li>
                    <li className='view-index-home__motivation__list__item'>Implement standard coding practices (using linting)</li>
                    <li className='view-index-home__motivation__list__item'>Capable of multi-platform deployment</li>
                    <li className='view-index-home__motivation__list__item'>Immune to single-page or multi-page application choice</li>
                    <li className='view-index-home__motivation__list__item'>Easy to upgrade with newer version of core dependencies</li>
                    <li className='view-index-home__motivation__list__item'>Works with Avizva UI CLI interface to provide easy entity creation and rapid deployment</li>
                </ul>
            </div>
        </div>
    );
};
