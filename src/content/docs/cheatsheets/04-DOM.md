---
title: DOM (Plain Vanilla/jQuery) Cheatsheet
description: A Quick Reference for Plain Vanilla DOM & jQuery
---

| Document Object Method | jQuery Equivalent | Description |
|------------------------|-------------------|-------------|
| `document.getElementById(id)` | `$('#id')` | Returns a reference to the element with the specified `id` attribute. |
| `document.getElementsByClassName(className)` | `$('.className')` | Returns a collection of all elements with the specified class name. |
| `document.getElementsByTagName(tagName)` | `$('tagName')` | Returns a collection of all elements with the specified HTML tag name. |
| `document.querySelector(selector)` | `$(selector)` | Returns the first element that matches the specified CSS selector. |
| `document.querySelectorAll(selector)` | `$(selector)` | Returns a collection of all elements that match the specified CSS selector. |
| `document.createElement(tagName)` | `$('<tagName>')` | Creates a new HTML element with the specified tag name. |
| `element.appendChild(childElement)` | `$(element).append(childElement)` | Appends a child element to the specified parent element. |
| `element.removeChild(childElement)` | `$(element).remove(childElement)` | Removes a child element from the specified parent element. |
| `element.setAttribute(name, value)` | `$(element).attr(name, value)` | Sets or changes the value of an HTML attribute for the specified element. |
| `element.getAttribute(name)` | `$(element).attr(name)` | Gets the value of the specified HTML attribute for the element. |
| `element.innerHTML` | `$(element).html()` | Gets or sets the HTML content of the element, including any child elements. |
| `element.innerText` | `$(element).text()` | Gets or sets the text content of the element, excluding any HTML tags. |
| `element.style.property` | `$(element).css('property')` | Gets or sets the value of a CSS property for the element. |
| `element.addEventListener(event, handler)` | `$(element).on(event, handler)` | Attaches an event listener to the element for the specified event type. |
| `element.removeEventListener(event, handler)` | `$(element).off(event, handler)` | Removes an event listener from the element for the specified event type. |
| `document.createTextNode(text)` | `jQuery('<div>').text(text)` | Creates a new text node with the specified text content. |
| `element.getAttributeNode(name)` | `$(element).attr(name)` | Gets the attribute node for the specified attribute name. |
| `element.hasAttribute(name)` | `$(element).attr(name) !== undefined` | Checks if the element has the specified attribute. |
| `element.removeAttribute(name)` | `$(element).removeAttr(name)` | Removes the specified attribute from the element. |
| `element.classList.add(className)` | `$(element).addClass(className)` | Adds the specified class to the element's class list. |
| `element.classList.remove(className)` | `$(element).removeClass(className)` | Removes the specified class from the element's class list. |
| `element.classList.toggle(className)` | `$(element).toggleClass(className)` | Toggles the presence of the specified class in the element's class list. |
| `element.classList.contains(className)` | `$(element).hasClass(className)` | Checks if the element has the specified class in its class list. |
| `element.focus()` | `$(element).focus()` | Sets focus on the element, making it active for user interaction. |
| `element.blur()` | `$(element).blur()` | Removes focus from the element. |
| `element.scrollIntoView(options)` | `$(element).get(0).scrollIntoView(options)` | Scrolls the element into the visible area of the viewport with optional scrolling options. |
| `document.cookie` | N/A (jQuery doesn't provide a direct equivalent) | Gets or sets the cookies associated with the current document. Use JavaScript for cookie management. |
| `document.documentElement` | `$('html')` | Represents the root element of the document (typically `<html>`). |
| `document.head` | `$('head')` | Represents the `<head>` element of the document. |