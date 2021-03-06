import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import RegisterForm from './registerForm';
import { validate } from './validation';
import { FORMS } from '../../utils/constants';

export default withRouter(
  reduxForm({
    form: FORMS.REGISTER_FORM,
    validate
  })(RegisterForm)
);
