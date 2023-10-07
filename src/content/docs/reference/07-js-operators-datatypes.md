---
title: Javascript Operators and Data Types
description: An Overview of Javascript Operators and Data Types
---

## JavaScript Operators:

### 1. Arithmetic Operators:
- `+` (Addition): Adds two numbers together or concatenates strings.
- `-` (Subtraction): Subtracts one number from another.
- `*` (Multiplication): Multiplies two numbers.
- `/` (Division): Divides one number by another.
- `%` (Modulus): Returns the remainder of a division operation.

#### Example:

```js
let x = 10;
let y = 5;

let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2
let remainder = x % y; // 0
```

### 2. Comparison Operators:
- `==` (Equality): Checks if two values are equal (converts types if necessary).
- `!=` (Inequality): Checks if two values are not equal.
- `===` (Strict Equality): Checks if two values are equal without type conversion.
- `!==` (Strict Inequality): Checks if two values are not equal without type conversion.
- `>` (Greater Than): Checks if one value is greater than another.
- `<` (Less Than): Checks if one value is less than another.
- `>=` (Greater Than or Equal): Checks if one value is greater than or equal to another.
- `<=` (Less Than or Equal): Checks if one value is less than or equal to another.

#### Example:

```
let a = 5;
let b = "5";

console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)
console.log(a > 3); // true
console.log(b < 10); // true
```

### 3. Logical Operators:
- `&&` (Logical AND): Returns true if both conditions are true.
- `||` (Logical OR): Returns true if at least one condition is true.
- `!` (Logical NOT): Inverts the value of a boolean expression.

#### Example:

```
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue); // false
```

### 4. Assignment Operators:
- `=` (Assignment): Assigns a value to a variable.
- `+=` (Add and Assign): Adds a value to the variable and assigns the result.
- `-=` (Subtract and Assign): Subtracts a value from the variable and assigns the result.
- `*=` (Multiply and Assign): Multiplies the variable by a value and assigns the result.
- `/=` (Divide and Assign): Divides the variable by a value and assigns the result.

#### Example:

```js
let x = 10;

x += 5; // x is now 15
x -= 3; // x is now 12
x *= 2; // x is now 24
x /= 4; // x is now 6
```
### 5. Unary Operators:
- `++` (Increment): Increases the value of a variable by 1.
- `--` (Decrement): Decreases the value of a variable by 1.


#### Example:

```js
let count = 0;

count++; // count is now 1
count--; // count is now 0
```

### 6. Ternary Operator:
- `condition ? value1 : value2` (Conditional Operator): Evaluates a condition and returns value1 if true, or value2 if false.

#### Example:

```js
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";

console.log(status); // "Adult"
```

## JavaScript Data Types:
### 1. Primitive Data Types:
- **Number:** Represents numeric values (integers or floating-point).
- **String:** Represents text and characters.
- **Boolean:** Represents true or false values.
- **Undefined:** Represents a variable with no assigned value.
- **Null:** Represents the absence of any value or object.
- **Symbol (ES6):** Represents unique and immutable values (used for object property keys).
### 2. Complex Data Types:
- **Object:** Represents a collection of key-value pairs (properties and methods).
- **Array:** Represents an ordered list of values.
- **Function:** Represents a reusable block of code.
- **Date:** Represents date and time values.
- **RegExp:** Represents regular expressions for pattern matching.

JavaScript is a dynamically typed language, which means that variables can change their data type during runtime. Understanding these operators and data types is essential for writing JavaScript code that performs various tasks and operations.

