---
title: Advanced Function Writing
description: A guide to writing quality functions
---

# SOLID

The SOLID principles are a set of five design principles that help developers create maintainable, scalable, and robust software. These principles were introduced by Robert C. Martin and have become a cornerstone of object-oriented design. Let's explore each principle and provide an example of its application in a JavaScript function.

## Single Responsibility Principle (SRP):

Description: A class or function should have only one reason to change. It means that a module should have only one job or responsibility.

Example in JavaScript: Suppose you have a User class that handles both user authentication and user profile management. It violates SRP. You can split it into two separate classes: Authenticator and UserProfileManager, each handling a single responsibility.

```js
// Before SRP
class User {
  constructor() {}

  authenticate(username, password) {
    // Authentication logic
  }

  updateProfile(user, profileData) {
    // Profile management logic
  }
}

// After SRP
class Authenticator {
  constructor() {}

  authenticate(username, password) {
    // Authentication logic
  }
}

class UserProfileManager {
  constructor() {}

  updateProfile(user, profileData) {
    // Profile management logic
  }
}
```

## Open/Closed Principle (OCP):

Description: Software entities (classes, modules, functions) should be open for extension but closed for modification. You should be able to add new functionality without changing existing code.

Example in JavaScript: Consider a Shape class with various shapes and an area calculation method. To add a new shape (e.g., a triangle), you can create a new class without modifying the existing code.

```js
class Shape {
  constructor() {}

  area() {
    // Common area calculation logic
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// Adding a new shape without modifying existing code
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return (this.base * this.height) / 2;
  }
}
```

## Liskov Substitution Principle (LSP):

Description: Subtypes must be substitutable for their base types without altering the correctness of the program. In other words, objects of a derived class should be able to replace objects of the base class without affecting program behavior.

Example in JavaScript: If you have a Bird base class with a fly method, any subclass (e.g., Sparrow or Penguin) should also be able to fly without causing issues.

```js
class Bird {
  fly() {
    // Common flying logic
  }
}

class Sparrow extends Bird {
  // Sparrow-specific implementation of fly
}

class Penguin extends Bird {
  // Penguin-specific implementation of fly
}
```

## Interface Segregation Principle (ISP):

Description: Clients should not be forced to depend on interfaces they do not use. It means that classes should not have to implement interfaces or methods they don't need.
Example in JavaScript: Suppose you have an Employee interface with methods like calculateSalary and updateProfile. If you have different types of employees (e.g., full-time and part-time), you can create specific interfaces for each type.

```js
// ISP Violation

class FullTimeEmployee {
  calculateSalary() {
    // Full-time salary calculation
  }

  updateProfile() {
    // Full-time profile update logic
  }
}

class PartTimeEmployee {
  calculateSalary() {
    // Part-time salary calculation
  }
  // Part-time employee doesn't need to update profile
}

// Better approach with specific interfaces
class SalaryCalculator {
  calculateSalary() {}
}

class ProfileUpdater {
  updateProfile() {}
}

class FullTimeEmployeeWithInterfaces {
  constructor(salaryCalculator, profileUpdater) {
    this.salaryCalculator = salaryCalculator;
    this.profileUpdater = profileUpdater;
  }

  processSalary() {
    this.salaryCalculator.calculateSalary();
  }

  updateProfile() {
    this.profileUpdater.updateProfile();
  }
}

class PartTimeEmployeeWithSalaryCalculation {
  constructor(salaryCalculator) {
    this.salaryCalculator = salaryCalculator;
  }

  processSalary() {
    this.salaryCalculator.calculateSalary();
  }
}

// Usage
const fullTimeSalaryCalculator = new SalaryCalculator();
const fullTimeProfileUpdater = new ProfileUpdater();
const partTimeSalaryCalculator = new SalaryCalculator();

const fullTimeEmployee = new FullTimeEmployeeWithInterfaces(
  fullTimeSalaryCalculator,
  fullTimeProfileUpdater
);

const partTimeEmployee = new PartTimeEmployeeWithSalaryCalculation(
  partTimeSalaryCalculator
);

fullTimeEmployee.processSalary();
fullTimeEmployee.updateProfile();

partTimeEmployee.processSalary();
```

## Dependency Inversion Principle (DIP):
Description: High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.

Example in JavaScript: Instead of tightly coupling a high-level module (e.g., a business logic class) to a low-level module (e.g., a database class), you can use dependency injection with interfaces or abstract classes to decouple them.

```javascript
// High-level module
class PaymentProcessor {
  constructor(paymentGateway) {
    this.paymentGateway = paymentGateway;
  }

  processPayment() {
    // Use the paymentGateway to process payments
    this.paymentGateway.process();
  }
}

// Low-level module
class PayPalPaymentGateway {
  process() {
    // PayPal payment processing logic
  }
}

class StripePaymentGateway {
  process() {
    // Stripe payment processing logic
  }
}

// Abstraction (interface or abstract class)
class PaymentGateway {
  process() {}
}

// Decoupling using Dependency Injection
const paypalGateway = new PayPalPaymentGateway();
const stripeGateway = new StripePaymentGateway();

const paymentProcessorWithPayPal = new PaymentProcessor(paypalGateway);
const paymentProcessorWithStripe = new PaymentProcessor(stripeGateway);
```

By adhering to the SOLID principles, you can create more maintainable and flexible code that is easier to extend and less prone to bugs when you need to make changes or add new features.

# Best Practices

Function best practices are crucial for writing clean, maintainable, and efficient JavaScript code. Here are some key best practices for writing JavaScript functions along with examples:

## Descriptive Function Names:

Use descriptive and meaningful names for your functions. A good name should convey the purpose of the function.
```js
// Bad: fn()
function calculate() {
  // ...
}

// Good: calculateArea()
function calculateArea() {
  // ...
}
```
## Single Responsibility Principle (SRP):

Each function should have a single, well-defined responsibility. This makes the code more modular and easier to understand.
```js
// Bad: a function doing too much
function processOrderAndSendEmail() {
  // ...
}

// Good: separate responsibilities
function processOrder() {
  // ...
}

function sendEmail() {
  // ...
}
```

## Default Parameter Values:

Use default parameter values to provide fallback values for optional function parameters.
```js
// Default parameter value
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!
```
## Function Comments and Documentation:

Add comments or documentation to describe the purpose of the function, parameters, and return values.
```js
/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}
```

## Avoid Global Variables:

Minimize the use of global variables within functions to prevent unintended side effects and maintain code encapsulation.
```js
// Avoid global variable
let total = 0;

function addToTotal(value) {
  total += value;
}

// Better: Pass variables as parameters
function calculateTotal(values) {
  return values.reduce((acc, curr) => acc + curr, 0);
}
```

## Avoid Function Nesting (Keep Functions Small):

Limit the nesting of functions by breaking down complex functions into smaller, reusable ones.

```js
// Avoid excessive nesting
function complexFunction() {
  // ...
  function innerFunction() {
    // ...
  }
}

// Better: Separate functions
function complexLogic() {
  // ...
}

function innerLogic() {
  // ...
}
```

## Use Arrow Functions for Short Functions:

Arrow functions are concise and can be used for short, simple functions.

```js
// Regular function
const multiply = function (a, b) {
  return a * b;
};

// Arrow function
const multiply = (a, b) => a * b;
```

## Avoid Side Effects:

Minimize side effects (e.g., modifying global variables) within functions. Functions should ideally be pure, meaning they only depend on their inputs and produce predictable outputs.
```js
// Side effect example
let count = 0;

function increment() {
  count++;
}

// Better: Pure function
function add(a, b) {
  return a + b;
}
```

## Error Handling:

Properly handle errors within functions using try-catch blocks or by returning error objects. Avoid swallowing errors without handling them.

```js
// Error handling with try-catch
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (error) {
    console.error(error);
  }
}

// Error handling by returning error objects
function divide(a, b) {
  if (b === 0) {
    return { error: 'Division by zero' };
  }
  return a / b;
}
```

## Testing:

Write unit tests for your functions to ensure they work as expected. Tools like Mocha, Jasmine, or Jest can help with testing.

```js
function add(a, b) {
  return a + b;
}

// Test case using Jest
test('add function', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});
```

By following these function best practices, you can write cleaner, more maintainable, and less error-prone JavaScript code that is easier to understand and work with, both for you and your team.