import React from 'react'
import PatientForm from './PatientForm';
import { connect } from 'react-redux';
import { createPatient } from '../../redux/actions/patientActions';

const PatientCreate = (props) => {

  const onSubmit = (formValues) => {
    props.createPatient(formValues);
  }

  return (
    <>
      <h2>Add New Patient</h2>
      <PatientForm onSubmit={onSubmit} create />
    </>
  )
}

export default connect(null, { createPatient })(PatientCreate)