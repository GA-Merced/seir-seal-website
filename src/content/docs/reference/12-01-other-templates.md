---
title: Express Templating
description: Showing How to use other templating engines other than EJS
---

# Templating Engines for Express.js
Express.js, a popular Node.js web framework, supports various templating engines that help you generate dynamic HTML pages effortlessly. Each templating engine has its own unique syntax and features. Below, we've listed some of the most commonly used templating engines, the libraries you need to install, and a brief overview of their syntax:

## 1. EJS (Embedded JavaScript)
Library: To use EJS with Express.js, you can install it with npm: `npm install ejs`

(How to use EJS with Express is covered in the Node/Express Section)

Syntax Overview: EJS allows you to embed JavaScript code directly within your HTML templates using `<% %>` tags. Here's a basic example:

```ejs
<h1>Hello, <%= username %>!</h1>
```

## 2. Pug (formerly Jade)
Library: `npm install pug`.

Syntax Overview: Pug uses indentation for structure and doesn't rely on HTML tags. Here's a simple example:

```pug
html
  head
    title My Page
  body
    h1 Welcome to My Page
    p This is a sample paragraph.
```

## 3. Handlebars.js
Library: To use Handlebars.js with Express.js, install it via npm: `npm install express-handlebars`

Syntax Overview: Handlebars.js uses double curly braces `{{ }}` for placeholders and offers features like conditionals and loops. Example:

```html
<h1>{{ title }}</h1>
<p>{{ description }}</p>
```

## 4. Mustache
Library: To use Mustache with Express.js, you can install it with npm: `npm install mustache-express`

Syntax Overview: Mustache uses double curly braces {{ }} for placeholders and has a straightforward syntax. Example:

```html
<h1>{{ title }}</h1>
<p>{{ description }}</p>
```

5. Nunjucks
Library: To use Nunjucks with Express.js, install it via npm: `npm install nunjucks`

Syntax Overview: Nunjucks employs a similar syntax to Jinja and Django templates and supports template inheritance. Example:

```html
<h1>{{ title }}</h1>
<p>{{ description }}</p>
```

6. EJS-Mate
Library: EJS-Mate is an enhanced version of EJS. To use it, install it via npm: `npm install ejs-mate`

Syntax Overview: EJS-Mate extends EJS with layout and block features for creating reusable templates. Example:

```ejs
<%- block('content') %>
```

These templating engines offer different syntax and features, so you can choose the one that best suits your project's requirements and your personal preferences. Express.js provides flexibility in integrating these engines, allowing you to create dynamic and interactive web applications with ease.

# Using Pug with Express
Pug (formerly known as Jade) is a popular template engine for Express that simplifies the process of creating dynamic HTML pages. In this section, we'll explore how to configure and use Pug with Express based on the provided documentation.

## Installation
Before using Pug with Express, you need to install the pug package via npm:

```bash
npm install pug --save
```

## Configuration
To configure Express to use Pug as the template engine, follow these steps:

Open your Express application's main file (typically app.js or server.js).

Set the "views" and "view engine" properties using app.set():

```js
// Set the directory where template files are located
app.set('views', './views');

// Set the view engine to 'pug'
app.set('view engine', 'pug');
```

By specifying the "views" directory and "view engine" as 'pug', you tell Express to look for Pug templates in the 'views' directory and use Pug as the template engine.

Express will automatically load the Pug module internally, so you don't need to require it explicitly.

Here's an example of how to configure Express to use Pug:

```js
const express = require('express');
const app = express();

// Set the directory where template files are located
app.set('views', './views');

// Set the view engine to 'pug'
app.set('view engine', 'pug');
```

## Creating a Pug Template
Next, you can create Pug templates in the specified 'views' directory. For example, create an index.pug file with the following content:

```pug
pug
Copy code
html
  head
    title= title
  body
    h1= message
```

## Rendering Pug Templates
Now that your Pug template is ready, you can render it using a route handler. In this example, we'll create a route to render the index.pug file:

```js
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});
```

Here, `res.render('index', { title: 'Hey', message: 'Hello there!' })` renders the index.pug template with the provided data.

## Making a Request
When you make a request to the home page ('/' in this example), Express will render the index.pug file as HTML. The template placeholders like title and message will be replaced with the data provided in the res.render function.

That's it! You've successfully configured and used Pug as the template engine for your Express application. Pug's concise and elegant syntax makes it a popular choice for creating dynamic web pages with Express.

# Comparing Handlebars, Mustache, and Nunjucks
Handlebars, Mustache, and Nunjucks are all template engines that allow you to create dynamic HTML templates with Express.js. While they serve a similar purpose, they have some differences in syntax and features. In this section, we'll compare these three template engines in terms of configuration with Express, similar syntax, and differences.

## Configuration with Express
### Handlebars
Installation: To use Handlebars with Express, you need to install the express-handlebars package:

```bash
npm install express-handlebars --save
```
Configuration: In your Express application, you configure Handlebars as the view engine as follows:

```js
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
```

### Mustache
Installation: To use Mustache with Express, install the mustache-express package:

```bash
npm install mustache-express --save
```

Configuration: Configure Mustache as the view engine in your Express app:

```javascript
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
```

### Nunjucks

Installation: To use Nunjucks with Express, install the nunjucks package:

```bash
$ npm install nunjucks --save
```

Configuration: Configure Nunjucks as the view engine in your Express app:

```javascript
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'nunjucks');
```

## Similar Syntax
Handlebars, Mustache, and Nunjucks share some common syntax features:

- **Variable Interpolation:** All three template engines use `{{ variable }}` syntax to interpolate and display variable values in the template.

- **Conditionals:** You can use `{{#if condition}}` and `{{else}}` for conditional rendering in all three engines.

- **Loops:** They support looping constructs like `{{#each array}}` for iterating over arrays.

- **Partial Templates:** Handlebars and Mustache use `{{> partial}}` syntax for including partial templates, while Nunjucks uses `{% include 'partial' %}`.

## Differences in Syntax
While Handlebars, Mustache, and Nunjucks have similar syntax, they also have some syntax differences:

### Handlebars
- **Helpers:** Handlebars provides custom helper functions that you can use in templates for more complex operations.

### Mustache
- **Limited Logic:** Mustache intentionally limits the use of logic in templates. It's designed to be logicless, so you won't find complex conditionals or loops.

### Nunjucks
- **Extensibility:** Nunjucks supports custom filters and extensions, allowing you to add custom functionality to your templates.
- **Block Tags:** Nunjucks uses {% block %} tags for defining blocks that can be extended by other templates.

In summary, Handlebars, Mustache, and Nunjucks are all viable options for creating dynamic templates in Express. Your choice depends on your specific project requirements and your familiarity with their respective features and syntax. Handlebars offers more control with custom helpers, Mustache keeps templates logicless, and Nunjucks provides extensibility and block functionality.