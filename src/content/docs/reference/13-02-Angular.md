---
title: Angular
description: A reference page on Angular
---

# Angular

Angular is a comprehensive development platform built on TypeScript. It provides a framework for building scalable web applications and offers a suite of tools and libraries for various features like routing, forms management, client-server communication, and more. If you're new to Angular and want to get started, this guide will help you take the first steps.

## What is Angular?
Angular is more than just a JavaScript framework; it's a full-fledged development platform for building web applications. Here are some key aspects of Angular:

- Component-Based Architecture: Angular applications are composed of components. Each component consists of a TypeScript class, an HTML template, and styles. Components are the building blocks of your application.

- Powerful Libraries: Angular provides a collection of well-integrated libraries that cover a wide range of functionalities. These libraries make it easier to handle tasks such as routing, form handling, and HTTP communication.

- Developer Tools: Angular comes with a suite of developer tools that assist in various aspects of the development process, including debugging, testing, and optimizing your code.

- Strong Typing with TypeScript: Angular is built on TypeScript, which is a statically typed superset of JavaScript. TypeScript brings strong typing, interfaces, and other modern language features to your Angular application.

- Large Community: Angular has a vast and active community of developers, library authors, and content creators, making it easier to find resources and support.

## Angular Applications: The Essentials
Before diving into Angular development, it's crucial to understand some core concepts that underlie Angular applications:

### Components
Components are the fundamental building blocks of an Angular application. Each component encapsulates a part of the user interface, along with its behavior. Components are created by defining a TypeScript class with a @Component() decorator. They include:

- A CSS selector that specifies how the component is used in templates.
- An HTML template that defines the component's view.
- Optional CSS styles for styling the component's elements.

Here's a minimal Angular component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <h2>Hello World</h2>
    <p>This is my first component!</p>
  `
})
export class HelloWorldComponent {
  // The code in this class drives the component's behavior.
}
```

You can use this component in your templates like this:

```html
<hello-world></hello-world>
```
Angular's component model promotes strong encapsulation, reusability, and testability.

### Templates
Every Angular component has an associated HTML template that defines how the component should be rendered. Templates can be defined inline within the component metadata or as separate HTML files. Angular templates are HTML extended with additional syntax for data binding and rendering dynamic content.

For example, you can use double curly braces `{{ }}` for interpolation to insert dynamic values from your component into the template:

```html
<p>{{ message }}</p>
```

The value for message comes from the component class:

```typescript
import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-interpolation',
  templateUrl: './hello-world-interpolation.component.html'
})
export class HelloWorldInterpolationComponent {
    message = 'Hello, World!';
}
```

Templates also support property bindings (`[property]="expression"`) and event bindings (`(event)="handler()"`) to interact with component logic.

### Dependency Injection
Angular employs dependency injection, a design pattern that allows you to declare the dependencies of your TypeScript classes without handling their instantiation manually. Angular takes care of creating and managing instances of dependencies. This approach promotes modularity, testability, and flexibility in your code.

Here's a simplified example of dependency injection in Angular:

```typescript
import { Component } from '@angular/core';
import { Logger } from './logger.service';

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di.component.html'
})
export class HelloWorldDependencyInjectionComponent {
  count = 0;

  constructor(private logger: Logger) { }

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
```
In this example, the Logger service is injected into the HelloWorldDependencyInjectionComponent. Angular manages the creation and availability of the Logger instance.

## Angular CLI
The Angular Command Line Interface (CLI) is a powerful tool that simplifies various tasks in Angular development. It provides commands for building, serving, generating code, running tests, and more. Here are some commonly used Angular CLI commands:

- ng build: Compiles an Angular application into an output directory.
- ng serve: Builds and serves your application, automatically rebuilding on file changes.
- ng generate: Generates or modifies files based on predefined schematics (e.g., components, modules).
- ng test: Runs unit tests for a given project.
- ng e2e: Builds, serves, and runs end-to-end tests.

 The Angular CLI streamlines the development process and is highly recommended for Angular projects.

# Angular Todo List Guide

Creating a basic Todo app in Angular is a great way to get started with the framework and learn its fundamentals. In this step-by-step guide, I'll walk you through the process of building a simple Todo app using Angular. Before you begin, make sure you have Angular CLI installed. If not, you can install it globally using npm:

```shell
npm install -g @angular/cli
```

Now, let's create the Todo app:

## Step 1: Create a New Angular Project
Open your terminal and run the following command to create a new Angular project:

```bash
ng new todo-app
```
Follow the prompts to configure your project. You can choose the default settings for most of them. This command will create a new Angular project in a folder named "todo-app."

## Step 2: Navigate to the Project Folder
Navigate to your project folder using the following command:

```bash
cd todo-app
```

## Step 3: Create a Todo Component
In Angular, components are the building blocks of your application. To create a Todo component, run the following command:

```bash
ng generate component todo
```

This command generates a new component named "todo" with its files and configurations.

## Step 4: Define the Todo Model
In a real-world Todo app, you'd want to define a data model for your Todo items. Create a file named todo.model.ts in the src/app folder and define the Todo model:

```typescript
// src/app/todo.model.ts
export class Todo {
  id: number;
  title: string;
  completed: boolean;
}
```
## Step 5: Implement the Todo Component

Open the src/app/todo/todo.component.html file and replace its content with the following HTML structure:

```html
Copy code
<!-- src/app/todo/todo.component.html -->
<div>
  <h1>Todo App</h1>
  <input [(ngModel)]="newTodo" (keyup.enter)="addTodo()" placeholder="Add a new todo" />
  <ul>
    <li *ngFor="let todo of todos">
      <input type="checkbox" [(ngModel)]="todo.completed" />
      {{ todo.title }}
      <button (click)="removeTodo(todo)">Delete</button>
    </li>
  </ul>
</div>
```

This template defines the basic structure of the Todo app, including an input field for adding new todos, a list to display todos, and the ability to mark todos as completed or delete them.

Next, open the src/app/todo/todo.component.ts file and implement the logic for the Todo component:

```typescript
// src/app/todo/todo.component.ts
import { Component } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  newTodo = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim() === '') return;
    const newId = this.todos.length + 1;
    const newTodo: Todo = {
      id: newId,
      title: this.newTodo,
      completed: false,
    };
    this.todos.push(newTodo);
    this.newTodo = '';
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
```

This component handles adding new todos, marking todos as completed, and deleting todos. It also uses two-way data binding with `[(ngModel)]` to keep the UI in sync with the component's data.

## Step 6: Import FormsModule
To use two-way data binding with `[(ngModel)]`, you need to import the FormsModule in your app. Open the src/app/app.module.ts file and add the import statement:

```typescript
// src/app/app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [/* ... */],
  imports: [
    BrowserModule,
    FormsModule, // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Step 7: Update the App Component
Open the src/app/app.component.html file and replace its content with the following:

```html
<!-- src/app/app.component.html -->
<app-todo></app-todo>
```
This sets the TodoComponent as the root component of your Angular app.

## Step 8: Run the App
You're now ready to run your Todo app. In the terminal, navigate to the project folder if you're not already there and run the following command:

```shell
ng serve
```

This command will start the development server, and you can access your Todo app in your web browser at http://localhost:4200/.

## Step 9: Test the Todo App
You should now be able to add, complete, and delete todos in your Angular Todo app. Test its functionality and explore further enhancements like persistent storage, additional features, and styling to make it your own.

Congratulations! You've successfully created a basic Todo app using Angular. This is just the beginning, and you can continue to build and improve upon it as you learn more about Angular.