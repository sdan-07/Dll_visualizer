# WAF-I Project: Doubly Linked List -Visualizer

Doubly Linked List - Visualizer is a MERN stack web application for visualizing doubly linked list operations. The frontend is built with React.js and the backend is an Express.js that stores activity logs in MongoDB.

## Project Structure

```text
dll-visualizer/
├── README.md
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   ├── public/
│   └── src/
│       ├── app.js
│       ├── config/
│       │   └── db.js
│       ├── controller/
│       │   └── activity.controller.js
│       ├── model/
│       │   └── activity.model.js
│       └── routes/
│           └── activity.route.js
└── frontend/
    ├── package.json
    ├── package-lock.json
    ├── index.html
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── index.css
        └── pages/
            ├── Activity-log/
            ├── Guide/
            ├── Home/
            └── navbar/
```

## Prerequisites

- Node.js and npm
- MongoDB database connection string

## Environment Variables

Create a `.env` file inside `backend/` if not exist:

```env
MONGO_CONNECTION_TARGET=atlas
MONGO_URI=your_mongodb_atlas_connection_string
MONGO_LOCAL_URI=mongodb://127.0.0.1:27017/dll_db
PORT=3000
CLIENT_URL=http://localhost:5173
```

Set `MONGO_CONNECTION_TARGET=local` to use the local MongoDB Compass URI.

Create a `.env` file inside `frontend/` if not exist:

```env
VITE_BACKEND_URL=http://localhost:3000
```

## Running the Project

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

Start the backend server:

```bash
cd ../backend
npm run dev
```

The backend runs on `http://localhost:3000` by default. Because the backend serves the files in `backend/public/`, starting the backend also opens the frontend from the same port after dependencies are installed.

You can also start the frontend development server in another terminal:

```bash
cd frontend
npm run dev
```

The frontend runs on `http://localhost:5173` by default.


You can connect to the MongoDB Compass database using this connection string:

```
mongodb+srv://dll-vis-user:zeKvMVbbjd75smGv@backend0.tf8cmys.mongodb.net/dll_db
```
