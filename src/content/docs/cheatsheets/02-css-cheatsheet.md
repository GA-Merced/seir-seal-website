---
title: CSS Cheatsheet
description: A Quick Reference for CSS
---

# Properties

| CSS Property        | Purpose                               | Example                         |
|---------------------|---------------------------------------|---------------------------------|
| `color`             | Sets the text color                   | `color: #FF5733;`               |
| `font-size`         | Sets the font size                    | `font-size: 16px;`              |
| `font-family`       | Defines the font family               | `font-family: Arial, sans-serif;` |
| `text-align`        | Aligns text within an element         | `text-align: center;`           |
| `background-color`  | Sets the background color             | `background-color: #F0F0F0;`    |
| `margin`            | Sets the margin around an element     | `margin: 10px;`                 |
| `padding`           | Sets the padding inside an element    | `padding: 20px;`                |
| `border`            | Defines the border of an element      | `border: 1px solid #000;`       |
| `width`             | Sets the width of an element          | `width: 300px;`                 |
| `height`            | Sets the height of an element         | `height: 200px;`                |
| `display`           | Specifies how an element is displayed | `display: block;`               |
| `position`          | Controls the positioning of an element| `position: absolute;`           |
| `z-index`           | Sets the stacking order of elements  | `z-index: 1;`                   |
| `opacity`           | Adjusts the transparency of an element| `opacity: 0.7;`                 |
| `box-shadow`        | Adds a shadow to an element           | `box-shadow: 3px 3px 5px #888888;` |
| `text-decoration`       | Adds or removes text decorations      | `text-decoration: underline;`         |
| `text-transform`        | Controls text capitalization           | `text-transform: uppercase;`          |
| `line-height`           | Sets the height of a line of text     | `line-height: 1.5;`                   |
| `letter-spacing`        | Adjusts the spacing between characters| `letter-spacing: 2px;`                |
| `text-shadow`           | Adds a shadow to text                  | `text-shadow: 2px 2px 4px #000000;`   |
| `border-radius`         | Rounds the corners of an element      | `border-radius: 10px;`                |
| `box-sizing`            | Controls box model calculations        | `box-sizing: border-box;`             |
| `float`                 | Floats an element left or right        | `float: left;`                         |
| `clear`                 | Clears floated elements                | `clear: both;`                         |
| `list-style`            | Sets style for list items              | `list-style: disc inside;`             |
| `text-overflow`         | Specifies how overflowed text is shown | `text-overflow: ellipsis;`             |
| `overflow`              | Controls how content overflows        | `overflow: scroll;`                   |
| `cursor`                | Defines the mouse cursor               | `cursor: pointer;`                    |
| `background-image`      | Sets a background image                | `background-image: url('image.jpg');` |
| `background-size`       | Sets the size of background images    | `background-size: cover;`             |
| `transition`            | Creates smooth transitions             | `transition: opacity 0.5s ease-in;`   |
| `transform`             | Applies 2D or 3D transformations       | `transform: rotate(45deg);`           |
| `text-align`            | Aligns text within an element          | `text-align: right;`                  |
| `vertical-align`        | Vertically aligns inline elements      | `vertical-align: middle;`             |
| `outline`               | Adds an outline around an element      | `outline: 2px dashed #00FF00;`        |
| `box-decoration-break` | Controls how box decorations are split across multiple lines | `box-decoration-break: clone;` |
| `font-weight`        | Sets the font weight                 | `font-weight: bold;`                     |
| `font-style`         | Sets the font style                  | `font-style: italic;`                    |
| `font-variant`       | Controls font variants               | `font-variant: small-caps;`              |
| `text-indent`        | Sets the indentation of the first line of text | `text-indent: 20px;`          |
| `line-height`        | Sets the line height                 | `line-height: 1.5;`                     |
| `list-style-type`    | Defines the list item marker style   | `list-style-type: square;`               |
| `list-style-position` | Specifies where the list item marker should be placed | `list-style-position: inside;` |
| `border-collapse`    | Controls table border collapsing behavior | `border-collapse: collapse;`         |
| `table-layout`       | Defines the algorithm for table layout | `table-layout: fixed;`                 |
| `text-align-last`    | Aligns the last line of text in a block element | `text-align-last: justify;`   |
| `word-spacing`       | Adjusts the spacing between words    | `word-spacing: 2px;`                    |
| `animation`          | Defines animations for elements      | `animation: slide 2s ease infinite;`    |
| `transition`         | Creates smooth transitions           | `transition: opacity 0.5s ease-in;`     |
| `overscroll-behavior` | Controls the behavior of scrolling beyond the bounds | `overscroll-behavior: auto;`   |
| `transform-origin`   | Sets the origin for transformations  | `transform-origin: center;`             |
| `will-change`        | Hints to the browser for optimization| `will-change: transform;`                |
| `backdrop-filter`    | Applies filter effects to the area behind an element | `backdrop-filter: blur(5px);` |
| `caret-color`        | Sets the color of the text input caret | `caret-color: blue;`                |
| `box-reflect`        | Creates reflection effects for elements | `box-reflect: below 0;`          |


# Selectors

| CSS Selector        | Purpose                           | Example                              |
|----------------------|-----------------------------------|--------------------------------------|
| `element`           | Selects elements by their type    | `p { color: blue; }`                 |
| `.class`            | Selects elements by their class   | `.btn { background: #FF5733; }`      |
| `#id`               | Selects elements by their id      | `#header { font-size: 24px; }`       |
| `*`                 | Selects all elements              | `* { margin: 0; padding: 0; }`       |
| `selector1, selector2` | Selects multiple elements   | `h1, h2 { font-family: 'Arial'; }`   |
| `element.class`     | Selects elements with a specific class | `div.error { color: red; }`   |
| `element#id`        | Selects an element with a specific id | `input#username { border: 1px solid #ccc; }` |
| `element[attr]`     | Selects elements with a specific attribute | `a[href] { text-decoration: none; }` |
| `element[attr=value]` | Selects elements with a specific attribute and value | `input[type="text"] { width: 200px; }` |
| `element:first-child` | Selects the first child of its parent | `ul li:first-child { font-weight: bold; }` |
| `element:last-child`  | Selects the last child of its parent | `ul li:last-child { margin-bottom: 10px; }` |
| `element:nth-child(n)` | Selects the nth child of its parent | `ul li:nth-child(odd) { background-color: #f0f0f0; }` |
| `element:nth-last-child(n)` | Selects the nth child of its parent, counting from the last | `ul li:nth-last-child(3) { font-style: italic; }` |
| `element:visited`   | Selects visited links             | `a:visited { color: purple; }`       |
| `element:hover`     | Selects elements when hovered over | `button:hover { background-color: #444; }` |
| `element:focus`     | Selects elements when focused     | `input:focus { border-color: #0078d4; }` |
| `element::before`   | Selects an element's before pseudo-element | `p::before { content: ">>"; }`  |
| `element::after`    | Selects an element's after pseudo-element  | `blockquote::after { content: " - Anonymous"; }` |
| `element:not(selector)` | Selects elements that do not match the selector | `div:not(.special) { opacity: 0.8; }` |

# Measurements

| CSS Measurement   | Purpose                                | Example                           |
|-------------------|----------------------------------------|-----------------------------------|
| `px`              | Pixels (1/96th of 1 inch)              | `font-size: 16px;`               |
| `em`              | Relative to the font size of the parent element | `margin: 1em;`           |
| `rem`             | Relative to the font size of the root element (html) | `font-size: 1.2rem;` |
| `vh`              | Relative to 1% of the viewport height   | `height: 50vh;`                   |
| `vw`              | Relative to 1% of the viewport width    | `width: 30vw;`                    |
| `%`               | Percentage relative to the parent element | `width: 50%;`                    |
| `cm`              | Centimeters                             | `width: 5cm;`                     |
| `mm`              | Millimeters                             | `margin: 10mm;`                   |
| `in`              | Inches                                  | `height: 3in;`                    |
| `pt`              | Points (1/72 of an inch)                | `font-size: 12pt;`                |
| `pc`              | Picas (1 pica = 12 points)              | `line-height: 1.5pc;`             |
| `ex`              | Relative to the x-height of the current font | `width: 3ex;`               |
| `ch`              | Relative to the width of the "0" (zero) character | `padding: 2ch;`        |
| `vmin`            | Relative to the smaller of viewport width and height | `width: 20vmin;`     |
| `vmax`            | Relative to the larger of viewport width and height | `height: 15vmax;`    |
| `fr`              | Fraction unit for CSS Grid Layout       | `grid-template-columns: 1fr 2fr;` |
| `deg`             | Degrees for rotation and angles         | `transform: rotate(45deg);`      |
| `rad`             | Radians for rotation and angles         | `transform: rotate(0.7854rad);`  |
| `grad`            | Gradians for rotation and angles        | `transform: rotate(50grad);`      |
