import React from 'react'
import Form from '../Form';
import styled from 'styled-components';

const PatientCreate = () => {
  return (
    <CreateWrapper>
      <Form />
    </CreateWrapper>
  )
}
const CreateWrapper = styled.section`
  margin: 1rem 2rem
`;

export default PatientCreate