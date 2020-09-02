import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPatients } from '../../redux/actions/patientActions';


class PatientList extends Component {
  componentDidMount() {
    this.props.fetchPatients();
  }

  renderList = () => {
    return this.props.patients.map(patient => (
      <div key={patient.id}>
        <div>{patient.patientName}</div>
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { patients: Object.values(state.patients) }
}

export default connect(mapStateToProps, { fetchPatients })(PatientList)