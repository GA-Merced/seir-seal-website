---
title: Authentication and Authorization
description: Reference on creating secure web applications
---

## Authentication and Authorization in Web Applications

Authentication and authorization are fundamental concepts in web application security. They play a crucial role in ensuring that users can access the appropriate resources and perform actions securely. Let's explore these concepts along with two common approaches for implementing authentication: session-based authentication and JWT-based authentication.

### Authentication vs. Authorization

Authentication is the process of verifying the identity of a user or system. It answers the question, "Who are you?" Typically, users provide credentials such as a username and password to prove their identity. Once authenticated, the user is given access to specific resources or functionalities within the application.

Authorization, on the other hand, is the process of determining what actions or resources an authenticated user can access. It answers the question, "What are you allowed to do?" Authorization ensures that users can only perform actions or access data that they have permission for.

### Session-Based Authentication

Session-based authentication is a traditional approach to managing user authentication.

#### Here's how it works:

- When a user logs in with valid credentials (e.g., username and password), the server creates a session for that user.

- The server generates a unique session ID and stores it on the server-side, often in memory or a database. This session ID is associated with the user's identity and permissions.

- The session ID is sent back to the client, usually as a cookie in the HTTP response.

- On subsequent requests, the client sends the session ID in a cookie, and the server uses it to identify the user and check their permissions.

#### Pros of Session-Based Authentication:

- It's secure by default because session data is stored on the server.
- Sessions can be easily invalidated (e.g., logging out or on session timeout).

#### Cons of Session-Based Authentication:

- It requires server-side storage, which can be resource-intensive for large applications.
- It can be less suitable for stateless, distributed systems or microservices.

### JWT-Based Authentication

JWT-based authentication (JSON Web Token) is a stateless approach to authentication.

#### Here's how it works:

- When a user logs in, the server generates a JWT containing the user's identity and any relevant claims (e.g., roles or permissions).

- The JWT is signed using a secret key, creating a token that can be trusted because it's difficult to tamper with without the secret key.

- The JWT is sent to the client as part of the login response.

- On subsequent requests, the client includes the JWT in the request headers.

- The server verifies the JWT's signature and decodes its contents to identify the user and their permissions.

#### Pros of JWT-Based Authentication:

- It's stateless, meaning servers don't need to store session data.
- JWTs can be easily shared and used across different services or applications.

#### Cons of JWT-Based Authentication:

- JWTs can't be invalidated once issued (without additional complexity).
- They may become large if they store a lot of claims.

### Choosing Between Session-Based and JWT-Based Authentication

The choice between session-based and JWT-based authentication depends on your application's requirements and constraints:

#### Session-Based Authentication:

- Use this approach if you need to invalidate sessions (e.g., for logout).
- It's a good fit for traditional web applications with server-side sessions.
- Ideal for applications with limited scalability needs.

#### JWT-Based Authentication:

- Choose JWT if you need a stateless, scalable authentication mechanism.
- Suitable for microservices architectures and single-page applications (SPAs).
- Works well when you want to allow other services or applications to verify authentication independently.

In practice, many applications use a combination of both approaches. For example, JWTs might be used for authenticating API requests, while session-based authentication is used for web pages with traditional server-rendered content.

Ultimately, the choice depends on your application's specific needs and how you prioritize factors like scalability, ease of implementation, and security.

## Implementing Session-Based Authentication in Express.js

Session-based authentication is a common approach for managing user authentication in web applications using server-side sessions. In this guide, we'll walk you through the steps to implement session-based authentication in an Express.js application.

### Prerequisites:

- Basic knowledge of Express.js
- Node.js installed on your system
- Express.js installed in your project (npm install express)

### Here's how to implement session-based authentication:

#### 1. Set Up Your Express Application

If you haven't already created an Express.js application, you can do so by setting up a basic Express project:

```js
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Initialize session middleware
app.use(
  session({
    secret: "your-secret-key", // Change this to a secure random key
    resave: false,
    saveUninitialized: true,
  })
);

// Your routes and other middleware will go here
```

In the code above, we've imported the necessary libraries, initialized an Express application, and set up session middleware using the express-session package. Replace 'your-secret-key' with a strong, randomly generated secret key for better security.

#### 2. Create a User Authentication System

You need a user authentication system to manage user sessions. This typically involves the following components:

##### 2.1. User Model

Create a user model (e.g., User.js) to represent users and interact with your database. You can use a database library like Mongoose if you're using MongoDB.

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Password should be hashed and salted
  // Other user-related fields
});

module.exports = mongoose.model("User", userSchema);
```

##### 2.2. Registration and Login Routes

Create routes for user registration and login. When a user registers, create a new user record in your database. During login, validate the user's credentials and create a session for the authenticated user.

```js
const User = require("./models/User");

// Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Create a new user
    const user = new User({ username, password });
    await user.save();
    req.session.userId = user._id; // Create a session for the user
    res.status(201).send("User registered and logged in");
  } catch (error) {
    console.error(error);
    res.status(500).send("Registration failed");
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }
    req.session.userId = user._id; // Create a session for the user
    res.status(200).send("Logged in successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Login failed");
  }
});
```

##### 2.3. Authentication Middleware

Create a middleware function to check if a user is authenticated before allowing access to protected routes.

```js
function authenticateUser(req, res, next) {
  if (!req.session.userId) {
    return res.status(401).send("Unauthorized");
  }
  next();
}

// Example: Protect a route
app.get("/profile", authenticateUser, (req, res) => {
  res.send("Welcome to your profile");
});
```

#### 3. Logout

Implement a route for user logout to destroy the session.

```js
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Logout failed");
    } else {
      res.status(200).send("Logged out successfully");
    }
  });
});
```

#### 4. Start Your Express Application

Start your Express application by listening on a specific port:

```js
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

With these steps, you've implemented session-based authentication in your Express.js application. Users can register, log in, access protected routes, and log out while their session remains active. Be sure to secure your application further by adding features like password hashing, user roles, and HTTPS for production use.

## Implementing JWT Authentication in Express.js

JSON Web Tokens (JWT) authentication is a popular approach for securing APIs in Express.js applications. JWTs provide a stateless, scalable, and secure way to authenticate and authorize users. In this guide, we'll walk you through the steps to implement JWT authentication in an Express.js application.

### Prerequisites:

- Basic knowledge of Express.js
- Node.js installed on your system
- Express.js installed in your project (npm install express)
- jsonwebtoken library (npm install jsonwebtoken) for working with JWTs

### Here's how to implement JWT authentication:

#### 1. Set Up Your Express Application

If you haven't already created an Express.js application, set up a basic Express project:

```js
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Your routes and other middleware will go here
```

In the code above, we've imported the necessary libraries, initialized an Express application, and set up body parsing for JSON requests.

#### 2. Create a User Authentication System

You need a user authentication system to manage JWTs and user authentication. This typically involves the following components:

##### 2.1. User Model

Create a user model (e.g., User.js) to represent users and interact with your database. You can use a database library like Mongoose if you're using MongoDB.

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // Password should be hashed and salted
  // Other user-related fields
});

module.exports = mongoose.model("User", userSchema);
```

##### 2.2. Registration and Login Routes

Create routes for user registration and login. During registration, create a new user record in your database. During login, validate the user's credentials and generate a JWT for the authenticated user.

```js
const User = require("./models/User");
const { secretKey } = require("./config"); // Replace with your secret key

// Registration
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Create a new user
    const user = new User({ username, password });
    await user.save();
    res.status(201).send("User registered");
  } catch (error) {
    console.error(error);
    res.status(500).send("Registration failed");
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid credentials");
    }
    // Generate a JWT
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h", // Set the token expiration time
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Login failed");
  }
});
```

##### 2.3. Authentication Middleware

Create a middleware function to check if a user is authenticated by verifying the JWT on protected routes.

```js
function authenticateUser(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }
    req.userId = decoded.userId;
    next();
  });
}

// Example: Protect a route
app.get("/profile", authenticateUser, (req, res) => {
  res.send("Welcome to your profile");
});
```

#### 3. Start Your Express Application

Start your Express application by listening on a specific port:

```js
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

With these steps, you've implemented JWT authentication in your Express.js application. Users can register, log in, access protected routes by sending a JWT in the Authorization header, and perform various authenticated actions. Be sure to secure your application further by adding features like password hashing, user roles, token refreshing, and HTTPS for production use.

## Implementing Session-Based Authentication in Django

Session-based authentication is a common method for securing web applications, and Django, a Python web framework, provides built-in support for session management and user authentication. In this guide, you will learn how to implement session-based authentication in a Django application.

### Prerequisites:

Basic knowledge of Python and Django
A Django project set up and running
Here's how to implement session-based authentication:

#### 1. Set Up Your Django Project

If you haven't already created a Django project, you can do so using the following command:

```
django-admin startproject projectname
```

Make sure to navigate to the project directory:

```
cd projectname
```

#### 2. Create a User Authentication System

Django includes a built-in authentication system that you can use to manage user accounts. To enable it, follow these steps:

##### 2.1. Update settings.py

Open your project's settings.py file and add 'django.contrib.auth' to the INSTALLED_APPS list to enable the authentication system:

```py
INSTALLED_APPS = [
    # ...
    'django.contrib.auth',
    'django.contrib.contenttypes',
    # ...
]
```

##### 2.2. Create the Database Tables

Django's authentication system requires database tables for user management. To create these tables, run the following command:

```
python manage.py migrate
```

##### 2.3. Create User Registration and Login Views

You need views and templates for user registration and login. Here's a basic example:

views.py

```py
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return redirect('profile')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('profile')
    return render(request, 'registration/login.html')
```

Templates (register.html and login.html)

Create HTML templates for user registration and login forms. Make sure to include the necessary form fields.

##### 2.4. Define URLs for Registration and Login

Define URLs for the registration and login views in your urls.py:

```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),  # Django's built-in authentication views
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    # ...
]
```

#### 3. Protect Views with Authentication

To protect certain views and restrict access to authenticated users, you can use the @login_required decorator provided by Django:

```py
from django.contrib.auth.decorators import login_required

@login_required
def profile(request):
    return render(request, 'profile.html')
```

In the example above, the profile view can only be accessed by authenticated users. If an unauthenticated user tries to access it, they will be redirected to the login page.

#### 4. Create Logout View

To allow users to log out, create a view and template for the logout action:

views.py

```py
from django.contrib.auth import logout

def logout_view(request):
    logout(request)
    return redirect('login')
Templates (logout.html)
```

Create an HTML template for the logout page.

URLs (urls.py)
Define a URL for the logout view in your urls.py:

```js
path('logout/', views.logout_view, name='logout'),
```

#### 5. Configure Session Settings

Django's authentication system relies on session management. Ensure that you have session-related settings configured in your settings.py file. Django uses cookies to manage user sessions by default.

Here are some session-related settings you may configure:

```py
# settings.py

# Session engine (default: 'django.contrib.sessions.backends.db')
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'

# Session cookie settings
SESSION_COOKIE_NAME = 'sessionname'
SESSION_COOKIE_SECURE = False  # Set to True for HTTPS
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_SAMESITE = 'Lax'  # Can be 'Lax' or 'Strict'

# Session timeout (in seconds)
SESSION_COOKIE_AGE
```

## JWT Auth with DjangoRestFramework

### Step 1: Install Required Packages

First, install the required packages for JWT authentication and Django Rest Framework if you haven't already:

```
pip install djangorestframework djangorestframework-jwt
```

### Step 2: Configure Django Settings

In your Django project's settings (settings.py), configure the authentication classes and the JWT_AUTH settings:

```py
# settings.py

INSTALLED_APPS = [
    # ...
    'rest_framework',
    'rest_framework_jwt',
]

# Add DRF's authentication classes
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
    ),
}

# JWT settings
JWT_AUTH = {
    'JWT_SECRET_KEY': 'your-secret-key',  # Replace with a secret key (keep it secret!)
    'JWT_ALGORITHM': 'HS256',  # Algorithm to encode/decode JWTs
    'JWT_ALLOW_REFRESH': True,
    'JWT_EXPIRATION_DELTA': timedelta(hours=1),  # Token expiration time
    'JWT_REFRESH_EXPIRATION_DELTA': timedelta(days=7),  # Token refresh time
}
```

Replace 'your-secret-key' with a strong and secret key for JWT token generation.

### Step 3: Create User Authentication Views

In your Django app, create views for user authentication, such as login and registration:

```py
# views.py

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login, logout

@api_view(['POST'])
@permission_classes([AllowAny])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)

    if user is not None:
        login(request, user)
        # Generate and return a JWT token upon successful login
        from rest_framework_jwt.settings import api_settings
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        return Response({'token': token})
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([AllowAny])
def user_register(request):
    # Implement user registration logic here
    # ...

@api_view(['POST'])
def user_logout(request):
    logout(request)
    return Response(status=status.HTTP_200_OK)
```

### Step 4: Define URL Patterns

Define URL patterns for your authentication views in your app's urls.py:

```py
# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.user_login, name='user-login'),
    path('register/', views.user_register, name='user-register'),
    path('logout/', views.user_logout, name='user-logout'),
]
```

### Step 5: Protect Your API Views

To protect your API views with JWT authentication, simply add the @authentication_classes and @permission_classes decorators to the views that require authentication:

```py
# api_views.py

from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

@api_view(['GET'])
@authentication_classes([JSONWebTokenAuthentication])
@permission_classes([IsAuthenticated])
def protected_api_view(request):
    # Your protected API view logic here
```

### Step 6: Test Your Authentication

You can now test your JWT authentication by making requests to the login and registration endpoints, and then using the obtained token to access protected API views.

That's it! You've successfully set up JWT authentication with Django Rest Framework. Your Django application is now secured, and you can control access to your API endpoints using JWT tokens.
