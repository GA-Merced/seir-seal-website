---
title: CSS Reference
description: A reference page for CSS
---

### What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation and formatting of web documents written in HTML and XML. It defines how HTML elements should be displayed on the screen, in print, or in other media. CSS allows web developers to control the layout, colors, fonts, and other aspects of web pages.

### How CSS Works and Basic Syntax Rules:
- CSS rules consist of a selector and a set of declarations enclosed in curly braces { }.

- The selector identifies the HTML element(s) to which the style should be applied.

- Each declaration consists of a property and a value, separated by a colon :.

- Declarations are separated by semicolons ;.

- CSS rules are often placed in a separate stylesheet file (external CSS) or included within the HTML document using the <style> element (internal CSS).

- CSS declarations are case-insensitive, but it's a best practice to use lowercase for property names and values.

## CSS Measurements Reference

| Unit              | Description                                                                   | Example Usage                                      |
|-------------------|-------------------------------------------------------------------------------|----------------------------------------------------|
| `px` (Pixels)     | A fixed unit of measurement that represents one pixel on a screen.            | `font-size: 16px;`                                |
| `em`              | Relative to the font size of the nearest parent element.                      | `margin: 1em;`                                    |
| `rem`             | Relative to the font size of the root (usually the `<html>` element).         | `font-size: 1rem;`                                |
| `vw` (Viewport Width) | A percentage of the viewport's width.                                      | `width: 50vw;`                                    |
| `vh` (Viewport Height) | A percentage of the viewport's height.                                    | `height: 50vh;`                                   |
| `vmin`            | The smaller of `vw` and `vh`.                                                | `font-size: 3vmin;`                               |
| `vmax`            | The larger of `vw` and `vh`.                                                 | `margin: 2vmax;`                                  |
| `%` (Percentage)  | Relative to the parent element's size (e.g., width, height).                   | `width: 50%;`                                     |
| `cm` (Centimeters)| A metric unit of measurement (1cm = 10mm).                                   | `width: 5cm;`                                     |
| `mm` (Millimeters)| A metric unit of measurement (1mm = 1/10th of 1cm).                          | `border-width: 2mm;`                              |
| `in` (Inches)     | An imperial unit of measurement (1in = 2.54cm).                               | `height: 2in;`                                    |
| `pt` (Points)     | Used primarily for print styles (1pt = 1/72 of 1in).                          | `font-size: 12pt;`                                |
| `pc` (Picas)      | Another print-specific unit (1pc = 12pt).                                     | `line-height: 1.5pc;`                             |
| `ex`              | Relative to the x-height of the current font.                                | `line-height: 2ex;`                               |
| `ch`              | Relative to the width of the "0" (zero) character in the current font.       | `width: 20ch;`                                    |

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

## CSS Selectors Reference

>Want to get some practice with selectors, try out the [CSS Diner](https://flukeout.github.io/).

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

## CSS Flexbox Reference

#### What is Flexbox?

Flexbox, or "Flexible Box Layout," is a CSS layout model that simplifies the arrangement and alignment of elements within a container. It's designed to make it easier to create responsive and dynamic web layouts. Flexbox works by defining a parent-child relationship, allowing you to distribute space and control the positioning of elements within a container along either the horizontal or vertical axis. It's particularly useful for creating complex layouts, evenly spaced elements, and responsive designs, making it a fundamental tool for web developers.

>`Important Note -->` While both Flexbox and CSS Grid are valuable layout tools in CSS, Flexbox is primarily for one-dimensional layouts, think organizing things in a suitcase, and CSS Grid is designed for two-dimensional layouts and complex grid structures, visualize how to load suitcases on to a plane so that no space is wasted. The choice between them depends on the specific layout requirements of your project. Often, they can be used together to achieve more sophisticated designs.
>Want to get some practice? Give [FlexBox Froggy](https://flexboxfroggy.com/), or try [FlexBox Tower Defense](http://www.flexboxdefense.com/) a try and see how many levels you can complete.

In Flexbox layouts, you typically have two axes:

1. The Main Axis: This is the primary axis along which flex items are laid out. It's determined by the flex-direction property (e.g., row or column).
1. The Cross Axis: This is the perpendicular axis to the main axis.

| Property                     | Description                                                                                     | Values/Examples                             |
|----------------------------------|-------------------------------------------------------------------------------------------------|----------------------------------------------|
| `display`        | Defines the type of box an element generates, enabling Flex layout for a container.             | `display: flex;`                            |
| `flex-direction` | Sets the direction of the main axis along which flex items are placed.                          | `row`, `row-reverse`, `column`, `column-reverse`  |
| `flex-wrap`      | Controls whether flex items wrap onto new lines if they overflow the container.                 | `nowrap`, `wrap`, `wrap-reverse`            |
| `flex-flow`      | A shorthand for combining `flex-direction` and `flex-wrap` properties.                             | `flex-flow: row wrap;`                      |
| `order`          | Determines the order in which flex items appear within the container.                             | Integer values (e.g., `order: 2;`)          |
| `flex-grow`      | Specifies how much a flex item can grow relative to other items along the main axis.            | Numeric value (e.g., `flex-grow: 1;`)       |
| `flex-shrink`    | Defines how much a flex item can shrink relative to other items along the main axis.           | Numeric value (e.g., `flex-shrink: 0;`)     |
| `flex-basis`     | Establishes the initial size of a flex item along the main axis.                                   | Length value, percentage, `auto` (e.g., `flex-basis: 200px;`)  |
| `flex`           | A shorthand property for combining `flex-grow`, `flex-shrink`, and `flex-basis` into one declaration. | `flex: 1 1 auto;`                        |
| `justify-content`| Defines how flex items are distributed along the main axis within the container. More on this [here](#justify-content).                | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`  |
| `align-items`    | Specifies how flex items are aligned along the cross-axis within the container. More on this [here](#align-items)                | `flex-start`, `flex-end`, `center`, `baseline`, `stretch`  |
| `align-self`     | Applies alignment settings to individual flex items, overriding the `align-items` value for a specific item. More on this [here](#align-self) | `flex-start`, `flex-end`, `center`, `baseline`, `stretch`  |
| `align-content`  | Controls how rows of flex items are aligned along the cross-axis when there's extra space in the container (applies to multi-line flex containers). More on this [here](#align-content) | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch` |

### Justify Content 

Syntax -> `justify-content: flex-start;`. 
Defines how flex items are distributed along the main (X) axis within the container. 

|  Values  | Description                                                                                         | Example                             |
|---------------------------|-----------------------------------------------------------------------------------------------------|--------------------------------------------|
| `flex-start`              | Aligns flex items at the start of the main axis.| ![Flex Start](https://via.placeholder.com/100x50.png?text=Flex+Start)                      |
| `flex-end`                | Aligns flex items at the end of the main axis.| ![Flex End](https://via.placeholder.com/100x50.png?text=Flex+End)                          |
| `center`                  | Centers flex items along the main axis.| ![Center](https://via.placeholder.com/100x50.png?text=Center)                                |
| `space-between`           | Distributes flex items evenly along the main axis, with the first item at the start and the last item at the end, and equal spacing between the rest. | ![Space Between](https://via.placeholder.com/100x50.png?text=Space+Between)        |
| `space-around`            | Distributes flex items evenly along the main axis with equal space around them.| ![Space Around](https://via.placeholder.com/100x50.png?text=Space+Around)              |
| `space-evenly`            | Distributes flex items evenly along the main axis with equal space between and around them.| ![Space Evenly](https://via.placeholder.com/100x50.png?text=Space+Evenly)              |

### Align Items 

Syntax -> `align-items: flex-start;`.
Specifies how flex items are aligned along the (Y) cross-axis within the container. 

| Values  | Description                                                                                    | Example                             |
|------------------------|----------------------------------------------------------------------------------------------|--------------------------------------------|
| `flex-start`           | Aligns flex items at the start of the cross-axis.| ![Flex Start](https://via.placeholder.com/50x100.png?text=Flex+Start)                      |
| `flex-end`             | Aligns flex items at the end of the cross-axis.| ![Flex End](https://via.placeholder.com/50x100.png?text=Flex+End)                          |
| `center`               | Centers flex items along the cross-axis.| ![Center](https://via.placeholder.com/50x100.png?text=Center)                                |
| `baseline`             | Aligns flex items such that their baselines align.| ![Baseline](https://via.placeholder.com/50x100.png?text=Baseline)                            |
| `stretch`              | Stretches flex items to fill the container along the cross-axis.| ![Stretch](https://via.placeholder.com/50x100.png?text=Stretch)                              |

### Align Content

Syntax -> `align-content: flex-start;`.
Controls how rows of flex items are aligned along the cross-axis when there's extra space in the container (applies to multi-line flex containers). 

|  Values  | Description                                                                                     | Example                             |
|-------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------------|
| `flex-start`            | Aligns rows of flex items at the start of the cross-axis.| ![Flex Start](https://via.placeholder.com/200x100.png?text=Flex+Start)                     |
| `flex-end`              | Aligns rows of flex items at the end of the cross-axis.| ![Flex End](https://via.placeholder.com/200x100.png?text=Flex+End)                         |
| `center`                | Centers rows of flex items along the cross-axis.| ![Center](https://via.placeholder.com/200x100.png?text=Center)                               |
| `space-between`         | Distributes rows of flex items evenly along the cross-axis, with the first row at the start and the last row at the end. | ![Space Between](https://via.placeholder.com/200x100.png?text=Space+Between)   |
| `space-around`          | Distributes rows of flex items evenly along the cross-axis with equal space around them.| ![Space Around](https://via.placeholder.com/200x100.png?text=Space+Around)                 |
| `stretch`               | Stretches rows of flex items to fill the container along the cross-axis.| ![Stretch](https://via.placeholder.com/200x100.png?text=Stretch)                           |

### Align Self

Syntax -> `align-self: flex-start;`.
Applies alignment settings to individual flex items, overriding the `align-items` value for a __specific item__. 

|  Values  | Description                                                                                            | Example                             |
|-----------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------|
| `flex-start`          | Aligns the individual flex item at the start of the cross-axis.| ![Flex Start](https://via.placeholder.com/50x100.png?text=Flex+Start)                      |
| `flex-end`            | Aligns the individual flex item at the end of the cross-axis.| ![Flex End](https://via.placeholder.com/50x100.png?text=Flex+End)                          |
| `center`              | Centers the individual flex item along the cross-axis.| ![Center](https://via.placeholder.com/50x100.png?text=Center)                                |
| `baseline`            | Aligns the individual flex item such that its baseline aligns with other items' baselines.| ![Baseline](https://via.placeholder.com/50x100.png?text=Baseline)                            |
| `stretch`             | Stretches the individual flex item to fill the container along the cross-axis.| ![Stretch](https://via.placeholder.com/50x100.png?text=Stretch)                              |

## CSS Grid Reference 

#### What is Grid?

Grid is a versatile layout system in web design that enables precise control over the placement and alignment of elements within a two-dimensional grid structure. Key concepts include defining grid containers and items, specifying rows and columns, using grid lines for item positioning, controlling gaps between cells, achieving alignment both horizontally and vertically, and supporting responsive design through media queries. CSS Grid simplifies complex layouts, enhances code maintainability, and is ideal for modern web design by providing an intuitive and adaptable approach to designing web page layouts. 

>`Important Note -->` While both Flexbox and CSS Grid are valuable layout tools in CSS, Flexbox is primarily for one-dimensional layouts, think organizing things in a suitcase, and CSS Grid is designed for two-dimensional layouts and complex grid structures, visualize how to load suitcases on to a plane so that no space is wasted. The choice between them depends on the specific layout requirements of your project. Often, they can be used together to achieve more sophisticated designs.
> Looking to practice tryout [CSS Grid Garden](https://cssgridgarden.com/), or [CSS Grid Attack](https://codingfantasy.com/games/css-grid-attack)

In CSS Grid, you have two main axes:

1. The Block Axis: This is the vertical axis that runs from top to bottom by default.
1. The Inline Axis: This is the horizontal axis that runs from left to right by default.

| Property                   | Description                                           | Example                                      | Valid Values                                                                                                                            |
|----------------------------|-------------------------------------------------------|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `display: grid;`           | Defines a grid container.                             | `display: grid;`                            | `grid`, `inline-grid`                                                                                                                  |
| `grid-template-columns`    | Defines column sizes and count.                       | `grid-template-columns: 1fr 2fr;`           | Length values (e.g., `px`, `em`, `rem`, `%`), `fr`, `minmax()`, `auto`, `repeat()`                                                   |
| `grid-template-rows`       | Defines row sizes and count.                          | `grid-template-rows: 100px 200px;`         | Length values (e.g., `px`, `em`, `rem`, `%`), `fr`, `minmax()`, `auto`, `repeat()`                                                   |
| `grid-gap`                 | Sets the gap between grid columns and rows.           | `grid-gap: 10px 20px;`                     | Length values (e.g., `px`, `em`, `rem`, `%`), `initial`, `inherit`, `unset`                                                         |
| `grid-template-areas`      | Defines named grid areas.                             | See example below [here](#example-for-grid-template-areas).                          | Strings enclosed in quotes, period (`.`) to create empty grid cells                                                                      |
| `grid-template`            | Shorthand for defining columns, rows, and areas.      | `grid-template: 1fr 2fr / 100px 200px;`    | Combination of `grid-template-columns`, `grid-template-rows`, and `grid-template-areas`                                              |
| `grid-column-start`        | Specifies the starting position of a grid item.       | `grid-column-start: 2;`                    | Integer values, `span`, `auto`, `initial`, `inherit`, `unset`                                                                         |
| `grid-column-end`          | Specifies the ending position of a grid item.         | `grid-column-end: span 3;`                 | Integer values, `span`, `auto`, `initial`, `inherit`, `unset`                                                                         |
| `grid-row-start`           | Specifies the starting position of a grid item.       | `grid-row-start: 1;`                       | Integer values, `span`, `auto`, `initial`, `inherit`, `unset`                                                                         |
| `grid-row-end`             | Specifies the ending position of a grid item.         | `grid-row-end: span 2;`                    | Integer values, `span`, `auto`, `initial`, `inherit`, `unset`                                                                         |
| `grid-column`              | Shorthand for grid-column-start and grid-column-end.  | `grid-column: 2 / span 3;`                 | Combination of values valid for `grid-column-start` and `grid-column-end`                                                             |
| `grid-row`                 | Shorthand for grid-row-start and grid-row-end.        | `grid-row: 1 / span 2;`                    | Combination of values valid for `grid-row-start` and `grid-row-end`                                                                   |
| `justify-items`            | Aligns grid items horizontally within their cells.   | `justify-items: center;`                   | `start`, `end`, `center`, `stretch`, `initial`, `inherit`, `unset`                                                                   |
| `align-items`              | Aligns grid items vertically within their cells.     | `align-items: end;`                        | `start`, `end`, `center`, `stretch`, `initial`, `inherit`, `unset`                                                                   |
| `place-items`              | Shorthand for justify-items and align-items.         | `place-items: center end;`                 | Combination of values valid for `justify-items` and `align-items`                                                                   |
| `justify-content`          | Aligns grid tracks horizontally within the container. | `justify-content: space-between;`           | `start`, `end`, `center`, `stretch`, `space-between`, `space-around`, `space-evenly`, `initial`, `inherit`, `unset`                |
| `align-content`            | Aligns grid tracks vertically within the container.   | `align-content: center;`                   | `start`, `end`, `center`, `stretch`, `space-between`, `space-around`, `space-evenly`, `initial`, `inherit`, `unset`                |
| `place-content`            | Shorthand for justify-content and align-content.     | `place-content: space-evenly center;`      | Combination of values valid for `justify-content` and `align-content`                                                               |
| `grid-auto-columns`        | Specifies the size of automatically created columns.  | `grid-auto-columns: minmax(100px, auto);` | Length values (e.g., `px`, `em`, `rem`, `%`), `fr`, `minmax()`, `auto`, `initial`, `inherit`, `unset`                               |
| `grid-auto-rows`           | Specifies the size of automatically created rows.     | `grid-auto-rows: 200px;`                  | Length values (e.g., `px`, `em`, `rem`, `%`), `fr`, `minmax()`, `auto`, `initial`, `inherit`, `unset`                               |
| `grid-auto-flow`           | Controls how auto-placed items are added to the grid. | `grid-auto-flow: dense;`                  | `row`, `column`, `dense`, `initial`, `inherit`, `unset`                                                                              |
| `grid`                     | Shorthand for defining both the grid container and its properties in one declaration. | `grid: auto / repeat(3, 1fr);` | Combination of values valid for `grid-template-rows`, `grid-template-columns`, and `grid-template-areas` |

### Grid Template Area

|  Value  | Description                                                                                                                                                                                    | Example                                                                                           |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| User-defined grid areas      | Defines the layout of grid items by specifying the arrangement of grid areas using a combination of named areas. Each area is represented by a name, and you can arrange items within those areas. | [Grid Template Areas](#example-for-grid-template-areas)                |
| `none`                        | No explicit grid template areas are defined, allowing the grid items to be placed based on other layout properties.                                                                          | ![None](https://via.placeholder.com/200x150.png?text=None)                                              |
| `inherit`                     | Inherits the `grid-template-areas` property from the parent element.                                                                                                                           | ![Inherit](https://via.placeholder.com/200x150.png?text=Inherit)                                        |
| `initial`                     | Sets the `grid-template-areas` property to its default value.                                                                                                                                   | ![Initial](https://via.placeholder.com/200x150.png?text=Initial)                                        |

### Grid Auto Flow

Syntax -> `grid-auto-flow: row dense;`
Controls how auto-placed items are added to the grid.

|  Value  | Description                                                                                                                                                            | Example                                                                                     |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `row`                   | Grid items are placed in rows, filling each row before moving to the next.                                                                                             | ![Row](https://via.placeholder.com/150x100.png?text=Row)                                       |
| `column`                | Grid items are placed in columns, filling each column before moving to the next.                                                                                        | ![Column](https://via.placeholder.com/100x150.png?text=Column)                                 |
| `row dense`             | Grid items are placed in rows, filling each row before moving to the next, and trying to fill gaps in previous rows.                                                   | ![Row Dense](https://via.placeholder.com/150x100.png?text=Row+Dense)                          |
| `column dense`          | Grid items are placed in columns, filling each column before moving to the next, and trying to fill gaps in previous columns.                                              | ![Column Dense](https://via.placeholder.com/100x150.png?text=Column+Dense)                    |
| `inherit`               | Inherits the `grid-auto-flow` property from the parent element.                                                                                                           | ![Inherit](https://via.placeholder.com/100x100.png?text=Inherit)                              |
| `initial`               | Sets the `grid-auto-flow` property to its default value.                                                                                                                  | ![Initial](https://via.placeholder.com/100x100.png?text=Initial)                              |

### Justify Content

Syntax -> `justify-content: space-evenly;`
Aligns grid tracks horizontally within the container.

|  Value  | Description                                                                                           | Example                                |
|---------------------------|-------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| `start`                   | Aligns grid items at the start of the grid container's inline axis.                                  | ![Start](https://via.placeholder.com/100x50.png?text=Start)                             |
| `end`                     | Aligns grid items at the end of the grid container's inline axis.                                    | ![End](https://via.placeholder.com/100x50.png?text=End)                                 |
| `center`                  | Centers grid items along the grid container's inline axis.                                           | ![Center](https://via.placeholder.com/100x50.png?text=Center)                           |
| `space-between`           | Distributes grid items evenly along the grid container's inline axis, with the first item at the start and the last item at the end. | ![Space Between](https://via.placeholder.com/100x50.png?text=Space+Between)   |
| `space-around`            | Distributes grid items evenly along the grid container's inline axis with equal space around them.   | ![Space Around](https://via.placeholder.com/100x50.png?text=Space+Around)         |
| `space-evenly`            | Distributes grid items evenly along the grid container's inline axis with equal space between and around them. | ![Space Evenly](https://via.placeholder.com/100x50.png?text=Space+Evenly)   |
| `stretch`                 | Stretches grid items to fill the grid container's inline axis.                                        | ![Stretch](https://via.placeholder.com/100x50.png?text=Stretch)                         |
### Align Items

Syntax -> `align-items: start;`
Aligns grid items vertically (Y axis) within their cells.

|  Value  | Description                                                                                                                                                 | Example                                                                                           |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `start`                | Aligns grid items at the start of the grid container's block axis.                                                                                           | ![Start](https://via.placeholder.com/100x150.png?text=Start)                                       |
| `end`                  | Aligns grid items at the end of the grid container's block axis.                                                                                               | ![End](https://via.placeholder.com/100x150.png?text=End)                                           |
| `center`               | Centers grid items along the grid container's block axis.                                                                                                      | ![Center](https://via.placeholder.com/100x150.png?text=Center)                                     |
| `stretch`              | Stretches grid items to fill the grid container's block axis.                                                                                                   | ![Stretch](https://via.placeholder.com/100x150.png?text=Stretch)                                   |
| `baseline`             | Aligns grid items such that their baselines align.                                                                                                              | ![Baseline](https://via.placeholder.com/100x150.png?text=Baseline)                                 |
| `inherit`              | Inherits the `align-items` property from the parent element.                                                                                                    | ![Inherit](https://via.placeholder.com/100x150.png?text=Inherit)                                  |
| `initial`              | Sets the `align-items` property to its default value.                                                                                                           | ![Initial](https://via.placeholder.com/100x150.png?text=Initial)                                  |

### Align Content

Syntax -> `align-content: start;`
Aligns grid tracks vertically within the container. 

|  Value  | Description                                                                                                                                                | Example                                                                                          |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| `start`                | Aligns rows of grid items at the start of the grid container's block axis.                                                                                  | ![Start](https://via.placeholder.com/200x200.png?text=Start)                                    |
| `end`                  | Aligns rows of grid items at the end of the grid container's block axis.                                                                                      | ![End](https://via.placeholder.com/200x200.png?text=End)                                        |
| `center`               | Centers rows of grid items along the grid container's block axis.                                                                                             | ![Center](https://via.placeholder.com/200x200.png?text=Center)                                  |
| `space-between`        | Distributes rows of grid items evenly along the grid container's block axis, with the first row at the start and the last row at the end.                   | ![Space Between](https://via.placeholder.com/200x200.png?text=Space+Between)            |
| `space-around`         | Distributes rows of grid items evenly along the grid container's block axis with equal space around them.                                                   | ![Space Around](https://via.placeholder.com/200x200.png?text=Space+Around)              |
| `stretch`              | Stretches rows of grid items to fill the grid container's block axis.                                                                                         | ![Stretch](https://via.placeholder.com/200x200.png?text=Stretch)                                |
| `inherit`              | Inherits the `align-content` property from the parent element.                                                                                                   | ![Inherit](https://via.placeholder.com/200x200.png?text=Inherit)                                |
| `initial`              | Sets the `align-content` property to its default value.                                                                                                        | ![Initial](https://via.placeholder.com/200x200.png?text=Initial)                                |

#### Example for `grid-template-areas`:
```html
<!-- EXAMPLE HTML -->
<div class="container">
  <header>Header</header>
  <main>Main content</main>
  <nav>Nav</nav>
  <footer>Footer</footer>
</div>
```
```css
/* EXAMPLE CSS */
.container {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    grid-template-rows: 100px 200px 300px;
    grid-gap: 10px;
    grid-template-areas:
        "header header header"
        "nav main main"
        "nav footer footer";
}

header {
    grid-area: header;
}

main {
    grid-area: main;
}

nav {
    grid-area: nav;
}

footer {
    grid-area: footer;
}
```


## More Resources

- [MDN Documentation on CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
