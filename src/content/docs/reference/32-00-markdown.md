---
title: Markdown Syntax
description: Reference on Markdown
---

# Markdown Syntax: Simplifying Text Formatting

## What is Markdown Syntax?

Markdown is a lightweight markup language that provides a simple and human-readable way to format and style plain text documents. It was created by John Gruber and Aaron Swartz in 2004, with the primary goal of making it easy to write and read text documents that can be converted into HTML or other formats. Markdown's syntax is intentionally minimalistic and designed to be as intuitive as possible.

## What is Markdown Used For?

Markdown is widely used for various purposes due to its simplicity and versatility. Here are some common use cases:

### 1. Documentation and Technical Writing

Markdown is popular among developers, technical writers, and documentation creators. It's a preferred format for creating software documentation, README files, user guides, and tutorials. Markdown's plain text nature makes it easy to maintain and collaborate on technical documentation within version control systems like Git.

### 2. Blogging and Content Writing

Many blogging platforms and content management systems (CMS) support Markdown as an alternative to rich text editors. Bloggers and writers use Markdown to compose and format articles, blog posts, and other web content. Markdown's syntax allows authors to focus on content creation without getting distracted by complex formatting options.

### 3. Note-Taking and Personal Writing

Markdown is an excellent choice for note-taking and personal writing. It's widely supported by note-taking applications, mobile apps, and even text editors. The simplicity of Markdown enables users to create well-organized notes, to-do lists, and journals with ease.

### 4. Web Content Creation

Web developers often use Markdown for creating content that appears on websites. Many static site generators, blogging platforms, and website builders support Markdown for creating web pages, reducing the need for extensive HTML coding.

### 5. Email and Messaging

Some email clients and messaging platforms support Markdown for composing rich-text emails and messages. This allows users to emphasize text, create lists, and include hyperlinks in their communication.

## Markdown Syntax Basics

Markdown uses plain text characters and a minimal set of formatting rules. Here are some fundamental Markdown elements:

- **Headings**: Use `#` for headings. The number of `#` symbols indicates the heading level (e.g., `# Heading 1`, `## Heading 2`).

- **Text Styling**: Use `*` or `_` for italic text (`*italic*` or `_italic_`) and `**` or `__` for bold text (`**bold**` or `__bold__`).

- **Lists**: Create ordered (numbered) lists using numbers followed by a period, and unordered (bulleted) lists using asterisks, plus signs, or hyphens (`1. Item 1`, `* Item 2`, `- Item 3`).

- **Links**: Create hyperlinks using square brackets for the link text and parentheses for the URL (`[Text](URL)`).

- **Images**: Insert images using an exclamation mark, square brackets for alt text, and parentheses for the image URL (`![Alt Text](Image URL)`).

- **Code**: Format inline code with backticks ( \`inline code\` ), and create code blocks by enclosing the code in triple backticks or by indenting with four spaces.

- **Blockquotes**: Use `>` for blockquotes (`> This is a blockquote`).

Markdown's simplicity and readability make it a valuable tool for a wide range of writing and formatting tasks. Whether you're documenting software, writing a blog post, or taking notes, Markdown can help you focus on content creation while ensuring that your documents are easy to format and share.

## Markdown Syntax In-Depth
Markdown is a lightweight markup language that uses simple and intuitive formatting rules to structure and style plain text. Below, we provide an in-depth overview of Markdown's syntax elements:

### Headings
Markdown allows you to create headings using the # symbol. The number of # symbols determines the heading level, with one # for the highest level (Heading 1) and up to six # symbols for lower levels (Heading 2 to Heading 6).

Example:

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

```markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

### Text Formatting
Markdown provides simple ways to format text:

- *Italic*: Use either `*` or `_` around the text to make it italic.

Example: `*italic text*` or `_italic text_`

**Bold**: Use `**` or `__` around the text to make it bold.

Example: `**bold text**` or `__bold text__`

***Bold and Italic***: Combine `*` and `**` (or `_` and `__`) to make text both bold and italic.

Example: `***bold and italic text***`

~~Strikethrough~~: Use `~~` before and after text to strike through it.

Example: `~~strikethrough text~~`

### Lists
Markdown supports both ordered (numbered) and unordered (bulleted) lists:

Ordered Lists
1. Item 1
1. Item 2
1. Item 3

To create an ordered list, simply start each line with a number followed by a period. Always use `1. ` and it'll autonumber.

```markdown
1. Item 1
1. Item 2
1. Item 3
```

Unordered Lists

- Item A
- Item B
- Item C
  - sub item

For unordered lists, you can use asterisks (`*`), plus signs (`+`), or hyphens (`-`) followed by a space.

```markdown
- Item A
- Item B
- Item C
  - sub item
```

### Links
You can create hyperlinks using square brackets for the link text and parentheses for the URL.

Example:

[OpenAI](https://www.openai.com)

```markdown
[OpenAI](https://www.openai.com)
```

### Images
To insert images, use an exclamation mark (`!`), square brackets for alt text, and parentheses for the image URL.

Example:

![Some Image](https://static.vecteezy.com/system/resources/thumbnails/003/171/355/small/objective-lens-icon-with-six-rainbow-colors-vector.jpg)

```markdown
![Some Image](https://static.vecteezy.com/system/resources/thumbnails/003/171/355/small/objective-lens-icon-with-six-rainbow-colors-vector.jpg)
```

### Code
Markdown allows you to format code in several ways:

Inline Code: Wrap code within single backticks (`inline code`).

```markdown
(`inline code`)
```

Code Blocks: Create code blocks by enclosing the code in triple backticks ( ) or by indenting it with four spaces.

    ```js
    console.log("Hello WOrld")
    ```


### Blockquotes
To create blockquotes, use the > symbol followed by a space at the beginning of a line.

Example:

> This is a blockquote.

```markdown
> This is a blockquote.
```

### Horizontal Rules
You can add horizontal rules to separate content sections by using three or more hyphens (`-`), asterisks (`*`), or underscores (`_`) on a line.

Example:

---

```markdown
---
```

### Tables
Markdown supports simple tables using pipes (`|`) to separate columns and hyphens (`-`) to define the table header row.

Example:

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```
This creates a basic table with two columns and two rows.

### Escaping Characters
If you want to display special Markdown characters as regular text, you can escape them using a backslash (`\`).

Example:

\*This is not italic\*

```markdown
\*This is not italic\*
```

### Comments
Markdown does not have a standard syntax for comments, but some Markdown processors may support HTML comments.

Example:

```markdown
<!-- This is an HTML comment -->
```

These are some of the fundamental elements of Markdown syntax. Markdown's simplicity and readability make it a popular choice for various writing and documentation needs, from creating README files and documentation to formatting blog posts and notes. While these are the core Markdown elements, many Markdown processors and extended flavors offer additional features and customizations for specific use cases.

# MDX: Extending Markdown for Interactive Content
## What is MDX?
MDX is a hybrid markup language that extends the capabilities of traditional Markdown by allowing you to embed JSX (JavaScript eXtension) components directly within your Markdown content. This fusion of Markdown and JSX is particularly powerful for creating interactive and dynamic content, primarily used in web development and documentation.

MDX was originally designed for use with React, a popular JavaScript library for building user interfaces. It enables developers to seamlessly combine static text, Markdown formatting, and dynamic React components in a single document.

## How is MDX Different from Normal Markdown?
MDX differs from traditional Markdown in several significant ways:

1. JSX Integration
The most prominent difference is the ability to include JSX components directly within MDX documents. This means you can embed interactive elements, such as buttons, forms, charts, and custom UI components, alongside your text content. In traditional Markdown, you're limited to static text and basic HTML for formatting.

2. React Interactivity
With MDX, you can leverage the full power of React to create interactive and dynamic user interfaces. This opens up possibilities for creating sophisticated web applications, documentation with live code examples, and interactive tutorials.

3. Component Reusability
MDX promotes component reusability. You can define custom React components and reuse them across multiple MDX documents, maintaining consistency and reducing duplication of code.

4. Richer Content
MDX allows you to incorporate complex content structures and interactive features seamlessly. Whether it's rendering data visualizations, embedding live code editors, or integrating multimedia elements, MDX can handle a wide range of content types.

5. Easy Integration
MDX integrates seamlessly with popular React-based frameworks and libraries, making it a natural choice for websites, blogs, documentation sites, and applications built with technologies like Gatsby, Next.js, and more.

6. JavaScript Expressions
MDX also supports JavaScript expressions, enabling you to embed dynamic values or calculations directly into your content. This is especially useful for rendering data-driven content or including conditional logic within your documents.

## Example of MDX Content
Here's a simple example of what MDX content might look like:

```html
# Welcome to My MDX-Powered Blog

This is a paragraph of regular Markdown content.

<button onClick={() => alert('Hello, MDX!')}>Click Me</button>

<CustomChart data={chartData} />


Here's some dynamic content generated with JavaScript: {2 + 2}.
```

In this example, you can see the integration of JSX elements (`<button>`, `<CustomChart>`) and JavaScript expressions (`{2 + 2}`) within the Markdown content.

In summary, MDX is a versatile markup language that combines the simplicity of Markdown with the power of React and JSX, allowing you to create interactive and dynamic content for web applications, blogs, documentation, and more. It bridges the gap between static text and rich, interactive web experiences, making it a valuable tool for developers and content creators.