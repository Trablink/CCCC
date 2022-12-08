const User = require('../db/users.sql');

const userController = {};

userController.getAllUsers = (req, res, next) => {
  User.find({}, (err, users) => {
    if (err)
      return next(
        'Error in userController.getAllUsers: ' + JSON.stringify(err)
      );
    res.locals.users = users;
    return next();
  });
};

userController.createUser = (req, res, next) => {
  const newUser = req.body;
  User.create(newUser)
    .then((data) => {
      res.locals.newUser = data;
      return next(res.locals.newUser);
    })
    .catch((err) => {
      return next('Error in userController.createUser:' + JSON.stringify(err));
    });
};

userController.verifyUser = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.find({ username: `${username}` })
    .then((doc) => {
      if (doc[0].password === password) {
        res.locals.user = doc;
      } else {
        res.redirect('/template');
      }
      return next();
    })
    .catch((err) => {
      res.redirect('/template');
      return next('Error in userController.verifyUser: ' + JSON.stringify(err));
    });
};

module.exports = userController;
