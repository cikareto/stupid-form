import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

const props = {
  primary: PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  primary: false,
  onClick: () => {}
};

const Link = props => {
  const { primary, onClick, children } = props;

  return (
    <button
      type="button"
      className={cx('link', { 'link-primary': primary })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Link.props = props;
Link.defaultProps = defaultProps;
export default Link;
