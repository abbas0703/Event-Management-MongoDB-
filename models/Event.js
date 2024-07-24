const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  organizer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
  // Example: date, location, attendees, etc.
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
