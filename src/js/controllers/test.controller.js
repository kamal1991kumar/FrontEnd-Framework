import React from 'react';
import { render } from 'react-dom';

import { App } from 'container/App.component';
import { BaseController, register } from 'modules/Controllers';

// test controller
const controllerName = 'TestController';

export class TestController extends BaseController {
    constructor( el, attr ) {
        super( el, attr, controllerName, TestController );
    }
    
    // controller installed and ready
    onReady() {
        this.render();
    }

    // render React component
    render() {
        render(
            <App />, this.el
        );
    }
}

// register a controller
register( controllerName, TestController );
