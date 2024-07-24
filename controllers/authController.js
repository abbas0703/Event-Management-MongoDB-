const User = require('../models/User'); // Import your User model
const bcrypt = require('bcrypt'); // For password hashing

const authController = {
  showRegisterForm:(req,res) => {
    res.render('register.ejs');
  },

  showLoginForm: (req,res) => {
    res.render('login.ejs');
  },
  // Handle user registration
  register: async (req, res) => {
    try {
      // Get user data from the registration form
      const { username, password } = req.body;

      // Hash the user's password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user and save it to the database
      const newUser = new User({
        username,
        password: hashedPassword,
        // Other user properties as needed
      });

      await newUser.save();

      // Set user session
      req.session.user = newUser;

      // Redirect to user-specific page
      res.redirect('/dashboard'); // Customize this route as needed
    } catch (error) {
      console.error(error);
      res.status(500).send('Error registering user.');
    }
  },

  // Handle user login
  login: async (req, res) => {
    try {
      // Get user data from the login form
      const { username, password } = req.body;

      // Find the user by username
      const user = await User.findOne({ username });

      if (!user) {
        res.status(401).send('Invalid username or password');
        return;
      }

      // Compare the hashed password with the provided password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Set user session
        req.session.user = user;

        // Redirect to user-specific page
        res.redirect('/dashboard'); // Customize this route as needed
      } else {
        res.status(401).send('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Error logging in.');
    }
  },

  // Handle user logout
  logout: (req, res) => {
    // Clear the user session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
      }
      res.redirect('/login'); // Redirect to the login page
    });
  },
};

module.exports = authController;
