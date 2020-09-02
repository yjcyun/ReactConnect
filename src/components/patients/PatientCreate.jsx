import React from 'react'
import Form from '../Form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPatient } from '../../redux/actions/patientActions';

const PatientCreate = (props) => {

  const onSubmit = (formValues) => {
    props.createPatient(formValues);
  }

  return (
    <Form onSubmit={onSubmit} />
  )
}

export default connect(null, { createPatient })(PatientCreate)