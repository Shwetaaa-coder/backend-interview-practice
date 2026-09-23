# Hello World API

## Problem

Create a simple Express.js server that responds with `"Hello, World!"` when a GET request is made to the root (`/`) endpoint.

## Skills Practiced

* Basic Express.js setup
* Creating a server
* GET routing
* Sending HTTP responses
* Using `app.listen()`

## Tech Stack

* Node.js
* Express.js

## How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node server.js
```

The server will run on:

```text
http://localhost:3000
```

### 3. Test the API

Open:

```text
http://localhost:3000
```

Expected response:

```text
Hello, World!
```

## API

### GET `/`

Returns:

```text
Hello, World!
```

## Project Structure

```text
01-hello-world-api/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```
