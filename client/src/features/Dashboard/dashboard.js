import React from 'react';
import FormBox from '../../components/FormBox/index';
import Button from '../../components/Button/index';
import { changePath } from '../../utils/utils';
import { PATH } from '../../utils/constants';

import './style.css';

const props = {};

const Dashboard = props => {
  const { history } = props;

  return (
    <div className="dashboard">
      <FormBox headerLabel="Dashboard">
        Hello!
        <div className="dashboard__btn">
          <Button primary onClick={() => changePath(history, PATH.LOGIN)}>
            Login
          </Button>
          <Button onClick={() => changePath(history, PATH.REGISTER)}>
            Register
          </Button>
        </div>
      </FormBox>
    </div>
  );
};

Dashboard.props = props;
export default Dashboard;
