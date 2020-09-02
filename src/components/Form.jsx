import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  // If not validated & has been clicked away
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div>{error}</div>
    }
  }

  // Render input field, label, and error message
  renderInput = ({ input, label, meta }) => {
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    )
  }

  // On form submit
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  // Render form
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name='patientName'
          label='Patient Name'
          component={this.renderInput}
        />
        <Field
          name='patientSpecies'
          label='Patient Species'
          component={this.renderInput}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

// Form validation
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