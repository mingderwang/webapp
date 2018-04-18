import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import asyncValidate from '../asyncValidate';
import validate from '../validate';
import * as fetch from '~/fetch'
import { getStore } from '~/redux-config'

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

class MaterialUiForm extends React.Component {
  _onChange (e) {
        if(e.target.value === "") {
            return;
        }
        console.log("dispatch fetch actions")
        getStore().dispatch(fetch.actions())
        //this.setState({

        //});
    }
  render () {
  return (
    <form >
      <div>
        <Field
          onChange = {this._onChange}
          name="fromDate"
          component={renderTextField}
          label="監看日期"
        />
      </div>
    </form>
  )
}
};

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
  validate,
  asyncValidate,
})(MaterialUiForm);
