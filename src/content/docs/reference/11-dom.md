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
- The <html> node is the root of the document.
- The <head> and <body> nodes represent the head and body sections of the document.
- The <h1>, <p>, and <a> nodes are elements within the body.
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

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
