---
title: Node/Express
description: A reference page NodeJS and Express
---

## Node.js: An Introduction

### What is Node.js?

Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build and run JavaScript applications outside of a web browser. It is based on the V8 JavaScript engine from Google and was created by Ryan Dahl in 2009. Node.js enables developers to use JavaScript for both frontend and backend development, fostering full-stack JavaScript development.

### History of Node.js

Node.js has an interesting history:

- **2009:** Node.js was first introduced by Ryan Dahl, primarily as a way to address the limitations of traditional server-side technologies, which used synchronous, blocking I/O operations.
- **2010:** The first official release of Node.js (Version 0.1.14) became available.
- **2011:** The Node Package Manager (NPM) was introduced, revolutionizing package management in the JavaScript ecosystem.
- **2012:** The Node.js project joined the Linux Foundation, gaining support and contributions from various organizations and developers.
- **2018:** The release of Node.js 10 brought long-term support (LTS) to the platform, ensuring stability and reliability for enterprise applications.
- **2020:** Node.js 14, another LTS release, introduced enhanced performance and improved features.

### Why Node.js Matters

Node.js has gained significant popularity for several reasons:

- **Efficiency:** Node.js uses a non-blocking, event-driven architecture that makes it highly efficient for handling concurrent connections and I/O-bound operations. This efficiency is crucial for building real-time applications like chat apps and online gaming platforms.

- **Single Language:** With Node.js, developers can use JavaScript both on the frontend and backend, which simplifies the development process and reduces the need to switch between languages.

- **Large Ecosystem:** Node.js has a vast ecosystem of open-source libraries and modules available through NPM, making it easy for developers to find and use pre-built components in their projects.

- **Scalability:** Node.js is well-suited for building scalable applications, thanks to its ability to handle a large number of concurrent connections without significant performance overhead.

### Use Cases for Node.js

Node.js is versatile and finds application in various areas, including:

- **Web Servers:** Node.js is commonly used to build lightweight, high-performance web servers. Popular frameworks like Express.js simplify the process of creating web applications.

- **Real-time Applications:** It is ideal for developing real-time applications such as chat applications, online gaming, and collaborative tools that require instant data updates.

- **API Servers:** Node.js is often chosen for building API servers that serve as the backend for mobile and web applications, providing data and services.

- **Microservices:** In a microservices architecture, Node.js can power individual services due to its efficiency and scalability.

- **IoT (Internet of Things):** Node.js is suitable for developing applications for IoT devices, where real-time data processing is essential.

Node.js continues to evolve, and its community actively contributes to its growth, making it a popular choice for modern application development.

## NodeJS CLI Commands

### Part 1

| Purpose                                      | Syntax                                       | Example                                                |
|----------------------------------------------|----------------------------------------------|--------------------------------------------------------|
| Check Node.js version                        | `node -v`                                   | `$ node -v` -> `v14.17.6`                             |
| Run a JavaScript file                       | `node filename.js`                          | `$ node script.js`                                    |
| Start a Node.js REPL (Read-Eval-Print Loop)  | `node`                                       | `$ node`                                              |
| Execute JavaScript code directly             | `node -e "JavaScript code"`                 | `$ node -e "console.log('Hello, Node.js!')"`         |
| Install a Node.js package globally           | `npm install -g package-name`               | `$ npm install -g express`                            |
| Initialize a new Node.js project             | `npm init`                                  | `$ npm init`                                          |
| Install dependencies from `package.json`     | `npm install`                               | `$ npm install`                                       |
| Install a specific version of a package      | `npm install package-name@version`          | `$ npm install lodash@4.17.21`                        |
| Install a package and save it as a dependency | `npm install package-name --save`         | `$ npm install axios --save`                         |
| Install a package as a development dependency | `npm install package-name --save-dev`     | `$ npm install jest --save-dev`                       |
| List installed packages                     | `npm list`                                  | `$ npm list`                                          |
| Update all packages to their latest versions | `npm update`                                | `$ npm update`                                        |
| Uninstall a package                         | `npm uninstall package-name`                | `$ npm uninstall lodash`                              |
| Run a script defined in `package.json`       | `npm run script-name`                       | `$ npm run start`                                     |
| Check for outdated packages                  | `npm outdated`                              | `$ npm outdated`                                      |

### Part 2

| Purpose                                      | Syntax                                       | Example                                                |
|----------------------------------------------|----------------------------------------------|--------------------------------------------------------|
| Display detailed information about a package  | `npm show package-name`                     | `$ npm show express`                                  |
| Search for packages in the npm registry      | `npm search package-name`                   | `$ npm search request`                                |
| Check the location of global npm packages    | `npm root -g`                               | `$ npm root -g`                                       |
| List globally installed packages             | `npm list -g --depth=0`                     | `$ npm list -g --depth=0`                            |
| View the npm configuration                   | `npm config list`                           | `$ npm config list`                                   |
| Set a specific configuration value           | `npm config set key value`                  | `$ npm config set proxy http://proxy.example.com`     |
| List outdated packages globally              | `npm outdated -g --depth=0`                 | `$ npm outdated -g --depth=0`                        |
| List top-level dependencies in a project     | `npm ls --depth=0`                          | `$ npm ls --depth=0`                                  |
| Remove all packages from `node_modules`      | `npm ls --depth=0 | awk -F/ '/node_modules/ && !/\/npm$/ {print $NF}' | xargs npm -g rm` | `$ npm ls --depth=0 | awk -F/ '/node_modules/ && !/\/npm$/ {print $NF}' | xargs npm -g rm` |
| Install a specific version of Node.js        | Use a Node Version Manager (NVM) like `nvm` | Install and manage Node.js versions with `nvm`       |
| Check npm version                            | `npm --version`                             | `$ npm --version`                                     |
| Display Node.js usage help                   | `node --help`                               | `$ node --help`                                       |
| Generate a Node.js heap dump                 | `node --heapdump=filename`                  | `$ node --heapdump=mydump.heapsnapshot`               |
| Debug Node.js using the built-in debugger    | `node inspect script.js`                   | `$ node inspect app.js`                              |
| Run a Node.js script with debugging enabled  | `node --inspect-brk script.js`              | `$ node --inspect-brk app.js`                         |
| Use a custom JavaScript file for debugging   | `node --require custom-debug.js script.js`  | `$ node --require my-debug.js app.js`                |
| Profile Node.js application                  | `node --prof script.js`                     | `$ node --prof app.js`                                |
| Generate flamegraph from a V8 log file      | `node --prof-process --preprocess -j v8.log > output.svg` | `$ node --prof-process --preprocess -j v8.log > output.svg` |

### Part 3

| Purpose                                      | Syntax                                       | Example                                                |
|----------------------------------------------|----------------------------------------------|--------------------------------------------------------|
| Update a globally installed package          | `npm update -g package-name`                | `$ npm update -g express`                             |
| Install a package locally and save as a dev dependency | `npm install package-name --save-dev` | `$ npm install jest --save-dev`                       |
| Execute scripts defined in `package.json`    | `npm run script-name`                       | `$ npm run test`                                      |
| Display a list of available scripts          | `npm run`                                   | `$ npm run`                                           |
| Set the registry for npm                      | `npm set registry registry-url`             | `$ npm set registry https://registry.npmjs.org/`      |
| Log in to an npm registry (authenticate)      | `npm login`                                 | `$ npm login`                                         |
| Log out from an npm registry (deauthenticate) | `npm logout`                                | `$ npm logout`                                        |
| Create a new npm user account                | `npm adduser`                               | `$ npm adduser`                                       |
| Check Node.js's ability to reach the network  | `npm ping`                                  | `$ npm ping`                                          |
| List available npm scripts and their descriptions | `npm scripts`                           | `$ npm scripts`                                       |
| Show npm package details                     | `npm show package-name`                     | `$ npm show lodash`                                   |
| Check for npm registry connectivity issues   | `npm doctor`                                | `$ npm doctor`                                        |
| Display npm's help documentation              | `npm help`                                  | `$ npm help`                                          |
| Install packages with a specific node version | `npm install package-name --engine-strict` | `$ npm install package-name --engine-strict`           |
| List globally installed packages in a long format | `npm ls -g --long`                      | `$ npm ls -g --long`                                  |
| Install packages with a custom registry URL   | `npm install package-name --registry custom-registry-url` | `$ npm install lodash --registry https://my-registry.com` |
| Display the current npm configuration         | `npm config list`                          | `$ npm config list`                                   |
| Show the package.json configuration            | `npm config list --json`                   | `$ npm config list --json`                            |
| Access the npm cache directory                | `npm config get cache`                     | `$ npm config get cache`                              |
| Verify the integrity of cached packages       | `npm cache verify`                         | `$ npm cache verify`                                  |
| Clean the npm cache                            | `npm cache clean`                          | `$ npm cache clean`                                   |
| List installed global packages                | `npm ls -g --depth=0`                      | `$ npm ls -g --depth=0`                               |
| View package documentation in a web browser   | `npm docs package-name`                    | `$ npm docs express`                                  |
| View the npm audit report for a package       | `npm audit`                                | `$ npm audit`                                         |
| Run npm audit fix to automatically fix issues | `npm audit fix`                            | `$ npm audit fix`                                     |

## Package.json

### What is package.json?
In Node.js, the package.json file is a manifest file that contains metadata about a Node.js application or package. It serves multiple purposes:

- **Dependency Management:** It lists all the dependencies (external packages) required by the application, including their versions.

- **Script Definitions:** It defines various scripts that can be run using npm commands, such as running tests, starting the application, or building assets.

- **Metadata:** It includes metadata about the application, such as its name, version, description, author, and license information.

- **Configuration:** It can store configuration settings for the project, which can be accessed programmatically.

package.json Properties and Their Purposes
Here is a list of commonly used properties in a package.json file and their purposes:

| Property             | Purpose                                               |
|----------------------|-------------------------------------------------------|
| `name`               | Specifies the name of the package or application.    |
| `version`            | Indicates the version of the package.                |
| `description`        | Provides a brief description of the package.         |
| `keywords`           | Lists keywords to help with package discovery.       |
| `repository`         | Specifies the source code repository URL.            |
| `author`             | Specifies the name and contact details of the author.|
| `license`            | Defines the package's license type.                  |
| `dependencies`       | Lists production dependencies required for the app.  |
| `devDependencies`    | Lists development dependencies required for testing. |
| `scripts`            | Defines custom scripts that can be run with `npm`.   |
| `main`               | Specifies the entry point JavaScript file.           |
| `bin`                | Maps package commands to executable scripts.         |
| `engines`            | Specifies Node.js and npm version requirements.      |
| `private`            | Marks the package as private (not for publication).  |
| `homepage`           | Provides a URL to the project's homepage.           |
| `bugs`               | Points to the issue tracker for bug reporting.      |
| `contributors`       | Lists contributors to the project.                  |
| `scripts.start`      | Defines the command to start the application.        |
| `scripts.test`       | Defines the command to run tests.                   |
| `scripts.build`      | Specifies the build command for the project.        |
| `scripts.prepublish` | A script that runs before publishing the package.   |
| `scripts.clean`      | Defines a custom clean-up script.                   |
| `scripts.lint`       | Defines a linting script for code quality checks.   |
| `scripts.deploy`     | Specifies a deployment script.                       |

### Example Package.json

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A sample Node.js application",
  "keywords": ["node", "sample", "example"],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/my-node-app"
  },
  "author": "Your Name <youremail@example.com>",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "axios": "^0.21.1"
  },
  "devDependencies": {
    "jest": "^27.0.6",
    "eslint": "^7.32.0"
  },
  "scripts": {
    "start": "node server.js",
    "test": "jest",
    "build": "webpack --config webpack.config.js",
    "prepublish": "npm run build",
    "clean": "rm -rf dist",
    "lint": "eslint .",
    "deploy": "npm run build && rsync -avz dist/ user@server:/path/to/remote/directory"
  },
  "main": "server.js",
  "bin": {
    "myapp": "./bin/myapp"
  },
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  },
  "private": false,
  "homepage": "https://github.com/yourusername/my-node-app#readme",
  "bugs": {
    "url": "https://github.com/yourusername/my-node-app/issues"
  },
  "contributors": [
    "Contributor1 <contributor1@example.com>",
    "Contributor2 <contributor2@example.com>"
  ]
}

```

## Introduction to Express.js
### What is Express.js?
Express.js, commonly referred to as Express, is a popular and minimalist web application framework for Node.js. It provides a robust set of features and tools for building web and mobile applications. Express.js is designed to make it easier to create web applications by simplifying common tasks like routing, handling HTTP requests, and managing middleware.

### Why Use Express.js?
Express.js offers several advantages:

**Fast and Minimalist:** Express is known for its minimal and unopinionated design, allowing developers to add only the features they need. This makes it lightweight and fast.

**Routing:** Express provides a simple and efficient routing system that allows you to define routes for handling HTTP requests.

**Middleware:** It supports middleware, which are functions that can be executed before or after route handlers. Middleware is essential for tasks like authentication, logging, and error handling.

**Template Engines:** Express can be integrated with various template engines like EJS and Pug for rendering dynamic HTML pages.

**HTTP Utility Methods:** It includes utility methods for making HTTP requests, handling cookies, and managing sessions.

**Large Ecosystem:** Express has a vast ecosystem of middleware and extensions, making it easy to extend its functionality.

### Basic Syntax of Express.js
Here's a basic example of setting up an Express.js server and defining a simple route:

javascript
```js
// Import the Express.js library
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Express server is running on port 3000');
});
``` 
In the example above:

1. We import the Express.js library.
1. Create an instance of the Express application.
Define a route for the root URL ("/") using the app.get() method. When a GET request is made to the root URL, it responds with "Hello, Express!".
1. Finally, we start the Express server on port 3000 using the app.listen() method.
1. This is a simple example, and Express.js can handle much more complex routing and middleware configurations to build powerful web applications. It's a versatile framework suitable for building APIs, web applications, and more.

### The Express App Object

In Express.js, the app object is the central piece of an Express application. It represents the web application itself and is used to configure routes, define middleware, and handle HTTP requests and responses. The app object is an instance of the express module, which is created using express().

#### Key Features of the app Object:
- **Routing:** You can define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.) using the app.METHOD(path, callback) methods.

- **Middleware:** The app.use() method is used to add middleware functions to the application's request processing pipeline. Middleware functions can perform tasks like logging, authentication, and error handling.

- **Setting Application Variables:** The app.set(name, value) method allows you to set various application-level settings.

- **Template Engines:** Express.js can be integrated with template engines like EJS, Pug, and Handlebars using app.set('view engine', 'engine-name').

- **Listening to Ports:** You can start the Express server and make it listen on a specific port using app.listen(port, [hostname], [backlog], [callback]).

- **Error Handling:** Express allows you to define custom error-handling middleware using app.use((err, req, res, next) => { /* Error handling logic */ }).

- **Request and Response Objects:** The req and res objects represent the incoming request and the outgoing response, respectively, in route handlers and middleware.

#### Methods of the app Object
Here's a chart listing commonly used methods of the app object, along with their syntax and examples:

| Method/Property          | Purpose                                      | Syntax                                          | Example                                               |
|--------------------------|----------------------------------------------|-------------------------------------------------|-------------------------------------------------------|
| `app.METHOD(path, callback)` | Define route handlers for HTTP methods   | `app.get(path, callback)`                     | `app.get('/hello', (req, res) => { res.send('Hello, Express!'); });` |
| `app.use([path], callback)`  | Add middleware functions to the application | `app.use((req, res, next) => { /* Middleware logic */ });` | `app.use((req, res, next) => { console.log('Middleware executed'); next(); });` |
| `app.set(name, value)`       | Set application-level settings             | `app.set('view engine', 'ejs')`              | `app.set('port', 3000);`                              |
| `app.listen(port, [callback])` | Start the Express server                | `app.listen(3000, () => { /* Callback logic */ });` | Starts the Express server on port 3000. |
| `app.param(name, callback)`  | Handle route parameters                    | `app.param('userId', (req, res, next, id) => { /* Parameter handling */ });` | Middleware for handling route parameters. |
| `app.locals`                 | Set application-wide local variables        | `app.locals.title = 'My App';`              | Sets application-wide local variables.                 |
| `app.route(path)`            | Create a new route using Express Router    | `app.route('/books')`                        | Returns a new `express.Router` instance for the specified path. |
| `app.render(view, [locals], callback)` | Render view templates                 | `app.render('index', { title: 'My App' }, (err, html) => { /* Rendered HTML */ });` | Renders a view template with optional locals. |
| `app.get(path, callback)`    | Define a route handler for GET requests    | `app.get('/about', (req, res) => { /* Handle GET request */ });` | Defines a route handler for GET requests. |
| `app.post(path, callback)`   | Define a route handler for POST requests   | `app.post('/login', (req, res) => { /* Handle POST request */ });` | Defines a route handler for POST requests. |
| `app.put(path, callback)`    | Define a route handler for PUT requests    | `app.put('/update', (req, res) => { /* Handle PUT request */ });` | Defines a route handler for PUT requests. |
| `app.delete(path, callback)` | Define a route handler for DELETE requests | `app.delete('/remove', (req, res) => { /* Handle DELETE request */ });` | Defines a route handler for DELETE requests. |
| `app.all(path, callback)`    | Define a route handler for all HTTP methods | `app.all('/api', (req, res) => { /* Handle all HTTP methods */ });` | Defines a route handler for all HTTP methods. |
| `app.engine(ext, callback)`  | Register a template engine                 | `app.engine('ejs', ejsEngine);`             | Registers a custom template engine.                   |
| `app.set('view engine', engine)` | Set the default view engine            | `app.set('view engine', 'ejs');`             | Sets the default view engine to EJS.                |
| `app.set('views', directory)` | Set the views directory for templates      | `app.set('views', path.join(__dirname, 'views'));` | Sets the directory for view templates.            |
| `app.disable(name)`         | Disable a setting                           | `app.disable('x-powered-by');`              | Disables a specified setting (e.g., 'x-powered-by').  |
| `app.enable(name)`          | Enable a setting                            | `app.enable('trust proxy');`                | Enables a specified setting (e.g., 'trust proxy').    |
| `app.get('name')`           | Get the value of a setting                  | `app.get('view engine')`                    | Retrieves the value of a setting (e.g., 'view engine'). |
| `app.enabled('name')`       | Check if a setting is enabled               | `app.enabled('trust proxy')`                | Checks if a setting is enabled (e.g., 'trust proxy'). |
| `app.disabled('name')`      | Check if a setting is disabled              | `app.disabled('x-powered-by')`              | Checks if a setting is disabled (e.g., 'x-powered-by'). |
| `app.locals.title`          | Access application-wide local variables     | `app.locals.title`                         | Accesses application-wide local variables.           |
| `app.route('/path')`        | Create a new route using Express Router    | `app.route('/api/users')`                   | Creates a new route instance for '/api/users'.       |
| `app.render(view, locals, callback)` | Render view templates                 | `app.render('index', { title: 'My App' }, (err, html) => { /* Rendered HTML */ });` | Renders a view template with locals and a callback. |

### Using Routers

#### What are Express Router Objects?
In Express.js, a Router object is a middleware that allows you to organize and structure your routes in a more modular and maintainable way. Routers act as mini-express applications that can have their own routes, middleware, and logic. They are particularly useful for breaking down a large application into smaller, manageable pieces.

#### Use Cases of Express Router Objects
Modular Routing: Routers help modularize your application by grouping related routes together. For example, you can create separate routers for user-related routes, admin routes, and API routes.

- **Code Organization:** Routers improve code organization and make it easier to understand the structure of your application, especially in large projects.

- **Middleware Isolation:** Each router can have its own middleware stack, allowing you to apply specific middleware to certain groups of routes.

- **Reusability:** Routers can be reused in different parts of your application or in multiple applications, promoting code reusability.

#### Syntax for Creating and Using Express Router Objects
To create and use an Express Router object, follow these steps:

Import Express and Create a Router:

```js
const express = require('express');
const router = express.Router();
```

Define Routes on the Router:

Add routes to the router using methods like .get(), .post(), .put(), .delete(), etc.

```js
router.get('/route1', (req, res) => {
  // Route logic for GET /route1
});

router.post('/route2', (req, res) => {
  // Route logic for POST /route2
});
```

Add Middleware to the Router:

You can add middleware specific to this router using .use().

```js
router.use((req, res, next) => {
  // Middleware logic for this router
  next();
});
```

Export the Router:

Export the router so that it can be used in your main Express application.

```js
module.exports = router;
```
#### Example of Using an Express Router
Here's an example of creating and using an Express Router for user-related routes:

```js
// userRouter.js
const express = require('express');
const router = express.Router();

// Middleware specific to user routes
router.use((req, res, next) => {
  // Authentication and user-related middleware
  next();
});

// Define user routes
router.get('/profile', (req, res) => {
  // Logic for displaying user profile
});

router.post('/update', (req, res) => {
  // Logic for updating user information
});

// Export the user router
module.exports = router;
```

In your main Express application file:

```js
const express = require('express');
const app = express();

// Import the user router
const userRouter = require('./userRouter');

// Use the user router for routes under '/user'
app.use('/user', userRouter);

// Start the Express server
app.listen(3000, () => {
  console.log('Express server is running on port 3000');
});
```

In this example, the userRouter module is created and defines routes and middleware specific to user-related functionality. It is then imported and used in the main Express application to handle routes under the '/user' path. This modular approach makes your application more organized and maintainable.

## Templating & Express

### What is Templating?
Templating is the process of generating dynamic HTML content by combining data with templates. In web development, templates allow you to create reusable structures for web pages, with placeholders for data that can be filled in dynamically. Templating is particularly useful for generating HTML pages with dynamic content, such as user profiles, blog posts, or product listings.

### Templating Libraries for Express.js
Express.js is compatible with various templating engines, each with its own syntax and features. Some popular templating engines that work well with Express include:

- ****EJS (Embedded JavaScript):** EJS is a simple templating engine that allows you to embed JavaScript code directly in your HTML templates.

- ****Pug (formerly Jade):** Pug is a more concise and expressive templating engine that uses indentation to define HTML structure.

- ****Handlebars:** Handlebars provides a minimalistic templating approach with a focus on simplicity and logic separation.

- ****Mustache:** Mustache is a logic-less templating engine that emphasizes simplicity and portability.

### Configuring and Using a Templating Library with Express
Here are the general steps to configure and use a templating library with Express:

1. Install the Templating Engine: Start by installing the templating engine of your choice as an npm package. For example, to install EJS, run:

```js
npm install ejs --save
```

2. Set the View Engine: In your Express application, set the view engine to the templating engine you installed. This is usually done in your main application file (e.g., app.js or server.js).

```js
const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
```

3. Define Views Directory: By default, Express looks for views (templates) in a directory named "views." You can specify a different views directory using app.set('views', 'path-to-views-directory').

```js
// Set a custom views directory
app.set('views', path.join(__dirname, 'views'));
```

4. Render Views in Routes: In your route handlers, use the res.render() method to render views (templates) and pass data to them.

```js
app.get('/profile', (req, res) => {
  const userData = { name: 'John', age: 30 };
  res.render('profile', { user: userData });
});
```

5. Create Templates: Create templates in your views directory using the chosen templating engine's syntax. These templates can include placeholders that will be filled in with data when rendered.

Example profile.ejs template using EJS:

```html
<html>
  <head>
    <title>User Profile</title>
  </head>
  <body>
    <h1>Welcome, <%= user.name %>!</h1>
    <p>Age: <%= user.age %></p>
  </body>
</html>
```

6. Render and Display: When a route is accessed, the corresponding template is rendered with the provided data and sent as the HTTP response.

By following these steps, you can configure and use a templating library with Express to dynamically generate HTML content based on data, making it easier to create dynamic web pages and applications.

## EJS Templates

### What is EJS?
EJS, short for Embedded JavaScript, is a simple and widely used templating engine for generating dynamic HTML content in web applications. EJS allows you to embed JavaScript code within your HTML templates, making it easy to inject dynamic data and logic into your views.

#### Basic EJS Syntax
EJS uses special tags to embed JavaScript code directly into your HTML templates. These tags are evaluated on the server-side before rendering the final HTML page for the client. Here are some key elements of EJS syntax:

- **Output Tags:** Output tags are used to display dynamic data in your HTML templates. They are enclosed in `<%=` and `%>` tags.

html
```html
<p>Hello, <%= userName %>!</p>
```

In the example above, `<%= userName %>` is an output tag that displays the value of the userName variable.

- **Scriptlet Tags:** Scriptlet tags allow you to write JavaScript code directly within your template. They are enclosed in `<%` and `%>` tags.

```html
<% if (user.isAdmin) { %>
  <p>Welcome, Admin!</p>
<% } else { %>
  <p>Welcome, User!</p>
<% } %>
```

In this example, `<% if (user.isAdmin) { %>` and `<% } else { %>` are scriptlet tags that conditionally render different content based on the user.isAdmin variable.

- **Comments:** EJS allows you to add comments to your templates using `<%#` and `%>` tags.

```html
<%# This is a comment that won't be displayed in the final HTML %>
```
- **Control Flow:** EJS supports various control flow statements, including if, for, and while, allowing you to implement logic directly in your templates.

```html
<% if (users.length > 0) { %>
  <ul>
    <% for (let user of users) { %>
      <li><%= user.name %></li>
    <% } %>
  </ul>
<% } else { %>
  <p>No users found.</p>
<% } %>
```

In this example, EJS is used to conditionally render a list of users or a "No users found" message.

- **Escaping:** To escape HTML tags and prevent cross-site scripting (XSS) attacks, EJS automatically escapes content inserted using <%= ... %>. If you need to render HTML as-is, you can use <%- ... %> instead.

```html
<div><%- unescapedHTML %></div>
```

### Using EJS in Express.js
To use EJS as the templating engine in an Express.js application, you need to:

1. Install EJS as an npm package:

```
npm install ejs --save
```
Set the view engine to EJS in your Express application:

```js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
```

Create EJS templates with the .ejs file extension in your views directory.

Render EJS views in your route handlers using res.render() and pass data as needed.

EJS provides a flexible and straightforward way to generate dynamic HTML content in Express.js applications, making it a popular choice for many web developers.

