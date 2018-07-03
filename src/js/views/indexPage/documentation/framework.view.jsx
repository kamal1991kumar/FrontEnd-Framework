import React from 'react';

export const frameworkView = ( props ) => {
    return (
        <div className='view-index-documentation-framework'>
            <div className='view-index-documentation-framework__tab-nav'>
                {
                    ( props.cliDoc ) ? (
                        Object.entries( props.cliDoc ).map( ( [ tabName, tabData ] ) => {
                            return (
                                <button className='view-index-documentation-framework__tab-nav__item' onClick={ props.handleTabChange } data-tab={ tabName } key={ tabName }>
                                    { tabData.title }
                                </button>
                            );
                        } )
                    ) : 'nope'
                }
            </div>
            <div className='view-index-documentation-framework__tab-content'>
                <div className='markdown-body'>
                    {
                        props.docHTML ? <div dangerouslySetInnerHTML={ { __html: props.docHTML } }></div> : 'loading...'
                    }
                </div>
            </div>
        </div>
    );
};
