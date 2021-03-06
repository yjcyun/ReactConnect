import patients from '../../apis/patients'
import history from '../../history';
import {
  CREATE_PATIENT,
  FETCH_PATIENTS,
  FETCH_PATIENT,
  EDIT_PATIENT,
  DELETE_PATIENT,
  DEACTIVATE_PATIENT,
  REACTIVATE_PATIENT
} from '../types';

// POST: create new patient
export const createPatient = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await patients.post('/patients', { ...formValues, status: 'active', userId });
  dispatch({ type: CREATE_PATIENT, payload: response.data });
  history.push('/patients');
}

// GET: get all patients
export const fetchPatients = () => async dispatch => {
  const response = await patients.get('/patients');
  dispatch({ type: FETCH_PATIENTS, payload: response.data })
}

// GET: get one patient
export const fetchPatient = id => async dispatch => {
  const response = await patients.get(`/patients/${id}`);
  dispatch({ type: FETCH_PATIENT, payload: response.data });
}

// PATCH: edit patient
export const editPatient = (id, formValues) => async dispatch => {
  const response = await patients.patch(`/patients/${id}`, formValues);
  dispatch({ type: EDIT_PATIENT, payload: response.data });
  history.push('/patients');
}

// DELETE: delete patient
export const deletePatient = id => async dispatch => {
  await patients.delete(`/patients/${id}`);
  dispatch({ type: DELETE_PATIENT, payload: id });
  history.push('/patients')
}

// PATCH: deactivate patient
export const deactivatePatient = id => async dispatch => {
  const response = await patients.patch(`/patients/${id}`, { status: 'inactive' });
  dispatch({ type: DEACTIVATE_PATIENT, payload: response.data });
  history.push('/patients');
}

// PATCH: re-activate patient
export const reactivatePatient = id => async dispatch => {
  const response = await patients.patch(`/patients/${id}`, { status: 'active' });
  dispatch({ type: REACTIVATE_PATIENT, payload: response.data });
  history.push('/patients');
}