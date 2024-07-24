const Event = require('../models/Event'); // Import your Event model

const eventController = {
  showEvents:(req,res) => {
    res.render('events.ejs');
  },

  showaddevents: (req,res) => {
    res.render('add-event.ejs');
  },
  // Handle event creation
  createEvent: async (req, res) => {
    try {
      // Get event data from the form
      const { name, organizer, description } = req.body;

      // Create a new event document and save it to the MongoDB collection
      const newEvent = new Event({
        name,
        organizer,
        description,
        // Other event properties as needed
      });

      const savedEvent = await newEvent.save();

      console.log('Event added:', savedEvent);
      res.redirect('/events'); // Redirect to the events listing page
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).send('Error adding the event.');
    }
  },

  // Handle event deletion
  deleteEvent: async (req, res) => {
    try {
      const eventId = req.params.eventId;

      // Find and delete the event by its ID
      await Event.findByIdAndDelete(eventId);

      console.log('Event deleted:', eventId);
      res.redirect('/events'); // Redirect to the events listing page
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).send('Error deleting the event.');
    }
  },
};

module.exports = eventController;
