import React from 'react';

export const cliView = ( props ) => {
    return (
        <div className='view-index-documentation-cli'>
            <div className='view-index-documentation-cli__nav'>
                {
                    Object.entries( props.nav ).map( ( [ name, title ] ) => {
                        return (
                            <button className='view-index-documentation-cli__nav__item' key={ name } data-tab={ name } onClick={ props.handleChange }>{ title }</button>
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
