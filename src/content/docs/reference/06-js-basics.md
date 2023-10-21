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

# Scope

Scope in JavaScript is a fundamental concept that determines where variables and functions are accessible and how they interact with each other. JavaScript has three main types of scope: local scope, global scope, and block scope. Let's dive into each of these scopes in depth.

## Local Scope:

Local scope refers to the innermost scope within JavaScript, typically created by functions. Variables declared within a function are said to have local scope.

These variables are only accessible within the function where they are declared. They are invisible to code outside the function.

Example of local scope:

```js
function myFunction() {
  var localVar = 42; // localVar has local scope
  console.log(localVar); // Accessible within myFunction
}

myFunction();
console.log(localVar); // Error: localVar is not defined outside myFunction
```
## Global Scope:

Global scope refers to the outermost scope in JavaScript. Variables declared outside of any function or block have global scope.

Global variables are accessible from anywhere in your code, including within functions and blocks.

Example of global scope:

```js
var globalVar = 100; // globalVar has global scope

function myFunction() {
  console.log(globalVar); // Accessible within myFunction
}

myFunction();
console.log(globalVar); // Accessible globally
```
## Block Scope:

Block scope was introduced in JavaScript with the let and const keywords. It refers to the scope created by code blocks (inside loops, conditionals, and functions).

Variables declared with let or const are block-scoped, meaning they are only accessible within the block where they are declared.

Example of block scope:

```js
if (true) {
  let blockVar = 'I am block-scoped';
  console.log(blockVar); // Accessible within the if block
}
```

console.log(blockVar); // Error: blockVar is not defined outside the if block
Prior to the introduction of let and const, JavaScript only had function scope and global scope. Variables declared with var were function-scoped.

## Scope Chain:

JavaScript uses a mechanism called the "scope chain" to determine variable access. When a variable is referenced, JavaScript first looks in the current scope. If it doesn't find the variable there, it continues up the scope chain until it reaches the global scope.

This allows functions to access variables from their containing (enclosing) scopes, a concept known as "lexical scoping."

Example of scope chain:

```jd
var globalVar = 'I am global';

function outerFunction() {
  var outerVar = 'I am outer';

  function innerFunction() {
    var innerVar = 'I am inner';
    console.log(innerVar); // Accessible within innerFunction
    console.log(outerVar); // Accessible within innerFunction via scope chain
    console.log(globalVar); // Accessible within innerFunction via scope chain
  }

  innerFunction();
  console.log(innerVar); // Error: innerVar is not defined in outerFunction
}

outerFunction();
console.log(outerVar); // Error: outerVar is not defined in global scope
```

Understanding scope is crucial for writing clean and maintainable JavaScript code, as it helps you manage variable access and prevent unintended side effects in your programs.

# The Console Object

The console object in JavaScript is a powerful tool for debugging and logging information about your code. It provides various methods for outputting messages, errors, warnings, and other information to the console of your browser's developer tools or the Node.js console. Here's an overview of some commonly used console methods and how to use them:

## console.log():

The most common method for logging messages to the console.

It accepts one or more arguments, which can be strings, objects, variables, or expressions, and logs them to the console.

Example:

```js
const message = "Hello, world!";
const user = { name: "John", age: 30 };

console.log("This is a simple log message.");
console.log(message);
console.log(user);
```
## console.error():

Logs error messages to the console with a distinctive red icon.

Useful for capturing and debugging errors in your code.

Example:

```js
console.error("This is an error message.");
```

## console.warn():

Logs warning messages to the console with a distinctive yellow icon.

Typically used for non-critical issues or warnings.

Example:

```js
console.warn("This is a warning message.");
```

## console.info():

Logs informational messages to the console with a distinctive blue icon.

Useful for providing additional information about your code.

Example:

```js
console.info("This is an informational message.");
```

## console.debug():

Logs debug messages to the console. These messages are typically used during development and may not be displayed in all browsers' console outputs.

Example:

```js
console.debug("This is a debug message.");
```

## console.group() and console.groupEnd():

Allows you to group related log messages together in a collapsible group.

Useful for organizing and structuring your console output.

Example:

```js
console.group("Group A");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.group("Group B");
console.log("Message 3");
console.log("Message 4");
console.groupEnd();
```

## console.table():

Outputs tabular data as a table in the console.

Useful for displaying arrays or objects in a more readable format.

Example:

```js
const data = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];

console.table(data);
```

## console.assert():

Checks if a condition is true, and if it's not, it logs an error message to the console.

Useful for debugging and ensuring that certain conditions are met in your code.

Example:

```js
const x = 5;
console.assert(x === 10, "x is not equal to 10");
```
## console.clear():

Clears the console, removing all previous log messages and errors.

Helpful for maintaining a clean and uncluttered console during debugging.

Example:

```js
console.clear();
```
## console.count():

Logs the number of times console.count() has been called with the same label.

Useful for tracking how many times a specific section of code is executed.

Example:

```js
for (let i = 0; i < 5; i++) {
  console.count("Loop Iteration");
}
```
## console.time() and console.timeEnd():

Measures the execution time of a specific operation using a label.

You start a timer with console.time(label) and stop it with console.timeEnd(label).

The elapsed time is displayed in milliseconds in the console.

Example:

```js
console.time("Time taken for a complex operation");

// Perform a complex operation
for (let i = 0; i < 1000000; i++) {
  // Some time-consuming task
}

console.timeEnd("Time taken for a complex operation");
```
## console.trace():

Outputs a stack trace to the console, showing the function call hierarchy at the point where it's called.

Useful for debugging to trace the flow of execution.

Example:

```js
function foo() {
  bar();
}

function bar() {
  console.trace("Trace from bar():");
}

foo();
```
## console.dir():

Displays an interactive listing of object properties.

Useful for inspecting complex objects, including their methods and properties.

Example:

```js
const user = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

console.dir(user);
```

# Javascript Error Messages

| Error Message                         | Explanation                                                   |
| ------------------------------------ | ------------------------------------------------------------- |
| `SyntaxError: Unexpected token`       | You have a character or symbol in your code where it doesn't belong or is not properly formatted. |
| `ReferenceError: undefined variable`  | You're trying to use a variable or identifier that has not been declared or is out of scope. |
| `TypeError: null is not an object`    | You're trying to access a property or method on a value that is `null` or `undefined`. |
| `TypeError: Cannot read property 'x' of undefined` | You're trying to access a property 'x' of an `undefined` value. |
| `TypeError: x is not a function`      | You're trying to call a variable 'x' as if it were a function, but it's not a function. |
| `TypeError: Cannot assign to read-only property 'x'` | You're trying to change the value of a read-only property 'x' (e.g., a constant). |
| `TypeError: Assignment to constant variable` | You're trying to reassign a value to a constant variable. Constants cannot be changed once defined. |
| `TypeError: Cannot convert undefined or null to object` | You're trying to use an object method or property on a value that is `null` or `undefined`. |
| `RangeError: Maximum call stack size exceeded` | You have a recursive function or loop that has exceeded the maximum call stack size. |
| `ReferenceError: Can't access lexical declaration 'x' before initialization` | You're trying to use a variable 'x' before it has been declared (e.g., using `let` or `const` before they are defined in code). |
| `TypeError: 'x' is not iterable`     | You're trying to use an object as an iterable (e.g., in a `for...of` loop) that is not iterable. |
| `TypeError: 'x' is not a constructor` | You're trying to use 'x' as a constructor with `new`, but 'x' is not a constructor function. |
| `TypeError: 'x' is not JSON serializable` | You're trying to stringify an object 'x' using `JSON.stringify()`, but 'x' contains non-serializable values like functions or circular references. |
| `Error: Promises must be awaited`     | You have created a Promise but haven't used `await` or `.then()` to handle its resolution. |
| `SyntaxError: Unexpected end of JSON input` | You're trying to parse JSON data, but it's incomplete or improperly formatted. |
| `Error: Maximum call stack size exceeded` | You have a recursive function that keeps calling itself infinitely, causing a stack overflow. |
| `TypeError: Cannot convert 'x' to a number` | You're trying to perform a mathematical operation on a value 'x' that cannot be converted into a number, such as a string containing non-numeric characters. |
| `TypeError: 'x' is not a function or its return value is not iterable` | You're attempting to use a value 'x' as an iterable in a `for...of` loop, but 'x' is either not a function or its return value is not iterable. |
| `TypeError: 'x' is not a valid argument` | You're passing an argument 'x' to a function, but it's not of the expected type or format required by that function. |
| `ReferenceError: Event is not defined`   | You're trying to use an object or variable 'Event' that has not been defined or imported. This may occur when working with browser events in the browser's global scope. |
| `TypeError: Cannot read property 'x' of null` | You're trying to access a property 'x' of a `null` value using dot notation. You need to ensure the object is not `null` before accessing its properties. |
| `TypeError: 'x' is not a constructor function` | You're attempting to use 'x' as a constructor function with `new`, but it's not a valid constructor. Constructors typically have capital initials. |
| `TypeError: Cannot set property 'x' of undefined` | You're trying to assign a value to a property 'x' of an `undefined` object. Ensure the object is defined before attempting to set properties on it. |
| `TypeError: Cannot use 'in' operator to search for 'x' in 'undefined'` | You're using the `in` operator to check if a property 'x' exists in an `undefined` object. Make sure the object is defined before using the `in` operator. |
| `TypeError: 'x' is not a function, it is 'y'` | You're trying to call 'x' as a function, but 'x' is not a function; instead, it's of type 'y'. Check that 'x' is the correct function you intended to call. |
| `SyntaxError: Unexpected identifier`      | There's an unexpected identifier (e.g., variable name) in your code that doesn't match the expected syntax at that location. |
| `TypeError: 'x' is not extensible`       | You're trying to add properties to an object 'x' that has been marked as non-extensible using `Object.preventExtensions()` or similar methods. |
| `TypeError: Cannot read property 'x' of undefined` | You're trying to access a property 'x' of an `undefined` object using dot notation. Ensure the object exists before accessing its properties. |
| `TypeError: 'x' is read-only`            | You're attempting to assign a new value to a read-only property 'x' or reassign a value to a constant variable 'x'. |
| `RangeError: Invalid array length`       | You're attempting to create an array with an invalid or excessively large length, which exceeds JavaScript's array length limitations. |
| `SyntaxError: Octal literals are not allowed in strict mode` | You're using an octal number literal (e.g., starting with a leading zero) in strict mode JavaScript. Octal literals are not allowed in strict mode. |

# Property of Undefined Errors

"Property of undefined" errors are a common type of error in JavaScript that occur when you attempt to access a property (such as a method or variable) on a value that is undefined. These errors typically manifest as TypeError messages and can be a source of frustration for developers. Let's delve into a deep explanation of these errors:

Understanding "Property of Undefined" Errors
In JavaScript, variables can hold different types of values, including objects, functions, primitive types (like strings, numbers, and booleans), and undefined. When you try to access a property (e.g., a method or variable) on a variable that holds undefined, JavaScript raises a TypeError because undefined does not have any properties or methods associated with it.

Here's a more detailed breakdown of this error scenario:

## Undefined Value:

undefined is a special value in JavaScript that represents the absence of a value or uninitialized variables.
It is distinct from null, which is another special value that represents the intentional absence of an object value.
undefined is typically encountered when you access a variable that has been declared but not assigned a value.
```js
let x; // x is undefined
```

## Accessing Properties on undefined:

When you try to access properties on an undefined value using dot notation (e.g., undefined.propertyName), JavaScript throws a TypeError.
```js
let person; // person is undefined
console.log(person.name); // TypeError: Cannot read property 'name' of undefined
```

Similarly, attempting to call a method on an undefined value results in the same error:

```js
let func; // func is undefined
func(); // TypeError: func is not a function
```

## Preventing "Property of Undefined" Errors:

To avoid these errors, it's essential to check whether a variable is undefined before attempting to access its properties or call its methods.

You can use conditional statements or optional chaining (introduced in modern JavaScript) to handle these situations gracefully:

```js
let person;
if (person !== undefined) {
  console.log(person.name); // Safely access property if person is defined
} else {
  console.log("Person is undefined.");
}
```

With optional chaining (?.), you can safely access nested properties without causing an error:

```js
const result = someObject?.nested?.property;
```

Debugging "Property of Undefined" Errors:

When you encounter this type of error, it's crucial to trace back to where the variable became undefined.

Use browser developer tools or Node.js's debugging features to set breakpoints and inspect variable values.

Understanding "Property of Undefined" errors is essential for writing robust JavaScript code. By being mindful of variable initialization, checking for undefined values, and using conditional logic, you can prevent these errors and create more resilient and error-free applications.