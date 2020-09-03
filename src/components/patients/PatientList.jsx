import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPatients } from '../../redux/actions/patientActions';
import { HiOutlinePlusCircle } from 'react-icons/hi';
import PatientItem from './PatientItem';
import styled from 'styled-components';
import PatientListHeader from './PatientListHeader';

class PatientList extends Component {
  componentDidMount() {
    this.props.fetchPatients();
  }
  // Render create button if logged in
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to='/patients/new'>
          <AddButton className='button'>
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
        <PatientListHeader />
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

const PatientItemWrapper = styled.div`
  max-width:1170px;
  margin: auto;
`

const AddButton = styled.div`
  padding: 0.5rem 1.5rem;
  margin-bottom: 2rem;
  background-color: var(--main-bg-color);
  color: #fff;

  span{
    display: inline-block;
    vertical-align: middle;
    margin: 5px 10px 0 0;
    font-size: 1.5rem;
  }
`

export default connect(mapStateToProps, { fetchPatients })(PatientList)