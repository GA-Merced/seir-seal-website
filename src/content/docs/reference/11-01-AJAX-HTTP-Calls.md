---
title: HTTP Requests and Response
description: A Guide on how HTTP calls are made
---

# HTTP Protocol and Message Formatting

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It is a protocol that governs the transfer of data between a client (typically a web browser) and a server. HTTP operates on a request-response model, where clients send requests to servers, and servers respond with the requested information.

## HTTP Request

An HTTP request consists of the following components:

- Request Line: The first line of an HTTP request contains the method (e.g., GET, POST, PUT, DELETE), the resource path (e.g., /index.html), and the HTTP version (e.g., HTTP/1.1).

```bash
GET /index.html HTTP/1.1
```

- Headers: HTTP headers provide additional information about the request, such as the type of browser making the request, supported content types, and more.

```bash
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
```

- Body: In some HTTP requests (e.g., POST requests), there can be a message body that contains data to be sent to the server.

```bash
username=johndoe&password=secret
```

## HTTP Response

An HTTP response consists of these main parts:

- Status Line: The first line of an HTTP response includes the HTTP version, a status code, and a reason phrase.

```bash
HTTP/1.1 200 OK
```

Headers: Similar to request headers, response headers provide information about the server's response.

```bash
Content-Type: text/html; charset=utf-8
Content-Length: 1234
```

Body: The response body contains the actual content sent by the server, such as HTML, JSON, images, or any other data.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

## HTTP Methods

HTTP defines several methods, each serving a specific purpose:

- GET: Retrieve data from the server. It should not have any side effects on the server.

- POST: Submit data to the server, typically used for submitting forms or creating resources.

- PUT: Update an existing resource on the server or create a new resource if it doesn't exist.

- DELETE: Remove a resource from the server.

- PATCH: Apply a partial update to a resource.

- HEAD: Similar to GET, but it only retrieves headers and not the response body.

- OPTIONS: Retrieve information about the communication options for the target resource.

And more...

HTTP is a text-based protocol, making it human-readable, which is beneficial for debugging and understanding requests and responses. It operates over TCP/IP, and the format described above allows for the exchange of various types of data, making it the backbone of web communication. Modern web applications heavily rely on HTTP and its secure counterpart, HTTPS, for data transfer between clients and servers.

## Examples

### Request for a Web Page (when you type a url in your browser)

#### Request

```bash
GET /example.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
```

#### Response

```bash
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 1234

<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```

### Submitting an HTML Form

#### Request
```bash
POST /submit-form HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Content-Type: application/x-www-form-urlencoded
Content-Length: 35

name=John+Doe&email=johndoe%40example.com
```

In this example, the client is making a POST request to submit a form to the server at www.example.com. The request includes the form data in the request body. The `Content-Type` header specifies that the data is in `application/x-www-form-urlencoded` format, which is a common way to send form data.

#### Response

```html
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 68

<!DOCTYPE html>
<html>
<head>
    <title>Form Submission Result</title>
</head>
<body>
    <h1>Thank you for submitting the form, John Doe!</h1>
</body>
</html>
```

In response to the form submission, the server sends an HTTP response with a status line indicating 200 OK, meaning the form submission was successful. It includes response headers and an HTML response body indicating that the form submission was received and processed.

This example demonstrates how an HTTP request and response can be used to submit form data and receive a response from a server. The specific form data and response content may vary depending on the application and server-side processing.

### A JSON API Request

#### Request
```bash
POST /submit-json-form HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Content-Type: application/json
Content-Length: 54

{
    "name": "Jane Doe",
    "email": "janedoe@example.com"
}
```

In this example, the client is making a POST request to submit a form in JSON format to the server at `www.example.com`. The request includes the form data in the request body, and the `Content-Type` header specifies that the data is in `application/json` format.

#### Response

```bash
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8
Content-Length: 58

{
    "message": "Form submission successful",
    "data": {
        "name": "Jane Doe",
        "email": "janedoe@example.com"
    }
}
```

In response to the JSON form submission, the server sends an HTTP response with a status line indicating 201 Created, meaning the resource (form submission) was successfully created. It includes response headers and a JSON response body indicating that the form submission was received and processed. The JSON response includes a message field and the submitted form data in the data field.

This example demonstrates how an HTTP request and response can be used to submit form data in JSON format and receive a JSON response from a server. The specific JSON data and response content may vary depending on the application and server-side processing.

## Typical HTTP Headers and Their Purpose

HTTP headers are essential components of HTTP requests and responses. They provide metadata and instructions to servers and clients, enhancing the functionality and security of web communications. Below are some typical HTTP headers and their purposes:

### 1. **User-Agent Header**

- **Purpose:** The User-Agent header identifies the client or user agent making the HTTP request, typically a web browser or application. It helps servers tailor responses to different client capabilities.

### 2. **Content-Type Header**

- **Purpose:** The Content-Type header specifies the media type or format of the data in the HTTP message's body. It ensures that the recipient understands how to interpret the content.

### 3. **Accept Header**

- **Purpose:** The Accept header, included in an HTTP request, specifies the media types that the client can understand. It helps servers select an appropriate response format.

### 4. **Authorization Header**

- **Purpose:** The Authorization header contains credentials or tokens required for authentication, allowing access to restricted resources on the server.

### 5. **Cache-Control Header**

- **Purpose:** The Cache-Control header provides directives to control caching behavior. It helps in optimizing performance and reducing unnecessary network requests.

### 6. **Location Header**

- **Purpose:** The Location header is often used in HTTP responses with status codes like 301 or 302 to indicate a new location for the resource. It's essential for redirection.

### 7. **Cookie Header**

- **Purpose:** The Cookie header carries user-specific data, such as session identifiers, between the client and server. It's crucial for maintaining user sessions.

### 8. **Set-Cookie Header**

- **Purpose:** The Set-Cookie header is used in HTTP responses to set cookies on the client's side. It's essential for tracking user state and preferences.

### 9. **ETag Header**

- **Purpose:** The ETag (Entity Tag) header provides a unique identifier for a specific version of a resource. It's used in conditional requests to check if a resource has changed.

### 10. **Access-Control-Allow-Origin Header**

- **Purpose:** The Access-Control-Allow-Origin header is part of Cross-Origin Resource Sharing (CORS) and specifies which origins are allowed to access a resource on a different domain.

### 11. **Content-Disposition Header**

- **Purpose:** The Content-Disposition header, used in HTTP responses, suggests how the user agent should handle the received content. It's often used for file downloads.

These headers serve various purposes, such as controlling caching, ensuring security, handling authentication, and enabling cross-origin requests. Understanding and using them correctly is essential for effective web communication and application development.

# Making API Requests with Javascript

In JavaScript, the fetch() function is used to make network requests to fetch resources, typically from a web server. It provides a modern, promise-based approach for making HTTP requests, making it easier to work with asynchronous data in web applications. fetch() allows you to send HTTP requests and handle the responses in a more streamlined way compared to older techniques like XMLHttpRequest.

Here's a breakdown of the syntax and common use cases for the fetch() function:

Syntax:
```js
fetch(url [, options])
  .then(response => {
    // Handle the response here
  })
  .catch(error => {
    // Handle any errors here
  });
```

- url (required): The URL of the resource you want to fetch.
- options (optional): An optional object that allows you to configure the request, including headers, request method, and more.

# Common Use Cases for Fetch:

## Basic GET Request:

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Handle the fetched data
  })
  .catch(error => {
    // Handle any errors
  });
```

In this example, we make a simple GET request to the specified URL and parse the JSON response.

## Sending Data with POST Request:

```js
fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: 'value' }),
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    // Handle any errors
  });
```

Here, we configure a POST request and send JSON data in the request body.

## Handling Different Response Types:

```js
fetch('https://example.com/image.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob(); // Parse response as a binary blob
  })
  .then(imageBlob => {
    // Handle the image blob
    const imageUrl = URL.createObjectURL(imageBlob);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.body.appendChild(imgElement);
  })
  .catch(error => {
    // Handle any errors
  });
```

This example demonstrates how to handle different response types, in this case, a binary blob that represents an image.

## Setting Custom Headers:

```js
fetch('https://api.example.com/data', {
  headers: {
    Authorization: 'Bearer your-token',
  },
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
  })
  .catch(error => {
    // Handle any errors
  });
```

You can set custom headers in the options object to include authentication tokens or other necessary headers.

## Error Handling:

Always include error handling using .catch() to handle network errors or any other exceptions that may occur during the fetch.

### Using async/await:

You can also use async/await syntax for cleaner and more readable code:

```js
try {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  // Handle the data
} catch (error) {
  // Handle errors
}
```

Note that when using `async/await`, you still need to check response.ok to handle non-successful responses.

The `fetch()` function provides a flexible and powerful way to interact with web APIs and retrieve data from servers. It's widely used in modern web development and is the preferred method for making HTTP requests in JavaScript applications.

# The Response Object Returned by Fetch

The `fetch()` function in JavaScript returns a Response object when a network request is made. This Response object represents the response to the request, and it contains various properties and methods that allow you to access and manipulate the response data. Here's a breakdown of the most commonly used properties and methods of the Response object:

## Properties:
Response.url: Returns the URL of the response.

`Response.status`: Returns the HTTP status code of the response (e.g., 200 for a successful request, 404 for "Not Found," etc.).

`Response.statusText`: Returns the status text associated with the status code (e.g., "OK" for 200, "Not Found" for 404, etc.).

`Response.headers`: Returns a Headers object representing the response headers. You can use methods like get(), has(), and set() on this object to work with headers.

## Methods:
`Response.json()`: This method parses the response body as JSON and returns a promise that resolves with the parsed JSON data. It is commonly used for handling JSON responses.

Example:

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Handle JSON data
  })
  .catch(error => {
    // Handle errors
  });
```

`Response.text()`: This method reads the response body as text and returns a promise that resolves with the text content. It's useful for handling plain text responses.

Example:

```js
fetch('https://example.com/textdata')
  .then(response => response.text())
  .then(text => {
    // Handle text content
  })
  .catch(error => {
    // Handle errors
  });
```

`Response.blob()`: This method reads the response body as a binary Blob object and returns a promise that resolves with the Blob. It's commonly used for handling binary data, such as images or files.

Example:

```js
fetch('https://example.com/image.jpg')
  .then(response => response.blob())
  .then(imageBlob => {
    // Handle the binary data (e.g., display an image)
  })
  .catch(error => {
    // Handle errors
  });
```

`Response.arrayBuffer()`: This method reads the response body as an ArrayBuffer and returns a promise that resolves with the ArrayBuffer. It's useful when working with low-level binary data.

Example:

```js
fetch('https://example.com/binarydata')
  .then(response => response.arrayBuffer())
  .then(buffer => {
    // Handle the ArrayBuffer
  })
  .catch(error => {
    // Handle errors
  });
```

`Response.clone()`: This method creates a clone of the response, allowing you to use the response multiple times. It's helpful when you need to consume the response in different parts of your code.

Example:

```js
const response = await fetch('https://api.example.com/data');
const responseCopy = response.clone();

// Use response and responseCopy in different places
```

These properties and methods of the Response object make it versatile for handling various types of HTTP responses in JavaScript applications. You can choose the appropriate method based on the expected response format (JSON, text, binary, etc.) and handle it accordingly in your code.

# The Javascript Request Object & Fetch

In JavaScript, the Request object is used in conjunction with the `fetch()` function to create and configure HTTP requests. It allows you to customize various aspects of a network request, including the HTTP method, headers, body, and more. The Request object is a fundamental part of the `fetch()` API and is typically passed as the first argument to the `fetch()` function. Here's an overview of the Request object and how you can use it with `fetch()`:

## Creating a Request Object:
You can create a Request object by providing at least one argument, which is the URL of the resource you want to request. Additional options can be passed as a second argument to configure the request. Here's an example:

```js
const request = new Request('https://api.example.com/data', {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  }),
  // Other options (e.g., body, mode, credentials, etc.)
});
```
## Request Object Properties and Options:
method: Specifies the HTTP method for the request (e.g., 'GET', 'POST', 'PUT', 'DELETE', etc.).

**headers:** A Headers object containing key-value pairs of HTTP headers to include in the request.

**body:** The request body, which can be a string, FormData, Blob, or ArrayBuffer. Used for POST and PUT requests.

**mode:** Controls the CORS (Cross-Origin Resource Sharing) mode of the request (e.g., 'cors', 'no-cors', 'same-origin').

**credentials:** Specifies whether to include credentials like cookies or HTTP authentication (e.g., 'same-origin', 'include', 'omit').

**cache:** Controls how the browser handles caching (e.g., 'default', 'no-store', 'reload', etc.).

**redirect:** Specifies how to handle redirects (e.g., 'follow', 'error', 'manual').

## Using the Request Object with `fetch()`:
Once you've created a Request object, you can pass it as the first argument to the `fetch()` function to initiate the network request. 

Here's how you can use it:

```js
fetch(request)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });
```

## Customizing Requests with Request Objects:
The Request object is valuable for customizing your HTTP requests. For example, you can create multiple Request objects with different configurations for different API endpoints. Additionally, you can dynamically construct request headers, specify a request body, or set other request-specific options based on your application's needs.

```js
// Creating a POST request with a JSON body
const postData = {
  username: 'john_doe',
  email: 'john@example.com',
};
const jsonBody = JSON.stringify(postData);

const postRequest = new Request('https://api.example.com/user', {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  }),
  body: jsonBody,
});

// Making the POST request
fetch(postRequest)
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle errors
  });
```

In summary, the Request object in JavaScript is a powerful tool for configuring and customizing HTTP requests when using the `fetch()` API. It allows you to define various request properties and options, making it flexible and adaptable to a wide range of network request scenarios in your web applications.

# HTTP Calls in Other Languages

## Python (Using the requests Library):
Python has a popular library called requests for making HTTP requests. You can install it using pip (pip install requests) if you don't have it already. Here's an example:

```python
import requests

url = 'https://api.example.com/data'
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    # Process the data
else:
    print(f'HTTP request failed with status code {response.status_code}')
```

## Ruby (Using the Net::HTTP Library):

Ruby has the Net::HTTP library in its standard library, so you don't need to install any additional packages. Here's an example:

```ruby
require 'net/http'
require 'json'

url = URI.parse('https://api.example.com/data')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = (url.scheme == 'https')

request = Net::HTTP::Get.new(url)
response = http.request(request)

if response.code.to_i == 200
    data = JSON.parse(response.body)
    # Process the data
else
    puts "HTTP request failed with status code #{response.code}"
end
```

## PHP (Using the cURL Library):

PHP has built-in support for making HTTP requests using the cURL library, which is usually enabled by default. Here's an example:

```php
$url = 'https://api.example.com/data';

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if ($response !== false) {
    $data = json_decode($response, true);
    // Process the data
} else {
    echo 'cURL error: ' . curl_error($ch);
}

curl_close($ch);
```

## Rust (Using the reqwest Crate):

In Rust, you can use the reqwest crate to make HTTP requests. You can add it to your project's dependencies in the Cargo.toml file. Here's an example:

```rust
use reqwest;

#[tokio::main]
async fn main() -> Result<(), reqwest::Error> {
    let url = "https://api.example.com/data";
    let response = reqwest::get(url).await?;

    if response.status().is_success() {
        let data = response.json::<serde_json::Value>().await?;
        // Process the data
    } else {
        eprintln!("HTTP request failed with status code {:?}", response.status());
    }

    Ok(())
}
```

## Go (Using the net/http Package):

Go has a built-in net/http package for making HTTP requests. Here's an example:

```go
package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
    "encoding/json"
)

func main() {
    url := "https://api.example.com/data"
    response, err := http.Get(url)
    
    if err != nil {
        fmt.Println("HTTP request failed:", err)
        return
    }
    defer response.Body.Close()

    if response.StatusCode == http.StatusOK {
        body, _ := ioutil.ReadAll(response.Body)
        var data map[string]interface{}
        json.Unmarshal(body, &data)
        // Process the data
    } else {
        fmt.Println("HTTP request failed with status code:", response.StatusCode)
    }
}
```

## Java (Using the java.net.HttpURLConnection Class):
In Java, you can use the HttpURLConnection class to make HTTP requests. Here's an example:

```java
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class HttpClientExample {
    public static void main(String[] args) throws Exception {
        String url = "https://api.example.com/data";
        URL apiUrl = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
        connection.setRequestMethod("GET");

        int responseCode = connection.getResponseCode();

        if (responseCode == 200) {
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            String responseData = response.toString();
            // Process the data
        } else {
            System.out.println("HTTP request failed with status code " + responseCode);
        }
    }
}
```

## C# (Using the HttpClient Class):
In C#, you can use the HttpClient class for making HTTP requests. Here's an example:

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        string url = "https://api.example.com/data";
        using (HttpClient client = new HttpClient())
        {
            HttpResponseMessage response = await client.GetAsync(url);

            if (response.IsSuccessStatusCode)
            {
                string responseData = await response.Content.ReadAsStringAsync();
                // Process the data
            }
            else
            {
                Console.WriteLine("HTTP request failed with status code " + (int)response.StatusCode);
            }
        }
    }
}
```

## Swift (Using URLSession):
In Swift, you can use the URLSession API for making HTTP requests. Here's an example:

```swift
import Foundation

let url = URL(string: "https://api.example.com/data")!
let task = URLSession.shared.dataTask(with: url) { (data, response, error) in
    if let error = error {
        print("HTTP request failed with error: \(error)")
        return
    }

    if let data = data {
        let responseData = String(data: data, encoding: .utf8)
        // Process the data
    }
}

task.resume()
```

## Kotlin (Using kotlinx.coroutines and kotlinx.serialization):
In Kotlin, you can use libraries like kotlinx.coroutines and kotlinx.serialization to make HTTP requests and handle JSON parsing. Here's an example:

```kotlin
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import kotlinx.serialization.Serializable
import io.ktor.client.HttpClient
import io.ktor.client.request.get

@Serializable
data class DataResponse(val message: String)

fun main() {
    runBlocking {
        val url = "https://api.example.com/data"
        val client = HttpClient()
        val response = client.get<String>(url)
        val data = Json.decodeFromString(DataResponse.serializer(), response)
        // Process the data
    }
}
```

## Dart (Using the http Package):
In Dart, you can use the http package to make HTTP requests. Here's an example:

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() async {
  var url = Uri.parse('https://api.example.com/data');
  var response = await http.get(url);

  if (response.statusCode == 200) {
    var responseData = json.decode(response.body);
    // Process the data
  } else {
    print('HTTP request failed with status code ${response.statusCode}');
  }
}
``` 

## Scala (Using the akka-http Library):
In Scala, you can use the akka-http library for making HTTP requests. Here's an example:

```scala
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.model._
import akka.stream.ActorMaterializer
import scala.concurrent.ExecutionContext.Implicits.global

object HttpClientExample extends App {
  implicit val system = ActorSystem()
  implicit val materializer = ActorMaterializer()

  val url = "https://api.example.com/data"
  val request = Http().singleRequest(HttpRequest(uri = url))

  request.flatMap {
    case HttpResponse(StatusCodes.OK, _, entity, _) =>
      entity.dataBytes.runFold(ByteString(""))(_ ++ _).map { body =>
        val responseData = body.utf8String
        // Process the data
      }
    case HttpResponse(status, _, _, _) =>
      println(s"HTTP request failed with status code $status")
      sys.exit(1)
  }
}
```

## C and C++:
In C and C++, making HTTP requests typically involves using external libraries such as libcurl or libhttp. Here's an example using libcurl in C:

```c
#include <stdio.h>
#include <curl/curl.h>

int main() {
    CURL *curl;
    CURLcode res;
    
    curl = curl_easy_init();
    if (curl) {
        const char *url = "https://api.example.com/data";
        
        curl_easy_setopt(curl, CURLOPT_URL, url);
        
        res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            fprintf(stderr, "HTTP request failed: %s\n", curl_easy_strerror(res));
        }
        
        curl_easy_cleanup(curl);
    }
    
    return 0;
}
```

For C++, you can also use libcurl, which provides a C API that can be used from C++.

These examples demonstrate how to make HTTP calls in Java, C#, Swift, Kotlin, Dart, Scala, C, and C++ using their respective libraries and frameworks. You may need to install or include additional libraries based on your project's requirements.

These examples demonstrate how to make HTTP calls in Python, Ruby, PHP, Rust, Go and more using their respective libraries and packages. You may need to install or import additional libraries based on your project's requirements.