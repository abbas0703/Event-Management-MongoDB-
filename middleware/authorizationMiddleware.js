const authorizationMiddleware = {
    isAdmin: (req, res, next) => {
      if (req.session && req.session.user && req.session.user.role === 'admin') {
        return next();
      } else {
        return res.status(403).send('Access Denied'); // Return a 403 Forbidden status if the user is not an admin
      }
    },
  };
  
  module.exports = authorizationMiddleware;
  