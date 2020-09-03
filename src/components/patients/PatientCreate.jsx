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
      <h3>Add New Patient</h3>
      <PatientForm onSubmit={onSubmit} />
    </>
  )
}

export default connect(null, { createPatient })(PatientCreate)