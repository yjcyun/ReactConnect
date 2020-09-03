import React from 'react'
import styled from 'styled-components'
import { HiOutlinePencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const PatientItem = ({ patient, currentUser }) => {
  const patientStatus = patient.status==='active';

  const renderAdmin = (patient) => {
    if (patient.userId === currentUser) {
      return (
        <div>
          <Link to={`/patients/edit/${patient.id}`}>
            <span><HiOutlinePencilAlt /></span>
          </Link>
          <Link to={`/patients/delete/${patient.id}`}><span><HiOutlineTrash /></span></Link>
        </div>
      )
    }
  }

  return (
    <ItemWrapper status={patientStatus}>
      <div>{patient.id}</div>
      <div>{patient.patientName}</div>
      <div>{patient.lastName}</div>
      <div>{patient.species}</div>
      <div>{patient.breed}</div>
      <div>{patient.gender}</div>
      <div>{patient.age}</div>
      {renderAdmin(patient)}
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  display:flex;
  width: 100%;
  padding: 1rem;
  align-items:center;
  background-color: #fff;
  margin: 0.3rem 0;
  border-radius:  1rem;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.1);
  position: relative;
  border-right: ${props=>props.status?'1rem solid var(--teal-color)':'1rem solid var(--grey-color)'};

  div {
    width: 10%;
    border-right: 1px solid #e1e4f6;
    padding-left: 1rem;
    color: ${props=>props.status?'#000':'lightgray'};
  }

  div:nth-of-type(1){
    width: 3%;
    padding-left: 0.5rem;
  }
  
  div:nth-of-type(2),div:nth-of-type(3),div:nth-of-type(5){
    width: 19%;
  }

  div:nth-of-type(8) {
    border-right: none;
  }

  div span {
    font-size: 1.3rem;
    margin: 0 0.5rem;;
    border: none;
    cursor: pointer;
    color: #000;
  }
`


export default PatientItem