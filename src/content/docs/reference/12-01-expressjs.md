---
title: ExpressJS
description: A reference page Express
---

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

## Writing Custom Middleware in Express.js
Middleware in Express.js is a crucial component that allows you to handle requests and responses at various stages of the application's request-response cycle. Custom middleware functions can be created to perform specific tasks, enhance the functionality of your Express application, and encapsulate common functionality. Below, we'll cover how to write custom middleware functions, how to register them in different scopes, and common use cases.

### How to Write a Middleware Function
A middleware function in Express.js is a JavaScript function with access to the `request (req)`, `response (res)`, and next parameters. It can perform tasks, modify the request or response objects, or end the request-response cycle.

Example of a custom middleware function:

```js
function customMiddleware(req, res, next) {
  // Middleware logic here
  console.log('Custom middleware executed.');
  // Call next() to pass control to the next middleware or route handler
  next();
}
```

### Registering Middleware
#### 1. Registering Middleware Globally
To register middleware globally and apply it to all routes, you can use the app.use() method in your Express application.

Example:

```js
const express = require('express');
const app = express();

app.use(customMiddleware); // Register the custom middleware globally

// Define routes and additional middleware here
```

#### 2. Registering Middleware with a Router
You can register middleware with a specific router to apply it only to routes defined within that router.

Example:

```js
const express = require('express');
const router = express.Router();

router.use(customMiddleware); // Register the custom middleware with the router

// Define routes for this router
router.get('/', (req, res) => {
  // Route-specific logic
});

// Use the router in your application
app.use('/api', router); // Mount the router under the '/api' path
```

#### 3. Registering Middleware with a Route
You can register middleware with a specific route to apply it only to that route.

Example:

```js
const express = require('express');
const app = express();

// Register the custom middleware for a specific route
app.get('/special', customMiddleware, (req, res) => {
  // Route-specific logic
});
```

### Use Cases for Middleware
Middleware in Express.js can be used for various purposes. Here are some common use cases:

**Authentication:** Verify user authentication and authorization before allowing access to protected routes.

**Logging:** Log request details, such as IP address, HTTP method, URL, and timestamp, for debugging and auditing purposes.

**Request Parsing:** Parse request body data, query parameters, or headers before processing the request.

**Error Handling:** Handle errors and provide consistent error responses to clients.

**Security:** Implement security measures, such as setting HTTP headers to prevent common security vulnerabilities like Cross-Site Scripting (XSS) and Cross-Origin Resource Sharing (CORS).

**Validation:** Validate user input data and ensure it meets specific criteria before processing it.

**Caching:** Implement caching mechanisms to improve performance by serving cached responses for frequently accessed data.

**Compression:** Compress response data to reduce bandwidth usage and improve client-side performance.

**Rate Limiting:** Limit the number of requests a client can make within a specified time period to prevent abuse or excessive resource consumption.

**Route-specific Logic:** Execute route-specific logic or pre-processing, such as setting up data for rendering templates.

By creating and using custom middleware functions, you can modularize your Express.js application, enhance its functionality, and ensure consistent behavior across routes and requests. Middleware allows you to separate concerns and apply reusable logic to different parts of your application's request-response cycle.

## Alternatives to ExpressJS

### Koa Framework
Koa is a minimalistic and lightweight web framework for Node.js. It was developed by the creators of Express.js and is designed to provide a more modern and streamlined approach to building web applications. Koa emphasizes the use of asynchronous functions, known as middleware, to handle requests and responses.

Example of a Basic Koa Server with Two Routes
```js
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Middleware for the root route "/"
router.get('/', async (ctx) => {
  ctx.body = 'Hello, Koa!';
});

// Middleware for the "/helloworld/:param" route
router.get('/helloworld/:param', async (ctx) => {
  const { param } = ctx.params;
  ctx.body = `Hello, ${param} from Koa!`;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Koa server is running on port 3000');
});
```

In this example, we create a Koa server with two routes. The first route, `"/"`, responds with `"Hello, Koa!"` when accessed. The second route, `"/helloworld/:param"`, responds with a personalized greeting based on the param URL parameter.

### Fastify Framework
Fastify is a high-performance web framework for Node.js. It's known for its speed and efficiency, making it an excellent choice for building fast and scalable web applications. Fastify also supports asynchronous and modern JavaScript features.

Example of a Basic Fastify Server with Two Routes
```js
const fastify = require('fastify')();

// Route for the root "/"
fastify.get('/', async (request, reply) => {
  return 'Hello, Fastify!';
});

// Route for the "/helloworld/:param" route
fastify.get('/helloworld/:param', async (request, reply) => {
  const { param } = request.params;
  return `Hello, ${param} from Fastify!`;
});

fastify.listen(3000, (err) => {
  if (err) {
    console.error('Error starting Fastify server:', err);
    process.exit(1);
  }
  console.log('Fastify server is running on port 3000');
});
```

In this example, we create a Fastify server with two routes. The first route, `"/"`, responds with `"Hello, Fastify!"` when accessed. The second route, `"/helloworld/:param"`, responds with a personalized greeting based on the param URL parameter.

Both Koa and Fastify offer modern and efficient alternatives to Express.js for building web applications in Node.js. Depending on your specific requirements and preferences, you can choose the framework that best suits your project.