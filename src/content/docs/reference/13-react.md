---
title: ReactJS
description: A reference page in my new Starlight docs site.
---

## ReactJS: Building Dynamic User Interfaces
### What is ReactJS?
React, often referred to as ReactJS or React.js, is an open-source JavaScript library developed and maintained by Facebook. It is designed for building interactive and dynamic user interfaces (UIs) for web applications. React is known for its component-based architecture and virtual DOM (Document Object Model) manipulation, which makes it efficient and highly performant.

### Key Features of React:

- **Component-Based:** React encourages the creation of reusable UI components, allowing developers to build complex UIs by composing these components.

- **Virtual DOM:** React uses a virtual representation of the DOM to minimize direct manipulation, improving rendering performance.

- **Declarative Syntax:** React uses a declarative syntax, making it easier to understand and reason about UI components' behavior.

- **One-Way Data Flow:** React follows a unidirectional data flow, which simplifies data management and reduces unexpected side effects.

### Writing Function Components
In React, components are the building blocks of your application's UI. Function components are a simpler and more modern way to create React components compared to class components. Here's how you can write a basic function component:

```js
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is a function component.</p>
    </div>
  );
}

export default MyComponent;
```

In this example, MyComponent is a function that returns JSX (JavaScript XML) code. You can pass data to the component via props.

### Starting a React Project
To start a new React project, you can use a tool called Create React App, which sets up a new React application with a predefined project structure and development environment.

Here are the steps to start a React project using Create React App:

Install Node.js: If you haven't already, install Node.js, which includes npm (Node Package Manager).

Create a New React App:

```
npx create-react-app my-app
```

Replace my-app with the desired name of your project.

Navigate to the Project Directory:

```
cd my-app
```

Start the Development Server:

```
npm start
```

This will start the development server and open your React app in a web browser. You can now begin building your React application by modifying the files in the src directory.

## JSX: JavaScript XML
### What is JSX?
JSX, short for JavaScript XML, is an extension of JavaScript often used in React to define the structure and content of user interfaces. It allows you to write HTML-like code within your JavaScript or React components. JSX makes it more intuitive to describe how your UI should look and behave, making React code easier to read and write.

### Rules of JSX
When working with JSX, there are several important rules to keep in mind:

#### 1. JSX Must Have a Parent Element
Every JSX expression must have a single root or parent element. This is because React components can only render a single element at a time. For example:

```js
// Valid JSX with a single parent element
<div>
  <h1>Hello, World!</h1>
  <p>This is a paragraph.</p>
</div>
```
#### 2. Self-Closing Tags
In JSX, you can use self-closing tags for elements that don't have closing tags, like <img> or <input>. Use a slash before the closing angle bracket:

```js
<img src="image.jpg" alt="An image" />
<input type="text" placeholder="Enter text" />
```

#### 3. JavaScript Expressions Inside Curly Braces
You can include JavaScript expressions within JSX by wrapping them in curly braces {}. This allows you to inject dynamic content or evaluate expressions:

```js
const name = 'John';

function Greeting() {
  return <h1>Hello, {name}!</h1>;
}
```
#### 4. Class vs. ClassName
To add CSS classes to JSX elements, use the className attribute instead of class. This is because class is a reserved keyword in JavaScript:

```js
// Correct usage
<div className="my-class">This is a div with a class.</div>
```
#### 5. Inline Styles with Objects
To apply inline styles to JSX elements, use the style attribute and provide an object with camelCased CSS property names:

```js
const styles = {
  backgroundColor: 'lightblue',
  fontSize: '16px',
};

function StyledDiv() {
  return <div style={styles}>Styled div</div>;
}
```

#### 6. Commenting in JSX
You can add comments within JSX using curly braces and the /* */ syntax for multiline comments or // for single-line comments:

```
function CommentedComponent() {
  return (
    <div>
      {/* This is a multiline JSX comment */}
      <p>Some content</p>
      {/* Single-line comment */}
    </div>
  );
}
```
#### 7. Embedding JSX in JavaScript
You can embed JSX within regular JavaScript code using curly braces {}. This is useful when you need to conditionally render JSX or include it in variables or functions:

```js
const showGreeting = true;

function App() {
  return (
    <div>
      {showGreeting && <h1>Hello, World!</h1>}
    </div>
  );
}
```
Remember that JSX is transformed into JavaScript code during the build process, making it compatible with browsers. Following these rules ensures that your JSX is properly transpiled and rendered in React applications.

## React Props: Passing Data Between Components
### What is Props?
Props, short for "properties," are a fundamental concept in React that allows you to pass data from one component to another. They are a way to make components reusable and dynamic by configuring their behavior and appearance based on external data.

### How to Send and Receive Props
#### Sending Props
To send props from a parent component to a child component, you can simply add attributes to the child component when rendering it:

```js
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const greeting = 'Hello, World!';
  
  return (
    <ChildComponent message={greeting} />
  );
}
```

In this example, the ParentComponent sends the message prop to the ChildComponent.

#### Receiving Props
In the child component, you can receive and use props by accessing them as properties of the props object:

```js
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}
```

Here, the ChildComponent accesses the message prop using props.message.

### props.children
In React, the special prop called children allows you to pass and render arbitrary content within a component. This is useful for creating wrapper components that can enclose other components or elements:

```js
// WrapperComponent.js
import React from 'react';

function WrapperComponent(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
```
Now, you can use WrapperComponent to wrap other components or elements and pass content as children:

```js
// ParentComponent.js
import React from 'react';
import WrapperComponent from './WrapperComponent';

function ParentComponent() {
  return (
    <WrapperComponent title="Wrapper Title">
      <p>This content is wrapped.</p>
    </WrapperComponent>
  );
}
```
### Spread Operator, Restructuring, and Props
You can use the spread operator and destructuring to work with props more efficiently. The spread operator allows you to pass all props of one component to another, while destructuring lets you extract specific props from the props object:

#### Using the Spread Operator
```js
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const sharedProps = {
    color: 'blue',
    size: 'medium',
  };
  
  return (
    <ChildComponent {...sharedProps} />
  );
}
```

In ChildComponent, you can access color and size as separate props.

#### Using Destructuring
```js
// ChildComponent.js
import React from 'react';

function ChildComponent({ color, size }) {
  return (
    <div>
      <p>Color: {color}</p>
      <p>Size: {size}</p>
    </div>
  );
}
```
Here, { color, size } is a destructuring assignment, which extracts the color and size props directly from the props object.

Using props efficiently with the spread operator and destructuring can make your code cleaner and more readable, especially when dealing with multiple props or passing props down several levels of components.
## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
