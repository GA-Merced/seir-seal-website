---
title: CSS Reference
description: A reference page for CSS
---

### What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation and formatting of web documents written in HTML and XML. It defines how HTML elements should be displayed on the screen, in print, or in other media. CSS allows web developers to control the layout, colors, fonts, and other visual aspects of web pages.

### How CSS Works and Basic Syntax Rules:
- CSS rules consist of a selector and a set of declarations enclosed in curly braces { }.

- The selector identifies the HTML element(s) to which the style should be applied.

- Each declaration consists of a property and a value, separated by a colon :.

- Declarations are separated by semicolons ;.

- CSS rules are often placed in a separate stylesheet file (external CSS) or included within the HTML document using the <style> element (internal CSS).

- CSS declarations are case-insensitive, but it's a best practice to use lowercase for property names and values.

### CSS Selectors Reference

| Selector|Purpose| Example Usage                                            |
|-------------------|---------------------------------------------|----------------------------------------------------------|
| `element`         | Selects all elements of a specified type.   | `p` selects all `<p>` elements.                         |
| `#id`             | Selects an element with a specific `id` attribute. | `#header` selects an element with `id="header"`.    |
| `.class`          | Selects elements with a specific class attribute. | `.button` selects all elements with `class="button"`. |
| `*`               | Selects all elements.                      | `*` selects all elements on the page.                   |
| `selector1, selector2` | Selects multiple elements.               | `h1, h2` selects all `<h1>` and `<h2>` elements.     |
| `selector > child` | Selects a direct child of an element.   | `ul > li` selects all `<li>` elements that are direct children of a `<ul>`. |
| `ancestor descendant` | Selects descendants of an ancestor element. | `ul li` selects all `<li>` elements that are descendants of a `<ul>`. |
| `selector + sibling` | Selects an adjacent sibling element.  | `h2 + p` selects the `<p>` element immediately following an `<h2>`. |
| `:hover`          | Selects an element when hovered over.      | `a:hover` selects all `<a>` elements when hovered.     |
| `:active`         | Selects an element when activated (e.g., clicked). | `button:active` selects all `<button>` elements when activated. |
| `:focus`          | Selects an element when it receives focus.  | `input:focus` selects all `<input>` elements when focused. |
| `:first-child`    | Selects the first child of an element.    | `ul li:first-child` selects the first `<li>` element inside a `<ul>`. |
| `:last-child`     | Selects the last child of an element.     | `ul li:last-child` selects the last `<li>` element inside a `<ul>`. |
| `:nth-child(n)`   | Selects elements based on their position in a parent. | `tr:nth-child(odd)` selects odd rows in a table. |
| `:nth-of-type(n)` | Selects elements of a specific type based on their position. | `p:nth-of-type(2)` selects the second `<p>` element. |
| `:not(selector)`  | Selects elements that do not match a given selector. | `div:not(.special)` selects all `<div>` elements that do not have `class="special"`. |
| `:first-of-type`  | Selects the first element of its type within its parent. | `p:first-of-type` selects the first `<p>` element. |
| `:last-of-type`   | Selects the last element of its type within its parent. | `p:last-of-type` selects the last `<p>` element. |
| `:nth-last-child(n)` | Selects elements based on their position, counting from the end. | `li:nth-last-child(3)` selects the third-to-last `<li>` element. |
| `:nth-last-of-type(n)` | Selects elements based on their position, counting from the end. | `div:nth-last-of-type(2)` selects the second-to-last `<div>` element. |
| `:empty`          | Selects elements that have no children.    | `p:empty` selects empty `<p>` elements.                |
| `:checked`        | Selects checked radio buttons and checkboxes. | `input[type="radio"]:checked` selects checked radio buttons. |
| `:disabled`       | Selects disabled form elements.            | `input:disabled` selects disabled input elements.     |
| `:enabled`        | Selects enabled form elements.             | `input:enabled` selects enabled input elements.       |
| `:target`         | Selects the target element in the URL fragment identifier. | `#section1:target` selects the element with `id="section1"` when it is the target in the URL. |

## CSS Properties Reference

| Tag          | Purpose                                    | Example Usage                                       |
|--------------|--------------------------------------------|-----------------------------------------------------|
| `color`      | Sets the text color.                        | `color: blue;`                                     |
| `font-family`| Specifies the font family.                  | `font-family: Arial, sans-serif;`                  |
| `font-size`  | Sets the font size.                         | `font-size: 16px;`                                |
| `font-weight`| Defines the font weight (boldness).         | `font-weight: bold;`                              |
| `text-align` | Aligns text within its container.           | `text-align: center;`                             |
| `text-decoration` | Adds decorations to text (e.g., underline). | `text-decoration: underline;`                   |
| `background-color` | Sets the background color of an element. | `background-color: #f0f0f0;`                   |
| `margin`     | Controls the space outside an element.     | `margin: 10px;`                                   |
| `padding`    | Defines the space inside an element.       | `padding: 5px;`                                   |
| `border`     | Creates a border around an element.         | `border: 1px solid #000;`                         |
| `width`      | Sets the width of an element.               | `width: 200px;`                                   |
| `height`     | Defines the height of an element.           | `height: 100px;`                                  |
| `display`    | Specifies how an element is displayed.      | `display: block;`                                 |
| `float`      | Aligns an element to the left or right.     | `float: left;`                                    |
| `position`   | Determines the positioning method.          | `position: relative;`                             |
| `top`        | Sets the top position of an element.        | `top: 10px;`                                      |
| `left`       | Sets the left position of an element.       | `left: 20px;`                                     |
| `z-index`    | Controls the stacking order of elements.    | `z-index: 1;`                                     |
| `opacity`    | Adjusts the transparency of an element.     | `opacity: 0.5;`                                   |
| `text-transform` | Converts text to uppercase or lowercase. | `text-transform: uppercase;`                    |
| `line-height` | Sets the height of a line of text.         | `line-height: 1.5;`                               |
| `list-style` | Defines the style of list markers.           | `list-style: square inside;`                      |
| `text-shadow` | Adds a shadow to text.                     | `text-shadow: 1px 1px 2px #333;`                  |
| `box-shadow` | Adds a shadow to an element's box.         | `box-shadow: 2px 2px 5px #888888;`                |
| `border-radius` | Rounds the corners of an element.        | `border-radius: 10px;`                            |
| `transition` | Specifies CSS transitions for smooth effects. | `transition: all 0.3s ease-in-out;`             |
| `background-image` | Sets a background image.              | `background-image: url('image.jpg');`           |
| `background-size` | Specifies the size of background images. | `background-size: cover;`                       |
| `background-repeat` | Controls how background images repeat. | `background-repeat: no-repeat;`               |
| `background-position` | Sets the position of background images. | `background-position: center;`                 |
| `opacity`    | Controls the opacity of an element.        | `opacity: 0.7;`                                   |
| `transform`  | Applies 2D or 3D transformations to elements. | `transform: rotate(45deg);`                     |
| `cursor`     | Changes the cursor style on hover.          | `cursor: pointer;`                               |
| `text-overflow` | Specifies how text should be displayed when it overflows its container. | `text-overflow: ellipsis;`              |
| `overflow`   | Determines how content overflows its box.    | `overflow: hidden;`                               |
| `white-space` | Controls how white space is handled.       | `white-space: nowrap;`                           |
| `box-sizing` | Defines how the total width and height of an element is calculated. | `box-sizing: border-box;`             |
| `border-collapse` | Specifies whether table borders should be collapsed. | `border-collapse: collapse;`           |
| `border-spacing` | Sets the space between table borders.    | `border-spacing: 5px;`                            |
| `font-style` | Specifies the font style (italic, oblique, normal). | `font-style: italic;`                        |
| `font-variant` | Defines variations in font appearance.   | `font-variant: small-caps;`                      |
| `letter-spacing` | Adjusts the spacing between characters. | `letter-spacing: 2px;`                          |
| `text-align` | Aligns text horizontally (left, center, right, justify). | `text-align: right;`                      |
| `vertical-align` | Aligns inline elements vertically.    | `vertical-align: middle;`                       |
| `word-spacing` | Sets the space between words in text.  | `word-spacing: 4px;`                             |
| `text-indent` | Specifies the indentation of the first line of text. | `text-indent: 20px;`                         |

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
