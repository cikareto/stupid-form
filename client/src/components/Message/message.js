import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

const props = {
  type: PropTypes.string
};

const defaultProps = {
  type: ''
};

const Message = props => {
  const { type, children } = props;

  return (
    <label className={cx('msg', { [`msg-${type}`]: type })}>{children}</label>
  );
};

Message.props = props;
Message.defaultProps = defaultProps;
export default Message;
