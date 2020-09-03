import React from 'react'
import styled from 'styled-components'

const PatientListHeader = () => {
  return (
    <ListHeader>
      <HeaderBlock>ID</HeaderBlock>
      <HeaderBlock>Patient Name</HeaderBlock>
      <HeaderBlock>Last Name</HeaderBlock>
      <HeaderBlock>Species</HeaderBlock>
      <HeaderBlock>Breed</HeaderBlock>
      <HeaderBlock>Gender</HeaderBlock>
      <HeaderBlock>Age</HeaderBlock>
      <HeaderBlock>Actions</HeaderBlock>
    </ListHeader>
  )
}

const ListHeader = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  padding: 0 1rem;
`

const HeaderBlock = styled.div`
  text-transform: uppercase;
  width: 10%;
  padding-left: 1rem;

  &:nth-of-type(1){
    width: 3%;
    padding-left: 0;
  }

  &:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(5){
    width: 19%;
  }
`

export default PatientListHeader