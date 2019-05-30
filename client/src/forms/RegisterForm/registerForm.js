import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import FieldInput from '../../components/FormFields/FormFieldInput/index';
import Button from '../../components/Button/index';
import Link from '../../components/Link/index';

import './style.css';

const props = {
  handleSubmit: PropTypes.func.isRequired
};

const RegisterForm = props => {
  const { handleSubmit } = props;

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="register-form__form">
          <h1>Register Form</h1>
          <Field
            name="displayName"
            component={FieldInput}
            label="Display Name"
            placeholder="Enter your display name"
            required
          />
          <Field
            name="username"
            component={FieldInput}
            label="Username"
            placeholder="Enter your username"
            required
          />
          <Field
            name="password"
            component={FieldInput}
            label="Password"
            placeholder="Enter your password"
            type="password"
            required
          />
          <Field
            name="confirmPassword"
            component={FieldInput}
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            required
          />
          <Button primary type="submit">
            Register
          </Button>
          <Link primary>Login</Link>
        </div>
      </form>
    </div>
  );
};

RegisterForm.props = props;
export default RegisterForm;
