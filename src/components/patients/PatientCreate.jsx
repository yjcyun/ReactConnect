import React from 'react'
import PatientForm from './PatientForm';
import { connect } from 'react-redux';
import { createPatient } from '../../redux/actions/patientActions';
import styled from 'styled-components';

const PatientCreate = (props) => {

  const onSubmit = (formValues) => {
    props.createPatient(formValues);
  }

  const renderActions = () => (
   <Button className='button' type='submit'>Create</Button>
  )

  return (
    <>
      <h2>Add New Patient</h2>
      <PatientForm onSubmit={onSubmit} actions={renderActions()} />
    </>
  )
}

const Button = styled.button`
  padding: 1rem 2rem;
  color: #fff;
  background-color: var(--main-bg-color);
`

export default connect(null, { createPatient })(PatientCreate)