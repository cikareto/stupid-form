export const validate = values => {
  const errors = {};

  if (!values.displayName) {
    errors.displayName = 'A display name is required';
  }
  if (!values.username) {
    errors.username = 'An username is required';
  }
  if (!values.password) {
    errors.password = 'A password is required';
  } else if (values.password.length < 4) {
    errors.password = 'Your password must be at least 4 characters';
  } else if (!values.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Please enter the same value again';
  }

  return errors;
};
