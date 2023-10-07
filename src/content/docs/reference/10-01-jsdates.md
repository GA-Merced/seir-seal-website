---
title: Javascript Dates
description: A reference page on javascript dates and object oriented programming
---

# JavaScript Dates
Working with dates and times is a common task in web development, and JavaScript provides a built-in Date object to handle various date-related operations. In this section, we'll explore JavaScript dates, how to create and manipulate them, and common use cases.

## Creating Dates
You can create a new Date object in JavaScript using the following methods:

```js
// Current date and time
const currentDate = new Date();

// Specific date and time (year, month [0-11], day, hour, minute, second)
const customDate = new Date(2023, 8, 15, 14, 30, 0); // September 15, 2023, 14:30:00

// Parsing a date string (formatted as yyyy-mm-dd)
const parsedDate = new Date('2023-09-15');
```

## Accessing Date Components
Once you have a Date object, you can access various date components like the year, month, day, and so on:

```javascript
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth(); // Month is 0-indexed (0 = January, 11 = December)
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
```

## Formatting Dates

To display dates in a human-readable format, you can construct custom date strings using the Date object's methods or utilize libraries like Intl.DateTimeFormat:

```javascript
const date = new Date();

// Formatting with Date methods
const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

// Formatting with Intl.DateTimeFormat
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDateIntl = new Intl.DateTimeFormat('en-US', options).format(date);

console.log(`Formatted Date (Custom): ${formattedDate}`);
console.log(`Formatted Date (Intl): ${formattedDateIntl}`); 
```

## Manipulating Dates
You can perform various operations on Date objects, such as adding or subtracting days, months, or years:

```javascript
const date = new Date();

// Adding days
date.setDate(date.getDate() + 7);

// Adding months
date.setMonth(date.getMonth() + 1);

// Adding years
date.setFullYear(date.getFullYear() + 1);

console.log(`Updated Date: ${date}`);
```

## Comparing Dates
To compare two dates, you can use comparison operators (<, >, <=, >=) or the getTime() method, which returns the number of milliseconds since January 1, 1970 (UTC):

``` javascript
const date1 = new Date('2023-09-15');
const date2 = new Date('2023-09-20');

if (date1.getTime() < date2.getTime()) {
  console.log('date1 is earlier than date2');
} else {
  console.log('date1 is later than date2');
}
```

## Working with Time Zones
JavaScript's Date object operates in the user's local time zone. If you need to work with different time zones, you can use libraries like moment-timezone or the Intl.DateTimeFormat API with options to specify the desired time zone.

```javascript
const date = new Date();

const options = {
  timeZone: 'America/New_York',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
};

const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
console.log(`New York Time: ${formattedTime}`);
```

JavaScript dates provide a powerful way to work with date and time information in web applications. Whether you're displaying dates, performing date calculations, or handling time zones, the Date object and related APIs offer the necessary tools to manage date-related tasks effectively.

## Date Operations Chart

| Type of Date Operation   | Syntax                           | Example                                 |
|--------------------------|----------------------------------|-----------------------------------------|
| Creating a New Date     | `new Date()`                     | `const currentDate = new Date();`       |
|                          | `new Date(year, month, day)`     | `const customDate = new Date(2023, 8, 15);` |
| Parsing a Date String   | `new Date(dateString)`           | `const parsedDate = new Date('2023-09-15');` |
| Accessing Year          | `date.getFullYear()`             | `const year = date.getFullYear();`      |
| Accessing Month         | `date.getMonth()`                | `const month = date.getMonth();`        |
| Accessing Day           | `date.getDate()`                 | `const day = date.getDate();`            |
| Accessing Hours         | `date.getHours()`                | `const hours = date.getHours();`        |
| Accessing Minutes       | `date.getMinutes()`              | `const minutes = date.getMinutes();`    |
| Accessing Seconds       | `date.getSeconds()`              | `const seconds = date.getSeconds();`    |
| Accessing Milliseconds  | `date.getMilliseconds()`         | `const milliseconds = date.getMilliseconds();` |
| Formatting Date         | Custom Formatting                | ```const formattedDate = `${year}-${month + 1}-${day}`;``` |
| Formatting Date         | `Intl.DateTimeFormat`            | ```const formattedDateIntl = new Intl.DateTimeFormat('en-US', options).format(date);``` |
| Adding Days             | `date.setDate(date.getDate() + daysToAdd)` | ```date.setDate(date.getDate() + 7);``` |
| Adding Months           | `date.setMonth(date.getMonth() + monthsToAdd)` | ```date.setMonth(date.getMonth() + 1);``` |
| Adding Years            | `date.setFullYear(date.getFullYear() + yearsToAdd)` | ```date.setFullYear(date.getFullYear() + 1);``` |
| Comparing Dates        | Using Comparison Operators (`<`, `>`, `<=`, `>=`) | ```if (date1.getTime() < date2.getTime()) { /* Comparison logic */ }``` |
| Comparing Dates        | Using `getTime()` Method         | ```if (date1.getTime() < date2.getTime()) { /* Comparison logic */ }``` |
| Working with Time Zones | `Intl.DateTimeFormat` with `timeZone` option | ```const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);``` |
| Accessing Day of Week    | `date.getDay()`                  | `const dayOfWeek = date.getDay();`      |
| Accessing Day of Week (Name) | `Intl.DateTimeFormat` with `weekday` option | ```const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);``` |
| Accessing Month (Name)  | `Intl.DateTimeFormat` with `month` option | ```const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);``` |
| Formatting Time         | Custom Formatting                | ```const formattedTime = `${hours}:${minutes}:${seconds}`;``` |
| Formatting Time         | `Intl.DateTimeFormat` with `hour`, `minute`, and `second` options | ```const formattedTimeIntl = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' }).format(date);``` |
| UTC Date               | `date.toISOString()`              | `const utcDate = date.toISOString();`    |
| UNIX Timestamp         | `date.getTime()`                  | `const timestamp = date.getTime();`      |
| Date Difference (in Days) | Calculate the difference in days between two dates | ```const daysDifference = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));``` |
| Date Difference (in Hours) | Calculate the difference in hours between two dates | ```const hoursDifference = Math.floor((date2 - date1) / (1000 * 60 * 60));``` |
| Date Difference (in Minutes) | Calculate the difference in minutes between two dates | ```const minutesDifference = Math.floor((date2 - date1) / (1000 * 60));``` |
| Date Difference (in Seconds) | Calculate the difference in seconds between two dates | ```const secondsDifference = Math.floor((date2 - date1) / 1000);``` |
| Set Time               | `date.setHours(hours)`            | `date.setHours(14);`                      |
| Set Time               | `date.setMinutes(minutes)`        | `date.setMinutes(30);`                   |
| Set Time               | `date.setSeconds(seconds)`        | `date.setSeconds(45);`                   |
| Set Time               | `date.setMilliseconds(milliseconds)` | `date.setMilliseconds(500);`            |
| Beginning/End of Month | Finding the first day of the month | ```date.setDate(1);``` |
| Beginning/End of Month | Finding the last day of the month  | ```date.setMonth(date.getMonth() + 1, 0);``` |
| Adding/Subtracting Weeks | `date.setDate(date.getDate() + (7 * weeksToAdd))` | ```date.setDate(date.getDate() + (7 * 2));``` |
| Unix Timestamp to Date | Creating a Date from a Unix timestamp | ```const unixTimestamp = 1631767200000; const unixDate = new Date(unixTimestamp);``` |
| Daylight Saving Time   | Checking if the date is during DST | ```const isDST = date.getTimezoneOffset() < -300;``` |

# DateFNS

Date-FNS (Date Functions) is a popular JavaScript library for manipulating and formatting dates and times in a simple and consistent manner. It offers a wide range of functions for working with dates, including parsing, formatting, and calculating differences between dates. Date-FNS is designed to be easy to use and is often chosen for its simplicity and reliability.

Here's an overview of Date-FNS:

## What is Date-FNS?
Date-FNS is a JavaScript library that provides a collection of utility functions for working with dates and times. It is not a full-fledged date and time library like Moment.js but focuses on providing specific date and time operations in a modular and efficient way. Date-FNS follows the philosophy of being "like lodash for dates."

## How to Use Date-FNS
### Using Date-FNS via CDN:
You can include Date-FNS directly in your HTML file using a Content Delivery Network (CDN). Add the following script tag to your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/2.23.0/date-fns.min.js"></script>
```

Now, you can use Date-FNS functions in your JavaScript code.

### Using Date-FNS via npm:
To use Date-FNS in a Node.js project or with a build system like Webpack or Parcel, you can install it via npm (Node Package Manager). Open your terminal and run:

```js
npm install date-fns
```

Then, you can import Date-FNS functions in your JavaScript code like this:

```js
const { format, parseISO, differenceInDays } = require('date-fns');
```

## Overview of Usage
Date-FNS provides a variety of functions that cover common date and time operations. Here's a brief overview of some of the most commonly used functions:

### Formatting Dates: 
You can format dates using functions like format. For example:

```js
const formattedDate = format(new Date(), 'yyyy-MM-dd');
```

### Parsing Dates: 
Parse date strings into JavaScript Date objects using functions like parseISO:

```js
const date = parseISO('2023-09-30T12:00:00');
```

### Calculating Date Differences: 
Find the difference between two dates with functions like differenceInDays:

```js
const startDate = new Date('2023-09-01');
const endDate = new Date('2023-09-30');
const daysDifference = differenceInDays(endDate, startDate);
```

### Adding and Subtracting Time: 
Functions like addDays and subMonths allow you to manipulate dates:

```js
const newDate = addDays(new Date(), 7);
```

### Comparing Dates: 
Functions like isAfter, isBefore, and isEqual help you compare dates:

```js
const isFuture = isAfter(new Date('2024-01-01'), new Date());
```

Date-FNS provides many more functions, each with its specific purpose. You can consult the official documentation for a comprehensive list of functions and their usage: Date-FNS Documentation.

## DateFNS Chart

| Operation                | Syntax                                          | Example                                              |
|--------------------------|-------------------------------------------------|------------------------------------------------------|
| Format a Date            | `format(date, formatString)`                   | `format(new Date(), 'yyyy-MM-dd HH:mm:ss')`          |
| Parse a Date             | `parseISO(dateString)`                         | `parseISO('2023-09-30T12:00:00')`                   |
| Calculate Date Diff      | `differenceInDays(dateA, dateB)`               | `differenceInDays(new Date('2023-09-30'), new Date('2023-09-01'))` |
| Add Days                | `addDays(date, amount)`                       | `addDays(new Date(), 7)`                            |
| Subtract Months          | `subMonths(date, amount)`                     | `subMonths(new Date(), 2)`                          |
| Is Date After            | `isAfter(dateA, dateB)`                       | `isAfter(new Date('2024-01-01'), new Date())`       |
| Is Date Before           | `isBefore(dateA, dateB)`                      | `isBefore(new Date('2023-09-01'), new Date())`      |
| Is Date Equal            | `isEqual(dateA, dateB)`                       | `isEqual(new Date('2023-09-30'), new Date())`       |
| Get Day of the Week      | `getDay(date)`                                | `getDay(new Date('2023-09-30'))`                    |
| Get Month                | `getMonth(date)`                              | `getMonth(new Date('2023-09-30'))`                  |
| Get Year                 | `getYear(date)`                               | `getYear(new Date('2023-09-30'))`                   |
| Get Hours                | `getHours(date)`                              | `getHours(new Date('2023-09-30T12:00:00'))`        |
| Get Minutes              | `getMinutes(date)`                            | `getMinutes(new Date('2023-09-30T12:30:00'))`      |
| Get Seconds              | `getSeconds(date)`                            | `getSeconds(new Date('2023-09-30T12:45:15'))`      |
| Add Hours                | `addHours(date, amount)`                      | `addHours(new Date(), 3)`                           |
| Add Minutes              | `addMinutes(date, amount)`                    | `addMinutes(new Date(), 30)`                        |
| Add Seconds              | `addSeconds(date, amount)`                    | `addSeconds(new Date(), 15)`                        |
| Start of Day             | `startOfDay(date)`                            | `startOfDay(new Date('2023-09-30T16:45:00'))`      |
| End of Day               | `endOfDay(date)`                              | `endOfDay(new Date('2023-09-30T16:45:00'))`        |
| Get Days in Month        | `getDaysInMonth(date)`                        | `getDaysInMonth(new Date('2023-09-01'))`            |
| Format Relative Time     | `formatDistanceToNow(date)`                   | `formatDistanceToNow(new Date('2023-09-30T12:00:00'))` |
| Is Leap Year             | `isLeapYear(date)`                            | `isLeapYear(new Date('2024-01-01'))`                |
| Set Year                 | `setYear(date, year)`                         | `setYear(new Date(), 2023)`                        |
| Set Month                | `setMonth(date, month)`                       | `setMonth(new Date(), 5)`                          |
| Subtract Days            | `subDays(date, amount)`                       | `subDays(new Date(), 7)`                            |
| Add Months               | `addMonths(date, amount)`                     | `addMonths(new Date(), 3)`                          |
| Set Day                  | `setDay(date, dayOfWeek, options)`            | `setDay(new Date(), 1, { weekStartsOn: 1 })`        |
| Set Hours                | `setHours(date, hours)`                       | `setHours(new Date(), 10)`                          |
| Set Minutes              | `setMinutes(date, minutes)`                   | `setMinutes(new Date(), 30)`                        |
| Set Seconds              | `setSeconds(date, seconds)`                   | `setSeconds(new Date(), 45)`                        |
| Get Time                 | `getTime(date)`                               | `getTime(new Date())`                               |
| Get ISO Week             | `getISOWeek(date)`                            | `getISOWeek(new Date('2023-09-30'))`                |
| Get ISO Year             | `getISOYear(date)`                            | `getISOYear(new Date('2023-09-30'))`                |
| Get Day of the Month     | `getDate(date)`                               | `getDate(new Date('2023-09-30'))`                   |
| Get Timezone Offset      | `getTimezoneOffset(date)`                     | `getTimezoneOffset(new Date())`                     |
| Add Years                | `addYears(date, amount)`                     | `addYears(new Date(), 5)`                           |
| Start of Month           | `startOfMonth(date)`                          | `startOfMonth(new Date('2023-09-15'))`             |
| End of Month             | `endOfMonth(date)`                            | `endOfMonth(new Date('2023-09-15'))`               |
| Set Minutes and Seconds  | `setMinutesAndSeconds(date, minutes, seconds)` | `setMinutesAndSeconds(new Date(), 15, 30)`        |
| Set Hours and Minutes    | `setHoursAndMinutes(date, hours, minutes)`     | `setHoursAndMinutes(new Date(), 9, 45)`           |
| Get Unix Timestamp       | `getUnixTime(date)`                           | `getUnixTime(new Date())`                          |
| Set Unix Timestamp       | `fromUnixTime(unixTimestamp)`                 | `fromUnixTime(1633000000)`                         |
| Get Quarter              | `getQuarter(date)`                            | `getQuarter(new Date('2023-09-30'))`               |
| Is Today                 | `isToday(date)`                               | `isToday(new Date())`                              |


