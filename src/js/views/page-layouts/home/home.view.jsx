import React from 'react';

import { Button } from 'modules/button';

// using React forwardRef API
export const homeView = React.forwardRef( ( props, ref ) => {
    return (
        <div ref={ ref } className='view-index-home'>
            <div className='view-index-home__title'>
                <div className='view-index-home__title__fixed'>
                    A fully-fledged frontend ui-framework
                </div>
                <div id="typed" className='view-index-home__title__typed'></div>
            </div>

            <div className='view-index-home__description'>
                At Demo, we follow a very unique philosophy of designing and developing frontend applications. At times, due to personal mistakes or time constraints, a developer might not adhere to standard practices which creates a domino effect of mistakes which leads to inconsistent code base. This framework not only forces developer to follow standard practices, but helps him/her to write consistent code faster with the help of Demo's CLI tool. Combining with Demo's CLI Tool for initializing project and generating different elements, this framework will help UI team to create, build and deploy project faster.
            </div>

            <div velocity="links" className='view-index-home__links'>
                <Button
                    className="view-index-home__links__item"
                    anchor={ true }
                    target="_blank"
                    href="https://gitlab.com/Demo/ui-framework"
                    secondary={ true }
                    hasIcon={ true }
                    size='medium'
                    fill={ true }
                >
                    <i className="icon ion-md-git-network"></i> Gitlab
                </Button>

                <Button
                    className="view-index-home__links__item"
                    anchor={ true }
                    target="_blank"
                    href="https://gitlab.com/Demo/cli-Demo"
                    secondary={ true }
                    hasIcon={ true }
                    size='medium'
                >
                    <i className="icon ion-md-code"></i> Command Line Tool
                </Button>
            </div>

            <div className='view-index-home__specs'>
                <div velocity="column" className="view-index-home__specs__column">
                    <img className="view-index-home__specs__column__image" src="/assets/images/icons/puzzle.svg"/>
                    <div className="view-index-home__specs__column__title">Agnostic Nature</div>
                    <div className="view-index-home__specs__column__description">
                        This framework is based on <b>controller-component</b> architecture where a controller is bootstraps a top-level component into a HTML element (DOM Node). Hence, it's very easy to develop single or multi page application. This framework also supports multi-platform development where platform specific entities can be desiged without changing their import statements. The whole project structure is designed in a way to avoid tight relationship between build-tools and frontend libraries.
                    </div>
                </div>

                <div velocity="column" className="view-index-home__specs__column">
                    <img className="view-index-home__specs__column__image" src="/assets/images/icons/process.svg"/>
                    <div className="view-index-home__specs__column__title">Standard Practices</div>
                    <div className="view-index-home__specs__column__description">
                        This framework solves one of the biggest hurdles in software development, which is <b>consistent code writing</b>. With the help of CLI tool, developer can create different entities like components and services from standard templates provided by the framework. Using CLI Tool, developer can avoid typing wrong entity export names and file names, CLI tool is smarr enough to auto-corrects them. An entity generated using CLI tool is prefixed <b>ESDoc</b> comment structure.
                    </div>
                </div>

                <div velocity="column" className="view-index-home__specs__column">
                    <img className="view-index-home__specs__column__image" src="/assets/images/icons/bullseye.svg"/>
                    <div className="view-index-home__specs__column__title">Faster Deployment</div>
                    <div className="view-index-home__specs__column__description">
                        This framework contains latest versions of build tools and libraries. Currently, <b>Webpack V4</b> is used to compile and build entire project which contains mostly <b>JavaScript</b> and <b>SCSS</b>. With webpack 4, build time is lower while HMR makes development faster. Creating builds for different platforms is very easy with CLI Tool which is not different than creating normal build. With Webpack's SplitChunks plugin and lazy loading features, application performance can be boosted amazingly.
                    </div>
                </div>
            </div>
        </div>
    );
} );

// set display name
homeView.displayName = 'homeView';

// set default props
homeView.defaultProps = {};

