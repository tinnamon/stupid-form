import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import FormBox from '../../components/FormBox/index';
import FieldInput from '../../components/FormFields/FormFieldInput/index';
import Button from '../../components/Button/index';
import Link from '../../components/Link/index';
import { changePath } from '../../utils/utils';
import { PATH } from '../../utils/constants';

import './style.css';

const props = {
  handleSubmit: PropTypes.func.isRequired
};

const RegisterForm = props => {
  const { handleSubmit, history } = props;

  return (
    <FormBox handleSubmit={handleSubmit} headerLabel="Register Form">
      <Field
        name="displayName"
        component={FieldInput}
        label="Display Name"
        placeholder="Enter your display name"
        required
      />
      <Field
        name="username"
        component={FieldInput}
        label="Username"
        placeholder="Enter your username"
        required
      />
      <Field
        name="password"
        component={FieldInput}
        label="Password"
        placeholder="Enter your password"
        type="password"
        required
      />
      <Field
        name="confirmPassword"
        component={FieldInput}
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        required
      />
      <Button primary type="submit">
        Register
      </Button>
      <Link primary onClick={() => changePath(history, PATH.LOGIN)}>
        Login
      </Link>
    </FormBox>
  );
};

RegisterForm.props = props;
export default RegisterForm;
