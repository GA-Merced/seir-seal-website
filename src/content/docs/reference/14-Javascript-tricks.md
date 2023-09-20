---
title: Useful Javascript Tricks
description: Reference of useful JS Tricks
---

## 1-25

| Trick         | Purpose                               | Syntax                                           | Example                                     |
|---------------|---------------------------------------|--------------------------------------------------|---------------------------------------------|
| Trick 1       | Remove duplicates from an array       | `Array.from(new Set(array))`                     | `const uniqueArray = Array.from(new Set([1, 2, 2, 3]))` |
| Trick 2       | Check if a variable is defined        | `typeof variable !== 'undefined'`               | ```javascript if (typeof myVar !== 'undefined') { /* do something */ }``` |
| Trick 3       | Create an array with a range of numbers | `Array.from({ length: n }, (_, i) => i)`       | `const numbers = Array.from({ length: 5 }, (_, i) => i);` |
| Trick 4       | Convert an array-like object to an array | `Array.from(arrayLike)`                        | `const arrayLike = { 0: 'one', 1: 'two', length: 2 }; const newArray = Array.from(arrayLike);` |
| Trick 5       | Merge two objects                     | `const merged = { ...obj1, ...obj2 }`           | ```javascript const obj1 = { a: 1, b: 2 }; const obj2 = { b: 3, c: 4 }; const merged = { ...obj1, ...obj2 };``` |
| Trick 6       | Shuffle an array                      | `array.sort(() => Math.random() - 0.5)`         | ```javascript const shuffledArray = array.sort(() => Math.random() - 0.5);``` |
| Trick 7       | Check if a string contains a substring | `string.includes(substring)`                   | `const contains = 'Hello, world!'.includes('world');` |
| Trick 8       | Get the current date in ISO format    | `const isoDate = new Date().toISOString();`     | `const isoDate = new Date().toISOString();` |
| Trick 9       | Find the maximum number in an array   | `const max = Math.max(...array)`               | `const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; const max = Math.max(...numbers);` |
| Trick 10      | Check if an array is empty            | `const isEmpty = array.length === 0;`          | `const isEmpty = [].length === 0;` |
| Trick 11      | Flatten a nested array                | `const flatArray = nestedArray.flat();`        | `const nestedArray = [1, [2, 3], [4, [5, 6]]]; const flatArray = nestedArray.flat(Infinity);` |
| Trick 12      | Convert a string to uppercase          | `const uppercased = string.toUpperCase();`     | `const string = 'hello'; const uppercased = string.toUpperCase();` |
| Trick 13      | Convert a string to lowercase          | `const lowercased = string.toLowerCase();`     | `const string = 'Hello'; const lowercased = string.toLowerCase();` |
| Trick 14      | Replace all occurrences of a substring | `const replaced = string.replace(/old/g, 'new');` | `const string = 'old text old text'; const replaced = string.replace(/old/g, 'new');` |
| Trick 15      | Check if an object is empty            | `const isEmpty = Object.keys(obj).length === 0;` | `const isEmpty = Object.keys({}).length === 0;` |
| Trick 16      | Convert a string to an array of characters | `const charArray = string.split('');`        | `const string = 'hello'; const charArray = string.split('');` |
| Trick 17      | Get the last element of an array       | `const lastElement = array[array.length - 1];` | `const array = [1, 2, 3, 4, 5]; const lastElement = array[array.length - 1];` |
| Trick 18      | Generate a random number within a range | `const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;` | `const min = 1; const max = 10; const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;` |
| Trick 19      | Reverse a string                      | `const reversed = string.split('').reverse().join('');` | `const string = 'hello'; const reversed = string.split('').reverse().join('');` |
| Trick 20      | Check if an array contains a specific value | `const containsValue = array.includes(value);` | `const array = [1, 2, 3, 4, 5]; const value = 3; const containsValue = array.includes(value);` |
| Trick 21      | Find the index of an element in an array | `const index = array.indexOf(element);`     | `const array = [1, 2, 3, 4, 5]; const element = 3; const index = array.indexOf(element);` |
| Trick 22      | Convert a number to a string with leading zeros | `const strWithZeros = num.toString().padStart(width, '0');` | `const num = 42; const strWithZeros = num.toString().padStart(4, '0');` |
| Trick 23      | Swap the values of two variables      | `let temp = a; a = b; b = temp;`               | ```javascript let a = 1; let b = 2; let temp = a; a = b; b = temp;``` |
| Trick 24      | Truncate a string to a specified length | `const truncated = string.slice(0, maxLength);` | `const string = 'This is a long string'; const maxLength = 10; const truncated = string.slice(0, maxLength);` |
| Trick 25      | Calculate the factorial of a number   | `function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); }` | `const result = factorial(5);` |

## 26-50

| Trick         | Purpose                               | Syntax                                           | Example                                     |
|---------------|---------------------------------------|--------------------------------------------------|---------------------------------------------|
| Trick 26      | Convert a string to a number          | `const num = parseFloat(string);`               | `const string = '3.14'; const num = parseFloat(string);` |
| Trick 27      | Capitalize the first letter of a string | `const capitalized = string.charAt(0).toUpperCase() + string.slice(1);` | `const string = 'hello'; const capitalized = string.charAt(0).toUpperCase() + string.slice(1);` |
| Trick 28      | Check if an element exists in the DOM | `const elementExists = !!document.querySelector(selector);` | `const elementExists = !!document.querySelector('.my-element');` |
| Trick 29      | Convert an object to a JSON string    | `const jsonString = JSON.stringify(obj);`        | `const obj = { name: 'John', age: 30 }; const jsonString = JSON.stringify(obj);` |
| Trick 30      | Parse a JSON string to an object      | `const obj = JSON.parse(jsonString);`            | `const jsonString = '{"name":"John","age":30}'; const obj = JSON.parse(jsonString);` |
| Trick 31      | Sort an array of objects by a property | `array.sort((a, b) => a.property - b.property);` | ```javascript const people = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]; people.sort((a, b) => a.age - b.age);``` |
| Trick 32      | Get the current URL                   | `const currentURL = window.location.href;`      | `const currentURL = window.location.href;` |
| Trick 33      | Execute a function after a delay      | `setTimeout(() => { /* code to execute */ }, delayInMilliseconds);` | ```javascript setTimeout(() => { console.log('Delayed function executed!'); }, 2000);``` |
| Trick 34      | Remove whitespace from a string        | `const trimmed = string.replace(/\s+/g, '');`    | `const string = '  Hello,  world!  '; const trimmed = string.replace(/\s+/g, '');` |
| Trick 35      | Get the current timestamp (milliseconds) | `const timestamp = Date.now();`               | `const timestamp = Date.now();` |
| Trick 36      | Calculate the difference between two dates | `const differenceInDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));` | ```javascript const date1 = new Date('2023-09-01'); const date2 = new Date('2023-09-10'); const differenceInDays = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));``` |
| Trick 37      | Check if a number is an integer       | `const isInteger = Number.isInteger(num);`     | `const num = 42; const isInteger = Number.isInteger(num);` |
| Trick 38      | Get the current day of the week      | `const dayOfWeek = new Date().getDay();`        | `const dayOfWeek = new Date().getDay();` |
| Trick 39      | Find the smallest number in an array | `const min = Math.min(...array);`               | `const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; const min = Math.min(...numbers);` |
| Trick 40      | Convert an array to a comma-separated string | `const csvString = array.join(',');`        | `const array = ['apple', 'banana', 'cherry']; const csvString = array.join(',');` |
| Trick 41      | Get the current time in HH:MM format  | `const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });` | `const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });` |
| Trick 42      | Create a copy of an array             | `const copy = array.slice();`                   | `const originalArray = [1, 2, 3]; const copy = originalArray.slice();` |
| Trick 43      | Calculate the square root of a number | `const sqrt = Math.sqrt(num);`                  | `const num = 16; const sqrt = Math.sqrt(num);` |
| Trick 44      | Check if a function is defined       | `const isDefined = typeof func === 'function';`  | `const isDefined = typeof myFunction === 'function';` |
| Trick 45      | Generate a random hexadecimal color   | `const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);` | `const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);` |
| Trick 46      | Convert a string to title case        | `const titleCase = string.toLowerCase().replace(/^(.)|\s+(.)/g, ($1) => $1.toUpperCase());` | `const string = 'this is a title'; const titleCase = string.toLowerCase().replace(/^(.)|\s+(.)/g, ($1) => $1.toUpperCase());` |
| Trick 47      | Check if an array contains only unique values | `const isUnique = array.length === new Set(array).size;` | `const array = [1, 2, 3, 4, 5]; const isUnique = array.length === new Set(array).size;` |
| Trick 48      | Get the current month                 | `const currentMonth = new Date().getMonth() + 1;` | `const currentMonth = new Date().getMonth() + 1;` |
| Trick 49      | Get a random item from an array       | `const randomItem = array[Math.floor(Math.random() * array.length)];` | `const array = [1, 2, 3, 4, 5]; const randomItem = array[Math.floor(Math.random() * array.length)];` |
| Trick 50      | Convert a string with spaces to kebab case | `const kebabCase = string.replace(/\s+/g, '-').toLowerCase();` | `const string = 'This is a Test String'; const kebabCase = string.replace(/\s+/g, '-').toLowerCase();` |

## 51-75

| Trick         | Purpose                               | Syntax                                           | Example                                     |
|---------------|---------------------------------------|--------------------------------------------------|---------------------------------------------|
| Trick 51      | Check if a string starts with a substring | `const startsWith = string.startsWith(substring);` | `const string = 'Hello, world!'; const startsWith = string.startsWith('Hello');` |
| Trick 52      | Check if a string ends with a substring | `const endsWith = string.endsWith(substring);`   | `const string = 'Hello, world!'; const endsWith = string.endsWith('world!');` |
| Trick 53      | Convert a number to a binary string   | `const binaryString = num.toString(2);`         | `const num = 42; const binaryString = num.toString(2);` |
| Trick 54      | Check if a string is empty or contains only whitespace | `const isEmptyOrWhitespace = string.trim() === '';` | `const string = '   '; const isEmptyOrWhitespace = string.trim() === '';` |
| Trick 55      | Check if an array contains a specific object | `const containsObject = array.some(item => item === object);` | `const array = [{ id: 1 }, { id: 2 }, { id: 3 }]; const object = { id: 2 }; const containsObject = array.some(item => item.id === object.id);` |
| Trick 56      | Get the first N elements of an array  | `const firstN = array.slice(0, N);`              | `const array = [1, 2, 3, 4, 5]; const firstN = array.slice(0, 3);` |
| Trick 57      | Get the last N elements of an array   | `const lastN = array.slice(-N);`                | `const array = [1, 2, 3, 4, 5]; const lastN = array.slice(-3);` |
| Trick 58      | Swap the values of two objects        | ```javascript const temp = {...obj1}; Object.assign(obj1, obj2); Object.assign(obj2, temp);``` | ```javascript const obj1 = { a: 1, b: 2 }; const obj2 = { b: 3, c: 4 }; const temp = { ...obj1 }; Object.assign(obj1, obj2); Object.assign(obj2, temp);``` |
| Trick 59      | Remove an element from an array by value | `array = array.filter(item => item !== value);` | `let array = [1, 2, 3, 4, 5]; const value = 3; array = array.filter(item => item !== value);` |
| Trick 60      | Check if an array is a subset of another array | `const isSubset = subset.every(item => array.includes(item));` | `const array = [1, 2, 3, 4, 5]; const subset = [2, 3]; const isSubset = subset.every(item => array.includes(item));` |
| Trick 61      | Find the index of the maximum value in an array | `const maxIndex = array.indexOf(Math.max(...array));` | `const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; const maxIndex = array.indexOf(Math.max(...array));` |
| Trick 62      | Calculate the average of an array     | `const average = array.reduce((acc, val) => acc + val, 0) / array.length;` | `const array = [1, 2, 3, 4, 5]; const average = array.reduce((acc, val) => acc + val, 0) / array.length;` |
| Trick 63      | Reverse the order of words in a string | `const reversedWords = string.split(' ').reverse().join(' ');` | `const string = 'Hello, world!'; const reversedWords = string.split(' ').reverse().join(' ');` |
| Trick 64      | Convert a number to currency format   | `const currencyFormatted = num.toFixed(2);`    | `const num = 42.567; const currencyFormatted = num.toFixed(2);` |
| Trick 65      | Create a unique identifier (UUID)      | ```javascript const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); });``` | ```javascript const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16); });``` |
| Trick 66      | Convert a string with hyphens to camelCase | `const camelCase = string.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());` | `const string = 'this-is-a-test'; const camelCase = string.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());` |
| Trick 67      | Check if a value is a JavaScript array | `const isArray = Array.isArray(value);`        | `const value = [1, 2, 3]; const isArray = Array.isArray(value);` |
| Trick 68      | Deep copy an object                   | `const deepCopy = JSON.parse(JSON.stringify(object));` | `const object = { a: 1, b: { c: 2 } }; const deepCopy = JSON.parse(JSON.stringify(object));` |
| Trick 69      | Calculate the length of an object (number of properties) | `const length = Object.keys(obj).length;` | `const obj = { a: 1, b: 2, c: 3 }; const length = Object.keys(obj).length;` |
| Trick 70      | Check if an element is visible in the viewport | ```javascript const isVisible = (element) => { const rect = element.getBoundingClientRect(); return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)); };``` | ```javascript const element = document.getElementById('myElement'); const isVisible = (element) => { const rect = element.getBoundingClientRect(); return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)); }; isVisible(element);``` |
| Trick 71      | Find the median value in an array     | ```javascript const median = (arr) => { const mid = Math.floor(arr.length / 2), nums = [...arr].sort((a, b) => a - b); return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2; };``` | ```javascript const numbers = [5, 1, 3, 9, 2]; const median = (arr) => { const mid = Math.floor(arr.length / 2), nums = [...arr].sort((a, b) => a - b); return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2; }; median(numbers);``` |
| Trick 72      | Encode a URL parameter                | `const encodedParam = encodeURIComponent(param);` | `const param = 'user input'; const encodedParam = encodeURIComponent(param);` |
| Trick 73      | Check if a value is a primitive       | `const isPrimitive = (value !== Object(value));` | `const isPrimitive = (42 !== Object(42));` |
| Trick 74      | Create an array with a sequence of numbers | `const sequence = Array.from({ length: n }, (_, i) => i + start);` | `const n = 5; const start = 1; const sequence = Array.from({ length: n }, (_, i) => i + start);` |
| Trick 75      | Check if a year is a leap year        | `const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);` | `const year = 2024; const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);` |

## 76-100


| Trick         | Purpose                               | Syntax                                           | Example                                     |
|---------------|---------------------------------------|--------------------------------------------------|---------------------------------------------|
| Trick 76      | Create an array with unique values     | `const uniqueArray = [...new Set(array)];`      | `const array = [1, 2, 2, 3, 3, 4]; const uniqueArray = [...new Set(array)];` |
| Trick 77      | Round a number to a specified decimal place | `const rounded = Number(number.toFixed(decimalPlaces));` | `const number = 3.14159; const decimalPlaces = 2; const rounded = Number(number.toFixed(decimalPlaces));` |
| Trick 78      | Convert a string to a date object     | `const date = new Date(string);`                | `const dateString = '2023-09-17'; const date = new Date(dateString);` |
| Trick 79      | Generate a random integer within a range | `const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;` | `const min = 1; const max = 10; const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;` |
| Trick 80      | Remove duplicates from an array using a Set | `const uniqueArray = [...new Set(array)];`      | `const array = [1, 2, 2, 3, 3, 4]; const uniqueArray = [...new Set(array)];` |
| Trick 81      | Get the current year                   | `const currentYear = new Date().getFullYear();` | `const currentYear = new Date().getFullYear();` |
| Trick 82      | Get the current month (zero-based)     | `const currentMonth = new Date().getMonth();`   | `const currentMonth = new Date().getMonth();` |
| Trick 83      | Get the current day of the month      | `const currentDay = new Date().getDate();`      | `const currentDay = new Date().getDate();` |
| Trick 84      | Sort an array of strings alphabetically | `const sortedArray = array.sort();`             | `const array = ['banana', 'apple', 'cherry']; const sortedArray = array.sort();` |
| Trick 85      | Generate a random color in RGB format  | `const randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';` | `const randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';` |
| Trick 86      | Check if an element is an array       | `const isArray = Array.isArray(element);`       | `const element = [1, 2, 3]; const isArray = Array.isArray(element);` |
| Trick 87      | Get the current timestamp (seconds)    | `const timestamp = Math.floor(Date.now() / 1000);` | `const timestamp = Math.floor(Date.now() / 1000);` |
| Trick 88      | Replace all occurrences of a character in a string | `const replaced = string.replace(/char/g, 'replacement');` | `const string = 'a-b-c-d'; const replaced = string.replace(/-/g, '_');` |
| Trick 89      | Calculate the distance between two points | ```javascript const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));``` | ```javascript const x1 = 0, y1 = 0, x2 = 3, y2 = 4; const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));``` |
| Trick 90      | Create a function with default parameters | ```javascript function greet(name = 'Anonymous') { return `Hello, ${name}!`; }``` | ```javascript function greet(name = 'Anonymous') { return `Hello, ${name}!`; } const message = greet('Alice');``` |
| Trick 91      | Get the current time in HH:MM:SS format | ```javascript const now = new Date(); const formattedTime = now.toLocaleTimeString('en-US');``` | ```javascript const now = new Date(); const formattedTime = now.toLocaleTimeString('en-US');``` |
| Trick 92      | Check if a value is NaN               | `const isNaN = Number.isNaN(value);`             | `const value = 'Not a number'; const isNaN = Number.isNaN(value);` |
| Trick 93      | Create a random alphanumeric string   | ```javascript const randomString = Math.random().toString(36).substring(2, 10);``` | ```javascript const randomString = Math.random().toString(36).substring(2, 10);``` |
| Trick 94      | Find the index of the minimum value in an array | `const minIndex = array.indexOf(Math.min(...array));` | `const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]; const minIndex = array.indexOf(Math.min(...array));` |
| Trick 95      | Convert a string to an array of words | `const words = string.split(' ');`             | `const string = 'Hello world'; const words = string.split(' ');` |
| Trick 96      | Remove leading and trailing whitespace from a string | `const trimmed = string.trim();`               | `const string = '   Trim me   '; const trimmed = string.trim();` |
| Trick 97      | Check if an array contains only truthy values | `const isTruthy = array.every(Boolean);`       | `const array = [true, 1, 'hello', 42]; const isTruthy = array.every(Boolean);` |
| Trick 98      | Get the current time in milliseconds since epoch | `const currentTimeMillis = Date.now();`       | `const currentTimeMillis = Date.now();` |
| Trick 99      | Find the index of the first occurrence of an element in an array | `const index = array.indexOf(element);`      | `const array = ['apple', 'banana', 'cherry']; const element = 'banana'; const index = array.indexOf(element);` |
| Trick 100     | Convert a string to an array of characters | `const charArray = [...string];`               | `const string = 'hello'; const charArray = [...string];` |



## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
