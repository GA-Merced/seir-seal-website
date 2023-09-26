---
title: Bash Scripting Basics
description: Reference for Scripting in your terminal
---

## Bash Scripting
Bash (short for "Bourne Again Shell") is a command-line shell and scripting language commonly used on Unix-based operating systems like Linux and macOS. Bash scripts are sequences of commands and instructions that automate tasks and perform system administration tasks. Here, we'll cover the basics of writing Bash scripts.

### Writing Your First Bash Script
To create a Bash script, you need a text editor. You can use built-in editors like nano or more advanced ones like vim or Visual Studio Code. Let's start with a simple "Hello World" example:

```bash
#!/bin/bash
# This is a comment

echo "Hello, World!"
```
Here's what each part does:

**#!/bin/bash:** This is called a shebang, and it tells the system to use the Bash interpreter to run the script.

# This is a comment: Comments start with # and are for documentation purposes.

**echo "Hello, World!"**: The echo command prints text to the standard output (usually the terminal).

### Running a Bash Script
Make the script executable by running `chmod +x scriptname.sh`, where scriptname.sh is the name of your script.

Execute the script with `./scriptname.sh`.

### Variables
You can store and manipulate data using variables in Bash:

```bash
#!/bin/bash

name="Alice"
echo "Hello, $name!"
name="Alice": Declares a variable named name and assigns it the value "Alice."

"Hello, $name!": Uses the variable inside a string with double quotes. Bash will replace $name with the variable's value.
```

### Input and Output
You can read user input and display output:

```bash
#!/bin/bash

echo "What's your name?"
read name
echo "Hello, $name!"
read name: Reads user input into the name variable.
```

### Conditional Statements
You can use if statements for conditional execution:

```bash
#!/bin/bash

echo "Enter your age:"
read age

if [ "$age" -ge 18 ]; then
  echo "You're an adult."
else
  echo "You're a minor."
fi
```

- if [ "$age" -ge 18 ]; then: Checks if the age is greater than or equal to 18.

- else: Handles the case when the condition is not met.

- fi: Ends the if statement.

### Loops
Bash supports for and while loops:

bash
```bash
#!/bin/bash

# For loop
for i in {1..5}; do
  echo "Iteration $i"
done

# While loop
count=1
while [ $count -le 5 ]; do
  echo "Iteration $count"
  ((count++))
done
```
### Functions
You can define functions to reuse code:

```bash
#!/bin/bash

greet() {
  echo "Hello, $1!"
}

greet "Alice"
greet "Bob"
greet() { ... }: Defines a function named greet that takes one argument.

greet "Alice": Calls the greet function with "Alice" as an argument.

Command-Line Arguments
You can access command-line arguments in a script:

bash
Copy code
#!/bin/bash

echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
```
- $0: The script's name.

- $1, $2, etc.: Command-line arguments.

### Scripting is Powerful
Bash scripting is a versatile tool for automating tasks, managing files, and performing system administration on Unix-based systems. With the basics covered here, you can start writing your own Bash scripts to simplify and automate your workflow.