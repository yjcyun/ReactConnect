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
    <CreateWrapper>
      <Form onSubmit={onSubmit} />
    </CreateWrapper>
  )
}
const CreateWrapper = styled.section`
  margin: 1rem 2rem
`;

export default connect(null, { createPatient })(PatientCreate)