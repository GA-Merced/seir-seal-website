---
title: Native Web Components
description: A Guide to Native Web Components
---

# What Are Web Components?

Web Components are a suite of web platform APIs and specifications that enable web developers to create custom HTML elements. These elements are encapsulated, reusable, and self-contained, making them ideal for building modular and maintainable web applications. Web Components consist of three core technologies:

**Custom Elements:** The Custom Elements API empowers developers to define and register their own custom HTML elements. These custom elements can have unique behaviors, properties, and methods, just like built-in HTML elements (e.g., `<div>` or `<input>`). Custom Elements bring reusability to a whole new level, allowing developers to create their own tags with specific functionality.

**Shadow DOM:** Shadow DOM provides a mechanism for encapsulating the structure and styles of a web component. With Shadow DOM, you can create a hidden DOM subtree that's isolated from the rest of the document. This isolation ensures that the component's styles don't leak or clash with the surrounding page, avoiding unintended conflicts and enhancing modularity.

**HTML Templates:** HTML Templates allow developers to declare fragments of markup that can be cloned and inserted into the DOM when needed. Templates are inert by default, meaning they are not rendered until explicitly activated. This feature is valuable for creating reusable pieces of content that can be instantiated multiple times within a component or across different parts of an application.

## Benefits of Web Components

Using Web Components provides several advantages:

**Reusability:** Web Components are designed for reusability. Developers can create custom elements tailored to specific functionalities, making it easy to use them in different projects. This promotes code sharing and reduces redundancy.

**Isolation:** The Shadow DOM ensures that the styles and structure of a web component remain isolated from the global scope. This isolation prevents style collisions and makes it easier to reason about a component's behavior.

**Maintainability:** By encapsulating functionality within individual components, Web Components promote a modular and maintainable codebase. Changes to one component are less likely to impact others, simplifying debugging and updates.

**Browser Compatibility:** Major modern browsers support Web Components natively. This native support minimizes cross-browser compatibility issues and provides a consistent development experience across platforms.

# Creating the Structure

To create a Native Web Component, you'll begin by defining its HTML structure using standard HTML tags and templates. This structure represents the component's visual appearance and how it should behave in your web application. Let's create a simple "todo-list" component as an example:

```html
<!-- todo-list.html -->
<template id="todo-list-template">
  <style>
    /* Define component-specific styles */
    .todo-list {
      font-family: Arial, sans-serif;
      border: 1px solid #ccc;
      padding: 10px;
    }
    /* Style for individual todo items */
    .todo-item {
      margin-bottom: 5px;
    }
  </style>
  <div class="todo-list">
    <h2>Todo List</h2>
    <ul id="todo-items"></ul>
  </div>
</template>
```

In this example, we've created an HTML template for our todo-list component, which includes some basic styling.

## Defining the Custom Element

Next, you'll define the custom element in JavaScript using the customElements.define method. This method associates your custom element with its class constructor and specifies the tag name you want to use for your component. Let's create the JavaScript code for our todo-list component:

```js
// todo-list.js
class TodoList extends HTMLElement {
  constructor() {
    super();
    // Attach a Shadow DOM to the custom element
    this.attachShadow({ mode: 'open' });
    // Clone the template and append it to the Shadow DOM
    const template = document.getElementById('todo-list-template');
    const instance = template.content.cloneNode(true);
    this.shadowRoot.appendChild(instance);
  }
}

// Define the custom element with the tag name 'todo-list'
customElements.define('todo-list', TodoList);
```

In this JavaScript code, we've defined the TodoList class as an extension of HTMLElement. Inside the constructor, we attach a Shadow DOM to our custom element and clone the template defined earlier, which contains the HTML structure for our component. We then append this template to the Shadow DOM.

Finally, we use customElements.define to associate our custom element with the tag name 'todo-list'.

## Shadow DOM

Shadow DOM is used to encapsulate the styles and structure of your component. In our example, we've already utilized Shadow DOM when attaching it to the custom element:

```js
this.attachShadow({ mode: 'open' });
```

The `{ mode: 'open' }` option allows you to access and style the Shadow DOM from outside the component. If you use `{ mode: 'closed' }`, the Shadow DOM becomes completely isolated, and you won't be able to style or access its internals from the outside.

With these steps, you've created the structure for your Native Web Component, defined the custom element, and encapsulated its styles and structure using Shadow DOM. You can now use this custom element in your HTML documents like any other HTML tag:

```html
<!-- Using the todo-list custom element -->
<todo-list></todo-list>
```

The custom element will render the encapsulated content and styles, making it a self-contained and reusable component in your web applications.

# Using Native Web Components

Once you've created a Native Web Component, you can use it in your HTML documents like any other HTML tag. Here's how you can include, interact with, style, and handle events for Native Web Components:

## Including the Component in HTML

To include a Native Web Component in your HTML file, simply use the custom element tag you defined earlier. For example, if you defined a custom element called <my-component>, you can use it in your HTML like this:

```html
<my-component></my-component>
```

This tag represents an instance of your custom component and will render its content and behavior.

## Interacting with the Component

You can interact with the Native Web Component by setting attributes, properties, and handling events.

### Passing Data via Attributes:

You can pass data to your component by setting attributes on the custom element tag. For example:

```html
<my-component name="John" age="30"></my-component>
```

Inside your component, you can access these attributes using JavaScript:

```js
const name = this.getAttribute('name');
const age = this.getAttribute('age');
```

### Using Properties:

Properties are another way to interact with components, especially for complex data binding. You can define properties within your component's class and update them programmatically. For example:

```js
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.myProperty = 'Hello';
  }

  connectedCallback() {
    this.myProperty = 'World';
  }
}
```

## Styling Native Web Components

You can style your Native Web Component using CSS. Since components encapsulate their styles using Shadow DOM, you can target their internal styles in various ways.

### Using ::shadow Pseudo-element:

You can target the Shadow DOM of your component using the ::shadow pseudo-element. For example:

```css
my-component::shadow h1 {
  color: blue;
}
```

This CSS rule will apply to `<h1>` elements within the Shadow DOM of your my-component.

### Using ::part Pseudo-element:

You can also use the ::part pseudo-element to style specific parts of the component. Inside your component, you can define parts using the part attribute:

```html
<div part="header">Header Content</div>
<div part="content">Main Content</div>
```

Then, in your external CSS, you can style those parts:

```css
my-component::part(header) {
  background-color: lightgray;
}
```

## Event Handling

To handle events generated by the component, you can add event listeners to the component's HTML element. This allows you to respond to user interactions and trigger actions within your application.

### Adding Event Listeners:

Inside your component's JavaScript code, you can dispatch custom events using the CustomEvent constructor:

```js
// Dispatching a custom event
const customEvent = new CustomEvent('my-event', {
  detail: { data: 'Some data' },
});
this.dispatchEvent(customEvent);
```

Then, in your HTML document, you can listen for and handle these events:

```js
const myComponent = document.querySelector('my-component');
myComponent.addEventListener('my-event', (event) => {
  console.log(event.detail.data); // Output: "Some data"
});
```

By using these techniques, you can include, interact with, style, and handle events for Native Web Components in your web applications, creating reusable and encapsulated UI components.

# Best Practices for Native Web Components

When developing Native Web Components, it's essential to follow best practices to ensure accessibility, compatibility, and long-term maintainability. Here are some best practices with code snippets:

## Accessibility

Use Semantic HTML: Utilize semantic HTML elements within your components. For example, if your component represents a button, use the `<button>` element:
```html
<my-button>Click Me</my-button>
```
Provide ARIA Attributes: Implement appropriate ARIA attributes to enhance accessibility for users with disabilities. For example, if your component has a tooltip, use aria-label:
```html
<my-tooltip aria-label="Helpful information">...</my-tooltip>
```
## Compatibility

Polyfill for Older Browsers: While modern browsers support Web Components, older browsers may not. Ensure compatibility by including polyfills. For example, using the Web Components polyfill:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.4.2/webcomponents-bundle.js"></script>
```
## Maintenance and Versioning

Versioning Your Components: Implement versioning for your components, just like any other software project. You can define a version attribute within your component's script:
```js
class MyComponent extends HTMLElement {
  static get version() {
    return '1.0.0';
  }
  // ...
}
```
Use Package Managers: Manage your Native Web Components with package managers like npm or Yarn. This allows you to easily distribute and update your components. Initialize a package.json file in your component project:

```bash
npm init
```

Version Control: Use version control systems like Git to track changes and collaborate with others. Initialize a Git repository for your component project:
```bash
git init
```

# Advanced Topics in Native Web Components

As you delve deeper into Native Web Component development, you can explore advanced topics to enhance the versatility and functionality of your components. Here are some advanced concepts with code snippets:

## Properties and Attributes

Distinguishing Properties and Attributes:

Understand the difference between properties (JavaScript variables) and attributes (serialized data) in your component. For example, when defining a property value, ensure it corresponds to an attribute with the same name:

```js
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.value = ''; // Property
  }

  static get observedAttributes() {
    return ['value']; // Attribute
  }
  
  // ...
}
```

Properties are used for programmatic interaction, while attributes are used for HTML and JavaScript attribute access.

## Slots

Creating Slots:

Implement slots to create flexible components that can accept and display content provided by the parent element. Use the <slot> element in your component's shadow DOM to define where content should be inserted:

```html
<template id="my-component-template">
  <style>
    /* Component styles */
  </style>
  <div>
    <!-- Component structure -->
    <slot></slot> <!-- Content insertion point -->
  </div>
</template>
```
In this example, any content placed inside `<my-component></my-component>` will be inserted into the `<slot>` element.

## Lifecycle Callbacks

Exploring Lifecycle Callbacks:

Native Web Components have various lifecycle callbacks that you can leverage to manage component behavior:

**connectedCallback:** Triggered when the component is inserted into the DOM. Perform initialization tasks here.

**disconnectedCallback:** Fired when the component is removed from the DOM. Clean up any resources or event listeners.

**attributeChangedCallback(attrName, oldValue, newValue):** React to changes in observed attributes. Useful for updating component state based on attribute changes.

**adoptedCallback(oldDocument, newDocument):** Called when a component is moved to a new document. Handle any necessary adjustments.

Example:

```js
class MyComponent extends HTMLElement {
  // ...

  connectedCallback() {
    // Initialize the component
  }

  disconnectedCallback() {
    // Clean up resources
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    // React to attribute changes
  }

  adoptedCallback(oldDocument, newDocument) {
    // Handle document changes
  }
}
```

By mastering these advanced topics, you can create Native Web Components that are not only reusable but also highly customizable and capable of responding to various lifecycle events. This knowledge empowers you to build powerful, encapsulated UI elements for your web projects.

# Styling Native Web Components

Styling web components is a crucial aspect of creating visually appealing and cohesive UI elements. Native Web Components provide various options for styling, including Shadow DOM encapsulation and CSS custom properties. Here's a guide on how to style web components using code snippets:

## 1. Shadow DOM Styling

One of the key features of Native Web Components is Shadow DOM, which provides style encapsulation, preventing external styles from affecting your component's internals. Here's how you can apply styles within the Shadow DOM:

```html
<!-- my-component.html -->
<template id="my-component-template">
  <style>
    /* Component-specific styles */
    :host {
      display: block; /* Make the component a block-level element */
    }

    /* Apply styles to elements within the Shadow DOM */
    .inner-element {
      color: blue;
    }
  </style>
  <div class="inner-element">
    <!-- Component structure -->
  </div>
</template>
```

In this example, the :host selector targets the outermost element of the component, allowing you to define global styles for the component. The .inner-element selector targets elements within the Shadow DOM.

## 2. CSS Custom Properties (Variables)

CSS custom properties (also known as CSS variables) provide a way to create dynamic and themeable web components. You can define custom properties in your component's styles and change their values dynamically:

```html
<!-- my-component.html -->
<template id="my-component-template">
  <style>
    /* Define custom properties */
    :host {
      --text-color: blue; /* Custom property for text color */
    }

    /* Use custom properties in styles */
    .inner-element {
      color: var(--text-color);
    }
  </style>
  <div class="inner-element">
    <!-- Component structure -->
  </div>
</template>
```

You can then change the value of --text-color dynamically using JavaScript:

```js
// my-component.js
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = document.getElementById('my-component-template').content;
  }

  // Dynamically update custom property value
  setTextColor(color) {
    this.style.setProperty('--text-color', color);
  }
}
```

## 3. External Styles

If you want to apply styles from an external CSS file to your web component, you can do so by importing the styles into your component's HTML file:

```html
<!-- my-component.html -->
<link rel="stylesheet" href="my-component-styles.css">
<template id="my-component-template">
  <!-- ... -->
</template>
```
Ensure that the external styles are compatible with Shadow DOM encapsulation.

By using these styling techniques, you can create web components with encapsulated styles, custom theming, and dynamic styling capabilities. Styling web components effectively enhances their reusability and visual consistency in various web applications.