import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const props = {
  handleSubmit: PropTypes.func.isRequired,
  headerLabel: PropTypes.string.isRequired
};

const FormBox = props => {
  const { handleSubmit, headerLabel, children } = props;

  return (
    <div className="form-box">
      <form onSubmit={handleSubmit}>
        <div className="form-box__form">
          <h1 className="form-box__form-header">{headerLabel}</h1>
          {children}
        </div>
      </form>
    </div>
  );
};

FormBox.props = props;
export default FormBox;
