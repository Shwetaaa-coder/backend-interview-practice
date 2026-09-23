# 3. User Registration API

## Problem Statement

Create an API that accepts user details (`name`, `email`, `password`) through a `POST` request and stores them in an array (in-memory storage).

Return a success message along with the registered user details.

### Skills Practiced

* Handling POST requests
* Request body parsing
* `req.body`
* In-memory data storage
* Express Router
* Controllers
* JSON responses
* HTTP status codes

---

## What is this API doing?

The client sends user information to the server using a `POST` request.

Example request:

```http
POST /registerNewUser
```

Request body:

```json
{
  "name": "Shweta",
  "email": "shweta@gmail.com",
  "password": "123456"
}
```

The server:

1. Receives the request.
2. Reads the data from `req.body`.
3. Creates a user object.
4. Stores the user in the `users` array.
5. Returns a success response.

---

## Folder Structure

```text
03-user-registration-api/
│
├── README.md
├── package.json
├── package-lock.json
├── server.js
│
├── routes/
│   └── registerRoutes.js
│
└── controllers/
    └── registerController.js
```

---

## Request Flow

```text
Client
   ↓
POST /registerNewUser
   ↓
server.js
   ↓
express.json()
   ↓
registerRoutes.js
   ↓
registerController.js
   ↓
req.body
   ↓
Create user object
   ↓
users.push(user)
   ↓
JSON response
```

---

## Step 1: Create Express Server

`server.js`

```js
const express = require("express");
const app = express();

const PORT = 3000;

const registerRoutes = require("./routes/registerRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is running");
});

app.use("/", registerRoutes);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
```

### Important Concept: `express.json()`

```js
app.use(express.json());
```

This is built-in Express middleware that parses incoming JSON request bodies.

Without it, `req.body` may be `undefined` when the client sends JSON.

---

## Step 2: Create the Route

`routes/registerRoutes.js`

```js
const { Router } = require("express");

const registerNewUser = require("../controllers/registerController");

const router = Router();

router.post("/registerNewUser", registerNewUser);

module.exports = router;
```

### What does this do?

```js
router.post("/registerNewUser", registerNewUser);
```

It means:

> When a POST request comes to `/registerNewUser`, execute the `registerNewUser` controller.

---

## Step 3: Create the Controller

`controllers/registerController.js`

```js
const users = [];

const registerNewUser = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    res.status(201).json({
        message: "User registered successfully",
        user: user
    });
};

module.exports = registerNewUser;
```

---

## Understanding the Controller

### 1. In-memory storage

```js
const users = [];
```

This creates an empty array to store users.

It is called **in-memory storage** because the data exists only while the Node.js server is running.

If the server restarts, the array becomes empty again.

---

### 2. Reading request body

```js
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
```

The client sends:

```json
{
  "name": "Shweta",
  "email": "shweta@gmail.com",
  "password": "123456"
}
```

Express makes this available through:

```js
req.body
```

So:

```js
req.body.name
```

gives:

```text
Shweta
```

---

### 3. Creating the user object

```js
const user = {
    name: name,
    email: email,
    password: password
};
```

This creates one user object.

---

### 4. Storing the user

```js
users.push(user);
```

`push()` adds the user object to the array.

Conceptually:

```js
users = [
    {
        name: "Shweta",
        email: "shweta@gmail.com",
        password: "123456"
    }
];
```

If another user registers:

```js
users = [
    {
        name: "Shweta",
        email: "shweta@gmail.com",
        password: "123456"
    },
    {
        name: "Rahul",
        email: "rahul@gmail.com",
        password: "abcdef"
    }
];
```

---

### 5. Sending the response

```js
res.status(201).json({
    message: "User registered successfully",
    user: user
});
```

`201` means:

> Created

The API returns JSON containing the success message and user details.

---

# How to Test the API

## Using Postman

### Method

```text
POST
```

### URL

```text
http://localhost:3000/registerNewUser
```

### Body

Select:

```text
Body → raw → JSON
```

Then send:

```json
{
  "name": "Shweta",
  "email": "shweta@gmail.com",
  "password": "123456"
}
```

Expected response:

```json
{
  "message": "User registered successfully",
  "user": {
    "name": "Shweta",
    "email": "shweta@gmail.com",
    "password": "123456"
  }
}
```

### Interview memory trick

You do **not** need to memorize the PowerShell testing command.

Remember:

```text
POST → URL → Body → JSON → Send
```

---

# Interview Questions

### 1. How do you receive data sent by the client?

Using:

```js
req.body
```

when the request contains JSON and `express.json()` middleware is enabled.

---

### 2. Why do we use `express.json()`?

It parses incoming JSON request bodies so that the data can be accessed through `req.body`.

---

### 3. What is `users.push(user)` doing?

It adds the newly created user object to the `users` array.

---

### 4. What is in-memory storage?

Data stored in the application's memory instead of a permanent database.

The data is lost when the server restarts.

---

### 5. Why do we use POST?

POST is commonly used when the client is sending data to the server to create a new resource.

---

### 6. Why are we returning status `201`?

`201 Created` indicates that a new resource was successfully created.

---

### 7. What is the difference between `req.body` and `req.query`?

`req.body`:

```text
POST /registerNewUser
```

with JSON data in the request body.

`req.query`:

```text
/calculate?num1=10&num2=5
```

The values after `?` are query parameters.

---

## Real-World Note

This exercise intentionally stores the password directly because it is practicing basic POST requests and in-memory storage.

In a real application:

* Passwords should be hashed using a password-hashing library such as bcrypt.
* Passwords should not be returned in API responses.
* User data should normally be stored in a database such as MongoDB.
* Input validation should be added.
* Duplicate emails should be handled.
* Authentication should be implemented where required.

---

## Architecture

```text
server.js
    │
    ├── express.json()
    │
    └── registerRoutes.js
              │
              └── POST /registerNewUser
                         │
                         ↓
                registerController.js
                         │
                         ├── req.body
                         │
                         ├── create user
                         │
                         ├── users.push(user)
                         │
                         └── res.status(201).json()
```

---

## Interview Cheat Sheet

```text
POST request
     ↓
express.json()
     ↓
req.body
     ↓
Create user object
     ↓
users.push(user)
     ↓
res.status(201).json()
```

### Key terms to remember

| Concept          | Meaning                             |
| ---------------- | ----------------------------------- |
| `POST`           | Used to send data/create a resource |
| `req.body`       | Data sent inside the request body   |
| `express.json()` | Parses JSON request bodies          |
| `users[]`        | In-memory storage                   |
| `push()`         | Adds an item to an array            |
| `201`            | Created                             |
| `res.json()`     | Sends a JSON response               |
| Controller       | Contains request-handling logic     |
| Router           | Defines API endpoints               |

---

## Result

The User Registration API successfully accepts user details through a POST request, stores the user in an in-memory array, and returns a success response.
