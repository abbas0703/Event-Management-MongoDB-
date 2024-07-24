const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const ejs = require('ejs');
const authController = require('./controllers/authController');
const eventController = require('./controllers/eventController');
const authenticationMiddleware = require('./middleware/authenticationMiddleware');
const authorizationMiddleware = require('./middleware/authorizationMiddleware');


const app = express();

app.set('trust proxy', 1);

app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));


mongoose.connect('mongodb+srv://######################.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// Import the Event model (assuming it's defined in models/event.js)
const Event = require('./models/Event');

app.get('/', (req, res) => {
  res.render('home.ejs');
});

// Authentication Routes
app.get('/register', authController.showRegisterForm);
app.post('/register', authController.register);
app.get('/login', authController.showLoginForm);
app.post('/login', authController.login);
app.get('/logout', authController.logout);

// Event Routes
app.get('/events', authenticationMiddleware.requireAuth, (req, res) => {
 
  res.render('events.ejs');
});
app.get('/events/add', authenticationMiddleware.requireAuth, (req, res) => {
  // Display the add event form
  // Check the user's role to allow or deny access
  res.render('add-event.ejs');
});
app.post('/events', authenticationMiddleware.requireAuth, eventController.createEvent);
app.post('/events/delete/:eventId', authorizationMiddleware.isAdmin, eventController.deleteEvent);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
