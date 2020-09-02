import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { authReducer } from "./authReducer";
import { patientReducer } from "./patientReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  patients: patientReducer
})