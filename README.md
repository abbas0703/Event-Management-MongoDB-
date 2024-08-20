# Event-Management-MongoDB-

# Event Management System with Express.js and MongoDB

This is a web-based Event Management System built using Express.js, MongoDB, and EJS templates. The system allows users to register, log in, create events, and manage them with role-based access control.

## Features

- User authentication (registration, login, logout)
- Role-based access control (admin, organizer, user)
- Event creation, listing, and deletion
- Session management
- Middleware for authentication and authorization

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/event-management-system.git
    cd event-management-system
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB Atlas:
   - Create a MongoDB Atlas account and set up a new cluster.
   - Replace the MongoDB connection string in `mongoose.connect()` with your own connection string.

4. Run the application:
    ```bash
    npm start
    ```

5. Access the application at `http://localhost:3000`.

## Code Overview

### Dependencies

- `express`: Web framework for building the application.
- `mongoose`: ODM for MongoDB, used to interact with the database.
- `path`: Node.js module for handling file paths.
- `body-parser`: Middleware for parsing incoming request bodies.
- `express-session`: Middleware for managing user sessions.
- `ejs`: Templating engine for rendering HTML pages.
- `authController`: Controller handling authentication-related routes.
- `eventController`: Controller handling event-related routes.
- `authenticationMiddleware`: Middleware for checking if the user is authenticated.
- `authorizationMiddleware`: Middleware for checking if the user has the correct role for certain actions.

### Application Structure

- `app.js`: Main file that sets up the server and routes.
- `controllers/`: Directory containing controller files for authentication and event management.
- `middleware/`: Directory containing middleware for authentication and authorization.
- `models/`: Directory containing Mongoose models (e.g., `Event` model).
- `views/`: Directory containing EJS templates for rendering HTML pages.

### Session Management

The session is managed using `express-session`. The session cookie is not secure in this setup (i.e., `cookie: { secure: false }`), which is suitable for development but should be set to `true` in a production environment with HTTPS.

### MongoDB Connection

The application connects to a MongoDB database using Mongoose:

```javascript
mongoose.connect('mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

Replace the connection string with your MongoDB Atlas connection string.
```
# Routes

## Home Route
- **GET `/`**: Renders the home page (`home.ejs`).

## Authentication Routes
- **GET `/register`**: Displays the user registration form.
- **POST `/register`**: Handles user registration.
- **GET `/login`**: Displays the user login form.
- **POST `/login`**: Handles user login.
- **GET `/logout`**: Logs the user out.

## Event Routes
- **GET `/events`**: Displays a list of events (requires authentication).
- **GET `/events/add`**: Displays the form to add a new event (requires authentication and role-based access).
- **POST `/events`**: Creates a new event (requires authentication).
- **POST `/events/delete/:eventId`**: Deletes an event (requires admin role).

## Running the Application

Start the application by running the following command:

```bash
npm start
```
Visit `http://localhost:3000` in your browser to interact with the application.

Contact
For any inquiries or issues, please open an issue on the GitHub repository or contact me at `jabbas@gitam.in`.


