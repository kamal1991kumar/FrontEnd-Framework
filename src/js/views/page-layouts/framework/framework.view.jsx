import React from 'react';

import { Button } from 'modules/button';

export const frameworkView = ( props ) => {
    return (
        <div className='view-index-documentation-framework'>
            <div className='view-index-documentation-framework__nav'>
                {
                    Object.entries( props.nav ).map( ( [ name, title ] ) => {
                        return (
                            <Button
                                className={ 'view-index-documentation-framework__nav__item' }
                                size='mini'
                                secondary={ true }
                                fill={ name === props.activeTab }
                                key={ name }
                                name={ name }
                                onClick={ props.handleChange }
                            >{ title }</Button>
                        );
                    } )
                }
            </div>
            <div className='view-index-documentation-framework__content'>
                <div className='markdown-body'>
                    {
                        props.docHTML ? <div dangerouslySetInnerHTML={ { __html: props.docHTML } }></div> : 'loading...'
                    }
                </div>
            </div>
        </div>
    );
};

// set display name
frameworkView.displayName = 'frameworkView';

// set default props
frameworkView.defaultProps = {};
