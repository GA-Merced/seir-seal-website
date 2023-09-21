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

## Writing Django Views
### What are Django Views?
In Django, views are Python functions or classes that handle HTTP requests and return HTTP responses. Views encapsulate the logic of your web application, determining what content to display or what action to take when a user visits a specific URL. Views can generate HTML content, return JSON data, process form submissions, and perform various other tasks.

### How to Write Function Views
#### 1. Create a Function View
To write a function view, define a Python function that takes an HTTP request as its argument and returns an HTTP response. Here's a simple example of a function view that returns "Hello, World!" as an HTML response:

```py
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello, World!")
```
#### 2. Map View to URL
To connect the view to a URL, you need to define a URL pattern. This is typically done in the urls.py file of your Django app. For example:

```py
from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_world, name='hello-world'),
]
```
In this example, the hello_world function view is mapped to the URL /hello/.

### How to Write Class-Based Views
Class-based views (CBVs) are another way to define views in Django. They provide a more structured and reusable approach for handling HTTP requests.

#### 1. Create a Class-Based View
Here's an example of a class-based view that accomplishes the same task as the function view above:

```py
from django.http import HttpResponse
from django.views import View

class HelloWorldView(View):
    def get(self, request):
        return HttpResponse("Hello, World!")
```

#### 2. Map View to URL
To map a class-based view to a URL, you can use the as_view() method when defining URL patterns:

```py
from django.urls import path
from .views import HelloWorldView

urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello-world'),
]
```
### Connecting Views to URLs
In Django, you connect views to URLs by defining URL patterns in your app's urls.py file. Each URL pattern associates a URL path with a specific view. You can use regular expressions and path converters to capture dynamic parts of URLs.

#### Using Multiple url.py Files by App
For larger Django projects, it's common to organize your URLs into multiple url.py files, one per app. This helps keep your project structure clean and maintainable.

To achieve this:

Create a urls.py file in the app's directory if it doesn't already exist.

Define the URL patterns specific to the app in that urls.py file.

Include the app's URLs in the project's main urls.py file using include():

```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('app/', include('myapp.urls')),
]
```

This allows you to maintain separate URL configurations for each app within your project.

In summary, Django views are the heart of your web application, handling HTTP requests and generating responses. You can write views as simple function-based views or use class-based views for more complex logic. By connecting views to URLs, you define how users access different parts of your application. Organizing URLs with multiple url.py files by app helps keep your Django project organized and maintainable as it grows.

## Django Rest Framework (DRF) and How to Use It
### What is Django Rest Framework (DRF)?
Django Rest Framework (DRF) is a powerful and flexible toolkit for building Web APIs in Django applications. It simplifies the process of creating RESTful APIs by providing a set of reusable components and tools. DRF is widely used for building APIs for web and mobile applications, and it follows Django's "batteries-included" philosophy, making it easy to integrate with existing Django projects.

### Key Features of DRF
Serialization: DRF provides serializers that allow you to convert complex data types (e.g., Django model instances) into native Python data types, making it easy to render them into JSON, XML, or other content types.

- **Views:** DRF includes a variety of generic views for common API patterns, such as retrieving a list of objects or a single object, creating, updating, and deleting objects.

- **Authentication:** It offers robust authentication support, including built-in support for session authentication, token authentication, and OAuth.

- **Permissions:** DRF allows you to set granular permissions for API views, controlling who can access and modify data.

- **Throttling:** You can set rate limits on your APIs to prevent abuse and ensure fair usage.

- **Pagination:** DRF provides flexible pagination options for handling large datasets.

- **Browsable API:** It offers a browsable web API, which allows developers to interact with the API using a web interface similar to Django's admin interface.

### How to Use DRF
To use Django Rest Framework in your Django project, follow these steps:

#### 1. Install DRF
Install DRF using pip:

```shell
pip install djangorestframework
```

#### 2. Add DRF to Installed Apps
In your Django project's settings (settings.py), add 'rest_framework' to the INSTALLED_APPS list:

```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
]
```

#### 3. Create a Serializer
A serializer in DRF defines how data should be converted to and from Python objects. You can create serializers by subclassing serializers.Serializer or using serializers.ModelSerializer for database models. For example:

```py
from rest_framework import serializers

class MyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyModel
        fields = '__all__'
```

#### 4. Create API Views
Define views for your API by creating Python classes that subclass DRF's generic views. For example, to create a view for listing and creating objects, you can use ListCreateAPIView:

```py
from rest_framework import generics
from .models import MyModel
from .serializers import MyModelSerializer

class MyModelListCreateView(generics.ListCreateAPIView):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer
```

#### 5. Configure URLs
Define URL patterns for your API views in your app's urls.py file. Use DRF's router for easy URL routing:

```py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MyModelListCreateView

router = DefaultRouter()
router.register(r'mymodels', MyModelListCreateView)

urlpatterns = [
    path('', include(router.urls)),
]
```

#### 6. Configure Authentication and Permissions
Set up authentication classes and permissions in your project's settings to secure your API endpoints as needed.

#### 7. Test and Document Your API
DRF provides tools for testing your API and generating interactive API documentation. You can use the built-in APITestCase class for testing and generate documentation using tools like drf-yasg.

#### 8. Run Your Project
Finally, run your Django project as usual:

```
python manage.py runserver
```

Your Django Rest Framework-powered API should now be accessible at the defined endpoints, allowing you to create, retrieve, update, and delete data using RESTful conventions.





## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
