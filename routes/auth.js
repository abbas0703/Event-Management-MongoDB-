const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import your User model

// Registration form route
router.get('/register', (req, res) => {
  res.render('register.ejs'); // Render the registration form
});

// Registration form submission
router.post('/register', async (req, res) => {
  try {
 
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user.');
  }
});

// Login form route
router.get('/login', (req, res) => {
  res.render('login.ejs'); // Render the login form
});

// Login form submission
router.post('/login', async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in.');
  }
});

// Logout route
router.get('/logout', (req, res) => {
  // Clear the user session
  res.redirect('/login');
});

module.exports = router;
