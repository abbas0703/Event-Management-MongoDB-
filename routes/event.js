const express = require('express');
const router = express.Router();
const Event = require('../models/Event'); // Import your Event model
const { requireAuth, isAdmin } = require('../middleware/authorizationMiddleware');

// Events listing route
router.get('/events', requireAuth, (req, res) => {
  // Display events
  // Check the user's role to display relevant content
  res.render('events.ejs');
});

// Add event form route
router.get('/events/add', requireAuth, (req, res) => {
  // Display the add event form
  // Check the user's role to allow or deny access
  res.render('add-event.ejs');
});

// Add event form submission
router.post('/events', requireAuth, (req, res) => {
  try {
    // Handle event creation
    // Check the user's role to allow or deny event creation
    res.redirect('/events'); // Redirect to events listing
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding event.');
  }
});

// Delete event route (only for admins)
router.post('/events/delete/:eventId', isAdmin, (req, res) => {
  try {
    // Handle event deletion
    // Only admins can delete events
    res.redirect('/events'); // Redirect to events listing
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting event.');
  }
});

module.exports = router;
