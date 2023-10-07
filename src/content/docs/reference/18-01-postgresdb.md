---
title: PostgresDB
description: Useful Python tricks reference
---

## SQL Databases
### What is an SQL / Relational Database?
An SQL (Structured Query Language) database, also known as a relational database, is a type of database management system (DBMS) that stores and manages data in a structured format, using tables with rows and columns. In a relational database, data is organized into tables, and relationships between tables are established using keys. SQL databases are known for their ability to efficiently manage structured data and support powerful querying and data manipulation capabilities.

### What is SQL?
SQL, which stands for Structured Query Language, is a domain-specific language used for managing and querying data in relational databases. SQL provides a standardized way to interact with SQL databases, allowing users to perform tasks such as data insertion, retrieval, updating, and deletion. It is a declarative language, meaning that users specify what they want to achieve (e.g., retrieve specific data), and the database management system determines how to execute the query.

SQL is not tied to a specific database system and is supported by a wide range of relational database management systems, making it a universal language for working with structured data.

### Popular SQL Databases
There are several popular SQL database management systems, including:

- **MySQL:** An open-source relational database management system that is widely used for web applications. MySQL is known for its speed, reliability, and ease of use.

- **Oracle Database:** A robust and feature-rich commercial database system commonly used in enterprise-level applications. It offers high performance and scalability.

- **Microsoft SQL Server:** A relational database system developed by Microsoft, often used in Windows-based environments. It offers strong integration with Microsoft products and services.

- **SQLite:** A lightweight, embedded SQL database engine that is suitable for mobile and desktop applications. SQLite is serverless and requires minimal configuration.

- **PostgreSQL (Postgres):** An open-source relational database system known for its advanced features, extensibility, and strong adherence to SQL standards. It is often chosen for complex and data-intensive applications.

### What is Postgres and Why is it Popular?
PostgreSQL, often referred to as Postgres, is a powerful and open-source relational database management system. It has gained popularity for several reasons:

- **Advanced Features:** PostgreSQL offers advanced features such as support for JSON and JSONB data types, full-text search capabilities, and geospatial data support. It also provides extensibility through custom functions and extensions.

- **Strong ACID Compliance:** Postgres follows the principles of ACID (Atomicity, Consistency, Isolation, Durability) transactions, ensuring data integrity and reliability.

- **Community and Support:** Postgres has a large and active open-source community, which means regular updates, bug fixes, and a wealth of documentation and resources. Commercial support options are also available for enterprise users.

- **Cross-Platform Compatibility:** Postgres runs on various platforms, including Linux, macOS, and Windows, making it suitable for a wide range of applications.

- **Scalability:** PostgreSQL can handle both small-scale and large-scale databases, making it a flexible choice for projects of all sizes.

- **Data Security:** Postgres provides robust security features, including user authentication, role-based access control, and encryption options.

Due to its versatility, performance, and commitment to open-source principles, PostgreSQL has become a preferred choice for developers and organizations when working with SQL databases in complex and data-centric applications.

## SQL Keyword Reference

| Keyword       | Purpose                                           | Example                                |
|---------------|---------------------------------------------------|----------------------------------------|
| SELECT        | Retrieve data from one or more tables            | SELECT * FROM Customers WHERE Country='USA'; |
| FROM          | Specify the table(s) to retrieve data from       | SELECT * FROM Orders;                  |
| WHERE         | Filter rows based on a specified condition       | SELECT * FROM Employees WHERE Salary > 50000; |
| INSERT INTO   | Insert new rows into a table                     | INSERT INTO Customers (Name, Email) VALUES ('John', 'john@email.com'); |
| UPDATE        | Modify existing records in a table               | UPDATE Products SET Price=15.99 WHERE ProductID=101; |
| DELETE FROM   | Remove rows from a table                         | DELETE FROM Students WHERE Grade='F';  |
| CREATE TABLE  | Create a new table with specified columns       | CREATE TABLE Employees (ID INT, Name VARCHAR(255), Salary DECIMAL(10,2)); |
| ALTER TABLE   | Modify an existing table's structure             | ALTER TABLE Customers ADD COLUMN Phone VARCHAR(15); |
| DROP TABLE    | Delete an existing table                         | DROP TABLE Products;                    |
| JOIN          | Combine data from multiple tables based on a related column | SELECT Orders.OrderID, Customers.CustomerName FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID; |
| GROUP BY      | Group rows into summary results                  | SELECT Country, COUNT(*) FROM Customers GROUP BY Country; |
| ORDER BY      | Sort query results by one or more columns        | SELECT * FROM Products ORDER BY Price DESC; |
| DISTINCT      | Retrieve distinct values from a column           | SELECT DISTINCT Category FROM Products; |
| COUNT()       | Count the number of rows in a result set         | SELECT COUNT(*) FROM Orders WHERE OrderDate > '2023-01-01'; |
| SUM()         | Calculate the sum of numeric values in a column  | SELECT SUM(Price) FROM Products WHERE Category='Electronics'; |
| AVG()         | Calculate the average value of a numeric column  | SELECT AVG(Salary) FROM Employees WHERE Department='Finance'; |
| MAX()         | Find the maximum value in a column               | SELECT MAX(Population) FROM Countries; |
| MIN()         | Find the minimum value in a column               | SELECT MIN(Price) FROM Products; |
| AS            | Alias for renaming columns or derived values     | SELECT FirstName AS First, LastName AS Last FROM Employees; |
| BETWEEN       | Select values within a range                    | SELECT ProductName FROM Products WHERE Price BETWEEN 10 AND 20; |
| LIKE          | Filter rows based on pattern matching            | SELECT * FROM Customers WHERE ContactName LIKE 'J%'; |
| IN            | Filter rows based on a list of values            | SELECT ProductName FROM Products WHERE Category IN ('Electronics', 'Appliances'); |
| NOT           | Negate a condition                               | SELECT * FROM Employees WHERE NOT Salary < 50000; |
| UNION         | Combine the result sets of two or more SELECT statements | SELECT City FROM Customers UNION SELECT City FROM Suppliers; |

## Using PostgreSQL in JavaScript with Express.js and Sequelize
### PostgreSQL with Express.js
Express.js is a popular Node.js web application framework that can be seamlessly integrated with PostgreSQL databases. To use PostgreSQL in JavaScript with Express.js, you'll need to follow these steps:

#### 1. Install Required Packages
First, install the necessary packages using npm or yarn:

```
npm install express pg sequelize sequelize-cli
```

- **express:** The Express.js framework.
- **pg:** The PostgreSQL driver for Node.js.
- **sequelize:** An ORM (Object-Relational Mapping) library for interacting with databases.
- **sequelize-cli:** The Sequelize command-line tool for managing database migrations.
#### 2. Create an Express.js App
Set up an Express.js application, configure it to connect to your PostgreSQL database, and define your routes. Here's a basic example:

```js
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

// Create a Sequelize instance and connect to the PostgreSQL database
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define a model for a PostgreSQL table
const User = sequelize.define('User', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

// Define routes
app.get('/', async (req, res) => {
  try {
    // Create a new user
    const user = await User.create({
      username: 'john_doe',
      email: 'john@example.com',
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### 3. Migrate and Seed the Database
Use the Sequelize command-line tool to create migrations and seed data for your PostgreSQL database. First, initialize Sequelize:

```
npx sequelize-cli init
```

Then, create a migration and seed files:

```
npx sequelize-cli model:generate --name User --attributes username:string,email:string
```

Edit the generated migration and seed files to define the schema and sample data.

#### 4. Run Migrations and Start the App
Run the migrations to create the PostgreSQL tables:

```
npx sequelize-cli db:migrate
```

Then, seed the database with sample data:

```
npx sequelize-cli db:seed:all
```

Finally, start your Express.js application:

```
npm start
```

Your Express.js app is now connected to a PostgreSQL database, and you can create, read, update, and delete data using Sequelize.

### Conclusion
By integrating PostgreSQL with JavaScript, Express.js, and Sequelize, you can build powerful web applications that leverage the capabilities of a robust relational database system. Sequelize simplifies database interactions and allows you to work with PostgreSQL seamlessly in your JavaScript-based projects.

## Using PostgreSQL in Python with Flask, FastAPI, and Django
PostgreSQL is a popular relational database system that integrates seamlessly with Python web frameworks like Flask, FastAPI, and Django. In this section, we'll explore how to use PostgreSQL with each of these frameworks, along with examples.

### 1. Using PostgreSQL with Flask
#### Installation
To use PostgreSQL with Flask, you'll need to install the psycopg2 or psycopg2-binary package, which is a PostgreSQL adapter for Python:

```
pip install psycopg2-binary
```
#### Example Integration
Here's an example of how to use PostgreSQL with Flask:

```py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure the PostgreSQL database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/mydatabase'
db = SQLAlchemy(app)

# Define a model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

# Create the database tables
db.create_all()

# Usage example
@app.route('/')
def get_users():
    users = User.query.all()
    return {'users': [user.username for user in users]}

if __name__ == '__main__':
    app.run()
```
### 2. Using PostgreSQL with FastAPI
#### Installation
For FastAPI, you can use the sqlalchemy and databases packages in combination with PostgreSQL:

bash
```
pip install fastapi[all] sqlalchemy databases
```
#### Example Integration
Here's an example of how to use PostgreSQL with FastAPI:

```py
from fastapi import FastAPI
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base
import databases

app = FastAPI()

# Configure the PostgreSQL database connection
DATABASE_URL = 'postgresql://username:password@localhost/mydatabase'
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

# Define a model
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)

# Create the database engine and session
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Usage example
@app.get('/')
async def get_users():
    query = User.__table__.select()
    users = await database.fetch_all(query)
    return {'users': [user['username'] for user in users]}
```
### 3. Using PostgreSQL with Django
#### Installation
Django has built-in support for PostgreSQL, but you can further enhance it with the psycopg2 package:

```
pip install django psycopg2
```
#### Example Integration
Here's an example of how to use PostgreSQL with Django:

In your Django project settings (settings.py), configure the database:

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydatabase',
        'USER': 'username',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```
Create a Django model:

```py
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=80, unique=True)
```

Run migrations to create the PostgreSQL tables:

```
python manage.py makemigrations
python manage.py migrate
```

Usage example in a Django view:

```py
from django.http import JsonResponse
from .models import User

def get_users(request):
    users = User.objects.all()
    return JsonResponse({'users': [user.username for user in users]})
```

By following these examples, you can integrate PostgreSQL with your Python web applications built using Flask, FastAPI, or Django, allowing you to efficiently manage and query relational data in your projects.