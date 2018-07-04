```
├── .platforms/
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
|  |  ├── utils/
|  |  ├── vendors/
|  |  └── views/
|  ├── pages/
|  |  ├── index.html
|  |  └── about.html
|  └── scss/
|     ├── base/
|     ├── components/
|     ├── modules/
|     ├── fonts/
|     ├── layout/
|     ├── theme/
|     ├── utilities/
|     └── index.scss
├── dist/
|  ├── cordova/
|  |  ├── assets/
|  |  ├── css/
|  |  ├── js/
|  |  ├── json/
|  |  ├── index.html
|  |  └── about.html
|  └── default/
|     ├── assets/
|     ├── css/
|     ├── js/
|     ├── json/
|     ├── index.html
|     └── about.html
├── config/
|  ├── default.json
|  ├── development.json
|  └── production.json
├── .gitignore
├── .eslintrc.js
├── .esdoc.json
├── .eslintignore
├── .babelrc
├── postcss.config.js
├── env.js
├── webpack.config.extra.js
├── webpack.config.js
├── jsconfig.json
├── cli.config.json
├── package-lock.json
└── package.json
```

***

### Environment config > config/
This folder contains `{NODE_ENV}.json` files. Based on current `NODE_ENV` variable, Webpack's `ConfigWebpackPlugin` picks up the `{NODE_ENV}.json` file and injects in global variable `CONFIG`. `CONFIG` global variable is accessible everywhere in the project. Using these files, we can maintain environment dependent data like **_API endpoints_**. A `default.json` is must have in case `NODE_ENV` environment variable is not provided which can be same as `development.json`.

***

### Git > .gitignore
This is a standard file which ignores files and folders from being added to Git commits. Folders like `node_modules` and `build` is not necessary to be added to code repository as they can be easily duplicated on any system. This framework gives, out of the box `.gitignore` file with some common ignored paths. Please consult **Avizva UI** team before making any changes to this file. [**Read more about .gitignore**](https://www.atlassian.com/git/tutorials/saving-changes/gitignore).

***

### JS Linting tool > .eslintrc.js
This file contains rule-set of [**ESLint**](https://eslint.org/). ESLint is a toolkit to maintain consistent code writing pattern. Webpack's `eslint-loader` uses this file to throw compilation error if a JavaScript syntax doesn't comply with rule-set of this file. We can ignore files or folder being tested by `ESLint` by adding them to `.eslintignore`. Format of `.eslintignore` is same as `.gitignore`. You are not allowed to modify this file as it contains standard rules used by **Avizva UI** team.  

***

### Documentation > .esdoc.json
This file contains rule-set of [**ESDoc**](https://esdoc.org/). ESDoc is a command line tool to create documentation from source code of the project. Using command `npm run docs`, you can generate documentation in `docs` folder.

***

### ES2015+ Transpilation > .babelrc
This file contains `plugins` and `presets` for Babel. Babel is a loader used by Webpack to transform ES2015+ JavaScript code to native cross-browser ES5 code. [**Read more about .babelrc**](https://babeljs.io/docs/en/babelrc/).

***

### CSS optimization > postcss.config.js
This file contains configuration for [**PostCSS**](https://postcss.org/). PostCSS is a toolkit for transforming and optimizing CSS, for example, adding vendor-prefixes to CSS properties or minifying CSS code. PostCSS is used with Webpack through `postcss-loader`.

***

### CLI configuration > cli.config.json
This file is created by `avizva-cli` and it contains **CLI configuration** for the project. It is advised not to tamper this file but one can change configuration (_with consultation of UI team_) to modify CLI behavior toward a project.

***

### Editor intellisense > jsconfig.json
This file is used by code editors like **VSCode** to provide path intellisense. As this framework uses **Webpack alias** to make imports easier, code editors can not resolve a file when a variable is imported from an alias. `jsconfig.json` helps editor map a particular alias with file or folder on local file system. Whenever a alias is added in `webpack.config.extra.js`, it is **mandatory** to add same alias in `jsconfig.json` file.

***

### Environment variables > env.js
This file contains environment variable which will be automatically available inside project. Make sure, not to override `NODE_ENV` and `CSS_MODE` environment variables as they are provided by `avizva-cli`.

***

## Other Files
- [.platforms/](Framework~webpack#configurations)
- [webpack.config.extra.js](Framework~webpack#configurations)
- [webpack.config.js](Framework~webpack#configurations)
- [src/](Framework~source)
- [dist/](Framework~distribution)