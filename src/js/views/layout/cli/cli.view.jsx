import React from 'react';

// import styles
import './cli.style.scss';

export const cliView = ( props ) => {
    return (
        <div className='view-index-documentation-cli'>
            <div className='view-index-documentation-cli__nav'>
                {
                    Object.entries( props.nav ).map( ( [ name, title ] ) => {
                        return (
                            <button className={ 'view-index-documentation-cli__nav__item avz-button avz-button--size-mini avz-button--secondary' + ( name === props.activeTab ? ' avz-button--fill' : '' )  } key={ name } data-tab={ name } onClick={ props.handleChange }>{ title }</button>
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
