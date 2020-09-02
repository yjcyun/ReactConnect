import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPatients } from '../../redux/actions/patientActions';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import PatientItem from './PatientItem';
import styled from 'styled-components';

class PatientList extends Component {
  componentDidMount() {
    this.props.fetchPatients();
  }
  // Render create button if logged in
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to='/patients/new'>
          <AddButton>
            <span>
              <HiOutlinePlusCircle />
            </span> Add new patient
          </AddButton>
        </Link>
      )
    }
  }
  // Render all patient list
  renderList = () => {
    return this.props.patients.map(patient => (
      <PatientItem key={patient.id} patient={patient} currentUser={this.props.currentUserId} />
    ))
  }

  render() {
    return (
      <PatientItemWrapper>
        {this.renderCreate()}
        <PatientListHeader>
          <HeaderBlock>ID</HeaderBlock>
          <HeaderBlock>Patient Name</HeaderBlock>
          <HeaderBlock>Last Name</HeaderBlock>
          <HeaderBlock>Species</HeaderBlock>
          <HeaderBlock>Breed</HeaderBlock>
          <HeaderBlock>Gender</HeaderBlock>
          <HeaderBlock>Age</HeaderBlock>
          <HeaderBlock>Actions</HeaderBlock>
        </PatientListHeader>
        {this.renderList()}
      </PatientItemWrapper>
    )
  }
}

//  State
const mapStateToProps = state => {
  return {
    patients: Object.values(state.patients),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

// Styling
const PatientItemWrapper = styled.div`
  max-width:1170px;
  margin: auto;
`

const PatientListHeader = styled.div`
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

const AddButton = styled.div`
  background: var(--second-bg-color);
  display:inline-block;
  color: #fff;
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
  border-radius: 2rem;

  span{
    display :inline-block;
    vertical-align: middle;
    margin: 5px 10px 0 0;
    font-size: 1.5rem;
  }
`
// End of styling

export default connect(mapStateToProps, { fetchPatients })(PatientList)