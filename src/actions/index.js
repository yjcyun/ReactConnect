import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import history from '../history';

// when user signs in
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}
// when user signs out
export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

// to create stream
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  // navigate back to stream lists
  history.push('/')
}

//list all records
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
}

// list ONE record
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
}

// edit ONE stream
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  // navigate back to stream list
  history.push('/');
}

// delete ONE stream
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  // navigate back to stream list
  history.push('/');
}