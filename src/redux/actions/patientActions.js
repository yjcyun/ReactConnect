import patients from '../../apis/patients'
import {
  CREATE_PATIENT,
  LIST_PATIENTS,
  LIST_PATIENT,
  EDIT_PATIENT,
  DELETE_PATIENT
} from '../types';

// POST: create new patient
export const createPatient = formValues => async dispatch => {
  const response = await patients.post('/patients', formValues);
  dispatch({ type: CREATE_PATIENT, payload: response.data });
}
// GET: get all patients
export const listAllPatients = () => async dispatch => {
  const response = await patients.get('/patients');
  dispatch({ type: LIST_PATIENTS, payload: response.data })
}
// GET: get one patient
export const listPatient = id => async dispatch => {
  const response = await patients.get(`/patients/${id}`);
  dispatch({ type: LIST_PATIENT, payload: response.data });
}
// PATCH: edit patient
export const editPatient = id => async (dispatch, formValues) => {
  const response = await patients.patch(`/patients/edit/${id}`, formValues);
  dispatch({ type: EDIT_PATIENT, payload: response.data });
}
// DELETE: delete patient
export const deletePatient = id => async dispatch => {
  await patients.delete(`/patients/delete/${id}`);
  dispatch({ type: DELETE_PATIENT, payload: id })
}