import React from 'react'
import styled from 'styled-components';

const ClientSection = ({ patient }) => {
  const { firstName, lastName, address, phoneNumber, patientName, species, age, breed, gender } = patient;

  return (
    <div>
      <ClientWrapper>
        <Info>
          <h2>Pet Information</h2>
          <div>
            <h4>{patientName}</h4>
            <p>Species: {species}</p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
            <p>Gender: {gender}</p>
          </div>
        </Info>

        <Info>
          <h2>Client Information</h2>
          <div>
            <h4>{firstName} {lastName}</h4>
            <p>Address: {address}</p>
            <p>Contact: {phoneNumber}</p>
          </div>
        </Info>
      </ClientWrapper>
      <div>
        <h2>Medical History</h2>
        {/* Hardcoded hx */}
        <History></History>
      </div>
    </div>
  )
}

const ClientWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
  grid-gap: 2rem;
`

const Info = styled.div`
  border: 1px solid var(--grey-color);
  padding: 2rem;
  border-radius: 1rem;
  background-color: #fff;
`

const History = styled.div`

`

export default ClientSection