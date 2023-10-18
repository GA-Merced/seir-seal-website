---
title: Chrome Dev Tools
description: A reference doc for Chrome Dev Tools
---

# Chrome DevTools for Web Application Debugging

Chrome DevTools is a powerful set of debugging and profiling tools built into the Google Chrome browser. It allows web developers to inspect, debug, and optimize their web applications. Below, we'll explore the different sections of Chrome DevTools and how each can be used to aid in web application debugging.

## Accessing Chrome DevTools

You can open Chrome DevTools in several ways:

- **Right-Click**: Right-click on any element on a web page and select "Inspect" or "Inspect Element."
- **Keyboard Shortcut**: Use `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (macOS).
- **Menu**: Open the Chrome menu (three vertical dots) > "More tools" > "Developer tools."

## Elements

The Elements panel allows you to inspect and manipulate the Document Object Model (DOM) of a web page. It's useful for:

- **Inspecting HTML and CSS**: View and modify the structure and styles of page elements.
- **Live Editing**: Make real-time changes to the page's HTML and CSS for testing and debugging.
- **Accessibility**: Check and improve the accessibility of your web content.

## Console

The Console panel is a JavaScript console where you can interact with the page's JavaScript code. It's useful for:

- **Debugging JavaScript**: Log messages, errors, and exceptions for debugging.
- **Running JavaScript Commands**: Execute JavaScript commands and manipulate the page.
- **Accessing Browser APIs**: Access browser features and APIs.

## Sources

The Sources panel provides a code editor for debugging JavaScript. It's useful for:

- **Setting Breakpoints**: Add breakpoints to your JavaScript code to pause execution.
- **Stepping Through Code**: Step over, into, or out of functions during debugging.
- **Watching Variables**: Monitor the values of variables and expressions.

## Network

The Network panel displays network requests made by the web page. It's useful for:

- **Monitoring Requests**: Track HTTP requests and responses, including headers and payloads.
- **Performance Analysis**: Analyze network performance and optimize loading times.
- **Debugging AJAX Requests**: Inspect AJAX and fetch requests.

## Performance

The Performance panel helps analyze the runtime performance of your web application. It's useful for:

- **Recording Performance Profiles**: Record and analyze CPU and memory usage.
- **Identifying Bottlenecks**: Find performance bottlenecks and optimize code.
- **Analyzing Loading Times**: Examine the loading and rendering process.

## Application

The Application panel deals with web storage, including Cookies, Local Storage, and IndexedDB. It's useful for:

- **Managing Storage**: Inspect and modify browser storage data.
- **Testing Offline Mode**: Simulate offline conditions and test service workers.
- **Debugging PWA Features**: Debug Progressive Web App (PWA) features.

## Security

The Security panel helps identify security issues on your website. It's useful for:

- **Viewing Security Details**: Check for HTTPS status, mixed content, and insecure resources.
- **Analyzing Certificate Information**: Inspect SSL/TLS certificate details.
- **Identifying Vulnerabilities**: Detect and address security vulnerabilities.

## Audits

The Audits panel provides an automated tool for analyzing web pages for performance, accessibility, and best practices. It's useful for:

- **Performance Optimization**: Generate performance reports and recommendations.
- **Accessibility Testing**: Evaluate accessibility compliance and fix issues.
- **SEO Best Practices**: Ensure your site follows SEO guidelines.

## Lighthouse

Lighthouse is a powerful auditing tool integrated into Chrome DevTools. It's useful for:

- **Generating Reports**: Generate comprehensive reports on web page performance, accessibility, and more.
- **Mobile Optimization**: Test and optimize web pages for mobile devices.
- **PWA Evaluation**: Evaluate Progressive Web App (PWA) features and adherence to standards.

Chrome DevTools is an essential tool for web developers and offers a wide range of features to aid in debugging and optimizing web applications. Whether you're inspecting the DOM, debugging JavaScript, analyzing network requests, or evaluating performance, DevTools provides the necessary tools for a smooth debugging experience.

# Elements Panel in Chrome DevTools

The Elements panel in Chrome DevTools is a powerful tool that allows you to inspect and manipulate the Document Object Model (DOM) of a web page. It provides a comprehensive view of the page's HTML and CSS structure, enabling you to debug layout issues, inspect elements, and modify styles in real-time. This section explores the key features and functionalities of the Elements panel.

## Key Features

### 1. DOM Inspection

The primary purpose of the Elements panel is to inspect the DOM hierarchy of a web page. You can expand and collapse DOM elements, revealing their child elements, attributes, and text content. This feature is invaluable for understanding the structure of a page and locating specific elements.

### 2. CSS Styles

The panel displays the computed styles for each DOM element. You can view the CSS rules applied to an element, including styles inherited from parent elements and user-agent styles. Additionally, you can modify CSS properties in real-time to see how changes affect the page's appearance.

### 3. HTML Modification

The Elements panel allows you to make live edits to the HTML of a web page. You can add, edit, or delete HTML elements and attributes directly in the panel. This is a handy feature for quickly testing changes or fixing issues without altering the source code.

### 4. Event Listeners

You can inspect and manage event listeners attached to DOM elements. The panel provides a list of event types (e.g., click, mouseover) along with the associated JavaScript functions. This helps you track down event-related issues and understand how events are handled.

### 5. Accessibility

The Elements panel includes an accessibility tab that provides information on the accessibility status of elements. It highlights any accessibility violations, allowing you to improve the accessibility of your web content by addressing issues like missing alt text or improper ARIA attributes.

## Practical Use Cases

### 1. Debugging Layout and Styling

When dealing with layout or styling issues, the Elements panel is your go-to tool. You can inspect individual elements to understand how their styles are affecting their position and appearance. Use the computed styles section to see which CSS rules are applied and experiment with changes to resolve layout problems.

### 2. Identifying DOM Elements

If you need to locate specific elements on a page, the Elements panel helps you quickly navigate the DOM tree. You can right-click on elements in the panel and choose options like "Copy" or "Scroll into view" to aid in your debugging process.

### 3. Testing HTML Changes

The ability to edit HTML in real-time is incredibly useful for testing changes without modifying your source code. You can add temporary elements, update text content, or adjust attributes to verify how different variations of the page behave.

### 4. Investigating JavaScript Events

When working with JavaScript-driven interactivity, the Elements panel helps you inspect event listeners. You can view event types and the associated event handlers. This is helpful for diagnosing issues related to event propagation and event binding.

### 5. Accessibility Auditing

For web accessibility testing, the Elements panel's accessibility tab provides insights into potential problems. It flags elements with accessibility issues, allowing you to address them promptly and ensure your web content is accessible to all users.

## Tips and Tricks

- **Search Functionality**: Use the search bar at the top of the Elements panel to quickly find elements by tag name, class name, or text content. It's particularly helpful for large and complex pages.

- **Keyboard Shortcuts**: Familiarize yourself with keyboard shortcuts like `Ctrl+F` (Windows/Linux) or `Cmd+F` (macOS) to open the search bar, making element discovery even more efficient.

- **Right-Click Context Menu**: Right-click on elements in the panel to access a context menu with various useful actions, such as copying CSS selectors or setting breakpoints.

- **Device Emulation**: The Elements panel works well with the device emulation feature of DevTools. You can simulate different screen sizes and orientations to test responsive designs.

The Elements panel is an indispensable tool for web developers, offering deep insights into the structure and styling of web pages. Whether you're debugging layout issues, fine-tuning CSS styles, or ensuring accessibility compliance, mastering this panel will greatly enhance your web development workflow.


# Console Panel in Chrome DevTools

The Console panel in Chrome DevTools is an essential tool for debugging and interacting with web applications. It provides a JavaScript console where you can execute commands, log messages, inspect variables, and catch errors. This section delves deeper into the features and functionalities of the Console panel.

## Key Features

### 1. JavaScript Execution

The primary function of the Console panel is to execute JavaScript code. You can enter JavaScript commands directly into the console and see the results immediately. This feature is invaluable for testing code snippets, exploring APIs, and diagnosing issues.

### 2. Logging and Output

You can log messages, warnings, errors, and objects to the console using various JavaScript methods such as `console.log()`, `console.warn()`, `console.error()`, and `console.dir()`. These messages provide valuable information during debugging and help you track the flow of your application.

### 3. Variable Inspection

The Console panel allows you to inspect and interact with JavaScript variables and objects. You can type variable names and see their current values, or you can use `$0`, `$1`, `$2`, etc., to refer to previously selected elements in the Elements panel.

### 4. Autocompletion and Suggestions

As you type in the console, DevTools provides autocompletion suggestions based on JavaScript keywords, objects, and functions. This accelerates your coding process and reduces the chance of typographical errors.

### 5. Multi-Line Input

You can write multi-line JavaScript code in the Console panel, making it suitable for writing functions, loops, and more complex code snippets. Pressing `Shift + Enter` allows you to create new lines within the console input.

## Practical Use Cases

### 1. Debugging JavaScript

The Console panel is your primary tool for debugging JavaScript code. You can insert `console.log()` statements to output variable values and debug information. Use `console.error()` and `console.warn()` to catch and log errors and warnings in your code.

### 2. Interactive Testing

The interactive nature of the Console panel enables you to test code snippets and API interactions without the need to reload the entire page. This is particularly helpful for experimenting with new features or debugging issues in real-time.

### 3. Profiling Performance

Chrome DevTools provides performance profiling capabilities within the Console panel. You can use `console.time()` and `console.timeEnd()` to measure the execution time of specific code blocks, helping you identify performance bottlenecks.

### 4. DOM Manipulation

You can manipulate the DOM directly from the Console panel. Use JavaScript commands to modify page content, add or remove elements, or trigger events. This is especially useful for quickly testing changes or debugging issues related to dynamic web pages.

### 5. Network Requests

The Console panel displays network-related information, including AJAX requests and WebSocket messages. You can monitor network activity, inspect request and response data, and even simulate different network conditions for testing purposes.

## Tips and Tricks

- **Clearing the Console**: You can clear the console output by typing `clear()` and pressing Enter, or simply using the `Ctrl + L` (Windows/Linux) or `Cmd + K` (macOS) shortcut.

- **History Navigation**: Use the `Arrow Up` and `Arrow Down` keys to navigate through previously entered commands, making it easy to reuse or modify code.

- **Copy and Paste**: You can copy and paste code snippets between the Console panel and your text editor, making it convenient to transfer code.

- **Preserving Log**: By default, DevTools clears the console each time the page is reloaded. To preserve logs between reloads, click the "Preserve log" checkbox in the console settings.

- **Advanced Usage**: Explore advanced debugging techniques such as setting breakpoints, conditional logging, and using the `debugger` statement within your JavaScript code to interactively step through code execution.

The Console panel is a versatile and indispensable tool for web developers. Whether you're debugging JavaScript, experimenting with code, or monitoring network activity, mastering this panel will significantly enhance your web development and debugging workflow.

# Sources Panel in Chrome DevTools

The "Sources" panel in Chrome DevTools is a powerful tool designed to assist developers in writing, debugging, and profiling JavaScript code. It provides an extensive set of features for source code inspection, debugging, and even version control integration. This section delves deeper into the functionalities and use cases of the "Sources" panel.

## Key Features

### 1. File System Access

The "Sources" panel offers a file system navigator that allows you to browse and access files within your project directory. You can open and edit JavaScript, HTML, CSS, and other web-related files directly within DevTools.

### 2. Live Editing

One of the standout features of the "Sources" panel is its live editing capabilities. You can modify your source code in real-time and immediately see the changes applied to the web page without requiring a page refresh. This is invaluable for fine-tuning and experimenting with code.

### 3. Breakpoints

DevTools provides robust breakpoint functionality, enabling you to pause the execution of your JavaScript code at specific lines or conditions. You can set breakpoints, step through code, inspect variables, and analyze the call stack to identify issues.

### 4. Call Stack and Scope

The "Call Stack" and "Scope" panes in the "Sources" panel provide insights into the flow of your code. You can see the sequence of function calls and examine variable values within different scopes, aiding in debugging complex applications.

### 5. Watch Expressions

While debugging, you can add watch expressions to monitor the values of specific variables or expressions. This helps you keep an eye on critical data without cluttering the console with multiple `console.log()` statements.

### 6. Source Maps

DevTools seamlessly integrates with source maps generated by transpilers or minifiers. This means you can debug minified or transpiled code as if you were working with the original source code, simplifying the debugging process.

### 7. Code Navigation

The panel includes features for easy code navigation, such as the ability to jump to function definitions and find references. This helps you quickly understand and explore codebases, especially in larger projects.

### 8. Version Control Integration

For developers using version control systems like Git, the "Sources" panel can display Git-diff information, allowing you to track changes, view commit history, and even stage and commit changes directly from DevTools.

## Practical Use Cases

### 1. Debugging JavaScript

The primary use case of the "Sources" panel is debugging JavaScript code. You can set breakpoints, step through code execution, and inspect variables to identify and fix bugs efficiently. Live editing enables rapid iteration during the debugging process.

### 2. Inspecting Network Requests

You can monitor and inspect network requests, including AJAX calls and fetch requests, from within the "Sources" panel. This is valuable for tracking data flow and troubleshooting issues related to data fetching and API calls.

### 3. Live Style Editing

In addition to JavaScript, the "Sources" panel allows you to edit CSS styles in real-time. You can experiment with layout and design changes and see their immediate effects on the rendered page.

### 4. Profiling Performance

DevTools offers performance profiling tools within the "Sources" panel, including the ability to record CPU and memory usage. Profiling helps identify performance bottlenecks and memory leaks in your web applications.

### 5. JavaScript Frameworks

Developers working with JavaScript frameworks like React, Angular, or Vue.js can leverage the "Sources" panel to inspect and debug framework-specific code. It provides insights into component hierarchies and state management.

## Tips and Tricks

- **Conditional Breakpoints**: Set conditional breakpoints by right-clicking a breakpoint and specifying a condition. The code will pause only when the condition evaluates to true.

- **Blackboxing**: You can blackbox specific scripts or libraries that you don't want to debug. This prevents the debugger from stepping into those scripts, streamlining the debugging process.

- **Keyboard Shortcuts**: Learn the keyboard shortcuts for common debugging actions, such as stepping over (`F10`), stepping into (`F11`), and resuming (`F8`). These shortcuts improve your debugging efficiency.

- **Workspace Setup**: To take full advantage of live editing, set up a workspace in DevTools to map local files to remote resources. This enables DevTools to save your changes back to your local file system.

- **Version Control Integration**: If you're using Git or another version control system, explore the Git integration features in DevTools to manage your code changes seamlessly.

The "Sources" panel in Chrome DevTools is an indispensable tool for web developers, offering a comprehensive set of features for inspecting, debugging, and profiling web applications. Whether you're debugging JavaScript, analyzing network requests, or experimenting with live code changes, mastering this panel will significantly enhance your web development workflow.


# Network Panel in Chrome DevTools

The "Network" panel in Chrome DevTools is an essential tool for web developers to monitor and analyze network requests made by a web page. It provides valuable insights into how resources are loaded, the timing of requests, and the data exchanged between the client and the server. This section explores the key features and practical uses of the "Network" panel.

## Key Features

### 1. Real-Time Network Monitoring

The "Network" panel offers real-time monitoring of network activity. It displays a comprehensive list of HTTP requests, including URLs, request methods (GET, POST, etc.), status codes, and response sizes. This allows developers to track all network activity as it happens.

### 2. Request Details

Clicking on a specific network request reveals detailed information about that request. You can inspect request and response headers, view response content, and see timing information such as DNS resolution, initial connection, SSL negotiation, and more.

### 3. Initiator and Dependencies

The panel provides insights into what initiated a particular network request. You can see which part of your JavaScript code or which resource triggered the request. Additionally, it shows dependencies between resources, helping you understand the resource loading sequence.

### 4. Filtering and Search

With the "Network" panel's filtering and search capabilities, you can easily find specific requests or types of requests. You can filter requests by type (e.g., XHR, Fetch), search for keywords, or filter by status codes (e.g., 200 OK, 404 Not Found).

### 5. Performance Analysis

The panel includes performance analysis tools, such as the Waterfall chart. This chart visualizes the timeline of network requests, making it easy to identify bottlenecks and areas for optimization in your web application's loading process.

### 6. Throttling and Emulation

To simulate different network conditions, the "Network" panel allows you to throttle your internet connection speed (e.g., 3G, Slow 3G) and emulate offline conditions. This helps you test your web application's performance under various scenarios.

## Practical Use Cases

### 1. Debugging Network Issues

The primary use case of the "Network" panel is debugging network-related problems. You can identify issues like slow-loading resources, failed requests (e.g., 404 errors), and unexpected API responses.

### 2. Analyzing Performance

By examining the timing information of network requests, developers can pinpoint performance bottlenecks. This is crucial for optimizing web applications to ensure fast load times and a smooth user experience.

### 3. Monitoring API Requests

The panel is invaluable for monitoring AJAX requests, fetch requests, and API interactions. You can inspect the data sent and received, check for authentication errors, and validate response payloads.

### 4. Resource Optimization

Developers can use the "Network" panel to analyze resource sizes and loading times. This helps in optimizing images, scripts, and stylesheets to reduce page load times and save bandwidth.

### 5. Testing Under Different Conditions

By throttling network speed and simulating offline scenarios, you can test how your web application behaves under adverse conditions. This ensures that your app remains functional even in low-bandwidth environments.

## Tips and Tricks

- **Clearing Data**: To start fresh, use the "Clear" button or `Ctrl/Cmd + E` to clear all recorded network data.

- **Preserve Log**: Enable the "Preserve log" option (`Ctrl/Cmd + Shift + P`) to prevent the clearing of network data between page loads. This is helpful for tracking network requests across multiple interactions.

- **Initiator Column**: The "Initiator" column in the network table shows what initiated each request. It can help you identify which part of your code is responsible for specific network activity.

- **XHR/Fetch Breakpoints**: You can set breakpoints on XMLHttpRequest (`XMLHttpRequest` or `fetch`) requests. When a breakpoint is hit, the debugger pauses, allowing you to inspect the request and response.

- **CORS Errors**: Use the "Console" panel in conjunction with the "Network" panel to diagnose Cross-Origin Resource Sharing (CORS) issues. The "Console" often provides additional information about blocked requests.

The "Network" panel in Chrome DevTools is an indispensable tool for understanding how web pages interact with the server. Whether you're debugging network issues, optimizing performance, or analyzing API requests, mastering this panel is essential for web development and troubleshooting.

# Application Panel in Chrome DevTools

The "Application" panel in Chrome DevTools is a powerful tool for web developers to inspect and manage various aspects of web applications. It provides insights into web storage, service workers, cache, and more. This section explores the key features and practical uses of the "Application" panel.

## Key Features

### 1. Storage Inspection

#### a. Local Storage and Session Storage
The "Application" panel allows you to inspect and manage data stored in local storage and session storage. You can view key-value pairs, edit values, and clear storage to simulate different scenarios.

#### b. IndexedDB
Developers can explore the IndexedDB databases used by web applications. It provides a tree-like structure of databases, object stores, and individual records. This is useful for debugging data storage and retrieval.

### 2. Service Workers

The "Service Workers" section of the panel is essential for debugging and managing service workers. You can view registered service workers, inspect their lifecycle events, and unregister them for testing purposes.

### 3. Cache Storage

The "Cache Storage" section displays the contents of cache storage used by service workers. You can view cached assets, check cache sizes, and clear caches when needed.

### 4. Manifest

Inspect the web app manifest, which defines how the web application should behave when added to the home screen on mobile devices. You can verify that the manifest is correctly configured for progressive web apps (PWAs).

### 5. Cookies

View and manage cookies associated with the current webpage. You can inspect cookie values, add new cookies, and clear individual cookies or all cookies for the current site.

### 6. Application State

The "Application" panel also provides information about the application's state, including details about frames, their origins, and iframes. You can inspect various frame properties and interactions.

## Practical Use Cases

### 1. Debugging Web Storage

The ability to inspect and edit local storage and session storage data is crucial for debugging issues related to data persistence in web applications. You can simulate different scenarios by modifying stored values.

### 2. Service Worker Debugging

For progressive web apps (PWAs) and applications using service workers, the "Application" panel allows you to inspect and manage service workers. This is helpful for debugging caching strategies, background sync, and push notifications.

### 3. Cache Management

Inspecting cache storage and clearing caches are essential tasks for optimizing web application performance. Developers can ensure that cached assets are up to date and troubleshoot caching-related issues.

### 4. Cookie Testing

When dealing with user authentication and sessions, managing cookies becomes critical. The panel simplifies cookie inspection, enabling developers to verify cookie values and troubleshoot authentication problems.

### 5. PWA Configuration

For PWAs, verifying the correctness of the web app manifest is essential. Developers can use the "Manifest" section to ensure that the manifest file defines the app's behavior as intended.

## Tips and Tricks

- **Simulate Network Conditions**: The "Application" panel allows you to simulate offline conditions, offline mode, and slow 3G network speeds. This is valuable for testing how your web app behaves under various network scenarios.

- **PWA Installation**: In the "Manifest" section, you can manually trigger the installation of a PWA. This can be helpful for testing the PWA installation process.

- **Inspect Cookies Securely**: To inspect secure cookies (those marked as "Secure" and requiring HTTPS), enable the "Allow access to file URLs" option in DevTools settings under the "Experiments" section.

- **Workspaces**: DevTools provides a "Workspaces" feature that allows you to map local files to network resources. This can be useful for debugging assets served from your development environment.

The "Application" panel in Chrome DevTools is a versatile tool that empowers web developers to manage and debug various aspects of web applications, from data storage and caching to service worker behavior. By mastering this panel, developers can ensure their web apps are performant, reliable, and well-configured for various scenarios.
