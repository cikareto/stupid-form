const ValidationException = (
  validationErrors = [],
  message = '',
  status = 400
) => {
  return { validationErrors, message, status };
};

const ValidationError = (field, code) => {
  return { field, code };
};

const ValidationCode = {
  INVALID: 'INVALID'
};

module.exports = { ValidationException, ValidationError, ValidationCode };
