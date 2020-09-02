import _ from 'lodash';
import {
  CREATE_PATIENT,
  FETCH_PATIENTS,
  FETCH_PATIENT,
  EDIT_PATIENT,
  DELETE_PATIENT
} from '../types';

export const patientReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PATIENTS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_PATIENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PATIENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PATIENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PATIENT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}