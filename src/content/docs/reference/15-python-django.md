---
title: Python/Django
description: A reference page in my new Starlight docs site.
---

## Basics of Python:
### 1. What Is Python?
Python is a high-level, interpreted programming language known for its simplicity and readability. It was created by Guido van Rossum and first released in 1991. Python is widely used in various domains, including web development, data science, scientific computing, artificial intelligence, and more. It emphasizes code readability and a clean, concise syntax, making it an excellent choice for beginners and experienced developers alike.

### 2. Defining Variables:
In Python, you can define variables to store and manipulate data. Variable names are case-sensitive and should follow certain naming conventions:

- Variable names can consist of letters (a-z, A-Z), digits (0-9), and underscores (_).
- Variable names must start with a letter or an underscore.
- Python is dynamically typed, meaning you don't need to declare a variable's data type explicitly. Python infers the data type based on the value assigned to it.

#### Examples of defining variables:

```py
# Integer variable
age = 25

# String variable
name = "Alice"

# Boolean variable
is_student = True

# Floating-point variable
price = 9.99
```
### 3. Data Types and Operators:
Python supports various data types and operators for performing operations on data. Here's an overview:

- a. **Numeric Data Types:**
  - **int:** Represents integer values, e.g., 10, -5.
  - **float:** Represents floating-point (decimal) values, e.g., 3.14, -0.5.
  - **complex:** Represents complex numbers, e.g., 1 + 2j.
- b. **String Data Type:**
  - **str:** Represents text or string values, enclosed in single (') or double (") quotes, e.g., 'Hello, World!'.
- c. **Boolean Data Type:**
  - **bool:** Represents Boolean values, either True or False.
- d. **Containers:**
  - **List:** An ordered collection of elements, denoted by square brackets [], e.g., [1, 2, 3].
  - **Tuple:** An ordered, immutable collection of elements, denoted by parentheses (), e.g., (1, 2, 3).
  - **Dictionary:** A collection of key-value pairs, denoted by curly braces {}, e.g., {"name": "Alice", "age": 25}.
  - **Set:** An unordered collection of unique elements, denoted by curly braces {}, e.g., {1, 2, 3}.
- e. **Operators:**
  - **Arithmetic Operators:** + (addition), - (subtraction), * (multiplication), / (division), % (modulo), ** (exponentiation).

  - **Comparison Operators:** == (equal), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal).

  - **Logical Operators:** and (logical AND), or (logical OR), not (logical NOT).

  - **Assignment Operators:** = (assignment), += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign), %= (modulo and assign), **= (exponentiate and assign).

  - **Membership Operators:** in (checks if an element is present in a sequence), not in (checks if an element is not present).

  - **Identity Operators:** is (checks if two variables refer to the same object), is not (checks if two variables do not refer to the same object).

These basics provide a foundation for writing Python code. As you explore Python further, you'll delve into more advanced concepts and libraries to build a wide range of applications.

## What is Django and Getting Started
### What is Django?
Django is a high-level and open-source web framework written in Python that encourages rapid development and clean, pragmatic design. It follows the Model-View-Controller (MVC) architectural pattern, but in Django, it's referred to as Model-View-Template (MVT).

Django provides a robust set of tools and libraries for building web applications, making it a popular choice for developers. Some of its key features include:

**Built-in Admin Interface:** Django includes an admin interface for managing application data, which can be customized to suit your needs.

**ORM (Object-Relational Mapping):** Django's ORM allows you to interact with your database using Python code, abstracting away much of the SQL database interaction.

**URL Routing:** Django has a flexible URL routing system that helps you map URLs to views.

**Template Engine:** It includes a powerful template system for generating HTML dynamically.

**Security:** Django includes built-in security features to protect against common web vulnerabilities, such as cross-site scripting (XSS) and SQL injection.

**Scalability:** Django is scalable and can handle applications of all sizes, from small projects to large and complex web applications.

### Getting Started with Django
To get started with Django, follow these steps:

#### 1. Installation
First, make sure you have Python installed on your system (Django requires Python 3.6 or later). Then, install Django using pip:

```
pip install Django
```

#### 2. Create a Django Project
To create a new Django project, run the following command:

```
django-admin startproject projectname
```

Replace projectname with the desired name of your project. This command will create a project directory with the necessary files and structure.

#### 3. Create a Django App
Django projects are organized into apps. You can create a new app within your project using the following command:

```
python manage.py startapp appname
```

Replace appname with the name of your app. This command will create a directory for your app with the required files.

## Models in Django and How to Write Them
In Django, models represent the structure and schema of your application's database tables. Models are defined as Python classes, allowing you to create, retrieve, update, and delete records in your database using Python code, without having to write SQL queries manually. This section will cover the basics of writing models in Django.

### Defining a Model
To define a model in Django, you need to create a Python class that inherits from django.db.models.Model. Each attribute of the class represents a field in the corresponding database table. Django provides a variety of field types to suit different data types and relationships.

Here's an example of a simple Django model for a blog application:

python
```py
from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField('date published')
    author = models.ForeignKey('Author', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
```

In this example:

- BlogPost is the name of the model.
- title, content, pub_date, and author are fields in the model.
- models.CharField and models.TextField are field types for string and text data, respectively.
- models.DateTimeField is used for date and time data.
- models.ForeignKey establishes a many-to-one relationship with the Author model.
### Model Fields
Django provides various field types to define the type and constraints of your model's attributes. Here are some common field types:

- **CharField:** For short text fields, such as titles or names.
- **TextField:** For longer text fields, such as content or descriptions.
- **IntegerField, FloatField, DecimalField:** For numeric data types.
- **DateField, TimeField, DateTimeField:** For date and time data.
- **BooleanField:** For Boolean (True/False) values.
- **EmailField, URLField:** For email addresses and URLs.
- **ForeignKey:** For establishing relationships between models.
### Model Methods
You can define methods within your model to perform actions related to the model's data. In the example above, the __str__ method is defined to return a human-readable representation of a BlogPost object, which is helpful for debugging and display purposes.

### Migrations
After defining your models, you need to create and apply migrations to update your database schema. Migrations are Django's way of tracking and applying changes to the database.

To create migrations, run:

```
python manage.py makemigrations
```

To apply migrations and create the database tables, run:

```
python manage.py migrate
```

### Admin Interface
Django provides a built-in admin interface that allows you to manage your application's data. To make your models accessible in the admin interface, you can register them in the admin.py file of your app. Here's an example:

```py
from django.contrib import admin
from .models import BlogPost

admin.site.register(BlogPost)
```

This allows you to create, view, update, and delete BlogPost objects through the admin interface.



## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
