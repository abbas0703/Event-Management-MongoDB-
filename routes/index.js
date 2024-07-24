const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  req.body;
  res.render('home.ejs'); // Render your home page
});

module.exports = router;
