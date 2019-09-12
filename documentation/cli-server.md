## Command Line Interface
```
Demo-ui-server --help

Usage: Demo-ui-server serve <directory>  [options]

Options:

-V, --version                          output the version number
-u, --upload [dir]                     Upload folder/directory (local or absolute path) (default: ./upload)
-p, --port [port]                      Custom port for server (default: null)
-h, --host [host]                      Host for the server (default: localhost)
-s, --secure                           Secure host server (https)
-f, --file-input-name [fileInputName]  File input name (default: file)
--no-open                              Do not open URL in browser
-help                                  output usage information
```


## Usage
- `Demo-ui-server serve dist` : Serve `./dist` folder and use `./upload` folder for upload files access/upload.
- `Demo-ui-server serve dist --no-open` : Do not open browser when server starts.
- `Demo-ui-server serve dist -p 3000`: Use port `3000` for server instead of default **random available port**.
- `Demo-ui-server serve dist -h 192.168.0.9` : Use host `192.168.0.9` instead of default `localhost`.
- `Demo-ui-server serve dist -s` : Use `https://` protocol instead of default `http://` for server.
- `Demo-ui-server serve dist -f image` : Use `image` as **file input name** in request body instead of default `file`.
- `Demo-ui-server serve dist -d ./build` : Use `./build` folder as **distribution folder** instead of default `./dist`. This can be absolute path on the system as well, like `/usr/share/build`.
- `Demo-ui-server serve dist -u ./files` : Use `./files` folder to serve/upload files instead of default `./upload`. This can be absolute path on the system as well, like `/usr/share/files`.


## API Access
- GET `/file.ext` path on server URL will serve `file.ext` file from **distribution folder**.
- GET `/folder/file.ext` path on server URL will server `file.ext` from `folder` directory inside **distribution folder**.
- Server will add appropriate header while serving these files. For example, GET `/json/users.json` will serve `users.json` from `json` directory with `application/json` Content-Type response header.
- GET `/upload/file.ext` will serve `file.ext` file from **upload folder**.
- POST `/upload` route is used to upload a file. Make sure to use correct file input name while uploading a file to this route. This is key in your multipart form data. When you start a server, **upload folder** is automatically created if doesn't exist.

## Websockets
`v1.0.4+` supports websocket on the same port of web server. Default ping-pong event is `message`. Use [Online client tool](http://amritb.github.io/socketio-client-tool) to test websocket functionality. Use `http://localhost:{port}` as **socket.io** server URL.