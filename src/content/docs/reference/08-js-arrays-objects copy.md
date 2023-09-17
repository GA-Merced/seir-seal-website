---
title: Javascript Arrays and Objects
description: A reference page on Javascript Arrays and Objects
---

## JavaScript Arrays:
### 1. Syntax:
In JavaScript, an array is a data structure that stores a collection of values. Arrays can hold values of different data types, and they are defined using square brackets []. Elements within an array are separated by commas.

#### Example of array creation:

```js
let fruits = ['apple', 'banana', 'cherry'];
```

### 2. Methods and Examples:
JavaScript provides a variety of methods to work with arrays. Here are some common array methods along with 
#### examples:

| Method                  | Purpose                                     | Example Usage                                            |
|-------------------------|---------------------------------------------|----------------------------------------------------------|
| `push(element1, ...)`   | Adds one or more elements to the end of the array. | `fruits.push('orange', 'grape')` adds elements to `fruits`. |
| `pop()`                 | Removes and returns the last element of the array. | `let lastFruit = fruits.pop()` removes and returns the last element. |
| `unshift(element1, ...)`| Adds one or more elements to the beginning of the array. | `fruits.unshift('strawberry', 'kiwi')` adds elements to the start. |
| `shift()`               | Removes and returns the first element of the array. | `let firstFruit = fruits.shift()` removes and returns the first element. |
| `concat(array2, ...)`   | Combines the array with other arrays and returns a new array. | `let combined = fruits.concat(vegetables)` combines arrays. |
| `splice(start, deleteCount, item1, ...)` | Changes array by removing, replacing, or adding elements. | `fruits.splice(2, 2, 'pear', 'peach')` removes and adds elements. |
| `slice(start, end)`     | Returns a shallow copy of a portion of the array. | `let subset = fruits.slice(1, 4)` creates a subset of the array. |
| `join(separator)`       | Joins all elements into a string with a specified separator. | `let fruitString = fruits.join(', ')` joins with a comma and space. |
| `indexOf(searchElement, fromIndex)` | Returns the first index at which a given element is found. | `let index = fruits.indexOf('banana')` finds the index of 'banana'. |
| `lastIndexOf(searchElement, fromIndex)` | Returns the last index at which a given element is found. | `let lastIndex = fruits.lastIndexOf('banana')` finds the last index. |
| `includes(searchElement, fromIndex)` | Checks if an array contains a specific element. | `let includesBanana = fruits.includes('banana')` checks for 'banana'. |
| `find(callback)`        | Returns the first element in the array that satisfies a provided callback function. | `let foundFruit = fruits.find(fruit => fruit.length > 5)` finds a fruit. |
| `findIndex(callback)`   | Returns the index of the first element in the array that satisfies a provided callback function. | `let foundIndex = fruits.findIndex(fruit => fruit.length > 5)` finds the index. |
| `filter(callback)`      | Creates a new array with all elements that pass a provided callback function's test. | `let filteredFruits = fruits.filter(fruit => fruit.startsWith('a'))` filters fruits. |
| `map(callback)`         | Creates a new array with the results of calling a provided callback function on every element. | `let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase())` maps fruits. |
| `forEach(callback)`     | Executes a provided callback function once for each array element. | `fruits.forEach(fruit => console.log(fruit))` iterates over fruits. |
| `every(callback)`       | Tests if all elements in the array pass a provided callback function's test. | `let allAreStrings = fruits.every(fruit => typeof fruit === 'string')` checks elements. |
| `some(callback)`        | Tests if at least one element in the array passes a provided callback function's test. | `let someAreLong = fruits.some(fruit => fruit.length > 8)` checks elements. |
| `reduce(callback, initialValue)` | Applies a callback function against an accumulator and each element, reducing the array to a single value. | `let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0)` reduces. |
| `reduceRight(callback, initialValue)` | Applies a callback function against an accumulator and each element in reverse order. | `let reversedString = fruits.reduceRight((str, fruit) => str + ' ' + fruit, '')` reduces right-to-left. |
| `sort(compareFunction)` | Sorts the elements of an array in place and returns the sorted array. | `fruits.sort()` sorts alphabetically. |
| `reverse()`             | Reverses the order of elements in the array in place. | `fruits.reverse()` reverses the order. |
| `isArray(array)`        | Checks if a variable is an array. | `Array.isArray(fruits)` checks if `fruits` is an array. |


### 3. Destructuring Arrays:
Array destructuring allows you to extract values from an array and assign them to variables in a concise way.

#### Example:

```js
let colors = ['red', 'green', 'blue'];

let [firstColor, secondColor] = colors;

console.log(firstColor); // 'red'
console.log(secondColor); // 'green'
```

### 4. Spread/Rest Operator with Arrays:

The spread (...) and rest (...) operators provide flexibility when working with arrays.

**Spread Operator (...):** Allows you to create a shallow copy of an array or merge arrays.
#### Example:

```js
let fruits = ['apple', 'banana'];
let moreFruits = ['cherry', 'kiwi'];

let allFruits = [...fruits, ...moreFruits]; // allFruits: ['apple', 'banana', 'cherry', 'kiwi']
```

**Rest Operator (...):** Collects remaining elements into an array.
Example:

```js
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

JavaScript arrays are versatile and widely used for storing and manipulating collections of data. Understanding array methods, destructuring, and the spread/rest operators is essential for effective JavaScript programming.

## JavaScript Objects:
### 1. What Are They?
In JavaScript, an object is a data structure that allows you to store and organize data as key-value pairs. Objects are used to represent real-world entities or abstract concepts. Each key (property) in an object is associated with a value, and these properties can be of different data types, including other objects and functions.

### 2. Syntax:
JavaScript objects are defined using curly braces `{}` and consist of a collection of key-value pairs separated by colons (`:`). Keys are strings (or symbols in ES6), and values can be of any data type.

#### Example of object creation:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
```

### 3. Dot Notation vs. Square Bracket Notation:
You can access and modify object properties using either dot notation or square bracket notation.

**Dot Notation:** Uses a period followed by the property name.

#### Example:

```js
let firstName = person.firstName; // "John"
person.age = 31; // Modifying the age property
```

**Square Bracket Notation:** Uses square brackets with the property name as a string.

#### Example:

```js
let lastName = person['lastName']; // "Doe"
person['age'] = 32; // Modifying the age property
```

Square bracket notation is useful when property names contain special characters or spaces, or when the property name is dynamic.

### 4. Defining Methods in Objects:
You can define methods (functions) as object properties. These methods can perform actions or calculations related to the object's data.

#### Example:

```js
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};


let sum = calculator.add(5, 3); // 8
let difference = calculator.subtract(10, 4); // 6
```

In modern JavaScript (ES6+), you can use concise method notation:

```js
let calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
```

### 5. Destructuring Objects:
Object destructuring allows you to extract values from an object and assign them to variables in a concise way.

#### Example:

```js
let person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25
};

let { firstName, age } = person;

console.log(firstName); // "Alice"
console.log(age); // 25
```

### 6. Spread/Rest Operator with Objects:
The spread (...) and rest (...) operators can be used with objects for various purposes.

**Spread Operator (...):** Allows you to create a shallow copy of an object or merge objects.
#### Example:

```js
let defaults = { theme: "light", fontSize: 12 };
let userSettings = { fontSize: 16 };

let mergedSettings = { ...defaults, ...userSettings }; // Merging objects
```
**Rest Operator (...):** Collects remaining properties into a new object.
#### Example:

```js
let { firstName, ...rest } = person;

console.log(firstName); // "Alice"
console.log(rest); // { lastName: "Smith", age: 25 }
```

The rest operator can be used to collect remaining properties when destructuring objects or to gather arguments into an object in function parameters.

JavaScript objects are fundamental to structuring and organizing data in your code. Understanding how to work with objects, define methods, destructure them, and use spread/rest operators provides you with powerful tools for building complex applications.

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
