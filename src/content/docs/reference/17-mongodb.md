---
title: MongoDB
description: Useful Python tricks reference
---

## What is MongoDB?
MongoDB is a popular and open-source NoSQL database system designed for storing and managing large volumes of data. Unlike traditional relational databases, MongoDB is a document-oriented database that stores data in a flexible, schema-less format known as BSON (Binary JSON). BSON allows MongoDB to handle a wide variety of data types and complex structures, making it particularly suitable for applications with rapidly changing data requirements.

MongoDB is known for its scalability, high performance, and ease of use, making it a popular choice for web and mobile applications, content management systems, and big data solutions.

## Raw MongoDB Query Syntax
MongoDB uses a query language for interacting with the database. Here's an overview of the raw MongoDB query syntax:

### Inserting Documents:

```js
db.collectionName.insertOne({ field1: 'value1', field2: 'value2' });
Querying Documents:
```

```js
db.collectionName.find({ field: 'value' });
```
### Updating Documents:

```js
db.collectionName.updateOne({ field: 'value' }, { $set: { newField: 'newValue' } });
```

### Deleting Documents:

```js
db.collectionName.deleteOne({ field: 'value' });
```

### Aggregation:

```js
db.collectionName.aggregate([
  { $match: { field: 'value' } },
  { $group: { _id: '$groupField', total: { $sum: 1 } } },
]);
```

### Indexing:

```js
db.collectionName.createIndex({ field: 1 });
```
MongoDB also supports a wide range of query operators, including $eq, $ne, $gt, $lt, $gte, $lte, $in, $nin, $and, $or, and more, for complex data retrieval.

## What is an ODM (Object-Document Mapper)?
An ODM, which stands for Object-Document Mapper, is a software library or framework that provides an abstraction layer between your application code and the database. In the context of MongoDB, an ODM is used to map JavaScript objects to MongoDB documents and provide a more structured way to interact with the database.

ODMs are particularly useful when working with MongoDB in JavaScript-based applications, as they allow you to work with data in an object-oriented manner, rather than dealing directly with raw MongoDB queries. Some popular ODMs for MongoDB include Mongoose for Node.js and MongoDB ODM for Python.

### ODMs provide the following benefits:

- **Schema Validation:** ODMs allow you to define data schemas, which can enforce data validation and structure. This ensures that your data conforms to a predefined schema before being stored in the database.

- **Object-Oriented Paradigm:** With an ODM, you can work with MongoDB data using JavaScript objects and classes, making it more intuitive for developers familiar with object-oriented programming.

- **Query Abstraction:** ODMs often provide a more user-friendly API for querying the database, abstracting the complexity of raw MongoDB queries.

- **Middleware and Hooks:** Many ODMs offer middleware and hooks for defining custom logic before or after database operations, such as data validation or transformation.

Using an ODM with MongoDB can simplify the development process and improve code organization while taking advantage of the flexibility and scalability of MongoDB as a NoSQL database.

## Mongoose: Working with MongoDB in Express.js
### What is Mongoose?
Mongoose is an Object-Document Mapping (ODM) library for Node.js and MongoDB. It provides an elegant and straightforward way to interact with MongoDB databases in Node.js applications, particularly when building web applications using the Express.js framework. Mongoose simplifies working with MongoDB by allowing developers to define schemas, models, and perform database operations using JavaScript objects.

### Using Mongoose in an Express.js App
To work with MongoDB in an Express.js application using Mongoose, follow these steps:

#### Install Mongoose:

First, install Mongoose as a dependency in your Node.js project:

```
npm install mongoose --save
```
#### Setting Up Mongoose:

In your Express.js application, require Mongoose and establish a connection to your MongoDB server. Typically, this is done in your main application file (e.g., app.js or server.js):

```js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a reference to the MongoDB connection
const db = mongoose.connection;

// Handle MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
```
#### Define a Mongoose Schema:

Define a schema to represent the structure of documents in your MongoDB collection. Schemas in Mongoose define the fields, data types, and validation rules for your documents:

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);
```
### Perform CRUD Operations:

You can now use the User model to perform Create, Read, Update, and Delete (CRUD) operations on your MongoDB collection. Here are some examples:

#### Create a new user:

```js
const newUser = new User({
  username: 'john_doe',
  email: 'john@example.com',
  age: 30,
});

newUser.save((err) => {
  if (err) console.error(err);
  else console.log('User created successfully');
});
```

Find users:

```js
User.find({ age: { $gte: 18 } }, (err, users) => {
  if (err) console.error(err);
  else console.log(users);
});
```

#### Update a user:

```js
User.findOneAndUpdate(
  { username: 'john_doe' },
  { age: 31 },
  (err, user) => {
    if (err) console.error(err);
    else console.log('User updated successfully');
  }
);
```

#### Delete a user:

```
User.deleteOne({ username: 'john_doe' }, (err) => {
  if (err) console.error(err);
  else console.log('User deleted successfully');
});
```

#### Close the Connection:

Finally, don't forget to close the Mongoose connection when your application is shutting down:

```js
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection disconnected');
    process.exit(0);
  });
});
```
By following these steps, you can seamlessly integrate MongoDB with your Express.js application using Mongoose, allowing you to perform database operations in a structured and efficient manner.

## Using MongoDB with Python
MongoDB is a popular NoSQL database that can be easily integrated with Python applications. Two commonly used libraries for interacting with MongoDB in Python are pymongo and mongoengine. We'll explore how to use these libraries in the context of three popular Python web frameworks: Flask, FastAPI, and Django.

### 1. Using pymongo with Python
#### Installation
First, you'll need to install the pymongo library using pip:

```
pip install pymongo
```
#### Basic Usage
```py
import pymongo

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]

# Create a collection
collection = db["mycollection"]

# Insert a document
data = {"name": "John", "age": 30}
inserted_document = collection.insert_one(data)

# Find documents
result = collection.find({"age": {"$gte": 18}})
for document in result:
    print(document)

# Update a document
collection.update_one({"name": "John"}, {"$set": {"age": 31}})

# Delete a document
collection.delete_one({"name": "John"})
```
### 2. Integrating MongoDB with Flask
#### Installation
For Flask, you can install the Flask-PyMongo extension, which simplifies MongoDB integration:

```
pip install Flask-PyMongo
```

#### Example Integration

```py
from flask import Flask, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"
mongo = PyMongo(app)

@app.route("/")
def get_data():
    collection = mongo.db.mycollection
    result = collection.find({"age": {"$gte": 18}})
    data = [document for document in result]
    return jsonify(data)

if __name__ == "__main__":
    app.run()
```
### 3. Integrating MongoDB with FastAPI
#### Installation
For FastAPI, you can use the motor library along with fastapi for asynchronous MongoDB integration:

```
pip install fastapi[all] motor
```

#### Example Integration

```py
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()

@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient("mongodb://localhost:27017")
    app.mongodb = app.mongodb_client["mydatabase"]

@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/")
async def get_data():
    collection = app.mongodb["mycollection"]
    result = await collection.find({"age": {"$gte": 18}}).to_list(10)
    return result
```

### 4. Integrating MongoDB with Django
#### Installation
Django comes with its MongoDB integration package called djongo. You can install it using pip:

```
pip install djongo
```
#### Example Integration
In your Django settings (settings.py), configure the database to use MongoDB:

```py
DATABASES = {
    "default": {
        "ENGINE": "djongo",
        "ENFORCE_SCHEMA": True,  # Set to True to enforce schema validation
        "NAME": "mydatabase",
    }
}
```
Then, you can use Django's ORM to interact with MongoDB like you would with a traditional SQL database.

```py
from django.db import models

class MyModel(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

# Example query

result = MyModel.objects.filter(age__gte=18)
```
By following these examples, you can use MongoDB with Python and integrate it seamlessly into your web applications built with Flask, FastAPI, or Django, depending on your project's requirements and preferences.