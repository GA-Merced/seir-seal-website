---
title: Working with Files and Database
description: Working with File Blobs in Databases
---

# Storing File Blobs in Databases
Storing file blobs in databases allows you to manage and retrieve binary data efficiently. Depending on the database system you are using, you will need to define the appropriate data type in your schema to store file blobs. Here's how you can do it in MongoDB, PostgreSQL, and MySQL:

## MongoDB
MongoDB is a NoSQL database that allows you to store binary data, such as file blobs, in a Binary Data (BinData) format. In MongoDB, you typically store binary data in BSON (Binary JSON) format.

### Schema Example in MongoDB:

In MongoDB, you can define a schema for a collection and use the BinData data type to store file blobs. Here's an example schema:

```js
{
  _id: ObjectId,
  fileName: String,
  fileData: BinData,
  // Other fields
}
```

In this example, fileData is of type BinData, where you can store the binary file data.

## PostgreSQL
PostgreSQL is a powerful relational database that provides a specific data type called bytea (binary string) to store binary data, including file blobs.

### Schema Example in PostgreSQL:

In PostgreSQL, you can define a table with a bytea column to store file blobs. Here's an example schema:

```sql
CREATE TABLE files (
  id SERIAL PRIMARY KEY,
  file_name VARCHAR(255),
  file_data BYTEA,
  -- Other columns
);
```

In this example, the file_data column is of type BYTEA, where you can store binary file data.

## MySQL
MySQL is another popular relational database that provides a binary data type called BLOB (Binary Large Object) to store binary data, including file blobs.

### Schema Example in MySQL:

In MySQL, you can define a table with a BLOB column to store file blobs. Here's an example schema:

```sql
CREATE TABLE files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  file_name VARCHAR(255),
  file_data BLOB,
  -- Other columns
);
```

In this example, the file_data column is of type BLOB, where you can store binary file data.

# Handling File Input on a Frontend Form
To allow users to upload files in a frontend form, you need to create an HTML form with an input field of type "file." Here's a basic example:

```html
<form id="fileUploadForm" enctype="multipart/form-data">
    <input type="file" name="fileInput" id="fileInput">
    <button type="submit">Upload File</button>
</form>
```

In this example, the form has an `enctype` attribute set to `"multipart/form-data"` to support file uploads. The input field with `type="file"` allows users to select and upload files.

Sending File Data to an API Endpoint
To send the file data to an API endpoint, you can use JavaScript to capture the form submission event, create a FormData object, and send it to the server using an XMLHttpRequest or fetch. Here's a JavaScript example:

```javascript
document.getElementById("fileUploadForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Get the selected file
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    // Create a FormData object and append the file to it
    const formData = new FormData();
    formData.append("file", file);

    // Send the FormData to the API endpoint using fetch
    fetch("/api/upload", {
        method: "POST",
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("File uploaded successfully:", data);
        // Handle the API response as needed
    })
    .catch((error) => {
        console.error("Error uploading file:", error);
        // Handle errors
    });
});
```

In this JavaScript code:

- We prevent the form from submitting traditionally using `e.preventDefault()`.
- We retrieve the selected file from the file input field.
- We create a FormData object and append the file to it using `formData.append("file", file)`.
- We send the FormData object to the API endpoint using the fetch API with a POST request.

On the server side (the API endpoint), you need to handle the file upload, process the file, and return a response to the frontend as needed. The specifics of server-side file handling depend on your backend technology (Node.js, Python, Ruby, etc.) and framework (Express.js, Django, Flask, etc.).

Ensure that your API endpoint is properly configured to receive and handle file uploads and respond accordingly.

# Express.js Form Submission Handling
First, let's set up the Express.js server to handle form submissions with file uploads. We'll use the express, multer, and appropriate database drivers for MongoDB, PostgreSQL, or MySQL.

```javascript
const express = require('express');
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;
const { Pool } = require('pg');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
const port = 3000;

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// MongoDB configuration (change the connection string as needed)
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'fileuploads';
const mongoClient = new MongoClient(mongoUrl, { useNewUrlParser: true });

// PostgreSQL configuration (change the connection string as needed)
const pgConfig = {
  user: 'your_user',
  password: 'your_password',
  host: 'localhost',
  database: 'fileuploads',
  port: 5432,
};
const pgPool = new Pool(pgConfig);

// MySQL configuration (change the connection details as needed)
const mysqlConfig = {
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'fileuploads',
};
const mysqlPool = mysql.createPool(mysqlConfig);

app.post('/upload', upload.single('fileInput'), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const fileName = file.originalname;
  const fileData = file.buffer;

  // Handle the file storage and database insertion based on the chosen database
  try {
    // MongoDB Example
    await mongoClient.connect();
    const db = mongoClient.db(dbName);
    const collection = db.collection('files');
    const insertResult = await collection.insertOne({ fileName, fileData });
    console.log('File saved in MongoDB:', insertResult.insertedId);

    // PostgreSQL Example
    // const pgClient = await pgPool.connect();
    // const insertResult = await pgClient.query(
    //   'INSERT INTO files (file_name, file_data) VALUES ($1, $2) RETURNING id',
    //   [fileName, fileData]
    // );
    // console.log('File saved in PostgreSQL:', insertResult.rows[0].id);

    // MySQL Example
    // mysqlPool.getConnection((err, connection) => {
    //   if (err) throw err;
    //   connection.query(
    //     'INSERT INTO files (file_name, file_data) VALUES (?, ?)',
    //     [fileName, fileData],
    //     (error, results) => {
    //       if (error) throw error;
    //       console.log('File saved in MySQL:', results.insertId);
    //       connection.release();
    //     }
    //   );
    // });
  } catch (error) {
    console.error('Error saving file:', error);
    return res.status(500).send('Error saving file.');
  } finally {
    await mongoClient.close();
    // Close PostgreSQL and MySQL connections if used
  }

  res.send('File uploaded and saved.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

This Express.js code handles form submissions with file uploads and saves the uploaded file in MongoDB, PostgreSQL, or MySQL based on the chosen database. You need to uncomment the relevant database-specific code and configure the connection details accordingly.

Make sure to install the required packages (express, multer, mongodb, pg, mysql) using npm or yarn before running this code. Adjust the database connection strings, user credentials, and table/collection names as needed for your setup.

Note: This is a basic example, and in a production environment, you should handle errors, input validation, and security measures such as sanitizing file names and validating file types to ensure the security and integrity of your application.

# Using Object Storage Instead of Saving File in Database

Using an object store like Amazon S3 or Cloudinary for file storage and storing the file URLs in your application database is a common and scalable approach for handling file uploads in web applications. Here's a walkthrough of how this approach works with a frontend file submission:

## Overview of the Approach
1. **Frontend Form Submission:** In your frontend, you provide a form for users to upload files. When a user submits the form, the file is sent directly to the object store (e.g., S3 or Cloudinary) using their respective APIs. The frontend captures the URL of the uploaded file.

1. **Object Store Handling:** The object store (e.g., S3 or Cloudinary) is responsible for securely storing and serving files. It generates a unique URL for each uploaded file.

1. **Storing URLs in the Database:** After uploading the file, the frontend receives the URL from the object store. You then send this URL to your backend, which stores it in your application's database along with any additional metadata.

1. **Retrieving Files:** When you need to display or access a file, you fetch the URL from the database and use it to retrieve the file from the object store.

## Frontend File Submission Flow
Here's a step-by-step flow of how frontend file submission works with an object store:

1. **User Interaction:** The user interacts with your web application and decides to upload a file.

1. **Frontend Form:** Your frontend presents a form that includes a file input field, allowing the user to select a file for upload.

1. **Form Submission:** When the user submits the form, JavaScript code running in the frontend captures the selected file and prepares it for upload.

1. **Direct Upload to Object Store:** Instead of sending the file to your backend server, the frontend directly uploads the file to the object store (e.g., S3 or Cloudinary) using the appropriate API. This offloads the file handling and storage burden from your server.

1. **Object Store URL:** After a successful upload, the object store generates a unique URL for the uploaded file. The frontend receives this URL as part of the response from the object store.

1. **Sending URL to Backend:** The frontend sends the file URL to your backend server, typically through an HTTP request (e.g., a POST request) that includes the URL in the request body or as a form field.

1. **Backend Storage:** Your backend server receives the URL and any associated metadata. It then stores this information in your application's database. You might create a record in a "files" table or collection with fields like "file_name," "file_url," and "file_metadata."

1. **File Metadata:** You can also store additional metadata about the file, such as the user who uploaded it, the upload timestamp, or any descriptive information.

## Retrieving Files
When you need to retrieve and display a file:

Your application queries the database to obtain the file URL and any associated metadata.

Using the file URL, your frontend requests the file directly from the object store (e.g., S3 or Cloudinary).

The object store serves the file, and your frontend can display or use it as needed.

This approach separates the concerns of file storage and retrieval, allowing you to take advantage of the scalability and performance benefits of object stores while keeping the file metadata and database interactions within your application's control.

# Example of Uploading Files to S3

Here's a code example that demonstrates how to handle file uploads in a frontend web application using JavaScript and an object store like Amazon S3. In this example, we'll use the AWS SDK for JavaScript (specifically, the S3 service) to upload files directly to S3 and store the file URLs in a mock database.

## Frontend HTML Form
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload Example</title>
</head>
<body>
    <form id="fileUploadForm">
        <input type="file" id="fileInput" accept="image/*">
        <button type="submit">Upload File</button>
    </form>

    <div id="fileList">
        <!-- Display uploaded files here -->
    </div>

    <script src="frontend.js"></script>
</body>
</html>
```
## Frontend JavaScript (frontend.js)
```javascript
// Initialize the AWS SDK with your S3 credentials
AWS.config.update({
    accessKeyId: 'YOUR_AWS_ACCESS_KEY',
    secretAccessKey: 'YOUR_AWS_SECRET_ACCESS_KEY',
    region: 'us-east-1' // Replace with your region
});

const s3 = new AWS.S3();

document.getElementById('fileUploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    // Generate a unique file key (you can customize this)
    const fileKey = `uploads/${Date.now()}-${file.name}`;

    try {
        // Upload the file to S3
        const uploadParams = {
            Bucket: 'your-s3-bucket-name',
            Key: fileKey,
            Body: file,
            ContentType: file.type
        };
        await s3.upload(uploadParams).promise();

        // Once the file is uploaded, store the S3 URL in your database (mocked here)
        const fileURL = `https://your-s3-bucket-name.s3.amazonaws.com/${fileKey}`;
        storeFileInDatabase(file.name, fileURL);

        // Clear the file input and show a success message
        fileInput.value = '';
        alert('File uploaded successfully.');
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file.');
    }
});

function storeFileInDatabase(fileName, fileURL) {
    // In a real application, make an API request to your backend to store the file URL in your database.
    // For demonstration purposes, we'll log the information here.
    console.log(`Stored in database: ${fileName} - ${fileURL}`);
}
```

In this example:


1. We have a basic HTML form that allows users to select and upload files.

1. JavaScript code handles the form submission event.

1. The AWS SDK for JavaScript is used to interact with Amazon S3 for file uploads.

1. We generate a unique file key for each uploaded file, and the file is uploaded directly to S3.

1. After a successful upload, the S3 URL is stored in the storeFileInDatabase function (mocked here, but in a real application, you'd send an API request to your backend to perform this operation).

1. Finally, we clear the file input field and show a success message.

Please note that you need to replace `'YOUR_AWS_ACCESS_KEY'`, `'YOUR_AWS_SECRET_ACCESS_KEY'`, `'us-east-1'`, and `'your-s3-bucket-name'` with your actual AWS credentials and S3 bucket information.

This code demonstrates a simplified frontend for handling file uploads directly to Amazon S3 while storing the file URLs in a database.