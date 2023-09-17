---
title: Javascript Basics
description: A reference page in my new Starlight docs site.
---

## Basics of JavaScript Syntax
JavaScript is a versatile and widely used programming language that allows you to add interactivity, manipulate data, and control the behavior of web pages. Understanding its basic syntax is crucial for writing JavaScript code effectively. Below are the fundamental aspects of JavaScript syntax:

### 1. Statements and Semicolons:
JavaScript code is composed of statements, which are instructions that the browser can execute. Each statement is typically terminated by a semicolon (;). While JavaScript allows you to omit semicolons in some cases, it's a good practice to include them to avoid potential issues.

#### Example:

```js
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!
```

### 2. Variables and Data Types:
JavaScript uses variables to store and manage data. Variables are declared using the let, const, or var keyword, and they can hold various data types, such as numbers, strings, booleans, arrays, and objects.

#### Example:

```js
let age = 25; // Number
const name = "Alice"; // String
let isStudent = true; // Boolean
let scores = [85, 92, 78]; // Array
let person = { firstName: "John", lastName: "Doe" }; // Object
```

### 3. Comments:
Comments in JavaScript are used to add explanations or notes to your code. Single-line comments start with //, and multi-line comments are enclosed within /* and */.

#### Example:
```js
// This is a single-line comment

/*
   This is a
   multi-line comment
*/
```

### 4. Operators:
JavaScript supports various operators for performing operations on data, including arithmetic operators (+, -, *, /), comparison operators (==, !=, <, >, <=, >=), logical operators (&&, ||, !), assignment operators (=, +=, -=, *=, /=), and more.

#### Example:

```js
let x = 10;
let y = 5;

let sum = x + y; // Addition
let isGreater = x > y; // Comparison
let logicalAnd = (x > 0) && (y < 10); // Logical AND
```

### 5. Conditional Statements:
Conditional statements, such as if, else if, and else, allow you to make decisions in your code based on specified conditions.

#### Example:

```
let score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else {
  console.log("Needs improvement.");
}
```

### 6. Loops:
Loops are used for executing a block of code repeatedly. JavaScript provides for, while, and do...while loops.

#### Example (for loop):

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration #" + i);
}
```

### 7. Functions:
Functions in JavaScript are reusable blocks of code that can be defined and called to perform specific tasks. They can have parameters and return values.

#### Example:

```js
function greet(name) {
  return "Hello, " + name + "!";
}

let message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

### 8. Objects and Methods:
JavaScript allows you to create objects that can contain both data (properties) and behavior (methods). Methods are functions associated with objects.

#### Example:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // Output: John Doe
```

### 9. Scope:
JavaScript has both global scope (accessible throughout the entire script) and local scope (limited to a specific block or function). Variables declared with let and const have block scope, while var has function scope.

Example:

```js
let globalVar = "I'm global"; // Global scope

function myFunction() {
  let localVar = "I'm local"; // Local scope
}
```

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
