---
title: HTML
description: All about HTML
---

### What is HTML?
HTML (Hypertext Markup Language) is the standard markup language for creating web pages. It is the backbone of a web page and defines the structure and content of a document. HTML consists of elements and tags that define the various parts of a web page, such as headings, paragraphs, images, links, and more.

### How HTML Works and Basic Syntax Rules:
- HTML documents are text files with an ".html" extension.
- They consist of a combination of HTML elements enclosed in tags.
- Tags are usually paired, with an opening tag `<tag>` and a closing tag `</tag>`.
- Tags are used to structure content and provide meaning to the elements.
- HTML documents are hierarchical, with a root element `<html>` containing two main sections: `<head>` (for metadata) and `<body>` (for visible content).
- Tags are not case-sensitive, but it is a best practice to use lowercase letters for tag names.
### HTML Tags Reference:
Here's a chart of commonly used HTML tags, along with their purpose and example usage:

| Tag          | Purpose                                     | Example Usage                                      |
|--------------|---------------------------------------------|----------------------------------------------------|
| `<html>`     | Root element for an HTML document.          | `<html></html>`                                    |
| `<head>`     | Contains metadata about the document.       | `<head><title>Page Title</title></head>`           |
| `<title>`    | Sets the title of the web page.             | `<title>My Web Page</title>`                       |
| `<meta>`     | Provides metadata, like character encoding. | `<meta charset="UTF-8">`                           |
| `<link>`     | Links to external resources, like stylesheets.| `<link rel="stylesheet" href="styles.css">`      |
| `<style>`    | Contains inline CSS for styling.            | `<style> body { background-color: #ffffff; } </style>`|
| `<script>`   | Embeds JavaScript for interactivity.        | `<script> function sayHello() { alert("Hello!"); } </script>` |
| `<body>`     | Contains visible content of the page.       | `<body><h1>Hello, World!</h1></body>`             |
| `<h1>` - `<h6>` | Headings, from largest (h1) to smallest (h6). | `<h1>Main Heading</h1>`                           |
| `<p>`        | Represents a paragraph of text.             | `<p>This is a paragraph.</p>`                     |
| `<a>`        | Creates hyperlinks to other web pages.      | `<a href="https://example.com">Visit Example</a>` |
| `<img>`      | Embeds images in the document.              | `<img src="image.jpg" alt="Description">`        |
| `<ul>`       | Defines an unordered (bulleted) list.       | `<ul><li>Item 1</li><li>Item 2</li></ul>`         |
| `<ol>`       | Defines an ordered (numbered) list.         | `<ol><li>First</li><li>Second</li></ol>`          |
| `<li>`       | Represents list items within `<ul>` or `<ol>`| `<ul><li>Item 1</li><li>Item 2</li></ul>`       |
| `<div>`      | A generic container for grouping elements.   | `<div class="container">...</div>`               |
| `<span>`     | Inline container for small pieces of content.| `<span style="color: red;">Text</span>`           |
| `<form>`     | Creates input forms for user interaction.    | `<form action="submit.php" method="post">...</form>` |
| `<input>`    | Defines input fields within a form.          | `<input type="text" name="username" />`           |
| `<button>`   | Creates clickable buttons.                  | `<button onclick="alert('Clicked!')">Click Me</button>` |
| `<textarea>` | Represents a multi-line text input field.   | `<textarea rows="4" cols="50">Enter text here...</textarea>` |
| `<label>`    | Defines a label for an `<input>` element.   | `<label for="username">Username:</label>`        |
| `<select>`   | Creates a dropdown selection list.          | `<select name="city"><option value="NY">New York</option></select>` |
| `<option>`   | Represents an option within a `<select>` element.| `<option value="LA">Los Angeles</option>`     |
| `<iframe>`   | Embeds an inline frame for external content.| `<iframe src="https://example.com"></iframe>`     |
| `<table>`    | Defines an HTML table.                      | `<table><tr><td>Cell 1</td><td>Cell 2</td></tr></table>` |
| `<tr>`       | Represents a table row.                    | `<tr><td>Cell 1</td><td>Cell 2</td></tr>`        |
| `<td>`       | Defines a table cell.                       | `<td>Cell Contents</td>`                         |
| `<th>`       | Defines a table header cell.                | `<th>Header</th>`                                |
| `<thead>`    | Groups header content in a table.           | `<thead><tr><th>Header 1</th><th>Header 2</th></tr></thead>` |
| `<tbody>`    | Groups body content in a table.             | `<tbody><tr><td>Row 1</td><td>Row 2</td></tr></tbody>` |
| `<tfoot>`    | Groups footer content in a table.           | `<tfoot><tr><td>Footer 1</td><td>Footer 2</td></tr></tfoot>` |
| `<caption>`  | Adds a title or explanation to a table.     | `<caption>Table Caption</caption>`                |
| `<colgroup>` | Specifies a group of columns in a table.    | `<colgroup><col span="2"></colgroup>`             |
| `<col>`      | Represents a single column in a `<colgroup>`| `<col style="background-color: lightgray;">`      |
| `<hr>`       | Represents a thematic break (horizontal rule).| `<hr>`                                          |
| `<br>`       | Inserts a line break within text.           | `This is <br> a line break.`                     |
| `<cite>`     | Defines the title of a work.                | `<cite>The Great Gatsby</cite>`                   |
| `<code>`     | Represents computer code.                   | `<code>int main() { ... }</code>`                 |
| `<em>`       | Emphasizes text, typically displayed as italics.| `<em>Important</em>`                           |
| `<strong>`   | Indicates strong importance, typically displayed as bold.| `<strong>Very Important</strong>`        |
| `<abbr>`     | Defines an abbreviation or acronym.         | `<abbr title="World Wide Web">WWW</abbr>`        |
| `<mark>`     | Highlights text for reference or emphasis.  | `<mark>Highlighted Text</mark>`                   |
| `<sub>`      | Renders text as subscript.                  | `H<sub>2</sub>O`                                  |
| `<sup>`      | Renders text as superscript.                | `2<sup>3</sup>`                                  |
| `<q>`        | Defines a short inline quotation.           | `<q>This is a quote.</q>`                         |
| `<blockquote>` | Represents a longer block quotation.      | `<blockquote>Long quote...</blockquote>`           |
| `<pre>`      | Preserves white space and line breaks.     | `<pre>    Indented Text</pre>`                    |
| `<kbd>`      | Represents keyboard input.                 | `<kbd>Ctrl + C</kbd>`                             |
| `<var>`      | Represents a variable.                      | `<var>x</var>`                                   |
| `<del>`      | Indicates deleted text.                    | `<del>old text</del>`                            |
| `<ins>`      | Indicates inserted text.                   | `<ins>new text</ins>`                            |

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework