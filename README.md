# Task Manager API

A RESTful API for managing tasks built with Express.js.

## Features

- Create, read, update, and delete tasks
- Input validation for task data
- Logging middleware
- Comprehensive test suite

## Requirements

- Node.js >= 18.0.0
- npm

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
```

## Running the Application

```bash
npm run dev
```

The server will start at `http://localhost:3000`

## API Endpoints

### Get All Tasks
```
GET /tasks
```

### Get Task by ID
```
GET /tasks/:id
```

### Create Task
```
POST /tasks
Content-Type: application/json

{
  "title": "Task Title",
  "description": "Task Description",
  "completed": false
}
```

### Update Task
```
PUT /tasks/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": true
}
```

### Delete Task
```
DELETE /tasks/:id
```

## Response Codes

- `200` - Success
- `201` - Created
- `400` - Invalid request data
- `404` - Task not found

## Running Tests

```bash
npm test
```

Tests are written using [Tap](https://node-tap.org/) and include coverage for all CRUD operations and validation.

## Project Structure

```
task-manager-api/
├── app.js              # Application entry point
├── task.json           # Task data storage
├── logger/
│   └── logger.js       # Request logging middleware
├── router/
│   └── tasksRoute.js   # Route handlers
└── test/
    └── server.test.js  # Test suite
```

## License

ISC
