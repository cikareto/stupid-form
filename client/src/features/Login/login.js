import React from 'react';
import { SubmissionError } from 'redux-form';
import { post } from '../../services/apis';
import { OPERATION, FORMS, PATH } from '../../utils/constants';
import { changePath } from '../../utils/utils';
import LoginForm from '../../forms/LoginForm/index';

const Login = props => {
  const submit = async values => {
    try {
      await post(OPERATION.LOGIN, {
        [FORMS.LOGIN_FORM]: values
      });
      await changePath(props.history, PATH.DASHBOARD);
    } catch (err) {
      if (err instanceof SubmissionError) {
        throw err;
      } else {
        console.log('error arai kor mai rui');
      }
    }
  };

  return <LoginForm onSubmit={submit} />;
};

export default Login;
