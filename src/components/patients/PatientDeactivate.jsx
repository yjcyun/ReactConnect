import React, { Component } from 'react'
import Modal from '../Modal'
import styled from 'styled-components'
import history from '../../history';
import { connect } from 'react-redux';
import { fetchPatient, deactivatePatient } from '../../redux/actions/patientActions'
import { Link } from 'react-router-dom';

class PatientDeactivate extends Component {
  componentDidMount() {
    this.props.fetchPatient(this.props.match.params.id);
  }
  // Modal action buttons
  renderActions = () => {
    return (
      <>
        <Button
          onClick={() => this.props.deactivatePatient(this.props.match.params.id)}
          className='button' delete
        >
          Deactivate
      </Button>
        <Link to='/patients'>
          <Button className='button' >Cancel</Button>
        </Link>
      </>
    )
  }
  // Render modal content
  renderContent = () => {
    if (!this.props.patient) {
      return 'Are you sure you want to deactivate this patient?'
    }
    return `Are you sure you want to deactivate this patient: ${this.props.patient.patientName}`
  }

  render() {

    return (
      <div>
        <Modal
          title='Deactivate Patient'
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/patients')}
        />
      </div>
    )
  }
}

const Button = styled.button`
  background-color: ${props => props.delete ? 'var(--main-bg-color)' : ''};
  color: ${props => props.delete ? '#fff' : ''};
  padding: 0.5rem 1rem;
  margin: 0.3rem;
`;

const mapStateToProps = (state, ownProps) => {
  return { patient: state.patients[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPatient, deactivatePatient })(PatientDeactivate)