```
├── src/
|  ├── index.js
|  ├── assets/
|  |  ├── files/
|  |  ├── fonts/
|  |  ├── images/
|  |  ├── json/
|  |  └── favicon.ico
|  ├── js/
|  |  ├── core/
|  |  |  ├── constants/
|  |  |  ├── utils/
|  |  |  ├── modules/
|  |  |  └── hoc/
|  |  ├── animations/
|  |  ├── components/
|  |  |  ├── containers/
|  |  |  └── hoc/
|  |  ├── constants/
|  |  ├── controllers/
|  |  ├── models/
|  |  ├── router/
|  |  ├── services/
|  |  ├── store/
|  |  ├── sw/
|  |  ├── utils/
|  |  ├── vendors/
|  |  └── views/
|  ├── pages/
|  |  ├── index.html
|  |  └── about.html
|  └── scss/
|     ├── globals/
|     ├── base/
|     ├── fonts/
|     ├── theme/
|     ├── layout/
|     ├── modules/
|     ├── components/
|     └── index.scss
```

`src` folder contains source code of entire project. Whatever lies outside this folder is strictly related to the framework. Hence you will spend most of your time working with this folder only.

`src` folder contains `index.js` which is entry point of the Webpack. Out of the box, this file contains application bootstrap logic and imports which should be present in the distribution file. `src` is majorly consist of `assets`, `js` and `scss` files.

──────────────────────────────────────────────────

# 📁 Static Assets
```
├── assets/
|  |  ├── files/
|  |  ├── fonts/
|  |  ├── images/
|  |  ├── json/
|  |  └── favicon.ico
```

`assets` folder contains static assets which will be deployed with the distribution files. Every `{platform}` build will have separate `assets` folder. Webpack will copy entire `assets` folder and paste `as-is` with the distribution. Hence, it is advised to remove stale/unnecessary files before running build task.

`assets` folder is deployed in the parent directory of `{platform}` distribution. Hence it is recommended to use `/assets/../../file.ext` like absolute paths while referencing an asset file in SCSS or HTML.

`json` folder contains `.json` files which can be used by `good-server` to create read-only JSON API. To preview a `{platform}` distribution with `good-server`, run command `good-server -d dist/{platform}` or `avizva-ui preview {platform}` which will open browser window automatically at a random port. [**Good server**](https://gitlab.com/thatisuday/cli-good-server) is CLI tool built by **Avizva UI team** to launch a static HTTP server with read-only JSON API and web-socket server.

──────────────────────────────────────────────────

# 📁 HTML Pages
```
|  ├── pages/
|  |  ├── index.html
|  |  └── about.html
```

`pages` folder contains `HTML` pages. If you have a single page application, then you only need `index.html`. All pages use same distribution `.js` and `.css` files hence **Controller** modules is used to decides which component to bootstrap for individual pages.  If you need to avoid a `.html` pages from going into to distribution, add `test.` prefix like `test.about.html` to the filename.

──────────────────────────────────────────────────

# 📁 CSS Styles
```
|  └── scss/
|     ├── globals/
|     ├── base/
|     ├── fonts/
|     ├── theme/
|     ├── layout/
|     ├── modules/
|     ├── components/
|     └── index.scss
```

`scss` folder contains project `.scss` (CSS) files. We recommend structuring your CSS with [**SMACSS**](https://smacss.com/) architecture and write CSS classnames with [**BEM**](http://getbem.com/) methodology. You must follow these two approaches while writing CSS in this framework.

As per **SMACSS**, `.scss` files are divided into below categories.
- **globals/** : This folder contains sass partials exporting **variables**, **functions** and **mixins** globally. All of these files are imported in outermost `index.scss`, hence these exported members will be available globally from anywhere.
- **base/** : This folder contains `.scss` files which represent core styles of the entire project. Filename should end with suffix `.base.scss`.
- **fonts/** : This folder contains font-family related `.scss` files. Font files of a font-family is located in `assets/fonts` and absolute path like `/assets/fonts/../file.otf` should be used inside `.font.scss` files.
- **theme/** : This folder contains theme related `.scss` files. Filename should end with suffix `.theme.scss`.
- **layout/** : This folder contains CSS layout related `.scss` files. Filename should end with suffix `.layout.scss`.
- **modules/** : This folder contains React.js view (component) related `.scss` files. Filename should end with suffix `.module.scss`. This folder also contains styles for native JavaScript or CSS modules.
- **component/** : This folder contains React.js container (component) related `.scss` files. Filename should end with suffix `.component.scss`. This folder also contains styles for native JavaScript web-components.

All above folders should contain an `index.scss` file which `scss/index.scss` imports. `scss/index.scss` is entry point of Webpack as well. Hence, you don't need to import `scss/index.scss` file anywhere in your JavaScript.

──────────────────────────────────────────────────

# 📂 JavaScript
```
|  ├── js/
|  |  ├── core/
|  |  |  ├── constants/
|  |  |  ├── utils/
|  |  |  ├── modules/
|  |  |  └── hoc/
|  |  ├── animations/
|  |  ├── components/
|  |  |  ├── containers/
|  |  |  └── hoc/
|  |  ├── constants/
|  |  ├── controllers/
|  |  ├── models/
|  |  ├── router/
|  |  ├── services/
|  |  ├── store/
|  |  ├── sw/
|  |  ├── utils/
|  |  ├── vendors/
|  |  └── views/
```

`js` folder contains `.js` (JavaScript) files. These files are divided among various folders depending on their role.

## ↳ js/core
This folder contains core (provided by framework) modules. You can use these modules to enhance your custom modules or elements. All core modules are [explained here](Framework~core).

## ↳ js/animations
This folder contains `.js` files related to the animations. Filename should end with suffix `.animation.js`. 

##### import statements
```js
import { name } from 'animations/name.animation'
```

<br/>

## ↳ js/components
```
|  |  |  ├── containers/
|  |  |  |  └── MyContainer.container.jsx
|  |  |  |  └── MyContainer.container.cordova.jsx
|  |  |  └── hoc/
|  |  |  |  └── myHoc.hoc.jsx
|  |  |  |  └── myHoc.hoc.cordova.jsx
```
This folder contains `containers` and `hoc` sub-folders. `containers/` contains `.jsx` files related to `React` container components and filename should end with suffix `.container.jsx`. `hoc/` contains `.jsx` files related to `React` **_higher order component_** and filename should end with suffix `.hoc.jsx`.

A `container` file should have **TitleCase** filename and exported class name while `hoc` file should have **camelCase** filename and exported function name.

##### Init boilerplate
```bash
avizva-ui create container MyContainer
avizva-ui create container MyContainer --platform=cordova
avizva-ui create hoc myHoc
```

##### Import statement(s)
```js
import { MyContainer } from 'animations/MyContainer.container'
import { myHoc } from 'animations/myHoc.hoc
```

<br/>

## ↳ js/constants
```
|  |  ├── constants/
|  |  |  ├── strings.js
|  |  |  └── index.js
```

This folder contains constants used throughout the project. This folder should have an `index.js` file which exports all the constants. It is recommended to separate constants in different files and re-export them through `index.js`.

##### Import statement(s)
```js
import { MY_CONSTANT } from 'constants'
```

<br/>

## ↳ js/controllers
```
|  |  |  ├── controllers/
|  |  |  |  ├── MyController.controller.jsx
|  |  |  |  └── MyController.controller.cordova.jsx
```

This folder contains controller files. A controller is used to auto-bootstrap a component inside a div. This is necessary in case of `multi-page` application since all pages share same JavaScript bundles. To render a component inside given `div` having attribute `data-controller="MyController"`, `MyController.controller.js` files should be present in controllers.

##### Init boilerplate
```bash
avizva-ui create controller MyController
avizva-ui create controller MyController --export
avizva-ui create controller MyController --platform=cordova
```

##### Import statement(s)
You do not need to import a controller. All controllers are imported in `js/core/bootstrap.js` file and controllers are initialized with bootstrap process of the application. If you use `--export` flag, an export statement for newly created controller will be automatically added to `js/controllers/index.js` file.

<br/>

## ↳ js/models
```
|  |  |  ├── models/
|  |  |  |  └── MyModel.model.js
```

This folder contains JavaScript models. Filename should end with suffix `.model.js`. 

#### ↣ Import statement(s)
```js
import { MyModel } from 'models/MyModel.model'
```

<br/>

## ↳ js/router
```
|  |  ├── router/
|  |  |  ├── router.config.js
|  |  |  └── index.js
```

This folder contains `router.config.js` and `index.js` file. These files provide React Router v4 based routing functionality. `index.js` file exports `RenderRoutes` component which is used to render component based on current path. `router.config.js` is tree-like configuration for entire router of the application used by `RenderRoutes`.

##### Import statement(s)
```js
import { RenderRoutes } from 'router'
```

<br/>

## ↳ js/services
```
|  |  ├── services/
|  |  |  └── user.service.js
|  |  |  └── user.service.codova.js
```

Services are `HTTP` request function bundles. A service filename should be as simple as possible and should end with `.service.js` suffix. Service boilerplate is created using `avizva-cli` and supports both `Promise` or `Observable` based response.

##### Init boilerplate
```bash
avizva-ui create service user --type=promise
avizva-ui create service user --type=observable
avizva-ui create service user --platform=cordova (default: promise)
```

##### Import statement(s)
```js
import { getUsers } from 'services/users.service'
```

<br/>

## ↳ js/store
```
|  |  ├── store/
|  |  |  ├── actions/
|  |  |  |  ├── user.action.js
|  |  |  |  └── index.js
|  |  |  ├── reducers/
|  |  |  |  ├── user.reducer.js
|  |  |  |  └── index.js
|  |  |  └── index.js
```

`store` contains state and state management logic of the application. `index.js` of `store` exports `getStore` function which returns a function to create new store with initial state.

`actions` folder contains an action file which exports a function to create redux action object. It is advised to re-export actions functions from `index.js`. Redux action filename should end with suffix `.action.js`.

`reducers` folder contains redux reducers and there filename should end with suffix `.reducer.js`.

##### Init boilerplate
```bash
avizva-ui create action user
avizva-ui create reducer user
```

##### Import statement(s)
```js
import { addUserAction } from 'store/actions'
import { getStore } from 'store'
```

<br/>

## ↳ js/sw
```
|  |  ├── sw/
|  |  |  ├── init.js
|  |  |  └── sw.js
```

`sw` folder contains initialization script `init.js` for **service worker** registration while `sw.js` file contains service worker implementation. These files should only be imported by Webpack and their implementation depends on CLI command.

<br/>

## ↳ js/utils
```
|  |  ├── utils/
|  |  |  ├── transform-case.js
|  |  |  └── index.js
```

This folder contains utility functions used throughout the project. This folder should have an `index.js` file which exports all the utility functions. It is recommended to separate utility functions in different files and re-export them through `index.js`.

##### Import statement(s)
```js
import { toTitleCase } from 'utils'
```

<br/>

## ↳ js/vendor
```
|  |  |  ├── vendor/
|  |  |  |  └── Gallery.vendor.js
```

This folder contains 3rd party modules/libraries with custom modifications. Filename of a vendor file should end with `.vendor.js` suffix.

##### Import statement(s)
```js
import 'vendor/Gallery.vendor'
import { Gallery } from 'vendor/Gallery.vendor'
```

<br/>

## ↳ js/views
```
|  |  |  ├── components/
|  |  |  |  └── MyView.view.jsx
|  |  |  |  └── MyView.view.cordova.jsx
```
This folder contains React views. Filename of the view should be in **camelCase** and should end with suffix `view.jsx`.

##### Init boilerplate
```bash
avizva-ui create view MyView
avizva-ui create view MyView --platform=cordova
```

##### Import statement(s)
```js
import { MyView } from 'animations/MyView.view'
```