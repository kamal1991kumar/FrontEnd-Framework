Webpack needs a dedicated wiki page because it's the load lifter of the entire framework. We have configured and optimized webpack for faster development time, optimized build and support for multi-platform deployment.

## Merge webpack config
This framework uses different webpack configurations and dynamically generate a final configuration object using [`webpack-merge`](https://github.com/survivejs/webpack-merge) npm module. With `webpack-merge`, we can also provide functional values to webpack configuration.

## Optimization
Instead of using same configuration for development and production, we have `webpack.config.js` configured in a way that it uses minimal plugins in development to give better development experience. Based on `NODE_ENV` and other environment variables, most of the plugins take `null` value but since, `null` is not a valid Webpack plugin, we use `filer` on `plugins` array and filter out `null` plugins.

## Configurations

### 📁 webpack.config.extra.js
This file contains variable webpack configuration such as **import aliases** which might need to be modified on regular basis. Any dynamic and project related webpack configuration should go in here.

### 📁 .platforms/
`{platform}.webpack.config.js` are the files which webpack will import to load platform dependent configuration. `.platform` folder is created by the CLI and it is advised, not to modify files or content of the files in this folder.

### 📁 webpack.config.js
This is main configuration file for webpack. This is where all magic happens. This file imports other configurations from `webpack.config.extra.js` and `.platforms/`. Based on environment variable and/or CLI commands, `webpack.config.js` dynamically exports final configuration object which webpack consumes.

- **Optimization mode (_mode_)** : Webpack is in `production` mode when `NODE_ENV` environment variable is `production` and for other values, it's in `development` mode.

- **Entry files (_entry_)** : `./src/index.js` and `./src/scss/index.scss` are two entry files for webpack. Hence, if a file is not imported in one of these files or its import tree, it won't be present in final build.

- **Build output (_output_)** : Build files are deployed in `dist/{platform}` folder. Here, since build is platform dependent, build files will be deployed in platform name folder. Every project contains a `default` platform. If a platform is not provided while build, `default` is used instead. A typical build folder contains `.html` files, `.js` files, `.css` files and static assets distributed in separate folders. You will learn more about this in project structure lesson.

- **Soucemaps ([_devtool_](https://webpack.js.org/configuration/devtool/))** : When `NODE_ENV` environment variable is `production`, we are using `source-map` devtool, while in other cases, we are using `cheap-module-eval-source-map` for faster development.

- **Webpack dev server (_devServer_)** : For single-page application development, `historyApiFallback` is set to `true` and browser auto-open `open` to `true`.

- **Loaders (_module_)**
 - **eslint-loader** : We are using es-lint loader for eslint linting tool. Webpack first checks for any linting errors in `.js` files and then send them to next loader.
 - **babel-loader** : babel-loader is used to implement babel for `.js` or `.jsx` transpilation.
 - **sass-loader** : sass-loader along with `postcss-loader`, `css-loader`, `style-loader` is used to transpile sass (_`.scss`_) files. Depending on `CSS_MODE` environment variable, webpack can either use `style-loader` for faster development or `MiniCSSExtractPlugin.loader` to extract css to separate files. By default, `CSS_MODE` is `inline`, hence `style-loader` is used.

- **File resolution (_resolve_)** : By default, webpack only resolves `.scss`, `.css`, and `.json` files. `.js`, `.jsx` file resolution configurations are imported from `./platform` webpack configuration. `alias` are imported from `webpack.config.extra.js` file.

- **Code splitting (_optimization.splitChunks_)** : Webpack 4 internally implements [`SplitChunksPlugin`](https://webpack.js.org/plugins/split-chunks-plugin/). Chunk splitting is defined in `optimization.splitChunks` object. `cacheGroups` object defines configurations for different chunks. By default, webpack ships with `default` and `vendors` chunk configurations which we set to `false`, as we don't need them. `vendor` chunk contains files imported from `node_modules` and `src/js/vendor` folders. `common` chunk contains files imported synchronously inside other chunks more than **2 times**. Any asynchronously imported files (_imported with `import()` function_) does not belong to any defined chunks, hence webpack creates their own independent chunks. With this configuration, we are creating `main.js` (_default name webpack uses to build entry file_), `vendor.js` (_chunk_), `common.js` (_chunk_) and other `{asyncChunkName}.js` files. Using `webpack.NamedChunksPlugin`, we are setting output name and location for these chunk files. If you want to read more about **code splitting** and **lazy loading with React Router**, [read this article on medium](https://itnext.io/react-router-and-webpack-v4-code-splitting-using-splitchunksplugin-f0a48f110312).

- **Plugins (_plugins_)**
 - **HTMLWebpackPlugin** : Compiles `.html` files from `src/pages/` folder and deploys to `dist/{platform}` build folder. Any html file starting with `test.` prefix will not be a part of deployment. Using this plugins, webpack build `.js` and `.scss` files are injected into html files as dependencies.
 - **CopyWebpackPlugin** : Recursively copies files from `src/assets` folder and deploys to `dist/{platform}/build` build folder.
 - **MiniCSSExtractPlugin** : When `CSS_MODE` environment variable is not `inline`, this plugin extract CSS code from JavaScript bundle and creates `style.css` which is deployed in `dist/{platform}/css` build folder.
 - **webpack.NamedChunksPlugin**: This plugin is used to rename JavaScript chunk files. `shortid` npm module is used to create random file names for async chunks (_modules imported with `import()` function_). Rest chunks names are kept the same, as they were defined in `splitChunks`. All async chunks are deployed in `dist/{platform}/js/chunks` folder of platform build.
 - **CleanWebpackPlugin** : This plugin is used to clean chunks files situated in `dist/{platform}/js/chunks/` before new build.
 - **ConfigWebpackPlugin**: This plugin is used to implement [**node-config**](https://github.com/lorenwest/node-config) within webpack. Based on `NODE_ENV` environment variable, `node-config` picks a `json` file from `./config/` folder and webpack injects into `CONFIG` global variable. Hence `CONFIG` is available everywhere in the project and based on build environment, values will be different.