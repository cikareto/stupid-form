const Exception = require('../utils/exceptions/exception');

const authenticate = req => {
  const {
    loginForm: { username, password }
  } = req;
  if (username !== 'admin') {
    return req;
  } else {
    throw Exception('failed to Login', 401);
  }
};

module.exports = authenticate;
