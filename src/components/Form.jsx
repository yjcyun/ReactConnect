import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { Component } from 'react';

class Form extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div>{error}</div>
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name='patientName'
          type='text'
          label='Patient Name'
          component={this.renderInput}
        />
        <Field
          name='patientSpecies'
          type='text'
          label='Patient Species'
          component={this.renderInput}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.patientName) {
    errors.patientName = 'This is a required field'
  }
  if (!formValues.patientSpecies) {
    errors.patientSpecies = 'This is a required field'
  }
  return errors
}

export default reduxForm({
  form: 'patientCreate',
  validate
})(Form)