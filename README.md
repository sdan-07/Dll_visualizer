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
- MongoDB

## Environment Variables

Use `.env.example` as the template for local environment files.

Create `backend/.env`:

```bash
cp .env.example backend/.env
```

Then keep only the backend values in `backend/.env` and update `MONGO_URI` with your MongoDB connection string:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
PORT=3000
CLIENT_URL=http://localhost:5173
```

If you run the Vite frontend separately, create `frontend/.env`:

```bash
cp .env.example frontend/.env
```

Then keep only the frontend value in `frontend/.env`:

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
