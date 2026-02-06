# Task Manager API

A RESTful API for managing tasks built with Express.js.

## Features

- Create, read, update, and delete tasks
- Filter tasks by completion status and priority
- Sort tasks by completion date
- Input validation for task data
- Automatic default values for priority and completion date
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

**Query Parameters:**
- `completed` (optional): Filter by completion status. Values: `true` or `false`
  - Example: `GET /tasks?completed=true`
- `sorting` (optional): Sort by completion date. Values: `asc` or `desc`
  - Example: `GET /tasks?sorting=asc`

### Get Task by ID
```
GET /tasks/:id
```

### Get Tasks by Priority
```
GET /tasks/priority/:priority
```
**Parameters:**
- `priority`: Filter by priority level. Values: `low`, `medium`, or `high`
  - Example: `GET /tasks/priority/high`

### Create Task
```
POST /tasks
Content-Type: application/json

{
  "title": "Task Title",
  "description": "Task Description",
  "completed": false,
  "priority": "medium",
  "completionDate": "2026-02-20"
}
```

**Required Fields:**
- `title` (string)
- `description` (string)
- `completed` (boolean)

**Optional Fields:**
- `priority` (string): Default is `"low"`. Accepted values: `"low"`, `"medium"`, `"high"`
- `completionDate` (string, ISO date format): Default is 10 days from today

### Update Task
```
PUT /tasks/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated Description",
  "completed": true,
  "priority": "high",
  "completionDate": "2026-03-01"
}
```

**Note:** `completed` field must be a boolean value.

### Delete Task
```
DELETE /tasks/:id
```

## Task Object Structure

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Task Description",
  "completed": true,
  "completionDate": "2026-02-15",
  "priority": "high"
}
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
├── controller/
│   └── controller.js   # Business logic and handlers
├── logger/
│   └── logger.js       # Request logging middleware
├── router/
│   └── tasksRoute.js   # Route handlers
└── test/
    └── server.test.js  # Test suite
```

## License

ISC
├── logger/
│   └── logger.js       # Request logging middleware
├── router/
│   └── tasksRoute.js   # Route handlers
└── test/
    └── server.test.js  # Test suite
```

## License

ISC
