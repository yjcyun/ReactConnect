import React, { Component } from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPatient, editPatient } from '../../redux/actions/patientActions';
import PatientForm from './PatientForm';

class PatientEdit extends Component {
  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPatient(this.props.match.params.id, formValues);
  }

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
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { patient: state.patients[ownProps.match.params.id] }
}


export default connect(mapStateToProps, { fetchPatient, editPatient })(PatientEdit);