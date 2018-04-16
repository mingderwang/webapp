import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import asyncValidate from '../asyncValidate';
import validate from '../validate';

const renderTextField = ({
input, label, meta: { touched, error }, ...custom }) =>
  <TextField
    label={label}
    type="date"
    defaultValue="2018-04-16"
    InputLabelProps={{
      shrink: true,
    }}
    hinttext={label}
    errortext={touched && error}
    {...input}
    {...custom}
  />

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="fromDate"
          component={renderTextField}
          label="監看日期"
        />
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate,
})(MaterialUiForm);
