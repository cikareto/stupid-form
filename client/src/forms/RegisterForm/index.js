import { reduxForm } from 'redux-form';
import RegisterForm from './registerForm';
import { validate } from './validation';
import { FORMS } from '../../utils/constants';

export default reduxForm({
  form: FORMS.REGISTER_FORM,
  validate
})(RegisterForm);
