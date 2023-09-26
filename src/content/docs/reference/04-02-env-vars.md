---
title: Environment Variables
description: A Reference on environment variables
---

# Environmental Variables
Environment variables are a fundamental concept in computer science and software development. They are essentially dynamic values that can affect the behavior of software and operating systems. Environment variables store configuration settings, system paths, and other essential information that programs and scripts can access.

Here are some key points about environment variables:

## What They Are:

Environment variables are key-value pairs that store information at the system level.
They are often used to configure software, define system-wide settings, or provide data that programs need to function correctly.
These variables are accessible to all processes running on a system.

## How to Use Them in Bash (Linux/macOS):

To view the value of an environment variable, use the echo command followed by the variable name preceded by a dollar sign (e.g., `echo $HOME`).

To set or modify an environment variable for the current session, use the export command (e.g., `export MY_VARIABLE="some value"`).

To make an environment variable persist across sessions, you can add the export command to your shell profile file (e.g., `.bashrc` or .`bash_profile`).

## How to Use Them in PowerShell (Windows):

To view the value of an environment variable, use the echo command with the variable enclosed in percentage signs (e.g., `echo %USERPROFILE%`).

To set or modify an environment variable for the current session, use the $env: prefix (e.g., `$env:MY_VARIABLE = "some value"`).

To make an environment variable persist across sessions, you can use the "System Properties" settings in the Control Panel or modify the Windows Registry.

## .env Files:

A .env file is a plain text configuration file used to store environment variables.
These files are often used in web development projects to define variables like database connection strings, API keys, and other sensitive information.

Each line in a .env file typically consists of a variable name and its associated value (e.g., `DB_USERNAME=johndoe`).

Tools like dotenv in JavaScript and libraries in other languages can load variables from .env files into the environment.

Environment variables are versatile and widely used in various contexts, from system configuration to application development. They provide a way to separate configuration from code, making it easier to manage settings and secrets across different environments (e.g., development, testing, production) without hardcoding them into your scripts or applications.

# Env Vars across languages

| Language       | Accessing Env Vars                   | Library for .env Files      |
|----------------|-------------------------------------|-----------------------------|
| Python         | `os.environ.get('VAR_NAME')`         | `python-dotenv`             |
| JavaScript     | `process.env.VAR_NAME`               | `dotenv`                    |
| Ruby           | `ENV['VAR_NAME']`                   | `dotenv`                    |
| PHP            | `getenv('VAR_NAME')`                 | `vlucas/phpdotenv`          |
| Go             | `os.Getenv("VAR_NAME")`              | `github.com/joho/godotenv`  |
| Java           | `System.getenv("VAR_NAME")`          | N/A                         |
| C# / .NET      | `Environment.GetEnvironmentVariable("VAR_NAME")` | N/A           |
| Swift          | `ProcessInfo.processInfo.environment["VAR_NAME"]` | N/A              |
| Rust           | `std::env::var("VAR_NAME")`          | N/A                         |
| Perl           | `$ENV{'VAR_NAME'}`                  | N/A                         |
| Bash           | `$VAR_NAME`                         | N/A                         |
| PowerShell     | `$env:VAR_NAME`                     | N/A                         |
| Lua            | `os.getenv("VAR_NAME")`              | N/A                         |
| Kotlin         | `System.getenv("VAR_NAME")`          | N/A                         |
| TypeScript     | `process.env.VAR_NAME`               | `dotenv`                    |
