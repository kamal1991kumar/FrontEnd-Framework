`src/core` contains **core modules** like `bootstrap.js` which bootstraps the entire application. Other important modules like `Http` and `HttpService` is also a part of **core** space. Other space apart from `src/core` is for your custom code. We recommended you not to tamper any files or code of **core** space.

```
├── core
|  ├── bootstrap.js
|  ├── hoc
|  |  ├── routerOutlet.jsx
|  |  ├── withAsyncComponent.jsx
|  |  ├── withBrowserRouter.jsx
|  |  ├── withRouterConnect.jsx
|  |  └── withStore.js
|  ├── modules
|  |  ├── Controller.js
|  |  ├── Http.js
|  |  ├── HttpService.js
|  |  └── MessageBus.js
|  └── utils
|     ├── debug.js
|     ├── getEmbeddedJSON.js
|     ├── index.js
|     └── reactRender.js
```

Here are few core modules which this framework ship with.

***


### bootstrap.js
This framework is based on controllers to support multi-page applications. Hence, a bootstrap process needs to be initiated which registers and instantiates individual controllers which then renders React component inside HTML element they belong to.

Hence, `src/index.js` which is entry point of Webpack calls `bootstrap.initialize()` method to start initialization of controllers. Once, bootstrap process is completed, controller's `onReady` lifecycle method is called. Inside `onReady` lifecycle method, controller can render a React component inside HTML element it belongs to.

──────────────────────────────────────────────────

### modules/Controller.js
This module exports a `Controller` class that a custom controller can extend. A controller is responsible for rendering a React component inside HTML element it belongs to. When bootstrap process is started, controller's `onInit` lifecycle method is called while `onReady` method is called after bootstrap process is completed.

```js
import { Controller } from 'core/modules/Controller';
export class TestController extends Controller {
    constructor( el, attr ) {
        super( el, attr );
    }

    // controller initialized
    onInit() {}

    // controller is ready, render a react component
    onReady() {}
}

/*************************************************************/

// register controller
TestController.register();
```

***

### modules/Http.js
This module provides easy to use API for making AJAX request. We recommend you to use this module inside services rather than using it directly in your application. This module uses [**Axios**](https://github.com/axios/axios) library under the hood for making HTTP requests.

```js
import { Http } from 'core/modules/Http';

// callback based
const cancel = Http.get( axiosConfig, {
    success: ( data ) => {},
    error: ( error ) => {}
} );
cancel();

// promise based
const promise = Http.get( axiosConfig );
promise.then( handler ).catch( handler );
promise.cancel();
```

Http module triggers a MessageBus event `HTTP_REQUEST_TRANSACTION` (_import from 'core/constants'_) with request status and request id. You can listen to this event using `MessageBus.on( HTTP_REQUEST_TRANSACTION )`.

***

### modules/HttpService.js
This is RxJS implementation of **Http** module. This module provides easy to use API for making cancellable Ajax request. When an observer is subscribed, AJAX request is sent. When that observer is unsubscribed, request associated with that subscription is aborted.

```js
import { HttpService } from 'core/modules/HttpService';

const http = HttpService.create( {
    ...defaultConfig
} );

// send AJAX request
const subscription = http.get( axiosConfig ).subscribe( handler );

// abort XHR request
subscription.unsubscribe();
```

***

### modules/MessageBus.js
MessageBus is general purpose synchronous pub-sub module.

```js
import { MessageBus } from 'core/modules/MessageBus';

// listen to message-bus event
MessageBus.on( 'my_event_name', callbackFunction, thisContext );

// trigger (dispatch/emit) an event
MessageBus.trigger( 'my_event_name' );

// remove a callback from message-bus
MessageBus.off( 'my_event_name', callbackFunction, thisContext );
```

──────────────────────────────────────────────────

### hoc/withStore.jsx
This higher-order-component returns a component wrapped with redux `Provider`. This way, `Component` and it's children have access to a redux `STORE` you have provided.

```js
import { withStore }  from 'core/hoc/withStore';
import { getStore } from 'store';

const STORE = getStore();

const ComponentWithStore = withStore( Component, STORE, props );
```

***

### hoc/withBrowserRouter.jsx
This higher-order-component returns a component wrapped with `BrowserRouter`.

```js
import { withBrowserRouter }  from 'core/hoc/withBrowserRouter';

const ComponentWithRouter = withBrowserRouter( Component, props );
``` 

***

### hoc/withRouterConnect.jsx
When using React Router and React Redux, a component returned by `connect` higher-order-component doesn't have access to `Route` related props like `history`, `match` and `location` etc. Hence, we need to use `withRouter` higher-order-component again.  `withRouterConnect` higher-order-component does exactly the same.

```js
import { withRouterConnect }  from 'core/hoc/withRouterConnect';

const ComponentWithConnect = withRouterConnect( Component, mapStateToProps, mapDispatchToProps );
```

***

### hoc/withAsyncComponent.jsx
This higher-order-component implements `loadable` function from `react-loadable`. This HOC returns a component which can be lazy loaded. You must pass a function which returns promise that upon resolution returns a React component. You can optionally pass `LoadingView` component which will be shown until the promise is resolved. You can use Webpack's [`import()`](https://webpack.js.org/api/module-methods/#import-) function to resolve a component.

```js
import { withAsyncComponent }  from 'core/hoc/withAsyncComponent';

const ComponentPromiseFunction = () => import( 'Component' );
const AsyncComponent = withAsyncComponent( ComponentPromiseFunction, LoadingView );
```

This higher-order-component is used in `router.config.js` when a route needs to be lazy loaded.

***

### hoc/routerOutlet.jsx
This module exports a function which takes router configuration from `route.config.js` and returns `RouterOutlet` component.

```js
import { routes } from './router.config';
import { routerOutlet } from 'core/modules/RouterOutlet';

// export `RouterOutlet` component
export const RouterOutlet = routerOutlet( routes );
```

`RouterOutlet` component is used to render routes based on currently activated route (URL path).  

```jsx
// render routes for `INDEX` page
<RenderRoutes page='INDEX' />

// render child routes of current page and path
<RenderRoutes path={ props.page } path={ props.path } />
```

──────────────────────────────────────────────────

### utils/reactRender.js
This utility function returns a function which can be called with DOM element reference to render a React component. This is used in controllers to render a React component in `onReady` lifecycle method.

```js
import { reactRender } from 'core/utils';
reactRender( Component, { ...props }, ...children )( DOMElement );
```

***

### utils/getEmbeddedJSON.js
This utility function extracts JSON from a script element with given `name` attribute value DOM element context to find script elements. If `context` is empty, it will pick `body` element as context.

```js
import { getEmbeddedJSON } from 'core/utils';
const hostsJSON = getEmbeddedJSON( 'hosts', DOMElement );
```

Above will search `<script name="hosts"></script> elements inside some `DOMElement` and return parsed JSON string. This is widely used in controllers to extract some **initial state** or **data**.

***

### utils/log.js
An utility module to print console logs in browser. This module is also available globally. In `development` mode, it logs messages while it production, it prevents printing any messages. This configuration is mentioned in `config/` files. If you want to override default configuration, set `debug` query string parameter to `true` or `false` in browser URL.

```js
//NO NEED ==> import { log } from 'core/utils';

log( "log message", ...messages );
log.info( "info message", ...messages );
log.warn( "warning message", ...messages );
log.error( "error message", ...messages );
```



