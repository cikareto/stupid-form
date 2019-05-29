import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

const props = {
  type: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  disabled: PropTypes.bool
};

const defaultProps = {
  primary: false,
  disabled: false
};

const Button = props => {
  const { type, primary, disabled, children } = props;

  return (
    <button
      className={cx('btn', { 'btn-primary': primary }, { disabled: disabled })}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.props = props;
Button.defaultProps = defaultProps;
export default Button;
