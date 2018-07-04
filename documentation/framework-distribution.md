```
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
```

`dist` folder contains distribution files of each platform. When we build project with `avizva-cli` using command `avizva-ui build`, `default` platform is chosen by default. Hence, only `.js` files are resolved in `import` statement and build files are exported in `dist/default` folder.

When we mention a platform in build command, `avizva-ui build cordova`, build is initiated for `cordova` platform and files with suffix `.cordova.js` get more preferences than `.js` files in `import` statements. If `xyz.cordova.js` file is missing, then `xyz.js` file is used instead. Hence, it's not necessary to have files for all the platforms. This way, all platforms can share same file.

To see preview of a platform build with default system browser, run command `avizva-ui preview` which will serve files from `dist/default`. To see preview of a platform build other than `default`, use command `avizva-ui preview cordova` which will serve files from `dist/cordova`. [**good-server**](https://gitlab.com/thatisuday/cli-good-server) CLI tool is used `avizva-cli` to launch these previews.
