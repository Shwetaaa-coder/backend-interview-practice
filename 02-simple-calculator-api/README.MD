# Simple Calculator API

## 1. Question

### **2. Simple Calculator API**

* Build an API that performs basic arithmetic operations (addition, subtraction, multiplication, division).
* Use query parameters to pass numbers and the operation to perform.

  * Example: `/calculate?num1=10&num2=5&operation=add` should return `15`.
* **Skills Practiced**: Query parameters, conditional logic, and response handling.

---

## 2. What Are We Practicing?

This question helps practice:

* Express.js GET routes
* Query parameters
* `req.query`
* Converting strings to numbers
* Conditional logic
* JSON responses
* HTTP status codes
* Input validation
* Error handling
* Route and controller separation

---

## 3. How the Request Works

The client sends:

```text
GET /calculate?num1=10&num2=5&operation=add
```

Flow:

```text
Client
   ↓
GET /calculate
   ↓
Query Parameters
   ↓
req.query
   ↓
num1 = 10
num2 = 5
operation = "add"
   ↓
Calculation
   ↓
Response
```

---

## 4. Query Parameters

Everything after `?` is a query parameter.

```text
/calculate?num1=10&num2=5&operation=add
```

| Parameter   | Value |
| ----------- | ----- |
| `num1`      | `10`  |
| `num2`      | `5`   |
| `operation` | `add` |

In Express:

```js
req.query.num1
req.query.num2
req.query.operation
```

### Important

Query parameters are received as **strings**.

For example:

```js
req.query.num1
```

gives:

```text
"10"
```

We need to convert it into a number before performing calculations.

---

## 5. Supported Operations

### Addition

```text
/calculate?num1=10&num2=5&operation=add
```

Result:

```text
15
```

### Subtraction

```text
/calculate?num1=10&num2=5&operation=subtract
```

Result:

```text
5
```

### Multiplication

```text
/calculate?num1=10&num2=5&operation=multiply
```

Result:

```text
50
```

### Division

```text
/calculate?num1=10&num2=5&operation=divide
```

Result:

```text
2
```

---

# 6. Folder Structure

```text
02-simple-calculator-api/
│
├── README.md
├── package.json
├── package-lock.json
├── server.js
│
├── routes/
│   └── calculatorRoutes.js
│
└── controllers/
    └── calculatorController.js
```

---

# 7. Implementation Steps

## Step 1 — Create the project folder

Create:

```text
02-simple-calculator-api
```

---

## Step 2 — Create the project structure

Create:

```text
routes/
controllers/
```

And inside them:

```text
routes/calculatorRoutes.js
controllers/calculatorController.js
```

---

## Step 3 — Create the Express server

The server should:

1. Import Express.
2. Create the Express application.
3. Import calculator routes.
4. Register the calculator routes.
5. Start the server.

---

## Step 4 — Create the calculator route

Create:

```text
routes/calculatorRoutes.js
```

The route should handle:

```text
GET /calculate
```

The route will pass the request to the calculator controller.

---

## Step 5 — Create the calculator controller

Create:

```text
controllers/calculatorController.js
```

The controller should:

1. Read `num1` from `req.query`.
2. Read `num2` from `req.query`.
3. Read `operation` from `req.query`.
4. Convert the numbers into JavaScript numbers.
5. Check the requested operation.
6. Perform the calculation.
7. Send the result as a response.

---

## Step 6 — Add the calculation logic

Handle:

```text
add       → num1 + num2
subtract  → num1 - num2
multiply  → num1 * num2
divide    → num1 / num2
```

---

## Step 7 — Handle errors

The API should handle:

* Invalid operation
* Division by zero
* Missing parameters
* Invalid number values

---

## Step 8 — Test the API

### Addition

```text
GET /calculate?num1=10&num2=5&operation=add
```

Expected:

```text
15
```

### Subtraction

```text
GET /calculate?num1=10&num2=5&operation=subtract
```

Expected:

```text
5
```

### Multiplication

```text
GET /calculate?num1=10&num2=5&operation=multiply
```

Expected:

```text
50
```

### Division

```text
GET /calculate?num1=10&num2=5&operation=divide
```

Expected:

```text
2
```

---

# 9. Interview Cheat Sheet

### What is `req.query`?

`req.query` contains the query parameters sent in the URL.

Example:

```text
/calculate?num1=10&num2=5
```

Access:

```js
req.query.num1
req.query.num2
```

---

### Why convert query parameters to numbers?

Query parameters are received as strings.

Example:

```text
"10"
```

needs to be converted to:

```text
10
```

before performing numerical calculations.

---

### `req.query` vs `req.params`

Query parameter:

```text
/calculate?num1=10
```

Access:

```js
req.query.num1
```

Route parameter:

```text
/users/123
```

Route:

```text
/users/:id
```

Access:

```js
req.params.id
```

---

### Why use a controller?

The **route** defines which endpoint handles the request.

The **controller** contains the business logic.

```text
Route
  ↓
Controller
  ↓
Business Logic
  ↓
Response
```

---

# 10. Request Flow

```text
Client
  │
  │ GET /calculate?num1=10&num2=5&operation=add
  ↓
server.js
  │
  ↓
calculatorRoutes.js
  │
  ↓
calculatorController.js
  │
  ├── Read query parameters
  ├── Convert values
  ├── Check operation
  ├── Calculate
  ├── Validate errors
  └── Send response
```

---

# 11. Key Things to Remember

```text
GET request
     ↓
req.query
     ↓
Get input values
     ↓
Convert strings → numbers
     ↓
Check operation
     ↓
Calculate
     ↓
Handle errors
     ↓
Send response
```

### Important concepts

```text
req.query
Number()
if / else if
res.status()
res.json()
GET route
Controller
Route
Validation
Error handling
```

---

# 12. Interview Answer

> I built a GET API that accepts two numbers and an arithmetic operation through query parameters. The API reads the values using `req.query`, converts the numeric values from strings to numbers, performs the requested calculation using conditional logic, handles invalid operations and division by zero, and returns the result in the response.
