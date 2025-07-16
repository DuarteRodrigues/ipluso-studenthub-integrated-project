# StudentHub IPLuso – Server

This folder contains the backend server for the StudentHub IPLuso platform. The backend is built with **Node.js** and **Express**, and uses **MongoDB** as its database. It provides RESTful API endpoints for authentication, user profiles, news, events, internships, and academic records.

---

## Folder Structure

```
server/
│
├── .gitignore           # Files and folders to ignore in git
├── config.env           # Environment variables (not committed)
├── package.json         # Node.js dependencies and scripts
├── server.js            # Main entry point for the Express server
│
├── database/
│   └── connection.js    # MongoDB connection logic
│
├── routes/
│   ├── auth.js          # Authentication endpoints (login)
│   ├── events.js        # Events CRUD and feedback endpoints
│   ├── internships.js   # Internships CRUD and feedback endpoints
│   ├── news.js          # News CRUD, tags, and feedback endpoints
│   ├── profile.js       # User profile endpoints
│   └── record.js        # Academic records endpoints
```

---

## Main Files

- **server.js**  
  The main entry point. Sets up Express, applies middleware, and mounts all route handlers.

- **database/connection.js**  
  Handles the connection to the MongoDB database using the connection string from `config.env`.

- **routes/**  
  Contains all Express route modules, each responsible for a specific resource (news, events, internships, etc.).

---

## Environment Variables

Create a `config.env` file in this directory with the following variables:

```
ATLAS_URI=your_mongodb_connection_string
PORT=5000
```

---

## Running the Server

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the server:
   ```sh
   node --env-file=config.env server
   ```

   The server will run on the port specified in `config.env` (default: 5000).

---

## API Endpoints Overview

- **/auth**  
  - `POST /auth/login` – User login

- **/news**  
  - `GET /news` – List all news articles  
  - `POST /news` – Create a news article  
  - `PATCH /news/article/:id` – Update a news article  
  - `DELETE /news/article/:id` – Delete a news article  
  - `GET /news/tags` – Get all news tags  
  - `POST /news/article/:id/feedback` – Submit feedback on a news article

- **/events**  
  - `GET /events` – List all events  
  - `POST /events` – Create an event  
  - `PATCH /events/article/:id` – Update an event  
  - `DELETE /events/article/:id` – Delete an event  
  - `GET /events/tags` – Get all event tags  
  - `POST /events/article/:id/feedback` – Submit feedback on an event

- **/internships**  
  - `GET /internships` – List all internships  
  - `POST /internships` – Create an internship  
  - `PATCH /internships/article/:id` – Update an internship  
  - `DELETE /internships/article/:id` – Delete an internship  
  - `GET /internships/tags` – Get all internship tags  
  - `POST /internships/article/:id/feedback` – Submit feedback on an internship

- **/profile**  
  - `GET /profile/:id` – Get user profile by ID

- **/record**  
  - `GET /record` – List all academic records  
  - `POST /record` – Create a record  
  - `PATCH /record/:id` – Update a record  
  - `DELETE /record/:id` – Delete a record

---

## Notes

- All endpoints expect and return JSON.
- MongoDB is required and must be accessible via the connection string in `config.env`.
- For development, logs are printed to the console for most operations.

---

## License

This project is licensed under the MIT License.

---