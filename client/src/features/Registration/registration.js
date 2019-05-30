import React from 'react';
import { SubmissionError } from 'redux-form';
import { post } from '../../services/apis';
import { OPERATION, FORMS } from '../../utils/constants';
import RegisterForm from '../../forms/RegisterForm/index';

const Registration = () => {
  const submit = async values => {
    try {
      await post(OPERATION.REGISTER, { [FORMS.REGISTER_FORM]: values });
    } catch (err) {
      if (err instanceof SubmissionError) {
        throw err;
      } else {
        console.log('error arai kor mai rui');
      }
    }
  };

  return <RegisterForm onSubmit={submit} />;
};

export default Registration;
