import React from 'react';

// import styles
import './framework.style.scss';

export const frameworkView = ( props ) => {
    return (
        <div className='view-index-documentation-framework'>
            <div className='view-index-documentation-framework__nav'>
                {
                    Object.entries( props.nav ).map( ( [ name, title ] ) => {
                        return (
                            <button className={ 'view-index-documentation-framework__nav__item avz-button avz-button--size-mini avz-button--secondary' + ( name === props.activeTab ? ' avz-button--fill' : '' ) } key={ name } data-tab={ name } onClick={ props.handleChange }>{ title }</button>
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
