import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import LoginForm from './loginForm';
import { validate } from '../RegisterForm/validation';
import { FORMS } from '../../utils/constants';

export default withRouter(
  reduxForm({
    form: FORMS.LOGIN_FORM,
    validate
  })(LoginForm)
);
