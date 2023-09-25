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