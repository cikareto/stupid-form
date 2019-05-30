import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import FormBox from '../../components/FormBox/index';
import FieldInput from '../../components/FormFields/FormFieldInput/index';
import Button from '../../components/Button/index';
import Link from '../../components/Link/index';
import { changePath } from '../../utils/utils';
import { PATH } from '../../utils/constants';

const props = {
  handleSubmit: PropTypes.func.isRequired
};

const LoginForm = props => {
  const { handleSubmit, history } = props;

  return (
    <FormBox handleSubmit={handleSubmit} headerLabel="LOGIN">
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
      <Button primary type="submit">
        Login
      </Button>
      <Link primary onClick={() => changePath(history, PATH.REGISTER)}>
        Register
      </Link>
    </FormBox>
  );
};

LoginForm.props = props;
export default LoginForm;
