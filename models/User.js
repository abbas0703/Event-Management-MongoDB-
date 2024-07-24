const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // 'normal', 'organizer', 'admin'
});

module.exports = mongoose.model('User', userSchema);
