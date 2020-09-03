import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPatient } from '../../../redux/actions/patientActions'
import ClientSection from './ClientSection';

class PatientShow extends Component {
  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.id);
  }

  render() {
    if (!this.props.patient) {
      return <div>Loading...</div>
    } 

    return (
      <div>
        <ClientSection patient={this.props.patient}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { patient: state.patients[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPatient })(PatientShow)
