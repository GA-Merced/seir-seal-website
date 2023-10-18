---
title: CSS Layouts
description: A reference page for CSS Layouts
---

# Floats

CSS floats are a layout property in Cascading Style Sheets (CSS) that allow elements to be taken out of the normal document flow and positioned to the left or right of their containing parent element. Floats were originally designed for text wrapping around images, but they have since found various use cases in web design. In this section, we'll explore CSS floats and their typical use cases.

## Understanding CSS Floats

### Float Property Values

The float property in CSS can take one of the following values:

- left: The element is floated to the left side of its containing parent, and content flows around it on the right side.
- right: The element is floated to the right side of its containing parent, and content flows around it on the left side.
- none (default): The element does not float, and content is not affected by it.
- inherit: The element inherits the float value from its parent element.

## Typical Use Cases for CSS Floats

### 1. Creating Multicolumn Layouts
Floats can be used to create multicolumn layouts in web design. By floating multiple elements side by side, you can achieve a columnar structure. This was a common approach before the introduction of more modern layout techniques like Flexbox and CSS Grid.

```css
.column {
  float: left;
  width: 33.33%; /* Create a three-column layout */
}
```

### 2. Text Wrapping Around Images
The original and perhaps most well-known use case for CSS floats is to allow text to wrap around images or other inline elements. This creates visually appealing content layouts where text flows smoothly around images.

```html
<img src="image.jpg" alt="An example image" style="float: left; margin-right: 10px;" />
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
```

### 3. Creating Navigation Menus
Floats are often used to create horizontal navigation menus, where list items (e.g., `<li>`) are floated to appear side by side.

```css
/* CSS for horizontal navigation menu */
.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
}

.navbar li {
  float: left;
  margin-right: 20px;
  color: white;
}
```

### 4. Equal Height Columns
Floats can be used to create equal-height columns when it's essential to ensure that multiple columns match in height. Although there are more modern approaches like Flexbox and CSS Grid for this purpose, floats can still be used in specific situations.

```css
/* Equal-height columns using floats */
.column {
  float: left;
  width: 33.33%;
}
```

### 5. Creating Complex Text Flow
In certain layouts, designers may use floats to create complex text flows. For example, you might float a block of text to the right within a larger text block to create a visually distinct section.

```css
/* CSS for complex text flow */
.text-block {
  float: right;
  width: 50%;
}
```

## Caution and Considerations
While CSS floats have their uses, they also come with some challenges and considerations:

- Clearing Floats: Elements following floated elements might not behave as expected unless you clear the float using the clear property or a clearfix technique to prevent unwanted overlaps.

- Layout Fragility: Float-based layouts can become fragile and challenging to maintain as they may not adapt well to responsive design without additional CSS rules.

- Alternative Layout Techniques: For modern web design, consider using Flexbox and CSS Grid, which offer more powerful and flexible ways to create layouts.

In summary, CSS floats are a versatile tool for achieving specific layout effects in web design. However, they should be used judiciously, and developers should be aware of alternative layout techniques available in CSS for building responsive and maintainable designs.

# Position

The position property in CSS is a powerful tool that allows you to precisely control the placement of elements within a web page. Understanding how and when to use it is essential for creating complex layouts and interactive user interfaces. In this section, we'll explore the position property and its various values, as well as provide guidance on how and when to use it effectively.

## Understanding the position Property
The position property defines how an element is positioned within its containing parent element or the viewport. It accepts several values, each with its own behavior:

- static (default): Elements with `position: static` are positioned according to the normal flow of the document. This is the default behavior, and it's not affected by the top, right, bottom, or left properties.

- relative: Elements with `position: relative` are positioned relative to their normal position in the document flow. You can use top, right, bottom, and left properties to offset them from their original position.

- absolute: Elements with `position: absolute` are positioned relative to their nearest positioned ancestor. If no ancestor is positioned, they are positioned relative to the initial containing block (usually the viewport). You can use top, right, bottom, and left properties to specify their exact position.

- fixed: Elements with `position: fixed` are positioned relative to the viewport, so they remain in the same place even when the page is scrolled. Like absolute, you can use top, right, bottom, and left properties to control their placement.

- sticky: Elements with `position: sticky` are positioned based on the user's scroll position. They behave like relative until they reach a specified scroll position (defined by `top`, `right`, `bottom`, or `left`), at which point they become fixed.

## When to Use the position Property

### 1. Creating Overlays and Modals

The `position: fixed` value is commonly used to create overlays, modals, and pop-up windows that remain fixed in place as users scroll through a web page. By setting position: fixed and specifying the top, right, bottom, and left properties, you can precisely control the placement of these elements.

```css
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 2. Sticky Navigation Bars
The `position: sticky` value is perfect for creating sticky navigation bars that remain visible as users scroll down a page. This behavior is achieved by setting `position: sticky` and specifying the top value.

```css
.navbar {
  position: sticky;
  top: 0;
  background-color: #333;
}
```

### 3. Tooltip and Dropdown Menus
For creating tooltips and dropdown menus that appear when users interact with certain elements, such as buttons or links, you can use position: absolute to position these elements relative to their parent or trigger element.

```css
.tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
}
```

### 4. Custom Layouts
The position property is often used in custom layouts where you need to precisely control the placement of elements. For example, creating complex grid systems or unique design elements may require the use of `position: absolute` or `position: relative` to fine-tune the layout.

```css
.grid-item {
  position: absolute;
  top: 0;
  left: 0;
  /* Other styling properties for grid items */
}
```

### 5. Animated Elements
When creating animations or transitions, changing an element's position property can be useful. For instance, animating an element from its static position to an absolute position can create interesting effects.

```css
.animated-element {
  position: absolute;
  top: 0;
  left: 0;
  transition: top 0.5s, left 0.5s;
}

.animated-element:hover {
  top: 50px;
  left: 50px;
}
```

## Caution and Considerations
While the position property is a valuable tool, it should be used judiciously. Overusing absolute or fixed positioning can lead to layout issues and make your code harder to maintain. Always consider more modern layout techniques like Flexbox and CSS Grid for simpler layout tasks. Additionally, when using `position: fixed` or `position: sticky`, be mindful of how these elements may affect the overall user experience, especially on small screens.

In summary, the position property in CSS is a versatile tool for precisely controlling the placement of elements within your web page. Understanding when and how to use it can help you create complex layouts, interactive components, and engaging user interfaces. However, it should be used in conjunction with other layout techniques and with a focus on responsive design principles for the best results.

# Understanding CSS Flexbox Layout
CSS Flexbox, or the Flexible Box Layout, is a powerful layout model that simplifies the design of complex web page layouts. It provides an efficient way to distribute space and align items within a container, making it especially valuable for building responsive designs. Let's dive into the fundamentals of Flexbox, using ASCII diagrams to illustrate key concepts.

# Basics of Flexbox
Flexbox operates within a container and involves two main components: the container (or parent) and the items (or children). Here's a simple ASCII representation:

```bash
Container [  Item1  ][  Item2  ][  Item3  ]
```

In this example, the container holds three items. By default, Flexbox aligns these items horizontally, distributing available space equally.

## Main Axis and Cross Axis
Flexbox introduces two primary axes:

Main Axis: The main axis is the primary axis along which items are laid out. By default, it's horizontal, but you can change it to vertical.

Cross Axis: The cross axis is perpendicular to the main axis. If the main axis is horizontal, the cross axis is vertical (and vice versa).
You can switch the main axis's direction using the flex-direction property. Here's an example:

```bash
Container (Main Axis: Vertical)
[  Item1  ]
[  Item2  ]
[  Item3  ]
```

## Container Properties in CSS Flexbox
In CSS Flexbox, container properties play a crucial role in defining the layout and behavior of flex items within a container. These properties enable you to control how items are arranged along the main and cross axes. Let's explore some essential container properties using CSS snippets and ASCII diagrams for better visualization.

### 1. display: flex;
The fundamental property to activate Flexbox behavior in a container is display: flex;. It tells the browser to treat the container as a flex container, allowing you to arrange its child elements as flex items.

```css
.container {
  display: flex;
}
```

Diagram:

```css
[ Flex Container ]
[   Flex Item   ]
[   Flex Item   ]
```

By applying display: flex; to the container, you create a flex container with default horizontal alignment of items along the main axis.

### 2. flex-direction
The flex-direction property defines the direction of the main axis within the flex container. It influences the arrangement of flex items.

row (default): Items are placed along the main axis horizontally.

row-reverse: Items are placed horizontally in reverse order.

column: Items are placed along the main axis vertically.

column-reverse: Items are placed vertically in reverse order.

```css
.container {
  display: flex;
  flex-direction: column;
}
```

Diagram:

```css
[ Flex Container ]
[   Flex Item   ]
[   Flex Item   ]
```

Changing the flex-direction to column creates a vertical layout, where items are stacked from top to bottom along the main axis.

### 3. flex-wrap
The flex-wrap property controls whether flex items should wrap onto a new line if there isn't enough space along the main axis.

nowrap (default): Items are not allowed to wrap; they shrink to fit.

wrap: Items wrap onto the next line when there's insufficient space.

wrap-reverse: Items wrap onto the previous line when there's insufficient space.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

Diagram:

```css
[ Flex Container ]
[   Flex Item   ][   Flex Item   ]
[   Flex Item   ]
```

Using flex-wrap: wrap; allows items to wrap to the next line if the container's width is limited.

### 4. justify-content
The justify-content property determines how flex items are distributed along the main axis within the container.

flex-start (default): Items are packed at the start of the main axis.

flex-end: Items are packed at the end of the main axis.

center: Items are centered along the main axis.

space-between: Items are evenly distributed with the first item at the start and the last item at the end.

space-around: Items are evenly distributed with equal space around them.

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Diagram:

```css
[ Flex Container ]
[   Flex Item   ][   Flex Item   ][   Flex Item   ]
```

With justify-content: space-between;, items are evenly spaced, with the first item at the start and the last item at the end of the main axis.

### 5. align-items and align-content
These properties control the alignment of flex items along the cross axis, which is perpendicular to the main axis.

align-items adjusts alignment for individual items.

align-content adjusts alignment for all items collectively if they wrap onto multiple lines.

```css
.container {
  display: flex;
  align-items: center;
}
```

Diagram:

```css
[ Flex Container ]
[   Flex Item   ]
[   Flex Item   ]
```

Using align-items: center; vertically centers the items within the container along the cross axis.

These container properties give you fine-grained control over the layout of flex containers and their child items. By understanding and utilizing these properties, you can create flexible and responsive web layouts with ease.

## Understanding the Values for Justify Content, align-content and align-items

justify-content: flex-start;

```css
.container {
  display: flex;
  justify-content: flex-start;
}
```

Items are packed at the start of the main axis:

```css
[ Flex Container ]
[  Flex Item  ][  Flex Item  ][  Flex Item  ]
```

justify-content: flex-end;

```css
.container {
  display: flex;
  justify-content: flex-end;
}
```

Items are packed at the end of the main axis:

```css
[ Flex Container ]
[  Flex Item  ][  Flex Item  ][  Flex Item  ]
```

justify-content: center;

```css
.container {
  display: flex;
  justify-content: center;
}
```

Items are centered along the main axis:

```css
[ Flex Container ]
[       Flex Item       ][       Flex Item       ][       Flex Item       ]
```

justify-content: space-between;

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Items are evenly distributed with the first item at the start and the last item at the end of the main axis:

```css
[ Flex Container ]
[  Flex Item  ][                 Flex Item                ][  Flex Item  ]
```

justify-content: space-around;

```css
.container {
  display: flex;
  justify-content: space-around;
}
```

Items are evenly distributed with equal space around them along the main axis:

```css
[ Flex Container ]
[       Flex Item       ][       Flex Item       ][       Flex Item       ]
```

These visual representations illustrate how different justify-content values affect the positioning of flex items within a flex container along the main axis. Each value provides a unique layout option for your web design needs.

## Flex Item Properties

In a flex layout, each child element within a flex container is referred to as a "flex item." Flex items can have various properties and attributes that control their behavior within the container. Let's explore some of the most commonly used flex item properties:

**flex-grow:** This property specifies how much a flex item can grow relative to other flex items when there is extra space in the container. It accepts a numeric value, which determines the proportion of available space the item should occupy.

```css
.flex-item {
  flex-grow: 1; /* Default value */
}
```
A flex-grow value of 0 means the item won't grow.

A flex-grow value of 1 means the item will take up its share of available space.

**flex-shrink:** Similar to flex-grow, this property defines how much a flex item can shrink relative to others when there is not enough space in the container. It also accepts numeric values.

```css
.flex-item {
  flex-shrink: 1; /* Default value */
}
```

A flex-shrink value of 0 means the item won't shrink.

A flex-shrink value of 1 means the item can shrink proportionally.

**flex-basis:** This property sets the initial size of a flex item before it starts growing or shrinking. You can specify it in pixels, percentages, or other length units.

```css
.flex-item {
  flex-basis: auto; /* Default value */
}
```

auto means the initial size is determined by the item's content.

**flex:** The flex property is a shorthand for flex-grow, flex-shrink, and flex-basis. It allows you to set all three properties in one declaration.

```css
.flex-item {
  flex: 1 1 auto; /* Equivalent to flex-grow: 1, flex-shrink: 1, flex-basis: auto */
}
```

**order:** The order property controls the order in which flex items appear within the container. It accepts numeric values, and items are arranged in ascending order of their order values.

```css
.flex-item {
  order: 0; /* Default value */
}
```

Lower order values push items earlier in the display order.

**align-self:** This property allows you to override the alignment specified by the container's align-items property for an individual flex item.

```css
.flex-item {
  align-self: auto; /* Default value */
}
```

Values like flex-start, flex-end, center, and baseline can be used to align items along the cross-axis within the container.

These flex item properties give you fine-grained control over the sizing, growth, and order of individual items within a flex container. They enable you to create flexible and responsive layouts efficiently.

# Grid

CSS Grid is a powerful layout system that allows you to create two-dimensional grid-based layouts for web pages. It provides precise control over both rows and columns, making it an ideal choice for creating complex and responsive layouts.

## Defining the Grid Container
To start using CSS Grid, you need to define a grid container. This is typically done by selecting an HTML element (like a `<div>`) and setting its display property to grid:

```css
.grid-container {
  display: grid;
}
```

## Creating Rows and Columns
Grid layouts consist of rows and columns. You can specify the number and size of rows and columns using properties like grid-template-rows and grid-template-columns:

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px; /* Two rows with specific heights */
  grid-template-columns: 1fr 2fr;  /* Two columns with a 1:2 width ratio */
}
```

In the example above, we have a grid container with two rows and two columns.

## Placing Grid Items
Once you've defined the grid, you can place grid items (content elements) within it. You can do this using properties like grid-row and grid-column or by using shorthand grid-area. Additionally, you can use grid-row-start, grid-row-end, grid-column-start, and grid-column-end to specify the start and end positions of grid items.

```css
.grid-item {
  grid-row: 1 / 3; /* Item spans from row 1 to row 3 */
  grid-column: 2 / 3; /* Item spans from column 2 to column 3 */
}
```

### CSS Grid ASCII Diagram
Here's an ASCII diagram representing a simple grid layout:

```bash
+---+---+
| A | B |
+---+---+
| C | D |
+---+---+
```

In this diagram:

- A, B, C, and D are grid items.
- The grid has two rows and two columns.
- Grid item A spans from row 1 to row 2 and from column 1 to column 2.
- Grid item B spans from row 1 to row 2 and from column 2 to column 3.
- Grid item C spans from row 2 to row 3 and from column 1 to column 2.
- Grid item D spans from row 2 to row 3 and from column 2 to column 3.

## Grid Gap
CSS Grid also allows you to specify the gap (space) between rows and columns using the grid-row-gap and grid-column-gap properties:

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 1fr 2fr;
  grid-row-gap: 10px; /* Gap between rows */
  grid-column-gap: 20px; /* Gap between columns */
}
```

This creates visual separation between grid items, making your layout more readable and aesthetically pleasing.

## Responsive Grids
One of the advantages of CSS Grid is its responsiveness. Grids can adapt to different screen sizes and orientations, making it easier to create layouts that work well on various devices.

By mastering these basic concepts, you can start creating complex and flexible layouts with CSS Grid. It's a valuable tool for web designers and developers seeking precise control over their page layouts.

## Using grid-template-areas

### Defining Layout with Named Areas:

grid-template-areas allows you to define the layout of your grid by naming areas where grid items will be placed.

You create a visual map of your grid layout, assigning names to specific areas. Grid items are placed within these named areas.

### Layout Visualization:

It provides a clear and visual representation of your grid layout directly in your CSS code.
This can be helpful for designers and developers to quickly understand and modify the layout.

### Flexible Placement:

You can easily move grid items between named areas by changing their placement in the CSS code.

This flexibility is useful for creating responsive designs where grid items rearrange themselves based on screen size.

Example:

```css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.grid-item-header {
  grid-area: header;
}

.grid-item-sidebar {
  grid-area: sidebar;
}

.grid-item-main {
  grid-area: main;
}

.grid-item-footer {
  grid-area: footer;
}
```

In the above example, we've defined named areas for the header, sidebar, main content, and footer of the grid.

## Using grid-template-rows and grid-template-columns
### Explicit Row and Column Sizing:

grid-template-rows and grid-template-columns allow you to specify the size of rows and columns explicitly using length values (e.g., pixels, percentages) or flexible units (e.g., fr units).

You have precise control over the size of each row and column.

Numerical Grid Definition:

This approach defines the grid structure numerically, specifying the number of rows and columns and their sizes.

It doesn't provide a visual representation of the grid layout in the CSS code.
Example:

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 1fr 2fr; /* Three rows with specific heights */
  grid-template-columns: 1fr 2fr; /* Two columns with a 1:2 width ratio */
}
```

In this example, we've defined the grid with three rows of different heights and two columns with a specific width ratio.

### Key Considerations:
Combining Both Approaches: It's worth noting that you can use both methods together in a CSS Grid layout. You can define the grid structure using grid-template-rows and grid-template-columns while also assigning grid items to named areas using grid-area.

### Use Case:

Use grid-template-areas when you want a clear visual representation of your grid layout and need flexibility in item placement.

Use grid-template-rows and grid-template-columns when you require precise control over row and column sizing or when you have a straightforward grid structure.

In summary, the choice between grid-template-areas and grid-template-rows/grid-template-columns depends on your design needs and whether you prefer a visual or numerical representation of your grid layout. Both approaches have their advantages and can be used effectively in CSS Grid layouts.