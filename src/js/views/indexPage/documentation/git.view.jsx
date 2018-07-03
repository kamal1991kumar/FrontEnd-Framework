import React from 'react';

export const gitView = ( props ) => {
    return (
        <div className='markdown-body'>
            {
                props.docHTML ? <div dangerouslySetInnerHTML={ { __html: props.docHTML } }></div> : 'loading...'
            }
        </div>
    );
};
