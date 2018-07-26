### Platform
This framework is written in JavaScript and compiles on Node. So if you haven't installed node.js on your system, you can install it from [nodejs.org](https://nodejs.org/en/). Like other modern frameworks, this framework is written in ES2015+ / SASS (`.scss`) and uses Webpack (babel + node-sass) to transpile them to cross-browser code.

[comment]: <> ( replace logic of package.json modules  |  "([a-z\-\.]+)": "([\^0-9\.]+)",?  | <tr><td><a target="_blank" href="https://npmjs.com/package/$1" target="_blank">$1</a> ($2)</td></tr> )

<table width="100%">
    <thead>
        <tr>
            <th>Core Modules</th>
            <th>Development modules</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td style="vertical-align: top; padding: 0; border: none;">
                <table>
                    <tbody>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/axios">axios</a> (^0.18.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/axios-cancel">axios-cancel</a> (^0.2.2)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/config">config</a> (^1.30.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/esdoc">esdoc</a> (^1.1.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/esdoc-jsx-plugin">esdoc-jsx-plugin</a> (^1.0.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/esdoc-standard-plugin">esdoc-standard-plugin</a> (^1.0.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/github-markdown-css">github-markdown-css</a> (^2.10.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/lodash">lodash</a> (^4.17.10)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/promise-polyfill">promise-polyfill</a> (^8.0.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/react">react</a> (^16.4.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/react-dom">react-dom</a> (^16.4.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/react-loadable">react-loadable</a> (^5.4.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/react-redux">react-redux</a> (^5.0.7)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/react-router-dom">react-router-dom</a> (^4.2.2)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/react-router-server">react-router-server</a> (^4.2.3)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/react-transition-group">react-transition-group</a> (^2.4.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/redux">redux</a> (^4.0.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/redux-thunk">redux-thunk</a> (^2.3.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/rxjs">rxjs</a> (^6.2.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/showdown">showdown</a> (^1.8.6)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/typed.js">typed.js</a> (^2.0.8)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/velocity-animate">velocity-animate</a> (^2.0.5)</td></tr>
                    </tbody>
                </table>
            </td>
            <td style="vertical-align: top; padding: 0; border: none;">
                <table>
                    <tbody>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/autoprefixer">autoprefixer</a> (^8.6.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-core">babel-core</a> (^6.26.3)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-eslint">babel-eslint</a> (^8.2.3)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-loader">babel-loader</a> (^7.1.4)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-minify-webpack-plugin">babel-minify-webpack-plugin</a> (^0.3.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-plugin-syntax-dynamic-import">babel-plugin-syntax-dynamic-import</a> (^6.18.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-plugin-transform-class-properties">babel-plugin-transform-class-properties</a> (^6.24.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-plugin-transform-decorators-legacy">babel-plugin-transform-decorators-legacy</a> (^1.3.5)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-plugin-transform-object-rest-spread">babel-plugin-transform-object-rest-spread</a> (^6.26.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-preset-env">babel-preset-env</a> (^1.7.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/babel-preset-react">babel-preset-react</a> (^6.24.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/boolean">boolean</a> (^0.1.3)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/case-sensitive-paths-webpack-plugin">case-sensitive-paths-webpack-plugin</a> (^2.1.2)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/clean-webpack-plugin">clean-webpack-plugin</a> (^0.1.19)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/config-webpack">config-webpack</a> (^1.0.4)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/copy-webpack-plugin">copy-webpack-plugin</a> (^4.5.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/css-loader">css-loader</a> (^0.28.11)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/esdoc-react-plugin">esdoc-react-plugin</a> (^1.0.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/eslint">eslint</a> (^4.19.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/eslint-friendly-formatter">eslint-friendly-formatter</a> (^4.0.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/eslint-loader">eslint-loader</a> (^2.0.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/eslint-plugin-react">eslint-plugin-react</a> (^7.9.1)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/glob">glob</a> (^7.1.2)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/html-webpack-plugin">html-webpack-plugin</a> (^3.2.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/json-server">json-server</a> (^0.13.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/mini-css-extract-plugin">mini-css-extract-plugin</a> (^0.4.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/node-sass">node-sass</a> (^4.9.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/postcss-loader">postcss-loader</a> (^2.1.5)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/sass-loader">sass-loader</a> (^7.0.2)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/shortid">shortid</a> (^2.2.8)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/style-loader">style-loader</a> (^0.21.0)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/webpack">webpack</a> (^4.10.2)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/webpack-cli">webpack-cli</a> (^3.0.2)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/webpack-dev-server">webpack-dev-server</a> (^3.1.4)</td></tr>
                        <tr><td><a target="_blank" href="https://npmjs.com/package/webpack-merge">webpack-merge</a> (^4.1.2)</td></tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>