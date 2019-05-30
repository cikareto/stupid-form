const {
  ValidationException,
  ValidationError,
  ValidationCode
} = require('../utils/exceptions/validationException');
const { getKeyByValue } = require('../utils/utils');

const register = req => {
  const {
    registerForm,
    registerForm: { displayName, username, password, confirmPassword }
  } = req;
  if (username !== 'admin') {
    return req;
  } else {
    const errors = [
      ValidationError(
        getKeyByValue(registerForm, username),
        ValidationCode.INVALID
      )
    ];
    throw ValidationException(errors, 'failed to register');
  }
};

module.exports = register;
