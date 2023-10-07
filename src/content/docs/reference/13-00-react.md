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

## React's useState Hook: Managing Component State
### What is useState?
In React, useState is a built-in hook that allows functional components to manage state. State in React refers to data that can change over time and affect a component's behavior and rendering. The useState hook provides a simple way to introduce state into functional components.

### How to Use useState
To use the useState hook, you need to import it from the 'react' library and call it within your functional component. It returns an array containing the current state value and a function to update that state.

Here's a basic example of using useState to manage a counter:

```js
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Event handler to update 'count'
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
In this example, count is the state variable, and setCount is the function to update it. When the "Increment" button is clicked, setCount is called with the new value of count, triggering a re-render with the updated value.

### Best Practices
#### 1. Initialize State
Always initialize state with a default value. This helps React correctly identify the initial state and can prevent unexpected behavior.

#### 2. Separate State Variables
Use multiple useState hooks to manage different pieces of state rather than combining them into one state object. This keeps your code more organized and easier to manage.

#### 3. Use Descriptive Variable Names
Choose descriptive names for your state variables to make your code more readable and maintainable.

#### 4. Avoid Direct State Mutation
Never directly mutate the state variable. Always use the setter function provided by useState to update state.

### Pitfalls to Avoid
#### 1. Asynchronous Updates
State updates with useState are asynchronous. If you rely on the current state value to compute the next state, use the functional update form to ensure you're working with the most up-to-date value:

```js
// Incorrect
setCount(count + 1);

// Correct
setCount((prevCount) => prevCount + 1);
```

#### 2. Overusing State
Avoid putting everything into state. Only use state for data that needs to be reactive and affects rendering. For non-reactive data, use regular variables.

#### 3. Deep Nesting
Avoid deep nesting of components that rely on state. Deeply nested components can make state management and debugging more challenging. Consider using props or lifting state up to higher-level components when needed.

## React's useEffect Hook: Managing Side Effects
### What is useEffect?
In React, useEffect is a built-in hook that allows functional components to perform side effects in response to component lifecycle events or changes in state. Side effects can include data fetching, DOM manipulation, or subscribing to external data sources.

### Use Cases for useEffect
useEffect is versatile and can be used for various purposes:

#### 1. Data Fetching
You can use useEffect to fetch data from APIs or external sources when a component mounts or when specific dependencies change. This is commonly used for populating component state with data.

#### 2. DOM Manipulation
When you need to interact with the DOM, such as adding event listeners or modifying elements, useEffect can help ensure these operations happen at the right time.

#### 3. Subscriptions
useEffect is suitable for setting up and cleaning up subscriptions to data sources, such as WebSocket connections, when a component mounts and unmounts.

#### 4. Managing Timers
You can create and clear timers within useEffect for tasks like animations, polling, or delayed actions.

### How to Use useEffect
To use useEffect, import it from 'react' and call it within your functional component. It takes two arguments: a function containing the side effect code and an array of dependencies.

Here's an example of using useEffect to fetch data when a component mounts:

```js
import React, { useEffect, useState } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []); // Empty dependency array: run once when the component mounts

  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

In this example, the useEffect runs the data-fetching code when the component mounts due to the empty dependency array ([]).

### Mistakes to Avoid
#### 1. Infinite Loops
Be cautious when specifying dependencies for useEffect. If you omit the dependency array or include state or props that change within the effect, it can lead to infinite loops of re-rendering.

#### 2. Forgetting Dependency Array
Make sure to provide a dependency array to specify when the effect should run. If you omit the dependency array, the effect runs on every render, which may not be what you intend.

#### 3. Asynchronous Code
Ensure that any asynchronous code within useEffect does not cause state updates after the component has unmounted. You can handle this by canceling async operations when necessary or using the cleanup function returned by useEffect.

#### 4. Clean Up Resources
If your effect sets up subscriptions or timers, remember to clean up these resources by returning a cleanup function from the effect:

```js
useEffect(() => {
  const subscription = subscribeToData();
  
  return () => {
    // Cleanup code, unsubscribe, or clear timers
    subscription.unsubscribe();
  };
}, []);
```
By following best practices and being mindful of the dependencies and cleanup tasks, you can effectively use useEffect to manage side effects in your React components.

## React's useContext Hook: Managing Global State
### What is useContext?
In React, useContext is a built-in hook that allows functional components to access and consume data from a context. Context is a way to share data across a component tree without manually passing props down through each level of nesting. useContext simplifies the process of reading data from a context and provides a more elegant solution for managing global state.

### How to Use useContext
To use useContext, you first need to create a context using the createContext function. This context can hold any data that you want to share across components. Then, within any component that is a descendant of the context provider, you can use useContext to access that data.

Here's a basic example of how to use useContext:

```js
import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Context provider component
function MyProvider({ children }) {
  const sharedData = 'Shared data from context';

  return <MyContext.Provider value={sharedData}>{children}</MyContext.Provider>;
}

// Consumer component
function MyComponent() {
  const dataFromContext = useContext(MyContext);

  return <p>{dataFromContext}</p>;
}

// Usage
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}
```
In this example, MyProvider is a context provider that wraps MyComponent. MyComponent uses useContext to access the data provided by the context.

### Best Practices
#### 1. Use for Global State
useContext is particularly useful for managing global state, such as user authentication, theme preferences, or app settings. It simplifies the process of sharing this state among multiple components without prop drilling.

#### 2. Create Separate Contexts
Consider creating multiple context providers for different types of data. This helps organize and separate concerns within your application, making it easier to maintain and scale.

#### 3. Avoid Overusing Context
While context is powerful, avoid using it for every piece of state in your application. Only use it for data that genuinely needs to be shared across multiple components.

#### 4. Combine with Other Hooks
useContext can be combined with other hooks like useState and useEffect to build complex and dynamic components that consume data from context and manage local state or side effects.

#### 5. Make Context Values Immutable
It's a good practice to keep context values immutable. If you need to update context data, consider using a state management library like Redux or combining useContext with the useState hook within the context provider.

## React Router Dom
React Router Dom is a powerful library that enables you to handle routing in your React applications. It uses the DOM History API to update the URL and manage the history stack, making it a recommended choice for web projects. In this guide, we'll walk you through setting up a basic router and creating routes using React Router Dom.

### Installation
Before you begin, make sure you have React and React Router Dom installed in your project. If not, you can install them using npm or yarn:

```
npm install react-router-dom
# or
yarn add react-router-dom
```
### Setting Up the Router
Import the necessary modules from react-router-dom:

```js
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
Create your router outside of the React tree with a statically defined set of routes:
javascript
Copy code
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

In the example above, we've created a router with a root route ("/") and a nested route for the "team" path. Each route includes an element that represents the component to render for that route.

### Defining Routes Using JSX
Alternatively, you can define routes using JSX elements. This can make your route configuration more readable:

```js
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} />
    <Route path="team" element={<Team />} />
  )
);
```

### Best Practices
1. Organize your routes in a structured manner, separating them into individual modules or files for better code organization.

1. Use the exact attribute for routes that should match the exact URL path. This helps prevent unexpected matches.

1. Consider using dynamic route parameters to make your routes more flexible and reusable.

1. Utilize route guards or authentication checks to control access to specific routes based on user permissions.

By following these best practices and using React Router Dom, you can easily set up routing in your React applications and create a smooth navigation experience for your users.

## Writing Routes with React Router Dom
Routes are a fundamental part of any React Router application. They define how URL segments correspond to components, data loading, and data mutations. By using routes, you can create complex application layouts and manage data dependencies in a declarative manner. In this guide, we'll explore how to write routes in React Router Dom.

### Route Configuration
Routes in React Router Dom are objects that you pass to the router creation functions. Each route object specifies the following properties:

- **element:** The React element to render when the URL matches the route.
- **path:** The URL segment that triggers this route.
- **loader:** A function that loads data before rendering the route.
- **action:** A function that performs actions when data is submitted to the route.
- **errorElement:** The React element to render if an error occurs.

Here's an example of how to define routes:

```js
const router = createBrowserRouter([
  {
    element: <Team />,
    path: "teams/:teamId",
    loader: async ({ request, params }) => {
      return fetch(`/fake/api/teams/${params.teamId}.json`, { signal: request.signal });
    },
    action: async ({ request }) => {
      return updateFakeTeam(await request.formData());
    },
    errorElement: <ErrorBoundary />,
  },
]);
```

In this example, we've defined a route that matches the URL segment "teams/:teamId". It loads data using the loader function, handles data submission with the action function, and displays an error element if an error occurs.

### JSX Route Configuration
Alternatively, you can define routes using JSX elements, which can make your route configuration more readable:

```js
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<Team />}
      path="teams/:teamId"
      loader={async ({ params }) => {
        return fetch(`/fake/api/teams/${params.teamId}.json`);
      }}
      action={async ({ request }) => {
        return updateFakeTeam(await request.formData());
      }}
      errorElement={<ErrorBoundary />}
    />
  )
);
```

Both styles of route configuration are valid, and the behavior is identical. For most developers familiar with React, using JSX elements is more intuitive.

### Best Practices
1. Organize your routes logically, grouping related routes together.
1. Use dynamic segments (e.g., ":teamId") to capture variable parts of the URL.
1. Make use of optional segments and splats when necessary to match different URL patterns.
1. Consider creating layout routes that define the structure of your application but don't add segments to the URL.
1. Take advantage of route guards or authentication checks for access control.
1. Keep your routes organized and well-documented to maintain readability.
1. By following these best practices and using React Router Dom, you can effectively define and manage routes in your React applications, creating a structured and dynamic user experience.

## Writing Loaders and Actions in React Router Dom
In React Router Dom, routes can define "loaders" and "actions" to manage data loading and data mutations before rendering route elements. These features are particularly powerful when using a data router like createBrowserRouter.

### Loader Functions
Loaders are functions used to provide data to route elements before rendering. They are essential for fetching and preparing data for components. Here's how to use loaders:

#### Defining a Loader
You can define a loader function for a route like this:

```js
const router = createBrowserRouter([
  {
    element: <Teams />,
    path: "teams",
    loader: async () => {
      return fakeDb.from("teams").select("*");
    },
    children: [
      {
        element: <Team />,
        path: ":teamId",
        loader: async ({ params }) => {
          return fetch(`/api/teams/${params.teamId}.json`);
        },
      },
    ],
  },
]);
```
In this example, the loader functions fetch data for their respective routes.

#### Loader Parameters
Loaders can access parameters from the URL and other data. For example:

```js
{
  path: "/teams/:teamId",
  loader: ({ params }) => {
    return fakeGetTeam(params.teamId);
  },
}
```
In this case, params.teamId is parsed from the dynamic segment of the URL.

#### Handling Requests
Loaders receive a request object, which can be useful for various purposes:

```js
function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");
  return searchProducts(searchTerm);
}
```

The request object allows you to work with URL parameters and perform actions accordingly.

#### Returning Responses
While loaders can return various data types, you can also return a web Response object:

```js
function loader({ request, params }) {
  const data = { some: "thing" };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
}
```
React Router automatically handles the response, making it easy for components to work with the data.

### Action Functions
Actions in React Router Dom are used for data mutations. They provide a way to perform data updates with simple HTML and HTTP semantics. Here's how to use actions:

#### Defining an Action
You can define an action function for a route like this:

```js
<Route
  path="/song/:songId/edit"
  element={<EditSong />}
  action={async ({ params, request }) => {
    let formData = await request.formData();
    return fakeUpdateSong(params.songId, formData);
  }}
  loader={({ params }) => {
    return fakeGetSong(params.songId);
  }}
/>
```
In this example, the action function updates a song's data based on a form submission.

#### Action Parameters
Action functions can also access route parameters and the request object, similar to loaders.

#### Handling Submissions
Actions are called when the app sends a non-GET submission (e.g., POST, PUT, PATCH, DELETE) to the route. This can occur through forms or imperative submissions:

```js
<Form method="post" action="/songs" />;
<fetcher.Form method="put" action="/songs/123/edit" />;
```
#### Handling Multiple Actions
To handle multiple behaviors within an action, you can use form elements with different name or value attributes to differentiate the actions. For example:

```js
async function action({ request }) {
  let formData = await request.formData();
  let intent = formData.get("intent");

  if (intent === "edit") {
    await editSong(formData);
    return { ok: true };
  }

  if (intent === "add") {
    await addSong(formData);
    return { ok: true };
  }

  throw json({ message: "Invalid intent" }, { status: 400 });
}
```
By distinguishing actions based on the form data, you can handle various behaviors in a single action.

These loader and action functions are powerful tools in React Router Dom, allowing you to manage data loading and mutations effectively while abstracting away complex asynchronous interactions.

## Further reading

- Read [React Router Documentation](https://reactrouter.com/)
