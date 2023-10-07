---
title: JS DOM Reference
description: A Reference Page for Javascript DOM Code
---

## What is the Document Object Model (DOM)?
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree-like structure where each node in the tree represents part of the document, such as elements, attributes, and text. The DOM provides a way to interact with and manipulate the content and structure of a web page or document using programming languages like JavaScript.

### The DOM tree structure can be visualized as follows:

```
       Document
         |
    +----+----+
    |    |    |
  <html><head><body>
         |
     +---+---+
     |   |   |
  <h1> <p> <a>
```

The Document node represents the entire web page.
- The `<html>` node is the root of the document.
- The `<head>` and `<body>` nodes represent the head and body sections of the document.
- The `<h1>`, `<p>`, and `<a>` nodes are elements within the body.
## Plain Vanilla JavaScript DOM:
Plain Vanilla JavaScript DOM, often referred to simply as "Vanilla JS," is the practice of using native JavaScript methods and properties to interact with and manipulate the DOM. Vanilla JS allows developers to perform various operations on web documents without the need for additional libraries or frameworks.

### Example Vanilla JS DOM operations:

```js
// Select an element by its ID
const element = document.getElementById('myElement');

// Change the text content of an element
element.textContent = 'New content';

// Add a new element to the DOM
const newElement = document.createElement('div');
document.body.appendChild(newElement);

// Attach an event listener
element.addEventListener('click', () => {
  alert('Element clicked!');
});
``` 
## jQuery and Its Purpose:
jQuery is a fast, small, and feature-rich JavaScript library designed to simplify DOM manipulation and traversal. It was created to address the complexities and inconsistencies of cross-browser JavaScript development. jQuery provides an easy-to-use and concise API for common tasks like selecting elements, modifying content, handling events, and making AJAX requests.

### Key reasons for jQuery's creation:

- **Cross-Browser Compatibility:** jQuery abstracts away many browser-specific quirks and provides a consistent API that works across different browsers.

- **Simplicity and Productivity:** jQuery simplifies complex DOM operations with concise and easy-to-read code, enhancing developer productivity.

- **Extensibility:** jQuery allows developers to create plugins and extend its functionality to suit specific project needs.

- **Community and Resources:** jQuery has a large community, extensive documentation, and a vast ecosystem of plugins and resources.

## DOM Operations Chart (Plain Vanilla JS vs. jQuery):
Here's a chart comparing common DOM operations in plain vanilla JavaScript and jQuery, along with examples:

| DOM Operation                 | Plain Vanilla JS                                   | jQuery                                             |
|-------------------------------|---------------------------------------------------|----------------------------------------------------|
| **Selecting Elements**       |                                                   |                                                    |
| Select an element by ID       | `document.getElementById('myElement')`            | `$('#myElement')`                                  |
| Select elements by class      | `document.querySelectorAll('.myClass')`           | `$('.myClass')`                                    |
| Select elements by tag        | `document.getElementsByTagName('p')`              | `$('p')`                                           |
| Select elements by attribute  | `document.querySelectorAll('[data-attr="value"]')`| `$('[data-attr="value"]')`                         |
| Select the first matching element | `document.querySelector('.myClass')`           | `$('.myClass').first()`                            |
| Select all siblings of an element | `Array.from(element.parentNode.children).filter(child => child !== element)` | `$(element).siblings()`                    |
| Select child elements          | `Array.from(element.children)`                     | `$(element).children()`                            |
| Select parent element          | `element.parentNode`                               | `$(element).parent()`                              |
| **Class Manipulation**        |                                                   |                                                    |
| Add a class to an element     | `element.classList.add('newClass')`               | `$(element).addClass('newClass')`                  |
| Remove a class from element   | `element.classList.remove('oldClass')`            | `$(element).removeClass('oldClass')`               |
| Toggle a class on element     | `element.classList.toggle('active')`              | `$(element).toggleClass('active')`                 |
| Check if element has class    | `element.classList.contains('myClass')`           | `$(element).hasClass('myClass')`                   |
| **Content Manipulation**      |                                                   |                                                    |
| Set an element's text         | `element.textContent = 'New content'`             | `$(element).text('New content')`                   |
| Get an element's text         | `element.textContent`                             | `$(element).text()`                                |
| Set HTML content              | `element.innerHTML = '<strong>Bold Text</strong>'` | `$(element).html('<strong>Bold Text</strong>')`     |
| Get HTML content              | `element.innerHTML`                               | `$(element).html()`                                |
| **Element Creation and Insertion** |                                             |                                                    |
| Create a new element          | `const newElement = document.createElement('div')` | `const newElement = $('<div>')`                    |
| Append a new element          | `document.body.appendChild(newElement)`           | `$('body').append(newElement)`                     |
| Prepend a new element         | `element.insertBefore(newElement, element.firstChild)` | `$(element).prepend(newElement)`             |
| Insert an element after       | `element.parentNode.insertBefore(newElement, element.nextSibling)` | `$(element).after(newElement)`           |
| Replace an element            | `element.parentNode.replaceChild(newElement, element)` | `$(element).replaceWith(newElement)`         |
| **Event Handling**            |                                                   |                                                    |
| Attach an event listener      | `element.addEventListener('click', callback)`     | `$(element).on('click', callback)`                 |
| Remove an event listener     | `element.removeEventListener('click', callback)`  | `$(element).off('click', callback)`                |
| Trigger a custom event       | `const event = new Event('custom'); element.dispatchEvent(event);` | `$(element).trigger('custom')`          |
| **Dimension and Position**    |                                                   |                                                    |
| Get element's width           | `element.clientWidth`                             | `$(element).width()`                               |
| Get element's height          | `element.clientHeight`                            | `$(element).height()`                              |
| Get element's position        | -                                                 | `$(element).position()`                            |
| Get element's offset          | `element.getBoundingClientRect()`                  | `$(element).offset()`                              |
| **Traversal**                 |                                                   |                                                    |
| Find descendants by selector  | `element.querySelectorAll('.descendant')`         | `$(element).find('.descendant')`                   |
| Find parent by selector       | -                                                 | `$(element).closest('.parent')`                    |
| Find next sibling             | `element.nextElementSibling`                       | `$(element).next()`                                |
| Find previous sibling         | `element.previousElementSibling`                   | `$(element).prev()`                                |

## Dom Events Reference

### Part 1

| Event Type        | Description                                    | JavaScript Example                                      | jQuery Example                                  |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------- |
| `click`           | Triggered when an element is clicked.         | ```javascript document.getElementById('myButton').addEventListener('click', function() {...}); ``` | ```javascript $('#myButton').click(function() {...}); ``` |
| `mouseenter`      | Fired when the mouse enters an element.       | ```javascript document.getElementById('myElement').addEventListener('mouseenter', function() {...}); ``` | ```javascript $('#myElement').mouseenter(function() {...}); ``` |
| `mouseleave`      | Fired when the mouse leaves an element.       | ```javascript document.getElementById('myElement').addEventListener('mouseleave', function() {...}); ``` | ```javascript $('#myElement').mouseleave(function() {...}); ``` |
| `keydown`         | Occurs when a key is pressed down.            | ```javascript document.addEventListener('keydown', function(event) {...}); ``` | ```javascript $(document).keydown(function(event) {...}); ``` |
| `keyup`           | Occurs when a key is released.                | ```javascript document.addEventListener('keyup', function(event) {...}); ``` | ```javascript $(document).keyup(function(event) {...}); ``` |
| `change`          | Fired when the value of an input changes.     | ```javascript document.getElementById('myInput').addEventListener('change', function() {...}); ``` | ```javascript $('#myInput').change(function() {...}); ``` |
| `submit`          | Triggered when a form is submitted.           | ```javascript document.getElementById('myForm').addEventListener('submit', function(event) {...}); ``` | ```javascript $('#myForm').submit(function(event) {...}); ``` |
| `focus`           | Occurs when an element receives focus.        | ```javascript document.getElementById('myInput').addEventListener('focus', function() {...}); ``` | ```javascript $('#myInput').focus(function() {...}); ``` |
| `blur`            | Fired when an element loses focus.           | ```javascript document.getElementById('myInput').addEventListener('blur', function() {...}); ``` | ```javascript $('#myInput').blur(function() {...}); ``` |

### Part 2

| Event Type        | Description                                    | JavaScript Example                                      | jQuery Example                                  |
| ----------------- | ---------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------- |
| `contextmenu`     | Triggered when the right mouse button is clicked on an element. | ```javascript document.getElementById('myElement').addEventListener('contextmenu', function(event) {...}); ``` | ```javascript $('#myElement').contextmenu(function(event) {...}); ``` |
| `dblclick`        | Fired when an element is double-clicked.      | ```javascript document.getElementById('myElement').addEventListener('dblclick', function() {...}); ``` | ```javascript $('#myElement').dblclick(function() {...}); ``` |
| `scroll`          | Occurs when an element's scroll position changes. | ```javascript document.getElementById('myElement').addEventListener('scroll', function() {...}); ``` | ```javascript $('#myElement').scroll(function() {...}); ``` |
| `load`            | Triggered when a resource (e.g., image) has finished loading. | ```javascript document.getElementById('myImage').addEventListener('load', function() {...}); ``` | ```javascript $('#myImage').on('load', function() {...}); ``` |
| `error`           | Fired when an element encounters an error (e.g., failed to load an image). | ```javascript document.getElementById('myImage').addEventListener('error', function() {...}); ``` | ```javascript $('#myImage').on('error', function() {...}); ``` |
| `resize`          | Occurs when the browser window is resized.     | ```javascript window.addEventListener('resize', function() {...}); ``` | ```javascript $(window).resize(function() {...}); ``` |
| `contextmenu`     | Triggered when the right mouse button is clicked anywhere on the document. | ```javascript document.addEventListener('contextmenu', function(event) {...}); ``` | ```javascript $(document).contextmenu(function(event) {...}); ``` |
| `input`           | Fired when the value of an input or textarea changes (modern browsers). | ```javascript document.getElementById('myInput').addEventListener('input', function() {...}); ``` | ```javascript $('#myInput').on('input', function() {...}); ``` |
| `mouseenter`      | Similar to `mouseover`, but doesn't bubble.    | ```javascript document.getElementById('myElement').addEventListener('mouseenter', function() {...}); ``` | ```javascript $('#myElement').on('mouseenter', function() {...}); ``` |
| `mouseleave`      | Similar to `mouseout`, but doesn't bubble.     | ```javascript document.getElementById('myElement').addEventListener('mouseleave', function() {...}); ``` | ```javascript $('#myElement').on('mouseleave', function() {...}); ``` |

### Event Bubbling

Event Bubbling is a fundamental concept in the DOM (Document Object Model) that describes the way events propagate or "bubble" up the hierarchy of elements in a web page when an event occurs on a specific element. Event bubbling is an important mechanism for handling events in JavaScript and is crucial for understanding event delegation.

Here's how event bubbling works:

**Event Triggering:** When an event, such as a click or keypress, occurs on an HTML element, it initiates an event.

**Event Propagation:** The event starts at the target element where it originated and then bubbles up through the DOM hierarchy.

**Bubbling Phase:** During the bubbling phase, the event moves from the target element to its parent, then to the grandparent, and so on, until it reaches the root of the document (usually the document or window object). This phase is called "bubbling" because it mimics the behavior of bubbles rising to the surface of water.

**Event Handlers:** At each step in the bubbling phase, if an element has an event handler (e.g., a JavaScript function) registered for that event type, the handler is executed.

**Propagation Stops:** Event propagation can be stopped at any point in the bubbling phase using methods like event.stopPropagation() in JavaScript. If propagation is stopped, the event will not continue to bubble up.

Event bubbling allows you to capture events on parent elements rather than attaching event listeners to every individual child element. This is useful for handling events efficiently, especially when dealing with dynamic content or a large number of elements.

For example, if you have a list of items and want to listen for clicks on any item, you can attach a single event listener to a common parent element (e.g., the list container) and use event delegation to determine which item was clicked.

Understanding event bubbling is essential for effective event handling and can help improve the performance and maintainability of your web applications.

### The Event Object

The event object is a crucial component of event handling in JavaScript. When an event is triggered, such as a click, keypress, or mouse movement, the browser automatically creates an event object that contains information about the event. This event object is then passed as an argument to the event handler function, allowing you to access details about the event and perform actions in response.

The event object has various properties that provide valuable information about the event. Here are some of the commonly used properties of the event object:

- **event.type:** Indicates the type of the event, such as "click", "keydown", "mousemove", etc. This property allows you to determine what kind of event was triggered.

- **event.target:** References the DOM element that originally triggered the event. For example, in a click event, event.target refers to the element that was clicked.

- **event.currentTarget:** Points to the DOM element that the event handler is currently attached to. It may be different from event.target when event delegation is used. It represents the element that "caught" the event during the bubbling phase.

- **event.preventDefault():** A method that, when called, prevents the default behavior associated with the event. For example, it can prevent a form from submitting or prevent a link from navigating to a new page.

- **event.stopPropagation():** A method that, when called, stops the propagation of the event through the DOM hierarchy. It prevents the event from further bubbling or capturing phases. This is useful when you want to limit the scope of an event.

- **event.clientX and event.clientY:** Provide the horizontal and vertical coordinates of the mouse pointer at the time of the event, relative to the window.

- **event.keyCode:** For keyboard events, this property stores the numeric code of the key pressed. It is often used with keydown and keyup events.

- **event.which:** Similar to event.keyCode, this property represents the numeric code of the key pressed during keyboard events. It is commonly used with keypress events.

- **event.timeStamp:** Indicates the time when the event occurred, measured in milliseconds since the page was loaded. It can be used for timing and performance measurement.

- **event.preventDefault():** A method that can be called to prevent the default action of the event from occurring. For example, it can be used to prevent a form submission or the default navigation behavior of a link.

- **event.stopPropagation():** A method that stops the event from propagating further up or down the DOM tree during the capturing or bubbling phases.

- **event.altKey, event.ctrlKey, event.shiftKey:** These properties are Boolean values that indicate whether the Alt, Ctrl, or Shift key was pressed when the event occurred. They are often used to check for modifier keys during keyboard events.

These are just some of the commonly used properties and methods of the event object in JavaScript. Depending on the type of event and your specific use case, you may find other properties and methods that provide additional information and control over event handling. Understanding the event object and its properties is fundamental to effective event-driven programming in JavaScript.

# LocalStorage/SessionStorage

Web browsers provide mechanisms for websites to store and retrieve data on a client's computer, enhancing the overall user experience. Two of these storage mechanisms are Local Storage and Session Storage, which are part of the Web Storage API. Although they serve similar purposes, they have different lifetimes and scopes.

## Local Storage:
Local Storage allows you to store data for the duration of the user's browser. It persists even after the browser is closed and reopened. Each key/value pair is stored as a string and can be retrieved as a string.

Usage:
```js
// Setting an item in Local Storage
localStorage.setItem('username', 'JohnDoe');

// Getting an item from Local Storage
let username = localStorage.getItem('username');

// Removing an item from Local Storage
localStorage.removeItem('username');

// Clearing all items from Local Storage
localStorage.clear();
```
### Advantages:
- Persists across browser sessions and even system reboots.
- Provides a simple key-value store for data.
- Supports up to 5MB of data per domain.
### Disadvantages:
- Not recommended for storing sensitive information as it's accessible via client-side scripts.
- The storage limit can be a constraint for large amounts of data.

## Session Storage:
Session Storage is similar to Local Storage but has a shorter lifetime. It's designed to store data for the duration of the page session. A page session lasts as long as the browser is open, and survives over page reloads and restores. However, opening a page in a new tab or window will cause a new session to be initiated.

Usage:
```javascript
// Setting an item in Session Storage
sessionStorage.setItem('session_id', 'abc123');

// Getting an item from Session Storage
let sessionId = sessionStorage.getItem('session_id');

// Removing an item from Session Storage
sessionStorage.removeItem('session_id');

// Clearing all items from Session Storage
sessionStorage.clear();

```
### Advantages:
- Useful for storing temporary data like form inputs.
- Also provides a simple key-value store for data.
- Supports up to 5MB of data per domain.
### Disadvantages:
- Data does not persist when the browser is closed or the page session ends.
- Like Local Storage, it's not suitable for storing sensitive information.

## LocalStorage CRUD Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
</head>
<body>
    <input type="text" id="todoInput" placeholder="Enter a task">
    <button onclick="addTodo()">Add</button>
    <ul id="todoList"></ul>
    <script src="app.js"></script>
</body>
</html>
```

```javascript
function getTodos() {
    let todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    let todos = getTodos();
    let html = '';
    todos.forEach((todo, index) => {
        html += `
            <li>
                ${todo.text}
                <button onclick="deleteTodo(${index})">Delete</button>
                <button onclick="editTodoPrompt(${index})">Edit</button>
            </li>
        `;
    });
    document.getElementById('todoList').innerHTML = html;
}

function addTodo() {
    let todoText = document.getElementById('todoInput').value;
    if (todoText.trim() === '') return;  // Prevent empty todos
    let todos = getTodos();
    todos.push({ text: todoText });
    saveTodos(todos);
    document.getElementById('todoInput').value = '';
    renderTodos();
}

function deleteTodo(index) {
    let todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
}

function editTodoPrompt(index) {
    let todos = getTodos();
    let newTodoText = prompt('Edit your todo:', todos[index].text);
    if (newTodoText !== null && newTodoText.trim() !== '') {
        editTodo(index, newTodoText);
    }
}

function editTodo(index, newTodoText) {
    let todos = getTodos();
    todos[index].text = newTodoText;
    saveTodos(todos);
    renderTodos();
}

// Initial render
renderTodos();
```

### Explanation:
#### Storing and Retrieving Todos:

1. getTodos and saveTodos functions are utilities for getting and saving the todo list to/from Local Storage.

#### Rendering Todos (Read):

1. renderTodos function reads the todo list from Local Storage and renders it to the DOM.

#### Adding a Todo (Create):

1. addTodo function gets the todo text from the input field, adds a new todo to the list, saves it to Local Storage, clears the input field, and re-renders the todo list.

#### Deleting a Todo (Delete):

1. deleteTodo function takes an index, removes the corresponding todo from the list, saves it to Local Storage, and re-renders the todo list.

#### Editing a Todo (Update):

1. editTodoPrompt function prompts the user for a new todo text, and if provided, calls editTodo to update the todo.
1. editTodo function updates the corresponding todo, saves it to Local Storage, and re-renders the todo list.

#### Initial Render:

1. The renderTodos function is called when the script loads to display any existing todos.
1. This example demonstrates a simple but complete CRUD interaction with a to-do list using Local Storage and Vanilla JavaScript.

# IndexDB

IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. It lets you create, read, navigate, and write user-generated content or assets to the user's browser. It is a powerful, albeit complex, solution for client-side storage, providing more advanced features compared to Local Storage and Session Storage.

## Understanding IndexedDB:
IndexedDB is a transactional database system, like an SQL-based RDBMS. However, unlike SQL, IndexedDB is a NoSQL database system, which stores data in "object stores" resembling tables. Each object store can hold multiple JavaScript objects identified by a unique key.

## Key Features:
- Indexed Data: You can create indexes on object properties allowing efficient searching, even within large datasets.
- Transactional Database: IndexedDB supports transactions ensuring data integrity even when multiple operations are performed.
- Key-Value Storage: Data is stored as key-value pairs, where keys are unique identifiers for easy retrieval.
- Large Amounts of Data: It is suitable for applications needing to handle a considerable amount of data on the client-side.
- Asynchronous API: Operations in IndexedDB are asynchronous, ensuring UI responsiveness.

## Usage:
Here's a simplified example of how to create an IndexedDB database, object store, and add an object to it:

```javascript
// Open a database connection
let request = indexedDB.open('MyDatabase', 1);

request.onupgradeneeded = function(event) {
    // Create object store when database version changes
    let db = event.target.result;
    let objectStore = db.createObjectStore('users', { keyPath: 'id' });
};

request.onsuccess = function(event) {
    // Database opened successfully
    let db = event.target.result;

    // Create a new transaction
    let transaction = db.transaction(['users'], 'readwrite');

    // Get the object store
    let objectStore = transaction.objectStore('users');

    // Add a new user object
    let user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };
    objectStore.add(user);
};

request.onerror = function(event) {
    console.log('Database error: ', event.target.errorCode);
};
```

## Advantages:
- Advanced Storage: IndexedDB is capable of handling more complex data arrangements compared to Local Storage and Session Storage.
- Performance: IndexedDB performs well for large datasets and under high concurrency scenarios.
Disadvantages:
- Complexity: IndexedDB's API is more complex and less user-friendly compared to simpler key-value storage solutions.
- Browser Support: While modern browsers support IndexedDB, older browser versions may not.

## IndexDB CRUD Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
</head>
<body>
    <input type="text" id="todoInput" placeholder="Enter a task">
    <button onclick="addTodo()">Add</button>
    <ul id="todoList"></ul>
    <script src="app.js"></script>
</body>
</html>
```

```javascript
let db;

// Open the IndexedDB connection
let request = indexedDB.open('TodoDB', 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains('todos')) {
        db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
    }
};

request.onsuccess = function(event) {
    db = event.target.result;
    readTodos();
};

request.onerror = function(event) {
    console.log('Database error:', event.target.errorCode);
};

function addTodo() {
    let todoText = document.getElementById('todoInput').value;
    let transaction = db.transaction(['todos'], 'readwrite');
    let objectStore = transaction.objectStore('todos');
    objectStore.add({ text: todoText });

    transaction.oncomplete = function() {
        document.getElementById('todoInput').value = '';
        readTodos();
    };
}

function readTodos() {
    let transaction = db.transaction(['todos'], 'readonly');
    let objectStore = transaction.objectStore('todos');
    let request = objectStore.getAll();

    request.onsuccess = function(event) {
        renderTodos(event.target.result);
    };
}

function renderTodos(todos) {
    let html = '';
    todos.forEach(todo => {
        html += `<li>${todo.text} <button onclick="deleteTodo(${todo.id})">Delete</button></li>`;
    });
    document.getElementById('todoList').innerHTML = html;
}

function deleteTodo(id) {
    let transaction = db.transaction(['todos'], 'readwrite');
    let objectStore = transaction.objectStore('todos');
    objectStore.delete(id);

    transaction.oncomplete = function() {
        readTodos();
    };
}
```

### Explanation:
#### Database Initialization:

1. indexedDB.open initializes a new or existing database. If the database doesn't exist, it creates a new one.
1. onupgradeneeded creates an object store named todos if it doesn't already exist.
1. onsuccess sets a global db variable to the database instance and reads the initial todos.
1. onerror logs any database error.

#### Add Todo (Create):

1. addTodo function triggers on the "Add" button click, capturing the input value and creating a new transaction to add a new todo to the object store.
1. transaction.oncomplete clears the input field and refreshes the todo list.

#### Read Todos (Read):

1. readTodos function creates a read transaction, fetches all todos from the object store, and calls renderTodos to display them.

#### Delete Todo (Delete):

1. deleteTodo function triggers on the "Delete" button click, capturing the todo ID, creating a new transaction to delete the todo from the object store.
1. transaction.oncomplete refreshes the todo list.

#### Render Todos:

1. renderTodos function takes an array of todos and renders them to the DOM.
1. This example covers the Create, Read, and Delete operations of CRUD. The Update operation would follow a similar pattern to the Add and Delete operations, requiring a transaction to update an existing record in the object store.

## Conclusion:
IndexedDB is an advanced client-side storage solution suited for developers requiring more than what Local Storage and Session Storage offer. With IndexedDB, developers can build more complex, robust, and efficient web applications, enhancing user satisfaction and engagement.


# Example DOM Patterns

## Render Lists of Objects to the DOM

### 1. Vanilla JavaScript:
```javascript
// Define an array of objects
let items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
];

// Function to render items to the DOM
function renderItems(arr) {
    // Get the container element where items will be appended
    let container = document.getElementById('container');
    // Loop through each item in the array
    arr.forEach(item => {
        // Create a new div element
        let div = document.createElement('div');
        // Set the text content of the div to the text property of the current item
        div.textContent = item.text;
        // Append the div to the container
        container.appendChild(div);
    });
}

// Call the function to render items
renderItems(items);
```
```html
<div id="container"></div>
```
#### Explanation:
- An array of objects is defined with let items.
- The renderItems function takes an array as its parameter.
- Inside renderItems, we:
  - Obtain a reference to the DOM element with id of container using document.getElementById.
  - Use Array.prototype.forEach to iterate over the array.
  - For each object in the array, create a new div element, set its text content to the text property of the current object, and append it to the container.

### 2. jQuery:
```js
// Define an array of objects
let items = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' }
];

// Function to render items to the DOM
function renderItems(arr) {
    // Get the jQuery object for the container element
    let $container = $('#container');
    // Loop through each item in the array
    $.each(arr, function(index, item) {
        // Create a new div element
        let $div = $('<div>');
        // Set the text content of the div to the text property of the current item
        $div.text(item.text);
        // Append the div to the container
        $container.append($div);
    });
}

// Call the function to render items
renderItems(items);
```
```html
<div id="container"></div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```
#### Explanation:
- Similar to the Vanilla JS example, we define an array of objects with let items.
- The renderItems function takes an array as its parameter.
- Inside renderItems, using jQuery, we:
  - Obtain a reference to the container element using the jQuery selector $('#container').
  - Use $.each to iterate over the array.
  - For each object in the array, create a new div element, set its text content to the text property of the current object, and append it to the container.