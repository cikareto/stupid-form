import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Message from '../../Message/index';

import './style.css';

const props = {
  input: PropTypes.any.isRequired,
  meta: PropTypes.any.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool
};

const defaultProps = {
  label: '',
  placeholder: '',
  type: 'text',
  required: false
};

const FormFieldInput = props => {
  const {
    input,
    meta: { error, touched, invalid },
    label,
    placeholder,
    type,
    required
  } = props;

  const isInvalid = touched && invalid && error;

  return (
    <div className={cx('field-input', { 'field-input--error': isInvalid })}>
      <div className="field-input__header">
        {label && <label>{label}</label>}
        {required && <label className="field-input_header--required"> *</label>}
      </div>

      <input {...input} type={type} placeholder={placeholder} />
      {isInvalid && <Message type="error">{error}</Message>}
    </div>
  );
};

FormFieldInput.props = props;
FormFieldInput.defaultProps = defaultProps;
export default FormFieldInput;
