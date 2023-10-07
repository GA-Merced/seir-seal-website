---
title: Svelte
description: A reference page on Svelte
---

# Svelte: Getting Started
## What is Svelte?
Svelte is a modern JavaScript framework for building user interfaces. Unlike traditional frameworks that run in the browser, Svelte shifts the work of building the user interface from runtime to compile time. This approach results in highly efficient, small, and fast web applications.

## Svelte's key features include:

- Reactivity: Svelte offers a reactive programming model, making it easy to create dynamic user interfaces. Changes in state automatically update the DOM without the need for virtual DOM diffing.

- Component-Based Architecture: Svelte encourages the creation of reusable components, similar to other popular frameworks like React and Vue.

- Compile-Time Optimization: Svelte compiles your code into highly optimized JavaScript, resulting in smaller bundle sizes and improved performance.

- Scoped Styles: Styles defined within a component are scoped to that component, preventing global style conflicts.

- Stores: Svelte provides a simple store mechanism for managing shared state in your application.

## Getting Started with a New Svelte App
To start a new Svelte project, you can use SvelteKit, the official application framework for Svelte. Follow these steps to set up a new Svelte app:

### Create a New Svelte Project:

Open your command line and navigate to the directory where you want to create your project. Run the following command to create a new Svelte app using SvelteKit:

```bash
npm create svelte@latest myapp
```

Replace myapp with the name of your project.

### Navigate to the Project Directory:

Once the project is created, navigate to the project directory:

```bash
cd myapp
```

### Install Dependencies:

Install the project dependencies by running:

```bash
npm install
```

### Start the Development Server:

Start the development server to run your Svelte app:

```bash
npm run dev
```

This command will compile your Svelte code, start a development server, and open your app in a web browser.

Now, your Svelte project is up and running, and you can start building your user interface by creating Svelte components.

## Alternatives to SvelteKit
If you prefer not to use SvelteKit for some reason, you can set up a basic Svelte project with Vite, a build tool. Here are the steps:

### Create a new project with Vite:

```bash
npm create vite@latest
```

Choose the Svelte option when prompted.

### Navigate to the project directory:

```bash
cd your-svelte-project
```

### Install project dependencies:

```bash
npm install
```

### Start the development server:

``` bash
npm run dev
```

# Writing Svelte Components: Template Syntax
Svelte components are the fundamental building blocks of Svelte applications, and they are defined within .svelte files using a superset of HTML. A Svelte component consists of three main sections: script, style, and markup. While these sections are all optional, they provide essential structure and functionality to your components.

## The `<script>` Block
The `<script>` block is where you define the logic for your Svelte component. It contains JavaScript code that runs when an instance of the component is created. Variables declared or imported in this block are accessible from the component's markup. Here are some important aspects of the `<script>` block:

- Exporting Properties: You can use the export keyword to mark a variable as a property or prop, making it accessible to consumers of the component. Props allow external interaction with the component. You can also specify default initial values for props.

```html
<script>
    export let foo;
    export let bar = 'optional default initial value';
</script>
```

- Reactivity: Svelte's reactivity system is based on assignments. When you assign a new value to a variable, it triggers a re-render of the component. This reactivity applies to locally declared variables in the `<script>` block.

```html
<script>
    let count = 0;

    function handleClick() {
        count = count + 1; // Assigning a new value triggers a re-render
    }
</script>
```

Note that using array methods like `.push()` won't automatically trigger updates. You need to follow array mutations with an assignment to trigger updates.

- Reactive Statements: You can mark statements as reactive using $:. Reactive statements run after other script code but before the component's markup is rendered. They update when the values they depend on change.

```html
<script>
    let title;
    let person;

    $: document.title = title; // Updates 'document.title' when 'title' changes

    $: {
        console.log(`multiple statements can be combined`);
        console.log(`the current title is ${title}`);
    }
</script>
```
Working with Stores: You can access the values of stores by prefixing them with $. Stores are objects that provide reactive access to data. Assigning a value to a $-prefixed variable triggers a call to the store's .set method.

```html
<script>
    import { writable } from 'svelte/store';

    const count = writable(0);
    console.log($count); // Accessing store value

    count.set(1); // Updating the store
    console.log($count);
    
    $count = 2; // Updating the store via assignment
    console.log($count);
</script>
```

Context="module": You can use a `<script>` block with context="module" to define module-level logic that runs once when the module evaluates. Variables defined here are accessible in a regular `<script>` block but not vice versa. You can export bindings from this block.

```html
<script context="module">
    let totalComponents = 0;

    export function alertTotal() {
        alert(totalComponents);
    }
</script>
```

## The `<style>` Block
The `<style>` block allows you to define component-specific CSS styles. Styles defined here are scoped to the component, preventing unintended style conflicts with other components. You can also use the :global(...) modifier to apply styles globally.

```html
<style>
    p {
        /* Styles that affect only <p> elements in this component */
        color: burlywood;
    }

    :global(body) {
        /* Styles applied to <body> globally */
        margin: 0;
    }
</style>
```

## Markup
The markup section is where you define the actual HTML markup for your component. This section can include regular HTML elements and Svelte-specific constructs like conditionals (`{#if ...}`), loops (`{#each ...}`), and await blocks (`{#await ...}`) for asynchronous operations.

```html
<!-- Regular HTML markup -->
<h1>Hello, Svelte!</h1>

<!-- Svelte constructs -->
{#if condition}
    <p>Rendered if condition is true</p>
{:else}
    <p>Rendered if condition is false</p>
{/if}

{#each items as item}
    <li>{item}</li>
{/each}
```

Svelte's template syntax empowers you to create dynamic and interactive components while maintaining clarity and reactivity. By understanding and effectively using the <script>, <style>, and markup sections, you can build powerful web applications with Svelte components.