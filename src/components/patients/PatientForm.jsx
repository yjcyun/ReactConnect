import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { newPatient, newClient } from '../../constants/newPatient';
import FormInput from '../FormInput';
import styled from 'styled-components';
import FormSelect from '../FormSelect';

class PatientForm extends Component {
  // Render input field, label, and error message
  renderInput = (props) => {
    return (
      <FormInput {...props} />
    )
  }

  renderSelect = (props) => {
    return (
      <FormSelect  {...props} />
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
        <Section>
          <h3>Client Information</h3>
          <FieldWrapper>
            {newClient.map(client => (
              <Field
                key={client.label}
                name={client.name}
                label={client.label}
                type={client.type}
                values={client.values}
                component={client.type === 'text' ? this.renderInput : this.renderSelect}
              />
            ))}
          </FieldWrapper>
        </Section><Hr />
        <Section>
          <h3>Patient Information</h3>
          <FieldWrapper>
            {newPatient.map(patient => (
              <Field
                key={patient.label}
                name={patient.name}
                label={patient.label}
                type={patient.type}
                values={patient.values}
                status={patient.status}
                component={patient.type === 'text' ? this.renderInput : this.renderSelect}
              />
            ))}
          </FieldWrapper>
        </Section>
        <ButtonWrapper>
          <Button className='button' type='button'>{this.props.create? '' : 'Deactivate'}</Button>
          <Button className='button' type='submit'>{this.props.create? 'Submit' : 'Update'}</Button>
        </ButtonWrapper>
      </FormWrapper>
    )
  }
}

// Form validation
const validate = ({ patientName, lastName, species, breed, gender, age }) => {
  const errors = {};

  if (!patientName) {
    errors.patientName = 'This is a required field'
  }
  if (!lastName) {
    errors.lastName = 'This is a required field'
  }
  if (!species) {
    errors.species = 'This is a required field'
  }
  if (!breed) {
    errors.breed = 'This is a required field'
  }
  if (!gender) {
    errors.gender = 'This is a required field'
  }
  if (!age) {
    errors.age = 'This is a required field'
  }
  return errors
}

const FormWrapper = styled.form`
  padding: 0 2rem 3rem; 
  border: 1px solid var(--grey-color);
  border-radius: 1rem;
  margin-top: 2rem;
`

const FieldWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  border-bottom: 1px solid grey;
  padding: 2rem 0;

  &:last-child{
    border-bottom: none;
  }
`

const Section = styled.div`
  padding: 3rem 0 0;
`

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background: var(--grey-color);
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #fff;
  background-color: var(--main-bg-color);
`

export default reduxForm({
  form: 'patientForm',
  validate
})(PatientForm)