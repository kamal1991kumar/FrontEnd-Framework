import React from 'react';

import { Button } from 'modules/button';

export const cliView = ( props ) => {
    return (
        <div className='view-index-documentation-cli'>
            <div className='view-index-documentation-cli__nav'>
                {
                    Object.entries( props.nav ).map( ( [ name, title ] ) => {
                        return (
                            <Button
                                className='view-index-documentation-cli__nav__item'
                                size='mini'
                                fill={ name === props.activeTab }
                                secondary={ true }
                                key={ name }
                                name={ name }
                                onClick={ props.handleChange }
                            >{ title }</Button>
                        );
                    } )
                }
            </div>
            <div className='view-index-documentation-cli__content'>
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
cliView.displayName = 'CliView';

// set default props
cliView.defaultProps = {};
