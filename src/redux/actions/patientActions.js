import patients from '../../apis/patients'
import {
  CREATE_PATIENT, LIST_PATIENTS, LIST_PATIENT, EDIT_PATIENT, DELETE_PATIENT
} from '../types';

export const createPatient = formValues => async dispatch => {
  const response = await patients.post('/patients', formValues);

  dispatch({ type: CREATE_PATIENT, payload: response.data });
}

export const listAllPatients = () => async dispatch => {
  const response = await patients.get('/patients');

  dispatch({ type: LIST_PATIENTS, payload: response.data })
}

export const listPatient = id => async dispatch => {
  const response = await patients.get(`/patients/${id}`);

  dispatch({ type: LIST_PATIENT, payload: response.data });
}

export const editPatient = id => async (dispatch, formValues) => {
  const response = await patients.get(`/patients/edit/${id}`, formValues);

  dispatch({ type: EDIT_PATIENT, payload: response.data });
}

export const deletePatient = id => async dispatch => {
  await patients.delete(`/patients/delete/${id}`);

  dispatch({ type: DELETE_PATIENT, payload: id })
}