const authenticationMiddleware = {
    requireAuth: (req, res, next) => {
      if (req.session && req.session.user) {
        return next();
      } else {
        return res.redirect('/login'); // Redirect to the login page if the user is not authenticated
      }
    },
  };
  
  module.exports = authenticationMiddleware;
  