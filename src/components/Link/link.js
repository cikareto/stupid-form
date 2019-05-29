import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.css';

const props = {
  primary: PropTypes.bool
};

const defaultProps = {
  primary: false
};

const Link = props => {
  const { primary, children } = props;

  return (
    <button type="button" className={cx('link', { 'link-primary': primary })}>
      {children}
    </button>
  );
};

Link.props = props;
Link.defaultProps = defaultProps;
export default Link;
