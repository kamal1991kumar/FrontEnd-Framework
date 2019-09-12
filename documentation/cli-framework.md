## Create a project
```
Demo-ui init my-project
```

Here, `my-project` is project name. This command will create `my-project` folder in current working directory where terminal is open. If you need to keep same project name but choose different directory, use `--dir` flag.

```
Demo-ui init my-project --dir my-project-dir
Demo-ui init my-project -d my-project-dir
```

A `my-project-dir` folder will be created in current working directory. If project folder already exists, then CLI will throw error. To force re-create entire project, use `-f` or `--force` flag.

```
Demo-ui init my-project -f
```

By default, once project directory is created, CLI installs npm modules. To avoid that, use `--no-install` flag.

```
Demo-ui init my-project --no-install
```

Use `--inject-doc` to add framework documentation to build output.

```
Demo-ui init my-project --inject-doc
```

Out of the box, CLI only has `default` platform. To add multiple platforms including `default`, use `-p` or `--platforms` flag.

```
Demo-ui init my-project -p cordova,ionic
```

We can also use `i` command alias instead of `init`.

```
Demo-ui i my-project
```

──────────────────────────────────────────────────

## Add platform
It may happen that, you forgot to add platform while initializing the project. Or you need a new platform to support difference device. Then you can add platform with below command.

```
Demo-ui add-platform cordova
```

Above command will add `cordova` platform and setup Webpack config for this new platform. We can also use `p` alias instead of `add-platform` to add new platform.

```
Demo-ui p cordova
```

──────────────────────────────────────────────────

## Create entity
An entity is an element viz. `container` component, `view `component, `hoc`, `service`, `action`, `reducer`, `controller` etc. CLI is equipped with functionality to generate entity file and setting up boilerplate code.

A entity is created using `Demo-ui create <entity-type> <entity-name>` command. `entity-type` is type of entity like shown above. `entity-name` is name of the entity file to be generated. `entity-name` will also be used to generated export variable from entity file.

We can also use `c` alias instead of `create`.

```
Demo-ui c <entity-type> <entity-name>
```

If an entity file with same name already exists, then CLI will give error. To re-create same entity file, use `-f` or `--force` flag.

```
Demo-ui create <entity-type> <entity-name> -f
```

Some entities like `util`, `action`, `reducer`, `controller` are imported at and exported from `index.js`. To auto export (add export statement) in `index.js` of respective entity folder, use `--export` or `-e` flag. This way, you don't need to manually add an export statement.

```
Demo-ui create <entity-type> <entity-name> -e
```


By default, whenever we execute above command, a file is generated for `default` platform. A default platform has no extra extension. Hence, you will see only `.js` file. To create separate file for different platform, use `-p` or `--platform` command.

```
Demo-ui create <entity-type> <entity-name> --platform cordova
```

Above command will create entity file with `.cordova.js` extension. Hence while build of `cordova` platform, `.cordova.js` will get first preference.

We can nest a entity inside a sub-folder by providing full path of the entity. Below command will create entity inside `sub/path` folder.

```
Demo-ui create <entity-type> <sub/path/entity-name>
```

> You can also use `Demo-ui info <entity-type>` command to see entity related information.


#### container
```
Demo-ui create container MyContainer
Demo-ui create container myContainer --platform cordova
```

This will create two files in `src/components/container/MyContainer.cotainer.js` and `src/components/container/MyContainer.cordova.container.js`.


#### hoc
```
Demo-ui create hoc MyHoc
Demo-ui create hoc myHoc --platform cordova
```

This will create two files in `src/components/hoc/myHoc.hoc.js` and `src/components/hoc/myHoc.hoc.cordova.js`.


#### view
```
Demo-ui create view myView
Demo-ui create view MyView --platform cordova
```

This will create two files in `src/components/views/myView.view.js` and `src/components/views/myView.view.cordova.js`.


#### service
```
Demo-ui create service my-service
Demo-ui create service my-service --template=observable --platform cordova
```

This will create two files in `src/components/services/my-service.service.js` and `src/components/services/my-service.service.cordova.js`.

`--template` or `-t` flag is used to choose between different templates. `promise` and `observable` are two valid templates available in `service` entity. By default, `promise` template is used which uses `Axios` boilerplate for HTTP requests. `observable` template used `RxJS` boilerplate for HTTP requests.


#### action
```
Demo-ui create action user
Demo-ui create action user --platform cordova
```

This will create two files in `src/store/actions/user.action.js` and `src/store/actions/user.action.cordova.js`.


#### reducer
```
Demo-ui create reducer user
Demo-ui create reducer user --platform cordova
```

This will create two files in `src/store/reducers/user.reducer.js` and `src/store/reducers/user.reducer.cordova.js`.


#### controller
```
Demo-ui create controller MyController
Demo-ui create controller myController --platform cordova
```

This will create two files in `src/controllers/MyController.controller.js` and `src/controllers/MyController.controller.cordova.js`.


#### util
```
Demo-ui create util myFunction
```

This will create a utility function file `src/utils/myFunction.util.js`.

──────────────────────────────────────────────────

## Run development server
To run development serve and preview application, use below command.

```
Demo-ui serve
```

Above command uses `default` platform and opens browser window on localhost. If you don't want CLI to open browser window, use `--no-open` flag.

```
Demo-ui serve --no-open
```

In development mode, CSS is not extracted to stylesheets. It is injected inline for faster development and better developer experience. Use `--extract-css` flag to extract CSS using Webpack in development mode.

```
Demo-ui serve --extract-css
```

To run development server other than `default` platform, use below command. Below command will launch development server for `cordova` platform.

```
Demo-ui serve cordova
```

This framework provides service worker support using `--sw` flag.

```
Demo-ui serve --sw
``` 

──────────────────────────────────────────────────

## Create build for deployment

```
Demo-ui build
```

Above command uses `default` platform and creates build at `dist/default`. By default, CSS is extracted to stylesheet using Webpack in production mode. To avoid that, use below command.

```
Demo-ui build --no-extract-css
``` 


To create build other than `default` platform, use below command. Below command will create build for `cordova` platform at `dist/cordova`.

```
Demo-ui build cordova
```

This framework provides service worker support using `--sw` flag.

```
Demo-ui serve --sw
``` 