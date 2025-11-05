# Task Board

## About the project

Task Board API is a backend service for managing Kanban-style boards and tasks.
It provides REST endpoints to create boards, fetch boards by ID, and manage tasks across workflow stages.

## Key Features

- Create and load boards by ID
- CRUD operations for tasks
- Board-based task grouping (To Do / In Progress / Done)
- Input validation & error handling
- Cross-origin access for frontend
- MongoDB data storage

## Tech Stack

- Node.js + Express
- TypeScript
- MongoDB + Mongoose
- CORS
- dotenv for environment config

## API Endpoints

- POST: /boards Create new board
- GET: /boards/:id Get board by ID
- GET: /boards/:id/cards Get board tasks
- POST: /cards Create task
- PATCH: /cards/:id Update task column or content
- DELETE: /cards/:id Delete task

## Environment Variables

Create .env file:
MONGO_URI=<your_mongodb_connection_string>

## Getting Started:

```bash
Clone the repository:
git clone <your-repo-url>

Install dependencies:
npm install

Run locally:
npm run dev

Build for production:
npm run build
```

## How It Works

- The client sends requests to the API
- The API queries MongoDB and returns board + tasks data
- Tasks can be updated via drag & drop on the frontend
- Board ID is used as the key for retrieval
