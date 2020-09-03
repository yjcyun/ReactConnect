import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPatient, editPatient } from '../../redux/actions/patientActions';
import PatientForm from './PatientForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class PatientEdit extends Component {
  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPatient(this.props.match.params.id, formValues);
  }

  renderActions = () => (
    <>
      <Link to={`/patients/deactivate/${this.props.match.params.id}`}>
        <Button className='button' type='button'>Deactivate</Button>
      </Link>
      <Button className='button' type='submit'>Update</Button>
    </>
  )

  render() {
    if (!this.props.patient) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit Patient</h3>
        <PatientForm
          initialValues={_.pick(this.props.patient, 'patientName', 'patientSpecies', 'lastName', 'breed', 'gender', 'age')}
          onSubmit={this.onSubmit}
          actions={this.renderActions()}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { patient: state.patients[ownProps.match.params.id] }
}

const Button = styled.button`
  padding: 1rem 2rem;
  color: #fff;
  background-color: var(--main-bg-color);
`

export default connect(mapStateToProps, { fetchPatient, editPatient })(PatientEdit);