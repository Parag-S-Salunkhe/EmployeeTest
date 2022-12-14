const controllers = require('../controllers/controllers')

exports.routes = {
  '/home': {
    GET: {
      function: controllers.home,
      dataNeeded: false,
      queryNeeded: false,
    },
  },
  '/users/data': {
    GET: {
      function: controllers.home,
      dataNeeded: false,
      queryNeeded: false,
    },
  },
  '/users/attendance': {
    GET: {
      function: controllers.home,
      dataNeeded: false,
      queryNeeded: false,
    },
  },
  '/users/attendance/time': {
    GET: {
      function: controllers.home,
      dataNeeded: false,
      queryNeeded: false,
    },
  },
  '/users/attendance/days': {
    GET: {
      function: controllers.home,
      dataNeeded: false,
      queryNeeded: false,
    },
  },
  '/users/salary': {
    GET: {
      function: controllers.home,
      dataNeeded: false,
      queryNeeded: false,
    },
  },
  '/signup': {
    POST: {
      function: controllers.signup,
      dataNeeded: true,
      queryNeeded: false,
    },
  },
  '/login': {
    POST: {
      function: controllers.login,
      dataNeeded: true,
      queryNeeded: false,
    },
  },
  '/logout': {
    GET: {
      function: controllers.logout,
      dataNeeded: false,
      queryNeeded: false,
    },
  },
}
