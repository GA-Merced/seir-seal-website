---
title: Javascript Functions
description: A reference page for javascript functions
---

## Functions in JavaScript:
### 1. What Are JavaScript Functions?
JavaScript functions are blocks of code that perform specific tasks or calculations. They are designed to be reusable, allowing you to execute the same code multiple times with different inputs and obtain consistent results. Functions are a fundamental building block of JavaScript and play a crucial role in structuring code.

### 2. How to Write Functions:
JavaScript offers multiple ways to define functions:

#### a. Function Declarations:
A function declaration defines a named function using the function keyword. It can be called before it's defined in the code.

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
```

#### b. Function Expressions:
A function expression defines an anonymous (unnamed) function and assigns it to a variable. It must be defined before it's used.

```js
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob")); // "Hello, Bob!"
```

#### c. Arrow Functions (ES6+):
Arrow functions provide a more concise way to write functions. They are often used for simple, single-expression functions.

```js
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Charlie")); // "Hello, Charlie!"
```

### 3. Return Values:
Functions can return values using the return keyword. The returned value can be used elsewhere in your code.

```js
function add(a, b) {
  return a + b;
}

let sum = add(3, 5); // 8
```

### 4. Arguments and Parameters:
- **Parameters:** Parameters are placeholders in a function's declaration. They represent the values that the function expects when called.

- **Arguments:** Arguments are the actual values passed to a function when it's called. They correspond to the parameters defined in the function declaration.

```js
function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 7); // x=4, y=7
```

### 5. Variable Number of Arguments and Named Arguments Using Objects:
You can take an object or an array as an argument as a way a variable number of arguments. Objects in particular allow you to pass named parameters in an object and handle them flexibly.

```js
function calculate({ x, y, operator }) {
  switch (operator) {
    case "add":
      return x + y;
    case "subtract":
      return x - y;
    // More operations...
    default:
      return NaN;
  }
}

let result = calculate({ x: 10, y: 5, operator: "add" }); // 15
```

### 6. Returning Multiple Values with Arrays or Objects:
Functions can return multiple values by using arrays or objects. This is helpful when you need to convey multiple pieces of information from a function.

#### Using an array:

```js
function getMinMax(numbers) {
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return [min, max];
}


let [minValue, maxValue] = getMinMax([3, 1, 5, 2, 4]);
```

#### Using an object:

```js
function getUserInfo() {
  return {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
  };
}


let { name, age, email } = getUserInfo();
```

### 7. When to Use Functions:
Functions are essential in JavaScript and are used in various scenarios:

- **Code Reusability:** Functions allow you to write code once and use it multiple times, reducing redundancy.
- **Abstraction:** Functions can hide complex logic, making your code more readable and maintainable.
- **Modularity:** Functions help break down code into smaller, manageable pieces.
- **Encapsulation:** Functions allow you to encapsulate behavior, making it easier to reason about and test.

Use functions whenever you need to encapsulate a specific task, abstract away complexity, or enable code reuse in your JavaScript applications.

## JavaScript Promises
### What are Promises?
Promises are a fundamental part of asynchronous programming in JavaScript. They represent a future value or the result of an asynchronous operation, which may be successful or fail. Promises provide a way to handle asynchronous tasks more easily, making code cleaner and more readable.

### A promise can be in one of three states:

- **Pending:** The initial state, neither fulfilled nor rejected.
- **Fulfilled:** The asynchronous operation completed successfully, and a result is available.
- **Rejected:** The asynchronous operation failed, and an error reason is available.
### How to Use Promises
Promises are created using the Promise constructor. Here's a basic example of how to create and use a promise:

```js
const myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const success = true; // Simulated success
    if (success) {
      resolve('Operation succeeded');
    } else {
      reject('Operation failed');
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // 'Operation succeeded'
  })
  .catch((error) => {
    console.error(error); // 'Operation failed'
  });
```
### Using Promises with HTTP Requests
#### Using fetch with .then
```js
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });
```
#### Using fetch with async/await

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
```
#### Using $.ajax (jQuery) with .then
```js
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
})
  .done((data) => {
    console.log(data);
  })
  .fail((jqXHR, textStatus, errorThrown) => {
    console.error('jQuery AJAX error:', textStatus, errorThrown);
  });
```
#### Using axios with .then
```js
axios.get('https://api.example.com/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Axios error:', error);
  });
```
#### Using axios with async/await
```js
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Axios error:', error);
  }
}

fetchData();
```
Promises provide a structured way to work with asynchronous code, making it easier to manage complex tasks and handle errors gracefully. You can choose between using .then for chaining or async/await for more concise and readable asynchronous code, depending on your preference and project requirements.

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
