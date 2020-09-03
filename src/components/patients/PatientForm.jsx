import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import FormInput from '../FormInput';
import styled from 'styled-components';

class PatientForm extends Component {
  // Render input field, label, and error message
  renderInput = ({ input, label, meta }) => {
    return (
      <>
        <FormInput label={label} input={input} otherProps={meta} />
      </>
    )
  }

  // On form submit
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  // Render form
  render() {
    return (
      <FormWrapper onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <FieldWrapper>
          <Field
            name='patientName'
            label='Patient Name*'
            component={this.renderInput}
          />
          <Field
            name='patientSpecies'
            label='Patient Species'
            component={this.renderInput}
          />
          <Field
            name='lastName'
            label='Last Name*'
            component={this.renderInput}
          />
          <Field
            name='breed'
            label='Breed'
            component={this.renderInput}
          />
          <Field
            name='gender'
            label='Gender'
            component={this.renderInput}
          />
          <Field
            name='dob'
            label='DOB'
            component={this.renderInput}
          />
        </FieldWrapper> 
        <FieldWrapper>
          <Field
            name='patientName'
            label='Patient Name*'
            component={this.renderInput}
          />
          <Field
            name='patientSpecies'
            label='Patient Species'
            component={this.renderInput}
          />
          <Field
            name='lastName'
            label='Last Name*'
            component={this.renderInput}
          />
          <Field
            name='breed'
            label='Breed'
            component={this.renderInput}
          />
          <Field
            name='gender'
            label='Gender'
            component={this.renderInput}
          />
          <Field
            name='dob'
            label='DOB'
            component={this.renderInput}
          />
        </FieldWrapper>
        <button type='submit'>Submit</button>
      </FormWrapper>
    )
  }
}

// Form validation
const validate = formValues => {
  const errors = {};

  if (!formValues.patientName) {
    errors.patientName = 'This is a required field'
  }
  if (!formValues.lastName) {
    errors.lastName = 'This is a required field'
  }
  return errors
}

const FormWrapper = styled.form`
  border: 1px solid black;
  padding: 3rem 1rem; 
`

const FieldWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  border-bottom: 1px solid grey;
  padding: 2rem 0;
`

export default reduxForm({
  form: 'patientForm',
  validate
})(PatientForm)