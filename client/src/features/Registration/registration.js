import React from 'react';
import RegisterForm from '../../forms/RegisterForm/index';

const Registration = () => {
  const submit = values => {
    console.log('submit', values);
  };

  return <RegisterForm onSubmit={submit} />;
};

export default Registration;
