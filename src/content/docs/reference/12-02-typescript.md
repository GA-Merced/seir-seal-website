---
title: Typescript
description: The Basics of Typescript
---

# TypeScript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is often referred to as a "superset" of JavaScript because it builds upon JavaScript by adding static typing, classes, interfaces, and other features. TypeScript's primary goal is to make JavaScript development more scalable and maintainable, especially for large-scale applications.

## Key Features of TypeScript:

**Static Typing:** TypeScript introduces static typing, which allows you to specify the data types of variables, function parameters, and return values. This helps catch type-related errors at compile-time rather than runtime.

**Classes and Interfaces:** TypeScript supports class-based object-oriented programming with features like inheritance, encapsulation, and interfaces for defining object shapes and contracts.

**Compilation:** TypeScript code is transpiled (compiled) into JavaScript code before execution. You can choose the target JavaScript version (e.g., ES5, ES6) to ensure compatibility with different environments.

**Tooling:** TypeScript has excellent tooling support, including code editors like Visual Studio Code that provide autocompletion, type checking, and refactoring assistance.

**Type Definitions:** TypeScript can work with JavaScript libraries through type definition files (.d.ts) that describe the types and interfaces used by external libraries. Popular libraries like React, Node.js, and Express have type definitions available.

## Using TypeScript with Node.js:

Here's how to set up and use TypeScript with Node.js:

### 1. Install TypeScript:

You can install TypeScript globally using npm (Node Package Manager) or yarn:

```bash
npm install -g typescript
# or
yarn global add typescript
```

### 2. Initialize a TypeScript Project:

Create a new directory for your project, and navigate to it in your terminal. Then, run the following command to generate a tsconfig.json file:

```bash
tsc --init
```

This tsconfig.json file contains configuration settings for your TypeScript project. You can customize it to suit your needs.

### 3. Write TypeScript Code:

Create .ts files with your TypeScript code. For example, you can create an app.ts file with the following content:

```ts
function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message = greet("John");
console.log(message);
```

### 4. Compile TypeScript to JavaScript:

Use the TypeScript compiler (tsc) to transpile your TypeScript code into JavaScript:

```ts
tsc
```

This command will generate JavaScript files from your TypeScript source code, following the settings in your tsconfig.json file.

### 5. Run the Node.js Application:

You can now run your Node.js application as you normally would:

```bash
node app.js
```

In this example, app.js is the generated JavaScript file from your app.ts TypeScript source file.

TypeScript brings the benefits of static typing, code organization, and tooling to Node.js development, making it a powerful choice for building scalable and maintainable server-side applications.

# Overview of Typing in TypeScript

TypeScript is a statically-typed superset of JavaScript that brings strong typing capabilities to the language. It introduces a robust type system that allows developers to specify the data types of variables, function parameters, return values, and more. This typing system enhances code quality, readability, and maintainability by catching type-related errors at compile-time rather than runtime.

Here's an overview of typing in TypeScript:

## 1. Static Typing:

TypeScript uses static typing, which means that variable types are determined at compile-time.
Type checking occurs during development, helping to identify type-related errors early in the development process.

## 2. Basic Data Types:

TypeScript supports the standard JavaScript data types such as number, string, boolean, null, undefined, and symbol.
Additional types include any, which represents a value of any type, and void, which is often used as the return type for functions that don't return a value.

## 3. Type Annotations:

TypeScript allows developers to explicitly annotate variables, function parameters, and function return types with type information.
Annotations are added using a colon followed by the type, like `let age: number = 30;`.

## 4. Type Inference:

TypeScript has a powerful type inference system that can often determine types automatically based on context.
This reduces the need for explicit type annotations, making the code concise and readable.

## 5. Custom Types:

TypeScript allows you to define custom types using interfaces and type aliases.
Interfaces define the structure of objects, while type aliases provide a way to create complex type definitions.

```typescript
interface Person {
    name: string;
    age: number;
}

type Point = { x: number; y: number; };
```
## 6. Union and Intersection Types:

TypeScript supports union types, which allow a variable to have multiple possible types.
Intersection types combine multiple types into a single type.

```typescript
let value: string | number; // Union type
type Employee = Person & { jobTitle: string; }; // Intersection type
```

### 7. Generics:

TypeScript supports generics, enabling you to create reusable components and functions that work with different types.

```typescript
function identity<T>(value: T): T {
    return value;
}
```

8. Type Guards:

Type guards are expressions or functions that narrow down the type of a value within a conditional block.

```typescript
function isString(value: any): value is string {
    return typeof value === 'string';
}
```

## 9. Advanced Typing:

TypeScript provides advanced features like mapped types, conditional types, and type assertions for fine-grained control over types.

## 10. Type Declarations for External Libraries:
- TypeScript can use type declaration files (.d.ts) to provide type information for external JavaScript libraries, enhancing the development experience.

TypeScript's type system not only helps prevent common programming errors but also serves as documentation for your code. It makes it easier to understand the expected types of data and improves tooling support, including autocompletion and code analysis in modern code editors.

# tsconfig.json

The tsconfig.json file in TypeScript serves as a configuration file that specifies compiler options and settings for your TypeScript project. It allows you to define how TypeScript should transpile your code, manage project structure, and handle various compilation and type checking settings. Let's explore some of the most commonly used properties in a tsconfig.json file and what they do:

## 1. compilerOptions:

This is one of the most important sections where you define compiler-specific settings.
Key properties in compilerOptions include:
target: Specifies the ECMAScript target version (e.g., "ES5", "ES6").

- module: Determines the module system (e.g., "CommonJS", "ESNext").
- outDir: Specifies the output directory for compiled JavaScript files.
- strict: Enables strict type checking.
- noImplicitAny: Prevents the use of any for untyped variables.
- sourceMap: Generates source maps for easier debugging.
- declaration: Generates declaration files (.d.ts) for type information.
- esModuleInterop: Simplifies interoperability with CommonJS modules.

## 2. include and exclude:

These properties define which files should be included or excluded from compilation.
They use glob patterns to specify files or directories.

```json
"include": ["src/**/*.ts"],
"exclude": ["node_modules"]
```

## 3. files:

Allows you to explicitly specify a list of TypeScript files to be included in compilation.
```json
"files": ["src/app.ts", "src/utils.ts"]
```

## 4. extends:

Lets you extend another tsconfig.json file.
Useful for sharing common settings across multiple projects.

```json
"extends": "./base-tsconfig.json"
```

## 5. baseUrl and paths:

Used for configuring module resolution.
- baseUrl specifies the base directory for module resolution.
- paths defines custom module aliasing.

```json
"baseUrl": "./src",
"paths": {
    "@mylib/*": ["lib/*"]
}
```

## 6. typeRoots and types:

- typeRoots specifies the locations where TypeScript should look for type declaration files.

- types lists the types that should be included from the type declaration files.
```json
"typeRoots": ["./typings", "./node_modules/@types"],
"types": ["lodash"]
```

## 7. jsx and jsxFactory:

Used when working with JSX (e.g., React).
jsx specifies the JSX mode ("react" or "preserve").

- jsxFactory allows you to specify the function used for JSX elements.

```json
"jsx": "react",
"jsxFactory": "React.createElement"
```

## 8. rootDir and outDir:

- rootDir specifies the root directory of input files.

- outDir defines the output directory for compiled files.

```json
"rootDir": "./src",
"outDir": "./dist"
```

## 9. moduleResolution:

Determines how TypeScript resolves modules.
Options include "node" (Node.js-style) and "classic" (TypeScript 1.6 and earlier).

```json
"moduleResolution": "node"
```

## 10. lib:
- Specifies the library files to include in the compilation.
- By default, TypeScript includes a set of built-in libraries based on the target version.

```json
"lib": ["ESNext", "DOM"]
```
These are some of the key properties you might encounter in a tsconfig.json file. You can customize your tsconfig.json to fit your project's specific needs and requirements. A well-configured tsconfig.json file ensures that TypeScript behaves according to your project's guidelines and desired outcomes during compilation and type checking.

# Typing Examples


Here's a chart in raw Markdown syntax that illustrates different TypeScript type annotations along with examples:

markdown
Copy code
| Type Annotation              | What is Typed                | Example                       |
|-----------------------------|-----------------------------|-------------------------------|
| `number`                    | Numbers                     | `let age: number = 30;`       |
| `string`                    | Strings                     | `let name: string = "Alice";` |
| `boolean`                   | Booleans                    | `let isTrue: boolean = true;` |
| `null`                      | Null values                 | `let myVar: null = null;`     |
| `undefined`                 | Undefined values            | `let data: undefined;`        |
| `any`                       | Any data type               | `let dynamic: any = 42;`      |
| `void`                      | No return value             | `function logMessage(): void { console.log("Hello"); }` |
| `Array<Type>`               | Arrays                      | `let numbers: number[] = [1, 2, 3];` |
| `Tuple`                     | Arrays with fixed structure | `let person: [string, number] = ["Alice", 30];` |
| `Enum`                      | Enumerated values            | `enum Color { Red, Green, Blue };` |
| `Object`                    | Plain objects               | `let user: { name: string, age: number } = { name: "Alice", age: 30 };` |
| `Interface`                 | Object shape and contracts  | `interface Person { name: string; age: number; }` |
| `Union`                     | Multiple possible types     | `let value: string | number;` |
| `Intersection`              | Combining multiple types    | `type A = { a: number };` <br> `type B = { b: string };` <br> `type C = A & B;` |
| `Generics<Type>`            | Reusable type parameters    | `function identity<T>(value: T): T { return value; }` |
| `Type Aliases`              | Custom type definitions     | `type Point = { x: number; y: number; };` |
| `Literal Types`             | Specific literal values     | `let status: "success" | "error";` |
| `Mapped Types`              | Transforming existing types | `type Flags = { readonly [K in keyof typeof Color]: boolean };` |
| `Type Assertion`            | Manually specify a type    | `let value: any = "Hello";` <br> `let length: number = (value as string).length;` |
| `Function`                  | Function signature          | `let greet: (name: string) => string = (name) => { return "Hello, " + name; };` |
| `Function with Parameters`  | Function with parameters    | `type AddFunction = (a: number, b: number) => number;` |
| `Optional Properties`       | Optional object properties  | `type Person = { name: string; age?: number; };` |
| `Readonly`                  | Readonly properties         | `type Point = { readonly x: number; readonly y: number; };` |
| `Literal Type`              | Specific literal values     | `let color: "red" | "blue" | "green" = "red";` |
| `Conditional Types`         | Type-based conditionals     | `type NonNullable<T> = T extends null | undefined ? never : T;` |
| `Unknown`                   | Safely typed unknown values | `let userInput: unknown;` |
| `Type Casting`              | Type casting to another type | `let value: any = "Hello";` <br> `let length: number = (<string>value).length;` |
| `This Parameter`            | The type of `this` in a method | `class Person { name: string; greet(this: Person) { console.log("Hello, " + this.name); } }` |
| `Dictionary Types`          | Dynamic key-value pairs    | `let ages: { [key: string]: number; } = { "Alice": 30, "Bob": 35 };` |
| `Typeof`                    | Referring to a type by its name | `type Employee = { name: string; age: number; }` <br> `let john: typeof Employee = { name: "John", age: 30 };` |
| `Index Types`               | Access properties by key    | `let data: { [key: string]: number; } = { "one": 1, "two": 2 };` <br> `let value: number = data["one"];` |