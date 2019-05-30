import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

const props = {
  type: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  primary: false,
  disabled: false,
  onClick: () => {}
};

const Button = props => {
  const { type, primary, disabled, onClick, children } = props;

  return (
    <button
      className={cx('btn', { 'btn-primary': primary }, { disabled: disabled })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.props = props;
Button.defaultProps = defaultProps;
export default Button;
