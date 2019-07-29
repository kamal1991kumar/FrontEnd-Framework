Framework Overview
AVIZVA UI Framework is JavaScript frontend framework designed to create small to large scale single page applications with ease.
It ships with a default ReactJS application which provides an interactive documentation of this framework.

Below are few advantages of using AVIZVA UI Framework over others.
Entity based architecture: This framework comes with built-in entity based architecture. Entities are individual pieces of an applications, like components, views, modules, services etc.
Autonomous entities: Each entity in this framework is completely autonomous, which means it contains logic, view, styles and test cases sandwiched in a directory.
Agnostic nature: This framework is not tied to a fixed UI library/framework like React or Angular. The structure of the framework gives us opportunity to easily switch between any UI library/framework.
Built-in route management: This framework comes with built-in route management system which lets us write sophisticated SPAs without breaking a sweat.
Lazy loading and optimization: Build system provided by the framework can is optimized to handle lazy loading of assets which means our initial load time will be much faster. It also create asset chunks for faster loading.
Platform based builds: This framework enable us to write platform dependent code without maintaining separate code base. For example, code for mobile and desktop versions can be written in the same project while builds can be generated for each platforms in different directories.
Code comments and documentation: The boilerplate provided by this framework contains a standard comments-based documentation style for each entities. This framework also provides tools to generate documentation website using ESDoc.


Folder Structure

ui-framework/
This is the basic structure of an application created using AVIZVA UI Framework.

├── babel.config.js 			// babel configuration to transpile JavaScript
├── cli.config.json 			// configuration for platforms
├── config					// contains JSON files, which provide globally available environment dependent constants
├── dist 					// distribution directory
├── jsconfig.json 			// path mapping for editor intellisense
├── package.json			// dependencies tracker
├── postcss.config.js 		// configuration for CSS optimization
├── server.js 				// a sample express server for testing
├── src 					// project source code directory
├── webpack.config.extra.js 	// extra webpack configuration that can be modified per project need
└── webpack.config.js 		// webpack configuration for the project


src/
This directory contains source code of the project

├── assets
|  ├── favicon.ico
|  ├── files
|  ├── fonts
|  ├── images
|  └── json
├── index.html
├── index.js
├── js
|  ├── __core__
|  ├── animations
|  ├── constants
|  ├── containers
|  ├── hoc
|  ├── models
|  ├── modules
|  ├── nonHttpServices
|  ├── router
|  ├── services
|  ├── store
|  ├── sw
|  ├── utils
|  ├── vendors
|  └── views
└── scss
   ├── app.style.scss
   ├── base
   ├── classes
   ├── fonts
   ├── globals
   ├── layout
   └── theme