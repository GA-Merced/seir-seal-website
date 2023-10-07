---
title: SolidJS
description: A reference page on SolidJS
---

# What is SolidJS?
SolidJS is a modern JavaScript library for building user interfaces. It's designed to be simple, efficient, and reactive, making it a powerful choice for web developers who want to create fast and dynamic web applications. SolidJS is known for its fine-grained reactivity system, which enables highly optimized updates to the user interface, resulting in excellent performance.

## Creating a SolidJS Project

### Using Vite Templates
To set up a SolidJS project locally, you can use the Vite templates. Here are the steps for both JavaScript and TypeScript:

#### JavaScript
Create a new SolidJS project using the JavaScript template:

```bash
npx degit solidjs/templates/js my-app
```

Navigate to the project directory:

```bash
cd my-app
```

Install the project dependencies:

```bash
npm i
```

Start the development server:

```bash
npm run dev
```

#### TypeScript
Create a new SolidJS project using the TypeScript template:

```bash
npx degit solidjs/templates/ts my-app
```

Navigate to the project directory:

```bash
cd my-app
```

Install the project dependencies:

```bash
npm i
```

Start the development server:

```bash
npm run dev
```

### Manual Installation
If you prefer more control, you can manually install SolidJS and set up your project from scratch:

Install the SolidJS library and the Solid JSX compiler Babel plugin:

```bash
npm install solid-js babel-preset-solid
```

Add `"presets": ["solid"]` to your `.babelrc` file or to your Babel configuration in webpack or rollup.

If you're using TypeScript, configure your `tsconfig.json` to handle Solid's JSX:

```json
"compilerOptions": {
  "jsx": "preserve",
  "jsxImportSource": "solid-js"
}
```

Now, you're ready to start building your SolidJS application.

SolidJS emphasizes small, composable pieces as building blocks for applications. You'll primarily work with two main types of building blocks: Components and Reactive Primitives.

Components are functions that accept a props object and return JSX elements, including native DOM elements and other components. Components are lightweight and serve as factory functions for creating DOM elements and reactive primitives.

Reactive Primitives are at the core of SolidJS's reactivity system. These include Signals, Memos, and Effects, which form an auto-tracking synchronization engine to ensure your view stays up-to-date.

Here's an example of creating a Signal and an Effect in SolidJS:

```js
const [first, setFirst] = createSignal("JSON");
const [last, setLast] = createSignal("Bourne");

createEffect(() => console.log(`${first()} ${last()}`));
```

To learn more about SolidJS's reactivity system and rendering, refer to the official documentation.

## SolidJS follows several key principles, including:

**Declarative Data:** Data behavior is tied to its declaration, making composition easier.

**Vanishing Components:** Components are called once and don't persist. They exist to organize code.

**Read/Write Segregation:** Precise control over data flow and mutability.

**Simple is Better than Easy:** Providing minimal tools for building upon.

Additionally, SolidJS supports features like Web Components and server rendering, making it a versatile choice for various web development needs.

To use SolidJS in non-compiled environments, you can leverage Tagged Template Literals or HyperScript functions. However, keep in mind that these approaches come with some trade-offs in terms of reactivity and performance compared to SolidJS's JSX syntax.

SolidJS provides an efficient and flexible foundation for building modern web applications, emphasizing reactivity and simplicity in its design. Whether you're new to web development or an experienced developer, SolidJS offers a robust solution for creating dynamic and performant user interfaces.

# Writing SolidJS Components
In SolidJS, building user interface components is straightforward, thanks to its fine-grained reactivity system and the use of reactive primitives. To create components, you'll typically work with Signals, Memos, and Effects.

## Signals
Signals are at the core of SolidJS's reactivity system. They represent reactive values and come with get and set functions that allow you to read and update their values. Here's an example of creating a Signal for an auto-incrementing counter:

```js
import { createSignal, onCleanup } from "solid-js";
import { render } from "solid-js/web";

const App = () => {
  const [count, setCount] = createSignal(0),
    timer = setInterval(() => setCount(count() + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>{count()}</div>;
};

render(() => <App />, document.getElementById("app"));
```

In this example, createSignal(0) initializes a Signal called count with an initial value of 0. The setCount function allows us to update the value of the count Signal, which is then displayed in the JSX.

## Memos
Memos are cached derived values that track their dependencies and recompute only when necessary. They are similar to Signals but are used for optimizing calculations that don't require constant recalculation. Here's an example:

```js
const fullName = createMemo(() => `${firstName()} ${lastName()}`);
```

In this example, fullName is a Memo that computes the full name by combining the values of firstName() and lastName(). Memos are especially useful for complex calculations that should only be computed when their dependencies change.

## Effects
Effects are functions that wrap reads of Signals and re-execute whenever a dependent Signal's value changes. They are commonly used for creating side effects, such as rendering. Here's how to create an Effect:

```js
createEffect(() => console.log("The latest count is", count()));
```

In this example, the Effect logs the latest value of the count Signal whenever it changes. Effects are essential for handling actions that should occur when data changes in your application.

## How It Works

Under the hood, SolidJS uses automatic dependency tracking. Before an Effect or Memo executes, it pushes itself onto a global stack. When a Signal is read, it checks if there is a current listener on the stack and adds the listener to its subscriptions. This mechanism ensures that the relevant Effects are re-executed when their dependencies change.

Here's a simplified example of how Signals work:

```js
function createSignal(value) {
  const subscribers = new Set();

  const read = () => {
    const listener = getCurrentListener();
    if (listener) subscribers.add(listener);
    return value;
  };

  const write = (nextValue) => {
    value = nextValue;
    for (const sub of subscribers) sub.run();
  };

  return [read, write];
}
```

Whenever a Signal is updated, SolidJS knows which Effects need to be re-run, ensuring efficient and granular updates.

## Considerations
While SolidJS's reactivity system is powerful and dynamic, it comes with some important considerations:

`Accessing Reactive Values:` It's crucial to access reactive values within other reactive primitives or JSX for them to re-evaluate. Components and callbacks from control flows only execute once, so you must access these values within the appropriate context.

`Synchronous Tracking:` SolidJS tracks reactivity synchronously. If you have asynchronous code within an Effect, the code that executes asynchronously won't be tracked.

`Derived Signals:` You can create new expressions that depend on Signals by wrapping a Signal in a function. These derived signals update any Effects that depend on them and trigger a re-render if included in a view.

`Control Flow in JSX:` When using control flow logic in templates, SolidJS provides components like `<Show>` and `<For>` to optimize updates. These components ensure that only the necessary parts of the view are updated when conditions change.

```js
<Show
  when={loggedIn()}
  fallback={<button onClick={toggle}>Log in</button>}
>
  <button onClick={toggle}>Log out</button>
</Show>
```

`Looping with <For>:` Use the `<For>` component to efficiently loop over arrays of objects. It updates or moves items in the DOM instead of recreating them when the array changes.
```js
<For each={cats()}>{(cat, i) =>
  <li>
    <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
      {i() + 1}: {cat.name}
    </a>
  </li>
}</For>
```

SolidJS's reactivity system and components provide a flexible and efficient way to build dynamic user interfaces while optimizing performance through granular updates. Understanding how to use Signals, Memos, and Effects is essential for creating responsive and interactive components in your SolidJS applications.

## Example TodoApp Component

```js
import { createSignal } from "solid-js";

function TodoApp() {
  const [todos, setTodos] = createSignal([]);
  const [newTodo, setNewTodo] = createSignal("");

  const addTodo = () => {
    if (newTodo()) {
      setTodos([...todos(), { text: newTodo(), completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos()];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeCompletedTodos = () => {
    const filteredTodos = todos().filter((todo) => !todo.completed);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo()}
        onInput={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos().map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={removeCompletedTodos}>Remove Completed</button>
    </div>
  );
}

export default TodoApp;
```