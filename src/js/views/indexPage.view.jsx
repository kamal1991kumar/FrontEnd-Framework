import React from 'react';
import { RouterOutlet } from 'router';

import { SiteHeaderContainer } from 'containers/shared/SiteHeader.container';
import { siteFooterView as SiteFooterView } from 'views/shared/siteFooter.view';

export const indexPageView = ( props ) => {
    return (
        <div className={ `view-index${ true === props.loading ? ' loading' : '' }` }>
            <SiteHeaderContainer />

            <div className='view-index__content'>
                { /* prop.page should match exactly as written in `router.config.js` file */ }
                <RouterOutlet page='INDEX'/>
            </div>

            <SiteFooterView />
        </div>
    );
};
