# Lab 4 - Fullstack App (Counter and Tasks)

Welcome to **Lab 4**, a modern full-stack web application built to showcase the interactions between a React frontend and a Node.js Express backend. 

## Features
This repository includes two mini-applications consolidated into a beautiful dark-mode UI:

1. **Counter App**: 
   - A reactive counter interface.
   - Fetches the current count from the backend on load.
   - Increments and decrements the global counter state persistently managed on the Node server.

2. **Task App**:
   - A full CRUD Todo list application.
   - Create, Read, Update (Toggle completions), and Delete tasks.
   - Immediate feedback and backend syncing.

## Technology Stack
- **Frontend**: React, Vite, Lucide-React (Icons), Axios, Vanilla CSS (Glassmorphism design).
- **Backend**: Node.js, Express, CORS, Nodemon.

## How to Run

### 1. Run the Backend API
The backend stores the state in memory and runs on port `5000`.

```bash
cd backend
npm install
npm start
```

### 2. Run the Frontend App
The frontend interface seamlessly connects to the backend and runs on port `5173`.

```bash
cd frontend
npm install
npm run dev
```

Visit the local URL provided by Vite (usually `http://localhost:5173`) to enjoy the app!

---
*Created dynamically as part of Lab 4 Fullstack App setup.*
